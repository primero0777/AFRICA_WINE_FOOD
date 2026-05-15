'use strict';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, LevelFormat
} = require('docx');
const fs = require('fs');

// ── Palette ──
const BORDEAUX  = '4D0F1C';
const BORDEAUX_L= '6B1A2B';
const GOLD      = 'C9A84C';
const CREAM     = 'FAF7F2';
const LIGHT_BG  = 'F5EDE0';
const GREEN     = '2E7D32';
const GREEN_BG  = 'E8F5E9';
const ORANGE    = 'E65100';
const ORANGE_BG = 'FFF3E0';
const BLUE      = '1565C0';
const BLUE_BG   = 'E3F2FD';
const MUTED     = '7A7069';
const WHITE     = 'FFFFFF';
const DARK      = '1A1A1A';
const GREY_BG   = 'F7F3ED';

// ── Borders ──
const bd     = (c='CCCCCC') => ({ style: BorderStyle.SINGLE, size: 1, color: c });
const bdNone = () => ({ style: BorderStyle.NONE, size: 0, color: 'FFFFFF' });
const allBd  = (c='CCCCCC') => ({ top: bd(c), bottom: bd(c), left: bd(c), right: bd(c) });
const noBd   = () => ({ top: bdNone(), bottom: bdNone(), left: bdNone(), right: bdNone() });

// ── Typographie ──
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 5 } },
    children: [new TextRun({ text, font: 'Arial', size: 30, bold: true, color: BORDEAUX })]
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 100 },
    children: [new TextRun({ text, font: 'Arial', size: 24, bold: true, color: BORDEAUX_L })]
  });
}
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, font: 'Arial', size: 22, bold: true, color: DARK })]
  });
}
function p(text, opts) {
  opts = opts || {};
  return new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [new TextRun(Object.assign({ text, font: 'Arial', size: 21, color: DARK }, opts))]
  });
}
function blt(text, sub) {
  sub = sub || false;
  return new Paragraph({
    numbering: { reference: sub ? 'bullets-sub' : 'bullets', level: 0 },
    spacing: { before: 40, after: 60 },
    children: [new TextRun({ text, font: 'Arial', size: 21, color: DARK })]
  });
}
function sp(n) {
  n = n || 1;
  return new Paragraph({ children: [new TextRun('')], spacing: { before: 0, after: n * 100 } });
}
function pb() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ── Boîte colorée ──
function box(icon, titre, texte, bg, borderColor) {
  bg = bg || LIGHT_BG;
  borderColor = borderColor || BORDEAUX;
  var cell = new TableCell({
    width: { size: 9026, type: WidthType.DXA },
    shading: { fill: bg, type: ShadingType.CLEAR },
    borders: {
      top: bd(borderColor),
      bottom: bd(borderColor),
      left: { style: BorderStyle.SINGLE, size: 14, color: borderColor },
      right: bd(bg)
    },
    margins: { top: 120, bottom: 120, left: 220, right: 220 },
    children: [
      new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: icon + '  ' + titre, font: 'Arial', size: 21, bold: true, color: borderColor })] }),
      new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: texte, font: 'Arial', size: 20, color: DARK })] })
    ]
  });
  return new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [9026], rows: [new TableRow({ children: [cell] })] });
}

// ── Étape numérotée ──
function etape(num, titre, desc) {
  var numCell = new TableCell({
    width: { size: 700, type: WidthType.DXA },
    shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
    borders: noBd(),
    margins: { top: 120, bottom: 120, left: 0, right: 0 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: num, font: 'Arial', size: 28, bold: true, color: GOLD })] })]
  });
  var txtCell = new TableCell({
    width: { size: 8326, type: WidthType.DXA },
    shading: { fill: LIGHT_BG, type: ShadingType.CLEAR },
    borders: { top: bd(GOLD), bottom: bd(GOLD), left: bdNone(), right: bd(LIGHT_BG) },
    margins: { top: 100, bottom: 100, left: 180, right: 180 },
    children: [
      new Paragraph({ spacing: { before: 0, after: 40 }, children: [new TextRun({ text: titre, font: 'Arial', size: 21, bold: true, color: BORDEAUX_L })] }),
      new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: desc, font: 'Arial', size: 20, color: DARK })] })
    ]
  });
  return new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [700, 8326], rows: [new TableRow({ children: [numCell, txtCell] })] });
}

