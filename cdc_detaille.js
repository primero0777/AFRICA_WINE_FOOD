'use strict';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
  ExternalHyperlink, TableOfContents
} = require('docx');
const fs = require('fs');

// ── Couleurs ──
const BORDEAUX   = '4D0F1C';
const BORDEAUX_L = '6B1A2B';
const GOLD       = 'C9A84C';
const CREAM      = 'FAF7F2';
const LIGHT_BG   = 'F5EDE0';
const MUTED      = '7A7069';
const WHITE      = 'FFFFFF';
const DARK       = '1A1A1A';
const GREY_BG    = 'F2F2F2';

// ── Helpers ──
const border     = (color = 'CCCCCC') => ({ style: BorderStyle.SINGLE, size: 1, color });
const noBorder   = () => ({ style: BorderStyle.NONE, size: 0, color: 'FFFFFF' });
const allBorders = (color = 'CCCCCC') => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorders  = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 6 } },
    children: [new TextRun({ text, font: 'Arial', size: 32, bold: true, color: BORDEAUX })]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, font: 'Arial', size: 26, bold: true, color: BORDEAUX_L })]
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, font: 'Arial', size: 22, bold: true, color: DARK })]
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [new TextRun({ text, font: 'Arial', size: 22, color: DARK, ...opts })]
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { before: 40, after: 60 },
    children: [new TextRun({ text, font: 'Arial', size: 21, color: DARK })]
  });
}

function space(lines = 1) {
  return new Paragraph({ children: [new TextRun('')], spacing: { before: 0, after: lines * 100 } });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function makeTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map((h, i) => new TableCell({
          width: { size: colWidths[i], type: WidthType.DXA },
          shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
          borders: allBorders(BORDEAUX),
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: h, font: 'Arial', size: 20, bold: true, color: WHITE })] })]
        }))
      }),
      ...rows.map((row, ri) => new TableRow({
        children: row.map((cell, ci) => new TableCell({
          width: { size: colWidths[ci], type: WidthType.DXA },
          shading: { fill: ri % 2 === 0 ? WHITE : GREY_BG, type: ShadingType.CLEAR },
          borders: allBorders('DDDDDD'),
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({ children: [new TextRun({ text: String(cell), font: 'Arial', size: 20, color: DARK })] })]
        }))
      }))
    ]
  });
}

function makeTotalRow(label, value, highlight = false) {
  const bg    = highlight ? BORDEAUX : WHITE;
  const fg    = highlight ? WHITE    : DARK;
  const fgVal = highlight ? GOLD     : BORDEAUX_L;
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 5500, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        borders: allBorders(highlight ? BORDEAUX : 'DDDDDD'),
        margins: { top: 100, bottom: 100, left: 140, right: 140 },
        children: [new Paragraph({ children: [new TextRun({ text: label, font: 'Arial', size: highlight ? 22 : 20, bold: highlight, color: fg })] })]
      }),
      new TableCell({
        width: { size: 3860, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        borders: allBorders(highlight ? BORDEAUX : 'DDDDDD'),
        margins: { top: 100, bottom: 100, left: 140, right: 140 },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: value, font: 'Arial', size: highlight ? 24 : 20, bold: highlight, color: fgVal })] })]
      })
    ]
  });
}

