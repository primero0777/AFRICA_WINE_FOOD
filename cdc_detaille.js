'use strict';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat,
  ExternalHyperlink, TableOfContents
} = require('docx');
const fs = require('fs');

// ── Couleurs ──
const BORDEAUX = '4D0F1C';
const BORDEAUX_L = '6B1A2B';
const GOLD = 'C9A84C';
const CREAM = 'FAF7F2';
const LIGHT_BG = 'F5EDE0';
const MUTED = '7A7069';
const WHITE = 'FFFFFF';
const DARK = '1A1A1A';
const GREY_BG = 'F2F2F2';

// ── Helpers ──
const border = (color = 'CCCCCC') => ({ style: BorderStyle.SINGLE, size: 1, color });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: 'FFFFFF' });
const allBorders = (color = 'CCCCCC') => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

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

function label(text) {
  return new Paragraph({
    spacing: { before: 60, after: 80 },
    children: [new TextRun({ text, font: 'Arial', size: 20, color: MUTED, bold: true })]
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

// ── Table helper ──
function makeTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      // Header row
      new TableRow({
        tableHeader: true,
        children: headers.map((h, i) => new TableCell({
          width: { size: colWidths[i], type: WidthType.DXA },
          shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
          borders: allBorders(BORDEAUX),
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [new TextRun({ text: h, font: 'Arial', size: 20, bold: true, color: WHITE })]
          })]
        }))
      }),
      // Data rows
      ...rows.map((row, ri) => new TableRow({
        children: row.map((cell, ci) => new TableCell({
          width: { size: colWidths[ci], type: WidthType.DXA },
          shading: { fill: ri % 2 === 0 ? WHITE : GREY_BG, type: ShadingType.CLEAR },
          borders: allBorders('DDDDDD'),
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({
            children: [new TextRun({ text: String(cell), font: 'Arial', size: 20, color: DARK })]
          })]
        }))
      }))
    ]
  });
}

