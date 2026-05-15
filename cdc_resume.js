'use strict';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat
} = require('docx');
const fs = require('fs');

const BORDEAUX = '4D0F1C';
const BORDEAUX_L = '6B1A2B';
const GOLD = 'C9A84C';
const CREAM = 'FAF7F2';
const LIGHT_BG = 'F5EDE0';
const MUTED = '7A7069';
const WHITE = 'FFFFFF';
const DARK = '1A1A1A';
const GREY_BG = 'F7F3ED';

const border = (c = 'CCCCCC') => ({ style: BorderStyle.SINGLE, size: 1, color: c });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: 'FFFFFF' });
const allBorders = (c = 'CCCCCC') => ({ top: border(c), bottom: border(c), left: border(c), right: border(c) });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 5 } },
    children: [new TextRun({ text, font: 'Arial', size: 28, bold: true, color: BORDEAUX })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 220, after: 100 },
    children: [new TextRun({ text, font: 'Arial', size: 24, bold: true, color: BORDEAUX_L })]
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 90 },
    children: [new TextRun({ text, font: 'Arial', size: 21, color: DARK, ...opts })]
  });
}

function blt(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { before: 40, after: 50 },
    children: [new TextRun({ text, font: 'Arial', size: 21, color: DARK })]
  });
}

function sp() {
  return new Paragraph({ children: [new TextRun('')], spacing: { before: 0, after: 120 } });
}

function pb() {
  return new Paragraph({ children: [new PageBreak()] });
}

function tbl(headers, rows, cols) {
  return new Table({
    width: { size: cols.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: cols,
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map((h, i) => new TableCell({
          width: { size: cols[i], type: WidthType.DXA },
          shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
          borders: allBorders(BORDEAUX),
          margins: { top: 90, bottom: 90, left: 130, right: 130 },
          children: [new Paragraph({ children: [new TextRun({ text: h, font: 'Arial', size: 20, bold: true, color: WHITE })] })]
        }))
      }),
      ...rows.map((row, ri) => new TableRow({
        children: row.map((cell, ci) => new TableCell({
          width: { size: cols[ci], type: WidthType.DXA },
          shading: { fill: ri % 2 === 0 ? WHITE : GREY_BG, type: ShadingType.CLEAR },
          borders: allBorders('DDDDDD'),
          margins: { top: 80, bottom: 80, left: 130, right: 130 },
          children: [new Paragraph({ children: [new TextRun({ text: String(cell), font: 'Arial', size: 20, color: DARK })] })]
        }))
      }))
    ]
  });
}

function infoBox(title, text, bg) {
  bg = bg || LIGHT_BG;
  var cell = new TableCell({
    width: { size: 9026, type: WidthType.DXA },
    shading: { fill: bg, type: ShadingType.CLEAR },
    borders: { top: border(GOLD), bottom: border(GOLD), left: { style: BorderStyle.SINGLE, size: 12, color: BORDEAUX }, right: border(bg) },
    margins: { top: 120, bottom: 120, left: 200, right: 200 },
    children: [
      new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: title, font: 'Arial', size: 20, bold: true, color: BORDEAUX })] }),
      new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: text, font: 'Arial', size: 20, color: DARK })] })
    ]
  });
  return new Table({
    width: { size: 9026, type: WidthType.DXA },
    columnWidths: [9026],
    rows: [new TableRow({ children: [cell] })]
  });
}

function totalBox(lignes) {
  var paragraphs = lignes.map(function(item) {
    var lbl = item[0], val = item[1], hi = item[2];
    return new Paragraph({
      spacing: { before: 80, after: 80 },
      children: [
        new TextRun({ text: lbl, font: 'Arial', size: hi ? 24 : 20, bold: hi, color: hi ? CREAM : 'C0A878' }),
        new TextRun({ text: '\t', font: 'Arial' }),
        new TextRun({ text: val, font: 'Arial', size: hi ? 28 : 20, bold: hi, color: hi ? GOLD : CREAM }),
      ],
      tabStops: [{ type: 'right', position: 8600 }],
      indent: { left: 200, right: 200 }
    });
  });
  var cell = new TableCell({
    width: { size: 9026, type: WidthType.DXA },
    shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
    borders: noBorders(),
    margins: { top: 80, bottom: 80, left: 0, right: 0 },
    children: paragraphs
  });
  return new Table({
    width: { size: 9026, type: WidthType.DXA },
    columnWidths: [9026],
    rows: [new TableRow({ children: [cell] })]
  });
}