// ══════════════════════════════════════════
//  DOCUMENT DÉTAILLÉ
// ══════════════════════════════════════════
const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } },
          { level: 1, format: LevelFormat.BULLET, text: '◦', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 900, hanging: 300 } } } }
        ]
      },
      {
        reference: 'numbers',
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } }
        ]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 32, bold: true, font: 'Arial', color: BORDEAUX }, paragraph: { spacing: { before: 400, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 26, bold: true, font: 'Arial', color: BORDEAUX_L }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, font: 'Arial', color: DARK }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 4 } },
          children: [
            new TextRun({ text: 'CAHIER DES CHARGES DÉTAILLÉ — SITE VITRINE PREMIUM', font: 'Arial', size: 18, color: MUTED }),
            new TextRun({ text: '\t', font: 'Arial' }),
            new TextRun({ text: 'Africa Wine Food', font: 'Arial', size: 18, bold: true, color: BORDEAUX }),
          ],
          tabStops: [{ type: 'right', position: 9026 }],
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: 'DDDDDD', space: 4 } },
          children: [
            new TextRun({ text: 'Document confidentiel — Mai 2026', font: 'Arial', size: 16, color: MUTED }),
            new TextRun({ text: '\tPage ', font: 'Arial', size: 16, color: MUTED }),
            new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 16, color: MUTED }),
          ],
          tabStops: [{ type: 'right', position: 9026 }],
        })]
      })
    },
    children: [

      // ══ PAGE DE GARDE ══
      new Paragraph({ spacing: { before: 1200, after: 0 }, children: [] }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: 'CAHIER DES CHARGES', font: 'Arial', size: 52, bold: true, color: BORDEAUX, allCaps: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 300 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD, space: 12 } },
        children: [new TextRun({ text: 'SITE VITRINE PREMIUM — VERSION 2.0', font: 'Arial', size: 34, bold: false, color: GOLD, allCaps: true })]
      }),
      space(2),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 80 },
        children: [new TextRun({ text: 'Africa Wine Food', font: 'Georgia', size: 48, bold: true, color: BORDEAUX_L, italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 400 },
        children: [new TextRun({ text: "L'excellence viticole au cœur de l'Afrique", font: 'Arial', size: 24, color: MUTED, italics: true })]
      }),
      space(3),
      new Table({
        width: { size: 7000, type: WidthType.DXA },
        columnWidths: [2800, 4200],
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version 2.0 — Détaillée', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: "Date d'émission", font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: '15 mai 2026', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Client', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Africa Wine Food — Lomé, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Prestataire', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Développeur Web Freelance — Lomé, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Référence devis', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'AWF-2026-001', font: 'Arial', size: 20, color: BORDEAUX_L, bold: true })] })] }),
          ]}),
        ]
      }),

      pageBreak(),

      // ══ SOMMAIRE ══
      heading1('Sommaire'),
      new TableOfContents('Table des matières', { hyperlink: true, headingStyleRange: '1-3' }),
      pageBreak(),

      // ══ 1. PRÉSENTATION ══
      heading1('1. Présentation du projet'),
      heading2('1.1 Contexte'),
      body("Africa Wine Food est une agence togolaise spécialisée dans la sélection et la distribution de vins de luxe et de spiritueux premium à destination du marché africain. Dans le cadre de son développement et de sa visibilité digitale, l'entreprise a fait réaliser un site vitrine haut de gamme reflétant son positionnement premium."),
      space(),

      heading2('1.2 Objectifs du projet'),
      bullet("Asseoir la crédibilité et le prestige de la marque en ligne"),
      bullet("Présenter l'offre produit (vins, champagnes, spiritueux, collections rares)"),
      bullet("Générer des prises de contact qualifiées (formulaire, WhatsApp)"),
      bullet("Permettre la génération et la gestion de devis directement depuis le site"),
      bullet("Proposer un catalogue téléchargeable au format PDF"),
      bullet("Permettre une navigation fluide en français et en anglais"),
      bullet("Garantir la conformité légale internationale (RGPD, CCPA, Loi Togo 2019-014, Convention de Malabo)"),
      bullet("Optimiser l'expérience sur tous les appareils (mobile, tablette, desktop)"),
      space(),

      heading2('1.3 Périmètre fonctionnel'),
      body("Le projet consiste en un site vitrine statique (HTML/CSS/JS), sans CMS ni base de données. Il comprend 16 pages au total : 6 pages principales, 4 pages de support et administration, et 6 articles de blog. Il ne s'agit pas d'un site e-commerce avec paiement en ligne."),
      space(2),

      // ══ 2. DESCRIPTION TECHNIQUE ══
      heading1('2. Description technique'),
      heading2('2.1 Technologies utilisées'),
      makeTable(
        ['Technologie', 'Rôle', 'Version'],
        [
          ['HTML5', 'Structure sémantique des pages — balises ARIA accessibles', 'Standard actuel'],
          ['CSS3', 'Mise en page, animations, responsive, cross-browser', 'Standard actuel'],
          ['JavaScript Vanilla', 'i18n, carousel, filtres, devis, admin, devise', 'ES6+'],
          ['Google Fonts', 'Typographies premium (Playfair Display, Raleway)', 'CDN'],
          ['Unsplash', 'Images haute résolution (hôte externe)', 'CDN'],
          ['Leaflet.js', 'Carte interactive sur la page contact', 'CDN'],
        ],
        [2800, 4200, 2026]
      ),
      space(2),

      heading2('2.2 Architecture des fichiers'),
      heading3('Pages HTML principales'),
      bullet("index.html — Page d'accueil (hero, univers, arguments, chiffres clés, blog)"),
      bullet("catalogue.html — Catalogue avec filtres par catégorie et téléchargement PDF"),
      bullet("about.html — À propos (histoire, équipe, valeurs, mission)"),
      bullet("blog.html — Blog et actualités avec articles en vedette"),
      bullet("contact.html — Formulaire de contact + carte interactive + coordonnées"),
      bullet("commande.html — Formulaire de commande multi-produits avec panier"),
      space(),
      heading3('Pages de support et administration'),
      bullet("devis.html — Document devis généré dynamiquement (lecture depuis localStorage)"),
      bullet("historique.html — Interface admin sécurisée — historique et gestion des devis"),
      bullet("confidentialite.html — Politique de confidentialité internationale (13 articles)"),
      bullet("404.html — Page d'erreur 404 personnalisée avec redirection"),
      space(),
      heading3('Pages articles de blog'),
      bullet("bb-brasserie.html — Article : Bar & Brasserie — l'art de servir le vin"),
      bullet("bienfaits-vin-rouge.html — Article : Les bienfaits du vin rouge"),
      bullet("cocktails-maison.html — Article : Cocktails maison au vin"),
      bullet("caves-lome.html — Article : Les caves de Lomé"),
      bullet("definition-vin.html — Article : Définition et culture du vin"),
      bullet("types-de-vins.html — Article : Les types de vins"),
      space(),
      heading3('Fichiers CSS & JavaScript'),
      bullet("assets/css/style.css — Feuille de styles globale (3 056 lignes)"),
      bullet("assets/css/devis.css — Styles du document devis standalone (508 lignes)"),
      bullet("assets/js/main.js — Logique principale — i18n, carousel, filtres, devise, animations (1 723 lignes)"),
      bullet("assets/js/historique.js — Logique admin — auth, tri, CRUD devis (255 lignes)"),
      bullet("assets/docs/catalogue.pdf — Catalogue téléchargeable"),
      space(2),

      heading2('2.3 Volume de code source'),
      makeTable(
        ['Fichier / Groupe', 'Type', 'Lignes'],
        [
          ['style.css', 'CSS', '3 056'],
          ['devis.css', 'CSS', '508'],
          ['main.js', 'JavaScript', '1 723'],
          ['historique.js', 'JavaScript', '255'],
          ['HTML — 16 pages', 'HTML', '5 661'],
          ['TOTAL GÉNÉRAL', '—', '11 203'],
        ],
        [3600, 2000, 3426]
      ),
      space(2),

      heading2('2.4 Fonctionnalités développées'),
      makeTable(
        ['Fonctionnalité', 'Description technique', 'Statut'],
        [
          ['Bilingue FR/EN', 'Traduction dynamique 100% via data-i18n + innerHTML pour les liens — sans rechargement', 'Livré'],
          ['Convertisseur de devises', 'XOF / EUR / USD avec taux configurables — affichage en temps réel', 'Livré'],
          ['Génération de devis PDF', 'Le formulaire de commande crée un devis numéroté (localStorage) — visualisable et imprimable', 'Livré'],
          ['Admin historique sécurisé', 'Overlay login par mot de passe (base64 + localStorage) — grille tri, actions WhatsApp, suppression', 'Livré'],
          ['Responsive 5 breakpoints', '360px / 480px / 768px / 1024px / 1440px+ — grille fluide, hamburger, typographie clamp()', 'Livré'],
          ['Compatibilité cross-browser', 'Chrome, Firefox, Safari (iOS/macOS), Edge — prefixes webkit, fallbacks CSS variables', 'Livré'],
          ['Anti-zoom iOS', 'font-size ≥ 16px sur tous les champs input/select/textarea', 'Livré'],
          ['Cibles tactiles ≥ 44px', 'hamburger, lang-btn, currency-btn, .btn — pointer: coarse media query', 'Livré'],
          ['Accessibilité motion', '@media (prefers-reduced-motion: reduce) — désactive toutes les animations', 'Livré'],
          ['Focus visible', ':focus-visible avec outline or — :focus:not(:focus-visible) masqué', 'Livré'],
          ['ARIA & skip link', 'Liens d\'évitement, role="dialog", aria-modal, aria-labelledby, aria-live', 'Livré'],
          ['Navigation sticky', 'Navbar fixe avec glassmorphism au scroll — transition opacité/blur', 'Livré'],
          ['Filtres catalogue', 'Filtrage par catégorie sans rechargement — animation CSS', 'Livré'],
          ['Compteurs animés', 'IntersectionObserver — chiffres clés animés au scroll (avec fallback)', 'Livré'],
          ['Carousel testimonials', 'Défilement automatique + navigation manuelle + indicateurs', 'Livré'],
          ['Parallaxe hero', 'Effet profondeur CSS transform au scroll — performance will-change', 'Livré'],
          ['WhatsApp FAB', 'Bouton flottant avec partage dynamique du devis formaté', 'Livré'],
          ['Politique de confidentialité', '13 articles — Togo Loi 2019-014, CEDEAO, Convention de Malabo, RGPD, CCPA', 'Livré'],
          ['Séparation HTML/CSS', 'Aucun style inline dans les <head> — tout externalisé dans style.css et devis.css', 'Livré'],
          ['SEO technique', 'meta description, Open Graph, sitemap.xml, robots.txt, viewport, theme-color', 'Livré'],
          ['Page 404 personnalisée', 'Aux couleurs de la marque avec bouton retour accueil', 'Livré'],
        ],
        [2600, 4400, 1426]
      ),
      space(2),

      heading2('2.5 Design & charte graphique'),
      makeTable(
        ['Élément', 'Détail'],
        [
          ['Couleur principale', 'Bordeaux profond #4D0F1C / #6B1A2B'],
          ['Couleur accent', 'Or luxe #C9A84C / #DFC07A'],
          ['Fond', 'Crème #FAF7F2'],
          ['Texte', 'Noir doux #1A1A1A / #2C2C2C'],
          ['Typographie titres', "Playfair Display (sérif, Google Fonts) — fallback Georgia, 'Times New Roman', serif"],
          ['Typographie corps', "Raleway (sans-sérif, Google Fonts) — fallback -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto"],
          ['Style général', 'Luxe élégant, contrastes bordeaux/or, espacements généreux, animations subtiles'],
          ['Variables CSS', '20 custom properties dans :root — cohérence totale de la palette'],
        ],
        [3500, 5526]
      ),
      space(2),

      pageBreak(),

      // ══ 3. PAGES ══
      heading1('3. Détail des pages'),

      heading2('3.1 Page d\'accueil (index.html)'),
      body("La page d'accueil est le point d'entrée principal. Elle est structurée en 8 sections distinctes :"),
      bullet("Hero — image plein écran (100dvh), titre principal, sous-titre, bouton CTA catalogue"),
      bullet("Univers — 4 cartes catégories (Vins Rouges/Blancs, Champagnes, Spiritueux, Collections Rares)"),
      bullet("Pourquoi nous — 3 arguments clés avec icônes (sélection, livraison, expertise)"),
      bullet("Clientèle — présentation des profils clients (hôtels, restaurants, particuliers, entreprises)"),
      bullet("Chiffres clés — compteurs animés (années d'expérience, références, pays couverts)"),
      bullet("Témoignages — carousel de citations clients avec navigation"),
      bullet("Extrait blog — 3 derniers articles mis en avant"),
      bullet("Call-to-action final — invitation au contact avec boutons primaire et secondaire"),
      space(),

      heading2('3.2 Page Catalogue (catalogue.html)'),
      body("Le catalogue présente les produits avec filtres et téléchargement :"),
      bullet("Filtres par catégorie : Tous, Vins Rouges, Vins Blancs, Rosés, Champagnes, Spiritueux, Collections"),
      bullet("Cartes produits : photo, nom, appellation, millésime, prix en devise choisie, bouton détails"),
      bullet("Modal produit — fiche détaillée avec description, caractéristiques, bouton commande"),
      bullet("Bouton téléchargement PDF du catalogue complet"),
      space(),

      heading2('3.3 Page À propos (about.html)'),
      body("Présente l'identité et les valeurs de Africa Wine Food :"),
      bullet("Histoire de l'agence et mission"),
      bullet("Valeurs fondatrices — excellence, authenticité, service"),
      bullet("Mission, Vision, Valeurs (MVV) avec icônes"),
      bullet("Équipe — sommeliers et experts avec photo et bio"),
      bullet("Partenaires et certifications"),
      space(),

      heading2('3.4 Page Blog (blog.html)'),
      body("Espace éditorial complet :"),
      bullet("Article en vedette avec image grande format et résumé"),
      bullet("Grille d'articles avec image, titre, catégorie, date et extrait"),
      bullet("Catégories : Dégustation, Actualités, Conseils, Investissement"),
      bullet("Newsletter — formulaire d'abonnement"),
      space(),

      heading2('3.5 Page Contact (contact.html)'),
      body("Formulaire de prise de contact et informations pratiques :"),
      bullet("Formulaire — nom, email, téléphone, sujet, message avec validation"),
      bullet("Carte interactive Leaflet.js — localisation bureau Lomé"),
      bullet("Coordonnées complètes — adresse, téléphone, email, horaires"),
      bullet("Liens réseaux sociaux"),
      space(),

      heading2('3.6 Page Commande (commande.html)'),
      body("Formulaire de commande complet avec génération de devis :"),
      bullet("Panier produits — sélection multi-produits avec quantités"),
      bullet("Informations client — nom, prénom, email, téléphone, ville, pays, occasion"),
      bullet("Livraison — choix du mode de livraison"),
      bullet("Génération du devis — numérotation automatique AWF-XXXXXX, stockage localStorage"),
      bullet("Redirection vers devis.html pour visualisation et impression"),
      bullet("Partage direct sur WhatsApp avec message formaté"),
      space(),

      heading2('3.7 Page Devis (devis.html)'),
      body("Document devis généré dynamiquement depuis les données de commande :"),
      bullet("Lecture des données depuis localStorage (numéro de devis en paramètre URL)"),
      bullet("Document PDF-ready — mise en page professionnelle imprimable"),
      bullet("En-tête avec logo, numéro de devis, date"),
      bullet("Tableau des prestations — produits, quantités, sous-totaux, total"),
      bullet("Modalités de paiement et de livraison"),
      bullet("Bouton impression + bouton retour commande"),
      bullet("CSS standalone (devis.css) — indépendant de style.css"),
      space(),

      heading2('3.8 Page Historique Admin (historique.html)'),
      body("Interface d'administration sécurisée pour la gestion des devis :"),
      bullet("Overlay de login — mot de passe chiffré base64, animation shake si erreur"),
      bullet("Session persistée en localStorage — reste connecté jusqu'à déconnexion explicite"),
      bullet("Affichage bouton oeil — toggle visibilité mot de passe"),
      bullet("Tableau de bord — total devis, total articles, montant global"),
      bullet("Grille des devis — 3 colonnes (responsive 2 puis 1) avec numéro, client, date, montant"),
      bullet("Actions par devis — Voir le devis, Envoyer sur WhatsApp, Supprimer"),
      bullet("Tri — par date décroissante/croissante, par nom, par montant"),
      bullet("Suppression globale — bouton avec confirmation"),
      bullet("Bouton déconnexion dans la barre d'outils admin"),
      space(),

      heading2('3.9 Page Politique de confidentialité (confidentialite.html)'),
      body("Politique de confidentialité conforme aux réglementations internationales — 13 articles :"),
      bullet("Art. 1 — Identité du responsable de traitement"),
      bullet("Art. 2 — Cadre légal applicable (Togo, CEDEAO, Malabo, RGPD, CCPA)"),
      bullet("Art. 3 — Données collectées et finalités"),
      bullet("Art. 4 — Base légale du traitement (RGPD Art. 6)"),
      bullet("Art. 5 — Durée de conservation"),
      bullet("Art. 6 — Stockage local (localStorage — données non envoyées aux serveurs)"),
      bullet("Art. 7 — Partage avec des tiers"),
      bullet("Art. 8 — Sécurité des données"),
      bullet("Art. 9 — Vos droits (accès, rectification, suppression, portabilité, opposition)"),
      bullet("Art. 10 — Autorités de contrôle (Togo ADPNP, UE CEPD, US FTC, UK ICO)"),
      bullet("Art. 11 — Cookies et technologies de suivi"),
      bullet("Art. 12 — Transferts internationaux"),
      bullet("Art. 13 — Modifications et contact"),
      bullet("Sommaire sticky avec ancres — navigation rapide entre articles"),
      space(),

      heading2('3.10 Page 404 (404.html)'),
      body("Page d'erreur personnalisée aux couleurs de la marque :"),
      bullet("Code d'erreur 404 en grand format typographique bordeaux"),
      bullet("Message explicatif et bouton retour à l'accueil"),
      bullet("Liens vers les pages principales du site"),
      space(2),

      pageBreak(),

      // ══ 4. HÉBERGEMENT ══
      heading1('4. Infrastructure & Hébergement'),

      heading2('4.1 Solution retenue'),
      body("Compte tenu du profil statique du site (aucune base de données, aucun back-office), une solution d'hébergement mutualisé performance est pleinement adaptée."),
      space(),

      makeTable(
        ['Composant', 'Solution', 'Fournisseur', 'Durée'],
        [
          ['Nom de domaine', 'africawinefood.com', 'Namecheap / OVH', '2 ans'],
          ['Hébergement web', 'Hébergement Premium', 'Hostinger', '2 ans'],
          ['Certificat SSL', "Let's Encrypt (HTTPS)", 'Inclus Hostinger', '2 ans'],
          ['Bande passante', 'Illimitée', 'Inclus Hostinger', '2 ans'],
          ['Sauvegardes', 'Automatiques hebdomadaires', 'Inclus Hostinger', '2 ans'],
          ['Uptime garanti', '99,9%', 'SLA Hostinger', '2 ans'],
        ],
        [2500, 2500, 2500, 1526]
      ),
      space(2),

      heading2('4.2 Modalités de mise en ligne'),
      bullet("Transfert des fichiers par FTP/SFTP ou panneau cPanel"),
      bullet("Configuration DNS (enregistrements A, CNAME, MX)"),
      bullet("Activation et vérification SSL"),
      bullet("Tests cross-browser : Chrome, Firefox, Safari, Edge"),
      bullet("Tests responsive : iPhone SE (360px), Galaxy S, iPad, desktop"),
      bullet("Test anti-zoom iOS — vérification des inputs sur Safari mobile"),
      bullet("Vérification performance Lighthouse — objectif > 85"),
      bullet("Livraison des accès hébergement au client"),
      space(2),

      heading2('4.3 Maintenance 2 ans incluse'),
      bullet("Corrections de bugs ou anomalies d'affichage"),
      bullet("Mises à jour mineures de contenu (textes, prix, photos)"),
      bullet("Surveillance de la disponibilité du site"),
      bullet("Support par WhatsApp et email sous 48h ouvrables"),
      bullet("Renouvellement domaine et hébergement géré par le prestataire"),
      space(2),

      pageBreak(),

      // ══ 5. PLANNING ══
      heading1('5. Planning de réalisation'),
      body("Le délai de livraison est estimé à 14 à 20 jours ouvrables à compter de la réception de l'acompte et des éléments de contenu."),
      space(),

      makeTable(
        ['Étape', 'Activité', 'Durée estimée'],
        [
          ['1', 'Réception acompte + briefing détaillé client', 'Jour 1'],
          ['2', 'Maquettage et validation charte graphique', 'Jours 2-3'],
          ['3', 'Développement pages principales (index, catalogue, about, blog, contact, commande)', 'Jours 3-10'],
          ['4', 'Développement système devis + historique admin sécurisé', 'Jours 10-13'],
          ['5', 'Développement pages articles blog (6 articles)', 'Jours 13-15'],
          ['6', 'Politique de confidentialité internationale + page 404', 'Jours 15-16'],
          ['7', 'Optimisation cross-browser, responsive, accessibilité', 'Jours 16-17'],
          ['8', 'Séparation HTML/CSS — externalisation styles', 'Jour 17-18'],
          ['9', 'Tests complets + corrections', 'Jours 18-19'],
          ['10', 'Mise en ligne, configuration hébergement, formation client', 'Jours 19-20'],
        ],
        [1200, 5500, 2326]
      ),
      space(2),

      heading2('5.1 Conditions de respect des délais'),
      body("Le respect du planning est conditionné à la fourniture par le client, dans les 48h suivant l'acompte :"),
      bullet("Logo en haute définition (PNG transparent ou SVG)"),
      bullet("Photos produits (minimum 10 visuels haute résolution)"),
      bullet("Textes définitifs (présentation entreprise, descriptifs produits)"),
      bullet("Coordonnées complètes (adresse, téléphone, email, réseaux)"),
      bullet("Catalogue PDF à mettre en téléchargement"),
      space(2),

      pageBreak(),

      // ══ 6. FINANCE ══
      heading1('6. Volet financier'),

      heading2('6.1 Détail des coûts de développement'),
      makeTable(
        ['Poste', 'Description', 'Montant FCFA', 'Montant EUR'],
        [
          ['Pages principales (6)', '6 pages HTML/CSS/JS complètes', '250 000', '~381 €'],
          ['Pages articles blog (6)', '6 articles mis en page', '60 000', '~92 €'],
          ['Système devis + admin', 'Génération PDF, auth sécurisée, historique', '60 000', '~92 €'],
          ['Design premium', 'Charte graphique luxe, animations, responsive', '50 000', '~76 €'],
          ['Conformité légale', 'Politique confidentialité 13 articles, page 404', '20 000', '~31 €'],
          ['Cross-browser & A11y', 'Optimisations iOS, touch, reduced-motion', '20 000', '~31 €'],
          ['Sous-total développement', '', '460 000', '~702 €'],
        ],
        [2800, 3200, 1700, 1326]
      ),
      space(),

      heading2('6.2 Détail des coûts d\'infrastructure (2 ans)'),
      makeTable(
        ['Poste', 'Fournisseur', 'Montant FCFA', 'Montant EUR'],
        [
          ['Nom de domaine .com', 'Namecheap/OVH', '18 000', '~27 €'],
          ['Hébergement web Premium', 'Hostinger', '55 000', '~84 €'],
          ['Maintenance & support', 'Prestataire', '60 000', '~92 €'],
          ['Sous-total infrastructure', '', '133 000', '~203 €'],
        ],
        [2800, 2600, 1800, 1826]
      ),
      space(2),

      heading2('6.3 Récapitulatif financier'),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [5500, 3860],
        rows: [
          makeTotalRow('Développement & Design (16 pages + fonctionnalités)', '460 000 FCFA'),
          makeTotalRow('Hébergement + Domaine (2 ans)', '73 000 FCFA'),
          makeTotalRow('Maintenance & Support (2 ans)', '60 000 FCFA'),
          makeTotalRow('TVA', 'Non applicable', false),
          makeTotalRow('TOTAL TTC', '593 000 FCFA  (~905 €)', true),
        ]
      }),
      space(2),

      heading2('6.4 Modalités de paiement'),
      makeTable(
        ['Échéance', 'Montant', 'Condition', 'Moyen accepté'],
        [
          ['Acompte (50%)', '296 500 FCFA', 'Dès signature du devis', 'Mobile Money, virement, espèces'],
          ['Solde (50%)', '296 500 FCFA', 'Livraison du site en ligne', 'Mobile Money, virement, espèces'],
        ],
        [1800, 2000, 2800, 2760]
      ),
      space(),
      body("Moyens de paiement acceptés : Flooz, T-Money, Wave, Orange Money, virement bancaire, espèces."),
      space(2),

      heading2('6.5 Validité et conditions'),
      bullet("Devis valable 30 jours à compter du 15 mai 2026 (soit jusqu'au 14 juin 2026)"),
      bullet("Les droits sur le site sont intégralement transférés au client après règlement complet"),
      bullet("Tout développement supplémentaire hors périmètre fera l'objet d'un avenant tarifaire"),
      bullet("Les contenus (textes, photos, logo, PDF) sont à fournir par le client"),
      space(2),

      pageBreak(),

      // ══ 7. LIVRABLES ══
      heading1('7. Livrables & propriété intellectuelle'),

      heading2('7.1 Livrables fournis'),
      makeTable(
        ['Livrable', 'Format', 'Inclus'],
        [
          ['Code source complet du site (16 pages)', 'Dossier ZIP (HTML/CSS/JS)', 'Oui'],
          ['Site mis en ligne sur domaine client', 'URL publique HTTPS', 'Oui'],
          ['Accès FTP / cPanel hébergement', 'Identifiants sécurisés', 'Oui'],
          ['Code d\'accès administration (historique devis)', 'Confidentiel — livré en main propre', 'Oui'],
          ['Documentation utilisation simplifiée', 'PDF', 'Oui'],
          ['Session de formation à la prise en main', '1h par WhatsApp/appel', 'Oui'],
        ],
        [3800, 2800, 2760]
      ),
      space(2),

      heading2('7.2 Propriété intellectuelle'),
      body("Après règlement intégral du montant du devis, le client Africa Wine Food devient propriétaire exclusif du code source, du design et de l'ensemble des éléments créés spécifiquement pour ce projet. Les bibliothèques open-source utilisées (Google Fonts, Leaflet.js) restent soumises à leurs licences respectives."),
      space(2),

      pageBreak(),

      // ══ 8. SIGNATURES ══
      heading1('8. Bon pour accord'),
      body("Les deux parties, après lecture et acceptation de l'intégralité des clauses du présent cahier des charges, certifient leur accord par leur signature."),
      space(2),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 4680, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LE PRESTATAIRE', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
            new TableCell({ width: { size: 4680, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LE CLIENT', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 4680, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBorders('DDDDDD'), margins: { top: 200, bottom: 200, left: 160, right: 160 }, children: [
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Nom : ___________________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Date : ___________________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 300, after: 0 }, children: [new TextRun({ text: 'Signature :', font: 'Arial', size: 20, color: DARK })] }),
              space(3),
            ] }),
            new TableCell({ width: { size: 4680, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBorders('DDDDDD'), margins: { top: 200, bottom: 200, left: 160, right: 160 }, children: [
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Nom : ___________________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Date : ___________________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 300, after: 0 }, children: [new TextRun({ text: 'Signature + Cachet :', font: 'Arial', size: 20, color: DARK })] }),
              space(3),
            ] }),
          ]})
        ]
      }),

      space(2),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Africa Wine Food — L'excellence viticole au cœur de l'Afrique", font: 'Georgia', size: 20, italics: true, color: MUTED })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('CDC_Detaille_AfricaWineFood.docx', buffer);
  console.log('CDC_Detaille_AfricaWineFood.docx cree avec succes !');
}).catch(e => { console.error(e); process.exit(1); });