// ── Tableau simple ──
function tbl(headers, rows, cols) {
  return new Table({
    width: { size: cols.reduce(function(a,b){return a+b;}, 0), type: WidthType.DXA },
    columnWidths: cols,
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map(function(h, i) {
          return new TableCell({
            width: { size: cols[i], type: WidthType.DXA },
            shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
            borders: allBd(BORDEAUX),
            margins: { top: 90, bottom: 90, left: 130, right: 130 },
            children: [new Paragraph({ children: [new TextRun({ text: h, font: 'Arial', size: 20, bold: true, color: WHITE })] })]
          });
        })
      })
    ].concat(rows.map(function(row, ri) {
      return new TableRow({
        children: row.map(function(cell, ci) {
          return new TableCell({
            width: { size: cols[ci], type: WidthType.DXA },
            shading: { fill: ri % 2 === 0 ? WHITE : GREY_BG, type: ShadingType.CLEAR },
            borders: allBd('DDDDDD'),
            margins: { top: 80, bottom: 80, left: 130, right: 130 },
            children: [new Paragraph({ children: [new TextRun({ text: String(cell), font: 'Arial', size: 20, color: DARK })] })]
          });
        })
      });
    }))
  });
}

// ═══════════════════════════════════════════════
//  DOCUMENT
// ═══════════════════════════════════════════════
var doc = new Document({
  numbering: {
    config: [
      { reference: 'bullets',     levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } }] },
      { reference: 'bullets-sub', levels: [{ level: 0, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 900, hanging: 300 } } } }] }
    ]
  },
  styles: {
    default: { document: { run: { font: 'Arial', size: 21 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, font: 'Arial', color: BORDEAUX }, paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial', color: BORDEAUX_L }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, font: 'Arial', color: DARK }, paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1200, bottom: 1200, left: 1440 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 4 } },
        children: [
          new TextRun({ text: "GUIDE D'UTILISATION — Africa Wine Food", font: 'Arial', size: 18, color: MUTED }),
          new TextRun({ text: '\t', font: 'Arial' }),
          new TextRun({ text: 'Version 2.0', font: 'Arial', size: 18, bold: true, color: BORDEAUX }),
        ],
        tabStops: [{ type: 'right', position: 9026 }],
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 2, color: 'DDDDDD', space: 4 } },
        children: [
          new TextRun({ text: 'Pour toute assistance : contactez votre prestataire web', font: 'Arial', size: 16, color: MUTED }),
          new TextRun({ text: '\tPage ', font: 'Arial', size: 16, color: MUTED }),
          new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 16, color: MUTED }),
        ],
        tabStops: [{ type: 'right', position: 9026 }],
      })] })
    },
    children: [

      // ── PAGE DE GARDE ──
      sp(2),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 40 }, children: [new TextRun({ text: "GUIDE D'UTILISATION", font: 'Arial', size: 48, bold: true, color: BORDEAUX, allCaps: true })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 300 }, border: { bottom: { style: BorderStyle.SINGLE, size: 5, color: GOLD, space: 12 } }, children: [new TextRun({ text: 'DU SITE INTERNET', font: 'Arial', size: 28, color: GOLD, allCaps: true })] }),
      sp(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 60 }, children: [new TextRun({ text: 'Africa Wine Food', font: 'Georgia', size: 44, bold: true, italics: true, color: BORDEAUX_L })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 500 }, children: [new TextRun({ text: "L'excellence viticole au coeur de l'Afrique", font: 'Arial', size: 22, italics: true, color: MUTED })] }),

      new Table({ width: { size: 5000, type: WidthType.DXA }, columnWidths: [5000], rows: [new TableRow({ children: [new TableCell({
        width: { size: 5000, type: WidthType.DXA },
        shading: { fill: GREEN_BG, type: ShadingType.CLEAR },
        borders: { top: bd(GREEN), bottom: bd(GREEN), left: { style: BorderStyle.SINGLE, size: 10, color: GREEN }, right: bd(GREEN_BG) },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Document simplifie — Aucune competence technique requise', font: 'Arial', size: 20, color: GREEN, bold: true })] })]
      })]})]}),
      sp(2),

      new Table({ width: { size: 7200, type: WidthType.DXA }, columnWidths: [2600, 4600], rows: [
        new TableRow({ children: [
          new TableCell({ width: { size: 2600, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Document', font: 'Arial', size: 20, bold: true, color: CREAM })] })] }),
          new TableCell({ width: { size: 4600, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Guide d'utilisation simplifie", font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 2600, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Client', font: 'Arial', size: 20, bold: true, color: CREAM })] })] }),
          new TableCell({ width: { size: 4600, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Africa Wine Food — Lome, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 2600, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Version', font: 'Arial', size: 20, bold: true, color: CREAM })] })] }),
          new TableCell({ width: { size: 4600, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: '2.0 — 15 mai 2026', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 2600, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Prestataire', font: 'Arial', size: 20, bold: true, color: CREAM })] })] }),
          new TableCell({ width: { size: 4600, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Developpeur Web Freelance — Lome, Togo', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
      ]}),

      pb(),

      // ── INTRODUCTION ──
      h1('Introduction'),
      p("Ce guide a ete prepare specialement pour vous, en tant que proprietaire du site Africa Wine Food. Il est ecrit de facon simple et claire, sans jargon technique."),
      sp(),
      box('✅', 'Ce que vous pouvez faire vous-meme',
        "Consulter votre site, tester les formulaires, telecharger le catalogue, partager les pages, consulter l'historique des commandes, signaler un probleme.",
        GREEN_BG, GREEN),
      sp(),
      box('📞', 'Ce qui necessite de contacter le prestataire',
        'Modifier les textes, changer des photos, ajouter des produits, mettre a jour les prix, ajouter des pages, modifier la mise en page, changer le mot de passe admin.',
        ORANGE_BG, ORANGE),
      sp(2),

      // ── 1. ACCEDER AU SITE ──
      h1('1. Acceder a votre site'),

      h2('1.1 Adresse du site'),
      p("Votre site est accessible depuis n'importe quel navigateur internet en tapant votre adresse :"),
      sp(),
      new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [9026], rows: [new TableRow({ children: [new TableCell({
        width: { size: 9026, type: WidthType.DXA },
        shading: { fill: BORDEAUX, type: ShadingType.CLEAR },
        borders: noBd(),
        margins: { top: 160, bottom: 160, left: 300, right: 300 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'www.africawinefood.com', font: 'Arial', size: 32, bold: true, color: GOLD })] })]
      })]})]}),
      sp(),
      box('💡', 'Conseil',
        "Ajoutez cette adresse dans les 'Favoris' de votre navigateur. Sur smartphone, creez un raccourci sur votre ecran d'accueil pour acceder au site en un seul tap.",
        BLUE_BG, BLUE),
      sp(),

      h2('1.2 Navigateurs recommandes'),
      tbl(
        ['Navigateur', 'Disponible sur', 'Recommande'],
        [
          ['Google Chrome', 'Ordinateur, Android, iPhone', 'Oui — meilleure experience'],
          ['Mozilla Firefox', 'Ordinateur, Android, iPhone', 'Oui'],
          ['Microsoft Edge', 'Ordinateur Windows', 'Oui'],
          ['Safari', 'iPhone, iPad, Mac', 'Oui — optimise iOS'],
          ['Opera Mini', 'Smartphones bas de gamme', 'Acceptable'],
        ],
        [3200, 3200, 2626]
      ),
      sp(),
      box('📱', 'Compatible tous ecrans',
        'Votre site est optimise pour tous les appareils : smartphones 360px, tablettes, ordinateurs portables et grands ecrans. Le texte et les boutons sont suffisamment grands pour etre utilises facilement au doigt.',
        BLUE_BG, BLUE),
      sp(2),

      // ── 2. LES PAGES ──
      h1('2. Les pages de votre site'),
      p("Votre site comprend 16 pages au total. Voici les pages principales accessibles depuis le menu :"),
      sp(),
      tbl(
        ['Page', "Ce qu'on y trouve", 'A quoi ca sert'],
        [
          ['Accueil', 'Hero, univers produits, chiffres cles, temoignages, blog', 'Premiere impression, donner envie d\'explorer'],
          ['Catalogue', 'Tous vos produits avec filtres et PDF', 'Montrer l\'offre, telecharger le catalogue'],
          ['A propos', 'Histoire, valeurs, mission, equipe', 'Inspirer confiance et credibilite'],
          ['Blog', 'Articles et actualites vin', 'Fideliser, SEO, expertise'],
          ['Contact', 'Formulaire + coordonnees + carte', 'Prise de contact client'],
          ['Commande', 'Formulaire de commande multi-produits', 'Recevoir des commandes et generer un devis'],
        ],
        [1900, 3500, 3626]
      ),
      sp(),

      h2('2.1 Navigation sur le site'),
      p("Le menu en haut de chaque page permet de naviguer entre toutes les sections. Sur smartphone, un bouton 'menu' (3 traits) s'affiche en haut a droite."),
      sp(),
      etape('1', 'Ouvrir le menu', 'Sur ordinateur : les liens sont visibles directement dans la barre de navigation en haut de la page.'),
      sp(),
      etape('2', 'Sur smartphone', "Appuyez sur les 3 traits en haut a droite pour ouvrir le menu. Appuyez sur n'importe quel lien pour naviguer. Appuyez en dehors pour fermer."),
      sp(),
      etape('3', 'Retour en haut', 'Un bouton fleche apparait en bas a droite de l\'ecran quand vous descendez. Cliquez dessus pour revenir au sommet.'),
      sp(2),

      // ── 3. LANGUE ──
      h1('3. Changer la langue (FR / EN)'),
      p('Votre site est disponible en Francais et en Anglais. Le changement est instantane, sans rechargement de page.'),
      sp(),
      etape('1', 'Trouver le bouton de langue', 'En haut a droite du menu de navigation, vous verrez un bouton "FR" ou "EN".'),
      sp(),
      etape('2', 'Cliquer sur la langue souhaitee', 'Cliquez sur "FR" pour le francais ou "EN" pour l\'anglais. Tout le contenu bascule immediatement.'),
      sp(),
      box('💡', 'Bon a savoir',
        'La langue selectionnee reste active tant que vous naviguez sur le site. Si vous fermez et revenez, le site repart en Francais par defaut.',
        BLUE_BG, BLUE),
      sp(2),

      pb(),

      // ── 4. DEVISES ──
      h1('4. Convertisseur de devises'),
      p('Les prix sur votre site peuvent etre affiches en trois devises : Franc CFA (XOF), Euro (EUR) et Dollar americain (USD).'),
      sp(),
      etape('1', 'Trouver le selecteur de devise', 'Dans la barre de navigation, a cote du bouton de langue, un selecteur de devise est disponible.'),
      sp(),
      etape('2', 'Choisir la devise', 'Cliquez sur "XOF", "EUR" ou "USD" selon la devise souhaitee.'),
      sp(),
      etape('3', 'Affichage automatique', 'Les prix sur toutes les pages s\'actualisent immediatement dans la devise choisie.'),
      sp(),
      box('⚠️', 'Important',
        'Les taux de conversion sont indicatifs. Pour des commandes reelles, les prix definitifs en FCFA sont ceux qui font foi. Pensez a le preciser a vos clients.',
        ORANGE_BG, ORANGE),
      sp(2),

      // ── 5. COMMANDE ET DEVIS ──
      h1('5. Commandes et devis'),
      p("Votre site permet aux clients de passer une commande directement en ligne. Le systeme genere automatiquement un devis professionnel numerate."),
      sp(),

      h2('5.1 Comment fonctionne une commande'),
      etape('1', 'Le client remplit le formulaire', 'Sur la page Commande, il choisit ses produits, ses quantites, indique ses coordonnees et son mode de livraison.'),
      sp(),
      etape('2', 'Le devis est genere', "Un document devis professionnel est cree automatiquement avec un numero unique (ex : AWF-240001). Il s'affiche a l'ecran."),
      sp(),
      etape('3', 'Le devis est envoye par WhatsApp', 'Le client peut envoyer le devis directement sur votre WhatsApp en un clic. Vous recevez tous les details de la commande.'),
      sp(),
      etape('4', 'Vous confirmez et livrez', 'Vous appelez ou envoyez un message pour confirmer les details de paiement et de livraison.'),
      sp(),

      h2('5.2 Voir et imprimer un devis'),
      p("Le devis s'affiche dans une page dediee. Depuis cette page, vous pouvez :"),
      blt('Imprimer le devis (bouton "Imprimer le devis")'),
      blt('L\'envoyer par WhatsApp directement au client'),
      blt('Revenir au formulaire de commande pour modifications'),
      sp(),
      box('💡', 'Conseil',
        "Imprimez ou sauvegardez le devis en PDF depuis votre navigateur (Imprimer > Enregistrer en PDF) pour le conserver dans vos archives.",
        BLUE_BG, BLUE),
      sp(2),

      pb(),

      // ── 6. HISTORIQUE ADMIN ──
      h1('6. Consulter l\'historique des commandes (Admin)'),
      p("Une page speciale vous permet de consulter et gerer toutes les commandes passees depuis le site. Cette page est protegee par un mot de passe."),
      sp(),
      box('🔒', 'Acces reserve',
        "La page d'historique (historique.html) est reservee a l'administrateur du site. Ne partagez pas le mot de passe avec les clients.",
        ORANGE_BG, ORANGE),
      sp(),

      h2('6.1 Se connecter a l\'administration'),
      etape('1', 'Acceder a la page', "Ouvrez votre navigateur et tapez : www.africawinefood.com/historique.html"),
      sp(),
      etape('2', 'Entrer le mot de passe', 'Un ecran de connexion s\'affiche. Entrez le mot de passe administrateur qui vous a ete remis lors de la livraison du site.'),
      sp(),
      etape('3', 'Cliquer sur "Se connecter"', 'Si le mot de passe est correct, l\'historique des commandes s\'affiche. La session reste active jusqu\'a ce que vous cliquiez sur "Deconnexion".'),
      sp(),
      box('💡', 'Astuce',
        'Utilisez le bouton "oeil" a droite du champ mot de passe pour l\'afficher et verifier que vous le saisissez correctement.',
        BLUE_BG, BLUE),
      sp(),

      h2('6.2 Utiliser l\'historique des commandes'),
      p("Une fois connecte, vous voyez un tableau de bord avec toutes les commandes enregistrees :"),
      blt("Statistiques en haut — nombre total de devis, articles et montant cumule"),
      blt("Tri — classez les commandes par date, par nom de client ou par montant"),
      blt("Voir le devis — ouvre le document devis complet"),
      blt("WhatsApp — renvoie le recapitulatif de commande directement sur WhatsApp"),
      blt("Supprimer — supprime definitivement une commande de l'historique"),
      sp(),
      box('⚠️', 'Attention — Suppression definitive',
        "La suppression d'un devis est irreversible. Assurez-vous d'avoir note ou imprime les informations importantes avant de supprimer.",
        ORANGE_BG, ORANGE),
      sp(2),

      // ── 7. CATALOGUE PDF ──
      h1('7. Catalogue PDF'),
      p('Votre site permet aux visiteurs de telecharger votre catalogue produits en PDF depuis la page Catalogue.'),
      sp(),

      h2('7.1 Comment un client telecharge le catalogue'),
      etape('1', 'Aller sur la page Catalogue', 'Cliquer sur "Catalogue" dans le menu de navigation.'),
      sp(),
      etape('2', 'Cliquer sur le bouton de telechargement', 'Un bouton "Telecharger le catalogue PDF" est visible sur la page. Le fichier se telecharge automatiquement.'),
      sp(),

      h2('7.2 Mettre a jour le catalogue PDF'),
      box('📞', 'Action a faire avec votre prestataire',
        'Pour remplacer le catalogue PDF par une version plus recente, envoyez le nouveau fichier PDF a votre prestataire par WhatsApp ou email. Il effectuera la mise en ligne sous 48h.',
        ORANGE_BG, ORANGE),
      sp(2),

      pb(),

      // ── 8. HEBERGEMENT ──
      h1('8. Votre hebergement web'),

      h2('8.1 Ce qu\'est l\'hebergement'),
      p("L'hebergement est le 'serveur' qui stocke votre site et le rend accessible 24h/24 sur internet. Votre prestataire gere cela pour vous pendant 2 ans."),
      sp(),

      h2('8.2 Vos informations (a conserver precieusement)'),
      new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [3500, 5526], rows: [
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Element', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Information', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Nom de domaine', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'africawinefood.com', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Hebergeur', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: GREY_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Hostinger', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Duree incluse', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '2 ans (renouvellement gere par le prestataire)', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'SSL (cadenas vert)', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: GREY_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Actif — votre site est securise (https://)', font: 'Arial', size: 20, color: GREEN })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Email professionnel', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'contact@africawinefood.com', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 3500, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Mot de passe admin', font: 'Arial', size: 20, bold: true, color: BORDEAUX_L })] })] }),
          new TableCell({ width: { size: 5526, type: WidthType.DXA }, shading: { fill: GREY_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 90, bottom: 90, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Remis en main propre lors de la livraison', font: 'Arial', size: 20, color: DARK })] })] }),
        ]}),
      ]}),
      sp(),
      box('⚠️', 'Important — Conservez vos identifiants',
        'Votre prestataire vous remettra les identifiants d\'acces a l\'hebergement ET le mot de passe admin lors de la livraison. Notez-les dans un endroit sur. Ne les partagez avec personne d\'autre que votre prestataire de confiance.',
        ORANGE_BG, ORANGE),
      sp(2),

      pb(),

      // ── 9. METTRE A JOUR ──
      h1('9. Mettre a jour le contenu du site'),
      p('Votre site est un site statique (fichiers HTML). Les mises a jour de contenu se font en contactant votre prestataire.'),
      sp(),
      tbl(
        ['Type de modification', 'Delai', 'Comment faire'],
        [
          ['Changer un texte (description, prix, contact)', '24-48h', 'Envoyer le nouveau texte par WhatsApp ou email'],
          ['Remplacer une photo', '24-48h', 'Envoyer la nouvelle photo (min. 800x600px) par WhatsApp'],
          ['Ajouter un produit au catalogue', '24-48h', 'Envoyer photo + nom + description + prix'],
          ['Mettre a jour le catalogue PDF', '24-48h', 'Envoyer le nouveau fichier PDF'],
          ['Ajouter un article de blog', '48-72h', "Envoyer le texte + photo de l'article"],
          ['Changer le mot de passe admin', '24h', 'Contacter le prestataire — confidentialite'],
          ['Modification majeure de design', 'Sur devis', 'Contacter le prestataire pour un avenant'],
        ],
        [3200, 1500, 4326]
      ),
      sp(2),

      // ── 10. PROMOUVOIR ──
      h1('10. Promouvoir votre site'),
      p('Votre site est votre vitrine professionnelle. Voici comment le partager efficacement :'),
      sp(),

      h2('Sur WhatsApp Business'),
      blt('Ajoutez www.africawinefood.com dans votre message de statut'),
      blt('Envoyez le lien a vos clients existants avec un message personnalise'),
      blt('Partagez des captures d\'ecran dans vos discussions de groupe'),
      blt('Utilisez le bouton WhatsApp du site pour envoyer des devis directement'),
      sp(),

      h2('Sur les reseaux sociaux'),
      blt('Partagez le lien dans vos publications Facebook et Instagram'),
      blt('Ajoutez le lien dans la bio de vos profils sociaux'),
      blt('Mentionnez le site dans vos stories avec un lien cliquable'),
      sp(),

      h2('Sur vos supports physiques'),
      blt('Imprimez l\'adresse du site sur vos cartes de visite'),
      blt('Ajoutez-la sur vos factures et bons de commande'),
      blt('Indiquez-la sur vos emails professionnels (signature)'),
      sp(),

      box('💡', 'Exemple de signature email professionnelle',
        'Africa Wine Food | www.africawinefood.com | +228 XX XX XX XX | contact@africawinefood.com',
        BLUE_BG, BLUE),
      sp(2),

      pb(),

      // ── 11. SUPPORT ──
      h1('11. Contacter le support technique'),
      p('Pour toute question, probleme ou demande de modification, contactez votre prestataire :'),
      sp(),

      new Table({ width: { size: 9026, type: WidthType.DXA }, columnWidths: [4513, 4513], rows: [
        new TableRow({ children: [
          new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'CONTACT PRESTATAIRE', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
          new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: BORDEAUX, type: ShadingType.CLEAR }, borders: noBd(), margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'DELAIS DE REPONSE', font: 'Arial', size: 20, bold: true, color: WHITE })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: LIGHT_BG, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 140, bottom: 140, left: 180, right: 180 }, children: [
            new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: 'Nom : ____________________', font: 'Arial', size: 20, color: DARK })] }),
            new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: 'WhatsApp : +228 __________', font: 'Arial', size: 20, color: DARK })] }),
            new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: 'Email : ___________________', font: 'Arial', size: 20, color: DARK })] }),
          ] }),
          new TableCell({ width: { size: 4513, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, borders: allBd('DDDDDD'), margins: { top: 140, bottom: 140, left: 180, right: 180 }, children: [
            new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: 'Urgence (site inaccessible) : < 4h', font: 'Arial', size: 20, color: ORANGE, bold: true })] }),
            new Paragraph({ spacing: { before: 0, after: 60 }, children: [new TextRun({ text: 'Modification de contenu : 24-48h', font: 'Arial', size: 20, color: DARK })] }),
            new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: 'Nouvelle fonctionnalite : sur devis', font: 'Arial', size: 20, color: DARK })] }),
          ] }),
        ]})
      ]}),
      sp(),

      h2('11.1 Signaler un probleme'),
      p('Si vous constatez un probleme sur votre site, communiquez ces informations a votre prestataire :'),
      blt('La page concernee (ex : "la page Catalogue")'),
      blt('La description du probleme (ex : "le bouton de commande ne s\'affiche pas")'),
      blt('Le navigateur et l\'appareil utilise (ex : "Chrome sur Android")'),
      blt('Une capture d\'ecran si possible'),
      sp(),
      box('✅', 'Rappel important',
        "Votre contrat inclut une maintenance de 2 ans. Les corrections de bugs et les petites mises a jour de contenu sont incluses. Les nouvelles fonctionnalites font l'objet d'un devis separe.",
        GREEN_BG, GREEN),
      sp(2),

      // ── MEMO FINAL ──
      h1('Memo rapide'),
      tbl(
        ['Action', 'Comment faire'],
        [
          ['Visiter mon site', 'Ouvrir Chrome > taper www.africawinefood.com'],
          ['Changer la langue', 'Bouton FR/EN en haut a droite du menu'],
          ['Changer la devise', 'Selecteur XOF/EUR/USD a cote du bouton langue'],
          ['Voir le catalogue', 'Menu > Catalogue > Telecharger PDF'],
          ['Passer une commande', 'Menu > Commande > Remplir formulaire > Generer devis'],
          ['Consulter l\'historique admin', 'Aller sur .../historique.html > Entrer mot de passe'],
          ['Envoyer un devis par WhatsApp', 'Depuis le devis ou l\'historique admin > bouton WhatsApp'],
          ['Recevoir les messages contact', 'Verifier votre email contact@africawinefood.com'],
          ['Partager le site', 'Copier www.africawinefood.com et l\'envoyer'],
          ['Modifier le contenu', 'Contacter le prestataire par WhatsApp ou email'],
          ['Signaler un bug', 'Contacter le prestataire avec capture d\'ecran'],
        ],
        [3800, 5226]
      ),
      sp(2),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { top: { style: BorderStyle.SINGLE, size: 2, color: GOLD, space: 8 } },
        spacing: { before: 120, after: 0 },
        children: [new TextRun({ text: "Africa Wine Food — L'excellence viticole au coeur de l'Afrique", font: 'Georgia', size: 20, italics: true, color: MUTED })]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(function(buffer) {
  fs.writeFileSync('Documentation_Utilisation_AfricaWineFood.docx', buffer);
  console.log('Documentation_Utilisation_AfricaWineFood.docx cree avec succes !');
}).catch(function(e) { console.error(e); process.exit(1); });