// ══════════════════════════════════════════
//  DOCUMENT RÉSUMÉ
// ══════════════════════════════════════════
const doc = new Document({
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } }]
    }]
  },
  styles: {
    default: { document: { run: { font: 'Arial', size: 21 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, font: 'Arial', color: BORDEAUX }, paragraph: { spacing: { before: 320, after: 140 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial', color: BORDEAUX_L }, paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1 } },
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
            new TextRun({ text: 'CAHIER DES CHARGES — VERSION RÉSUMÉE', font: 'Arial', size: 18, color: MUTED }),
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
            new TextRun({ text: 'Confidentiel — Mai 2026', font: 'Arial', size: 16, color: MUTED }),
            new TextRun({ text: '\tPage ', font: 'Arial', size: 16, color: MUTED }),
            new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 16, color: MUTED }),
          ],
          tabStops: [{ type: 'right', position: 9026 }],
        })]
      })
    },

    children: [

      // ── PAGE DE GARDE ──
      sp(), sp(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 40 },
        children: [new TextRun({ text: 'CAHIER DES CHARGES', font: 'Arial', size: 46, bold: true, color: BORDEAUX, allCaps: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 280 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 5, color: GOLD, space: 10 } },
        children: [new TextRun({ text: 'VERSION RÉSUMÉE — V2.0', font: 'Arial', size: 28, color: GOLD, allCaps: true })]
      }),
      sp(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [new TextRun({ text: 'Africa Wine Food', font: 'Georgia', size: 42, bold: true, color: BORDEAUX_L, italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 400 },
        children: [new TextRun({ text: "Site vitrine premium — Lomé, Togo", font: 'Arial', size: 22, color: MUTED })]
      }),
      sp(),
      new Table({
        width: { size: 6000, type: WidthType.DXA },
        columnWidths: [2400, 3600],
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 2400, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 3600, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '2.0 Résumée — 15 mai 2026', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2400, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Client', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 3600, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Africa Wine Food', font: 'Arial', size: 20, color: DARK })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2400, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Devis N°', font: 'Arial', size: 20, color: CREAM, bold: true })] })] }),
            new TableCell({ width: { size: 3600, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'AWF-2026-001', font: 'Arial', size: 20, color: BORDEAUX_L, bold: true })] })] }),
          ]}),
        ]
      }),

      pb(),

      // ── 1. CONTEXTE & OBJECTIFS ──
      h1('1. Contexte & Objectifs'),
      infoBox(
        'Qui est Africa Wine Food ?',
        "Agence togolaise de sélection et distribution de vins de luxe et spiritueux premium à destination du marché africain (hôtels, restaurants, particuliers, entreprises)."
      ),
      sp(),
      p('Le projet consiste en la création d\'un site vitrine premium 16 pages pour renforcer la présence digitale de la marque et générer des prises de contact qualifiées.'),
      sp(),
      p('Objectifs principaux :', { bold: true }),
      blt("Asseoir le positionnement luxe de la marque en ligne"),
      blt("Présenter les 4 univers produits (vins, champagnes, spiritueux, collections)"),
      blt("Permettre la navigation bilingue FR/EN et multi-devises (XOF/EUR/USD)"),
      blt("Générer des commandes et devis directement depuis le site"),
      blt("Protéger l'historique des devis par accès administrateur sécurisé"),
      blt("Garantir la conformité légale internationale (RGPD, CCPA, Loi togolaise 2019-014)"),
      sp(),

      // ── 2. PÉRIMÈTRE ──
      h1('2. Périmètre du projet'),
      h2('Pages principales (navigation publique)'),
      tbl(
        ['Page', 'Contenu principal'],
        [
          ['Accueil (index.html)', 'Hero, univers produits, arguments, chiffres clés, blog'],
          ['Catalogue (catalogue.html)', 'Produits filtrables + téléchargement PDF'],
          ['À propos (about.html)', 'Histoire, valeurs, équipe'],
          ['Blog (blog.html)', 'Articles et actualités'],
          ['Contact (contact.html)', 'Formulaire + coordonnées + carte'],
          ['Commande (commande.html)', 'Formulaire de commande multi-produits'],
        ],
        [3200, 5826]
      ),
      sp(),
      h2('Pages de support & articles'),
      tbl(
        ['Page', 'Rôle'],
        [
          ['devis.html', 'Document devis PDF généré dynamiquement après commande'],
          ['historique.html', 'Administration des devis — accès sécurisé par mot de passe'],
          ['confidentialite.html', 'Politique de confidentialité internationale (RGPD, CCPA, Malabo)'],
          ['404.html', 'Page d\'erreur 404 personnalisée avec redirection'],
          ['6 pages articles blog', 'bb-brasserie, bienfaits-vin-rouge, cocktails-maison, caves-lome, definition-vin, types-de-vins'],
        ],
        [2800, 6226]
      ),
      sp(),

      h2('Fonctionnalités clés'),
      tbl(
        ['Fonctionnalité', 'Statut'],
        [
          ['Bilingue FR / EN dynamique (sans rechargement)', 'Livré'],
          ['Convertisseur de devises XOF / EUR / USD', 'Livré'],
          ['Design responsive — 320px à 4K (5 breakpoints)', 'Livré'],
          ['Optimisation cross-browser (Chrome, Firefox, Safari, Edge)', 'Livré'],
          ['Accessibilité : prefers-reduced-motion, focus-visible, ARIA', 'Livré'],
          ['Cibles tactiles ≥ 44px — compatible touch / pointer: coarse', 'Livré'],
          ['Anti-zoom iOS — font-size ≥ 16px sur tous les inputs', 'Livré'],
          ['Génération de devis PDF dynamique (localStorage)', 'Livré'],
          ['Historique admin sécurisé par mot de passe (overlay login)', 'Livré'],
          ['Politique de confidentialité internationale (13 articles)', 'Livré'],
          ['Navigation sticky + hamburger mobile animé', 'Livré'],
          ['Filtres catalogue + téléchargement PDF', 'Livré'],
          ['Formulaires contact & commande avec validation', 'Livré'],
          ['WhatsApp FAB + partage devis sur WhatsApp', 'Livré'],
          ['SEO : meta, Open Graph, sitemap.xml, robots.txt', 'Livré'],
          ['Séparation totale HTML / CSS (aucun style inline dans <head>)', 'Livré'],
          ['Page 404 personnalisée aux couleurs de la marque', 'Livré'],
        ],
        [5500, 3526]
      ),
      sp(),

      // ── 3. TECHNIQUE ──
      h1('3. Aspects techniques'),
      tbl(
        ['Fichier', 'Rôle', 'Lignes'],
        [
          ['style.css', 'Feuille de styles globale — responsive, animations, admin', '3 056'],
          ['devis.css', 'Styles du document devis (standalone)', '508'],
          ['main.js', 'Logique principale — i18n, carousel, filtres, devise, animations', '1 723'],
          ['historique.js', 'Logique admin — authentification, tri, CRUD devis', '255'],
          ['HTML (16 pages)', 'Structure sémantique complète', '5 661'],
          ['TOTAL', 'Volume de code source', '11 203'],
        ],
        [2800, 4400, 1826]
      ),
      sp(),
      p('Technologies : HTML5, CSS3, JavaScript Vanilla ES6+. Aucun framework, aucun CMS, aucune dépendance externe.'),
      p('Charte graphique : Bordeaux #4D0F1C, Or #C9A84C, Crème #FAF7F2 — typographies Playfair Display & Raleway.'),
      sp(),
      infoBox('Architecture CSS propre', 'Aucune balise <style> dans les fichiers HTML. Tout le CSS est externalisé dans style.css et devis.css, garantissant une maintenance facile et des performances optimales.'),
      sp(),

      // ── 4. HÉBERGEMENT ──
      h1('4. Hébergement & Mise en ligne'),
      tbl(
        ['Composant', 'Solution', 'Durée'],
        [
          ['Nom de domaine .com', 'Namecheap / OVH', '2 ans'],
          ['Hébergement web Premium', 'Hostinger (SSL inclus)', '2 ans'],
          ['Maintenance & support', 'Prestataire (48h réponse)', '2 ans'],
        ],
        [3200, 3800, 2026]
      ),
      sp(),

      // ── 5. PLANNING ──
      h1('5. Planning résumé'),
      tbl(
        ['Phase', 'Durée'],
        [
          ['Maquettage + validation client', '1-2 jours'],
          ['Développement pages principales (6)', '7-9 jours'],
          ['Développement pages articles, devis, admin, 404, confidentialité', '3-4 jours'],
          ['Optimisation cross-browser, responsive, accessibilité', '1-2 jours'],
          ['Tests, mise en ligne, livraison', '1-2 jours'],
          ['TOTAL', '14-20 jours ouvrables'],
        ],
        [5500, 3526]
      ),
      sp(),
      infoBox('Condition de démarrage', "Le délai court à compter de la réception de l'acompte (50%) ET des éléments fournis par le client (logo, photos, textes, PDF catalogue)."),
      sp(),

      // ── 6. FINANCE ──
      h1('6. Volet financier'),

      h2('Détail du devis'),
      tbl(
        ['Poste', 'Montant FCFA', 'Montant EUR'],
        [
          ['Conception & développement (16 pages)', '350 000', '~534 €'],
          ['Design premium & charte graphique', '50 000', '~76 €'],
          ['Système devis + admin sécurisé', '40 000', '~61 €'],
          ['Conformité légale (RGPD, CCPA, Malabo)', '20 000', '~31 €'],
          ['Optimisation cross-browser & accessibilité', '20 000', '~31 €'],
          ['Nom de domaine .com (2 ans)', '18 000', '~27 €'],
          ['Hébergement web Premium (2 ans)', '55 000', '~84 €'],
          ['Maintenance & support (2 ans)', '60 000', '~92 €'],
        ],
        [4500, 2500, 2026]
      ),
      sp(),

      totalBox([
        ['Développement & Design (16 pages + fonctionnalités)', '480 000 FCFA', false],
        ['Infrastructure 2 ans (hébergement + domaine)', '73 000 FCFA', false],
        ['Maintenance & Support 2 ans', '60 000 FCFA', false],
        ['TOTAL TTC', '613 000 FCFA  (~935 €)', true],
      ]),
      sp(),

      h2('Modalités de paiement'),
      tbl(
        ['Échéance', 'Montant', 'Déclencheur'],
        [
          ['Acompte — 50%', '306 500 FCFA', 'Signature du devis'],
          ['Solde — 50%', '306 500 FCFA', 'Livraison du site en ligne'],
        ],
        [3000, 2800, 3226]
      ),
      sp(),
      p('Moyens de paiement acceptés : Flooz, T-Money, Wave, Orange Money, virement, espèces.'),
      sp(),

      infoBox('Validité du devis', "Ce cahier des charges et le devis associé (N° AWF-2026-001) sont valables 30 jours, soit jusqu'au 14 juin 2026."),
      sp(),

      // ── 7. BON POUR ACCORD ──
      h1('7. Bon pour accord'),
      p('Lu et approuvé par les deux parties :'),
      sp(),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [4513, 4513],
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LE PRESTATAIRE', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
            new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBorders(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LE CLIENT', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBorders('DDDDDD'), margins: { top: 160, bottom: 160, left: 140, right: 140 }, children: [
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Nom : _______________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Date : _______________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 240, after: 0 }, children: [new TextRun({ text: 'Signature :', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: ' ', font: 'Arial', size: 20 })] }),
              new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: ' ', font: 'Arial', size: 20 })] }),
            ] }),
            new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBorders('DDDDDD'), margins: { top: 160, bottom: 160, left: 140, right: 140 }, children: [
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Nom : _______________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 80 }, children: [new TextRun({ text: 'Date : _______________________', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 240, after: 0 }, children: [new TextRun({ text: 'Signature + Cachet :', font: 'Arial', size: 20, color: DARK })] }),
              new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: ' ', font: 'Arial', size: 20 })] }),
              new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: ' ', font: 'Arial', size: 20 })] }),
            ] }),
          ]})
        ]
      }),

      sp(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Africa Wine Food — L'excellence viticole au coeur de l'Afrique", font: 'Georgia', size: 20, italics: true, color: MUTED })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('CDC_Resume_AfricaWineFood.docx', buffer);
  console.log('CDC_Resume_AfricaWineFood.docx cree avec succes !');
}).catch(e => { console.error(e); process.exit(1); });