function makeTotalRow(label, value, highlight = false) {
  const bg = highlight ? BORDEAUX : WHITE;
  const fg = highlight ? WHITE : DARK;
  const fgVal = highlight ? GOLD : BORDEAUX_L;
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
//  DOCUMENT
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
        children: [
          new Paragraph({
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 4 } },
            children: [
              new TextRun({ text: 'CAHIER DES CHARGES — SITE VITRINE PREMIUM', font: 'Arial', size: 18, color: MUTED }),
              new TextRun({ text: '\t', font: 'Arial' }),
              new TextRun({ text: 'Africa Wine Food', font: 'Arial', size: 18, bold: true, color: BORDEAUX }),
            ],
            tabStops: [{ type: 'right', position: 9026 }],
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            border: { top: { style: BorderStyle.SINGLE, size: 2, color: 'DDDDDD', space: 4 } },
            children: [
              new TextRun({ text: 'Document confidentiel — Mai 2026', font: 'Arial', size: 16, color: MUTED }),
              new TextRun({ text: '\tPage ', font: 'Arial', size: 16, color: MUTED }),
              new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 16, color: MUTED }),
            ],
            tabStops: [{ type: 'right', position: 9026 }],
          })
        ]
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
        children: [new TextRun({ text: 'SITE VITRINE PREMIUM', font: 'Arial', size: 34, bold: false, color: GOLD, allCaps: true })]
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
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version', font: 'Arial', size: 20, color: 'FAF7F2', bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version 1.0 — Détaillée', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: "Date d'émission", font: 'Arial', size: 20, color: 'FAF7F2', bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: '13 mai 2026', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Client', font: 'Arial', size: 20, color: 'FAF7F2', bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Africa Wine Food — Lomé, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Prestataire', font: 'Arial', size: 20, color: 'FAF7F2', bold: true })] })] }),
            new TableCell({ width: { size: 4200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Développeur Web Freelance — Lomé, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2800, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Référence devis', font: 'Arial', size: 20, color: 'FAF7F2', bold: true })] })] }),
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
      body("Africa Wine Food est une agence togolaise spécialisée dans la sélection et la distribution de vins de luxe et de spiritueux premium à destination du marché africain. Dans le cadre de son développement et de sa visibilité digitale, l’entreprise souhaite disposer d’un site vitrine haut de gamme reflétant son positionnement premium."),
      space(),

      heading2('1.2 Objectifs du projet'),
      bullet("Asseoir la crédibilité et le prestige de la marque en ligne"),
      bullet("Présenter l’offre produit (vins, champagnes, spiritueux, collections rares)"),
      bullet("Générer des prises de contact qualifiées (formulaire, WhatsApp)"),
      bullet("Proposer un catalogue téléchargeable au format PDF"),
      bullet("Permettre une navigation fluide en français et en anglais"),
      bullet("S’adresser à une clientèle exigeante : hôtels, restaurants, particuliers et entreprises"),
      space(),

      heading2('1.3 Périmètre fonctionnel'),
      body("Le projet consiste en un site vitrine statique (HTML/CSS/JS), sans CMS ni base de données, composé de 6 pages complètes. Il ne s’agit pas d’un site e-commerce avec paiement en ligne."),
      space(2),

      // ══ 2. DESCRIPTION TECHNIQUE ══
      heading1('2. Description technique'),
      heading2('2.1 Technologies utilisées'),
      makeTable(
        ['Technologie', 'Rôle', 'Version'],
        [
          ['HTML5', 'Structure sémantique des pages', 'Standard actuel'],
          ['CSS3', 'Mise en page, animations, responsive', 'Standard actuel'],
          ['JavaScript (Vanilla)', 'Interactions, bilinguisme, carousel', 'ES6+'],
          ['Google Fonts', 'Typographies premium (Playfair Display, Raleway)', 'CDN'],
          ['Unsplash API', 'Images haute résolution (hôte externe)', 'CDN'],
        ],
        [3200, 3700, 2126]
      ),
      space(2),

      heading2('2.2 Architecture des fichiers'),
      bullet("index.html — Page d’accueil (hero, univers, pourquoi nous, clientèle, blog)"),
      bullet("catalogue.html — Page catalogue avec filtres par catégorie"),
      bullet("about.html — Page à propos (histoire, équipe, valeurs)"),
      bullet("blog.html — Page blog et actualités"),
      bullet("contact.html — Formulaire de contact"),
      bullet("commande.html — Formulaire de commande"),
      bullet("style.css — Feuille de styles globale (2 129 lignes)"),
      bullet("main.js — Logique JavaScript (1 633 lignes)"),
      bullet("currency.js — Convertisseur de devises"),
      bullet("assets/docs/catalogues.pdf — Catalogue téléchargeable"),
      space(2),

      heading2('2.3 Fonctionnalités développées'),
      makeTable(
        ['Fonctionnalité', 'Description', 'Statut'],
        [
          ['Système bilingue FR/EN', 'Traduction dynamique de 100% du contenu sans rechargement', 'Livré'],
          ['Convertisseur de devises', 'Affichage des prix en XOF, EUR, USD en temps réel', 'Livré'],
          ['Design responsive', 'Adaptation mobile (320px), tablette (768px), desktop (1200px+)', 'Livré'],
          ['Navigation sticky', 'Barre de navigation fixe au scroll avec effet glassmorphism', 'Livré'],
          ['Menu hamburger', 'Navigation mobile animée avec fermeture au clic extérieur', 'Livré'],
          ['Effet parallaxe', 'Animation de profondeur sur le hero et sections visuelles', 'Livré'],
          ['Carousel auto', 'Défilement automatique des catégories produits', 'Livré'],
          ['Filtres catalogue', 'Filtrage des produits par catégorie sans rechargement', 'Livré'],
          ['Compteurs animés', 'Animation des chiffres clés au scroll', 'Livré'],
          ['Smooth scroll', 'Navigation fluide entre les ancres', 'Livré'],
          ['Back-to-top', 'Bouton retour en haut visible au scroll', 'Livré'],
          ['Formulaires', 'Contact et commande avec validation côté client', 'Livré'],
          ['PDF Catalogue', 'Téléchargement du catalogue produits en un clic', 'Livré'],
          ['SEO de base', 'Balises meta, titres hiérarchisés, description, viewport', 'Livré'],
        ],
        [3000, 4300, 1726]
      ),
      space(2),

      heading2('2.4 Design & charte graphique'),
      makeTable(
        ['Élément', 'Détail'],
        [
          ['Couleur principale', 'Bordeaux profond #4D0F1C / #6B1A2B'],
          ['Couleur accent', 'Or luxe #C9A84C / #DFC07A'],
          ['Fond', 'Crème #FAF7F2'],
          ['Texte', 'Noir doux #1A1A1A / #2C2C2C'],
          ['Typographie titres', 'Playfair Display (sérif, classique, luxe)'],
          ['Typographie corps', 'Raleway (sans-sérif, moderne, élégant)'],
          ['Style général', 'Luxe élégant, contrastes bordeaux/or, espacements généreux'],
        ],
        [3500, 5526]
      ),
      space(2),

      pageBreak(),

      // ══ 3. PAGES ══
      heading1('3. Détail des pages'),

      heading2('3.1 Page d’accueil (index.html)'),
      body("La page d’accueil est la page principale du site. Elle est structurée en 7 sections distinctes :"),
      bullet("Hero : image plein écran, titre principal, sous-titre, bouton CTA vers le catalogue", 0),
      bullet("Univers : 4 cartes catégories (Vins Rouges/Blancs, Champagnes, Spiritueux, Collections Rares)", 0),
      bullet("Pourquoi nous choisir : 3 arguments clés avec icônes (sélection, livraison, expertise)", 0),
      bullet("Clientèle : présentation des profils clients (hôtels, restaurants, particuliers, entreprises)", 0),
      bullet("Chiffres clés : compteurs animés (années d’expérience, références, pays couverts)", 0),
      bullet("Extrait blog : 3 derniers articles mis en avant", 0),
      bullet("Call-to-action final : invitation au contact", 0),
      space(),

      heading2('3.2 Page Catalogue (catalogue.html)'),
      body("Le catalogue présente les produits disponibles avec un système de filtres :"),
      bullet("Filtres par catégorie : Tous, Vins Rouges, Vins Blancs, Rosés, Champagnes, Spiritueux, Collections"),
      bullet("Cartes produits : photo, nom, appellation, millésime, prix indicatif"),
      bullet("Bouton téléchargement PDF du catalogue complet"),
      space(),

      heading2('3.3 Page À propos (about.html)'),
      body("Présente l’identité et les valeurs de Africa Wine Food :"),
      bullet("Histoire de l’agence et mission"),
      bullet("Valeurs fondatrices : excellence, authenticité, service"),
      bullet("Équipe et expertise sommeliers"),
      space(),

      heading2('3.4 Page Blog (blog.html)'),
      body("Espace éditorial pour les actualités et articles :"),
      bullet("Grille d’articles avec image, titre, catégorie, date et extrait"),
      bullet("Catégories : Dégustation, Actualités, Conseils, Investissement"),
      space(),

      heading2('3.5 Page Contact (contact.html)'),
      body("Formulaire de prise de contact avec champs : nom, email, téléphone, sujet, message. Coordonnées complètes et liens réseaux sociaux."),
      space(),

      heading2('3.6 Page Commande (commande.html)'),
      body("Formulaire de commande avec sélection de produits, quantités, adresse de livraison et instructions spéciales. La commande est transmise par email ou WhatsApp."),
      space(2),

      pageBreak(),

      // ══ 4. HÉBERGEMENT ══
      heading1('4. Infrastructure & Hébergement'),

      heading2('4.1 Solution retenue'),
      body("Compte tenu du profil statique du site (aucune base de données, aucun back-office), une solution d’hébergement mutualisé performance est pleinement adaptée."),
      space(),

      makeTable(
        ['Composant', 'Solution', 'Fournisseur', 'Durée'],
        [
          ['Nom de domaine', 'africawinefood.com', 'Namecheap / OVH', '2 ans'],
          ['Hébergement web', 'Hébergement Premium', 'Hostinger', '2 ans'],
          ['Certificat SSL', 'Let’s Encrypt (HTTPS)', 'Inclus Hostinger', '2 ans'],
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
      bullet("Tests de compatibilité cross-browser (Chrome, Firefox, Safari, Edge)"),
      bullet("Tests de performance (chargement < 3 secondes sur connexion mobile)"),
      bullet("Livraison des accès hébergement au client"),
      space(2),

      heading2('4.3 Maintenance 2 ans incluse'),
      bullet("Corrections de bugs ou anomalies d’affichage"),
      bullet("Mises à jour mineures de contenu (textes, prix, photos)"),
      bullet("Surveillance de la disponibilité du site"),
      bullet("Support par WhatsApp et email sous 48h ouvrables"),
      bullet("Renouvellement domaine et hébergement géré par le prestataire"),
      space(2),

      pageBreak(),

      // ══ 5. PLANNING ══
      heading1('5. Planning de réalisation'),

      body("Le délai de livraison est estimé à 7 à 14 jours ouvrables à compter de la réception de l’acompte et des éléments de contenu."),
      space(),

      makeTable(
        ['Étape', 'Activité', 'Durée estimée'],
        [
          ['1', 'Réception acompte + briefing détaillé client', 'Jour 1'],
          ['2', 'Maquettage et validation charte graphique', 'Jours 2-3'],
          ['3', 'Développement page Accueil', 'Jours 3-5'],
          ['4', 'Développement pages secondaires (Catalogue, About, Blog)', 'Jours 5-8'],
          ['5', 'Développement pages Contact et Commande', 'Jours 8-9'],
          ['6', 'Intégration bilinguisme, devise, animations', 'Jours 9-11'],
          ['7', 'Tests, corrections, optimisation mobile', 'Jours 11-12'],
          ['8', 'Mise en ligne, configuration hébergement', 'Jours 13-14'],
          ['9', 'Livraison finale + formation client', 'Jour 14'],
        ],
        [1200, 5500, 2326]
      ),
      space(2),

      heading2('5.1 Conditions de respect des délais'),
      body("Le respect du planning est conditionné à la fourniture par le client, dans les 48h suivant le versement de l’acompte, des éléments suivants :"),
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
          ['Conception & développement', '6 pages HTML/CSS/JS complètes', '250 000', '~381 €'],
          ['Design premium', 'Charte graphique luxe, animations, responsive', '50 000', '~76 €'],
          ['Sous-total développement', '', '300 000', '~457 €'],
        ],
        [2800, 3600, 1600, 1026]
      ),
      space(),

      heading2('6.2 Détail des coûts d’infrastructure (2 ans)'),
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
          makeTotalRow('Développement & Design', '300 000 FCFA'),
          makeTotalRow('Hébergement + Domaine (2 ans)', '73 000 FCFA'),
          makeTotalRow('Maintenance & Support (2 ans)', '60 000 FCFA'),
          makeTotalRow('TVA', 'Non applicable', false),
          makeTotalRow('TOTAL TTC', '433 000 FCFA  (~660 €)', true),
        ]
      }),
      space(2),

      heading2('6.4 Modalités de paiement'),
      makeTable(
        ['Échéance', 'Montant', 'Condition', 'Moyen accepté'],
        [
          ['Acompte (50%)', '216 500 FCFA', 'Dès signature du devis', 'Mobile Money, virement, espèces'],
          ['Solde (50%)', '216 500 FCFA', 'Livraison du site en ligne', 'Mobile Money, virement, espèces'],
        ],
        [1800, 2000, 2800, 2760]
      ),
      space(),
      body("Moyens de paiement acceptés : Flooz, T-Money, Wave, Orange Money, virement bancaire, espèces."),
      space(2),

      heading2('6.5 Validité et conditions'),
      bullet("Devis valable 30 jours à compter du 13 mai 2026 (soit jusqu’au 12 juin 2026)"),
      bullet("Les droits sur le site sont intégralement transférés au client après règlement complet"),
      bullet("Tout développement supplémentaire hors périmètre fera l’objet d’un avenant tarifaire"),
      bullet("Les contenus (textes, photos, logo, PDF) sont à fournir par le client"),
      space(2),

      pageBreak(),

      // ══ 7. LIVRABLES ══
      heading1('7. Livrables & propriété intellectuelle'),

      heading2('7.1 Livrables fournis'),
      makeTable(
        ['Livrable', 'Format', 'Inclus'],
        [
          ['Code source complet du site', 'Dossier ZIP (HTML/CSS/JS)', 'Oui'],
          ['Site mis en ligne sur domaine client', 'URL publique HTTPS', 'Oui'],
          ['Accès FTP / cPanel hébergement', 'Identifiants sécurisés', 'Oui'],
          ['Documentation utilisation simple', 'PDF 1 page', 'Oui'],
          ['Session de formation à la prise en main', '1h par WhatsApp/appel', 'Oui'],
        ],
        [3800, 2800, 2760]
      ),
      space(2),

      heading2('7.2 Propriété intellectuelle'),
      body("Après règlement intégral du montant du devis, le client Africa Wine Food devient propriétaire exclusif du code source, du design et de l’ensemble des éléments créés spécifiquement pour ce projet. Les bibliothèques open-source utilisées (Google Fonts) restent soumises à leurs licences respectives."),
      space(2),

      pageBreak(),

      // ══ 8. SIGNATURES ══
      heading1('8. Bon pour accord'),
      body("Les deux parties, après lecture et acceptation de l’intégralité des clauses du présent cahier des charges, certifient leur accord par leur signature."),
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
        children: [new TextRun({ text: 'Africa Wine Food — L’excellence viticole au cœur de l’Afrique', font: 'Georgia', size: 20, italics: true, color: MUTED })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('CDC_Detaille_AfricaWineFood.docx', buffer);
  console.log('CDC_Detaille_AfricaWineFood.docx cree avec succes !');
}).catch(e => { console.error(e); process.exit(1); });
