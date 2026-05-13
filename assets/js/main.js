/* =============================================
   AFRICA WINE FOOD — main.js
   Fonctionnalites : bilingue FR/EN, parallaxe,
   carousel, filtres, compteurs, sticky nav,
   hamburger, back-to-top, smooth scroll, formulaires
   ============================================= */

'use strict';

/* ---- Translations ---- */
const translations = {
  fr: {
    'nav.home':        'Accueil',
    'nav.catalogue':   'Catalogue',
    'nav.about':       'À propos',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Agence de vins de luxe & spiritueux premium',
    'hero.title':     "L'excellence viticole,<br>au cœur de l'Afrique",
    'hero.subtitle':  "Sélection exclusive de grands crus et spiritueux haut de gamme, livrés avec élégance partout en Afrique.",
    'hero.cta':       'Découvrir notre catalogue',

    'univers.pretitle':  'Notre sélection',
    'univers.title':     'Nos Univers',
    'univers.subtitle':  "Quatre univers de l'excellence viticole et des spiritueux d'exception.",
    'univers.c1.title':  'Vins Rouges, Blancs & Rosés',
    'univers.c1.desc':   "Grands crus classés et pépites du monde entier soigneusement sélectionnés par nos experts.",
    'univers.c1.cta':    'Explorer →',
    'univers.c2.title':  'Champagnes & Pétillants',
    'univers.c2.desc':   "Des grandes maisons aux petits récoltants, les meilleures bulles pour chaque occasion de prestige.",
    'univers.c2.cta':    'Explorer →',
    'univers.c3.title':  'Spiritueux Premium',
    'univers.c3.desc':   "Whiskies single malt, cognacs d'exception, rhums agricoles et spiritueux rares du monde entier.",
    'univers.c3.cta':    'Explorer →',
    'univers.c4.title':  'Collections Rares',
    'univers.c4.desc':   "Millésimes exceptionnels, éditions limitées et bouteilles de collection pour les connaisseurs les plus exigeants.",
    'univers.c4.cta':    'Explorer →',

    'pourquoi.pretitle':  'Notre différence',
    'pourquoi.title':     'Pourquoi nous choisir',
    'pourquoi.p1.title':  'Sélection exclusive',
    'pourquoi.p1.desc':   "Chaque bouteille est choisie par nos experts pour garantir l'authenticité, la qualité et l'excellence.",
    'pourquoi.p2.title':  'Livraison premium',
    'pourquoi.p2.desc':   "Emballage sur mesure et transport sécurisé pour préserver l'intégrité de chaque bouteille.",
    'pourquoi.p3.title':  'Expertise conseil',
    'pourquoi.p3.desc':   "Nos sommeliers certifiés vous accompagnent dans vos choix, des accords mets-vins aux investissements viticoles.",

    'clientele.pretitle': 'Nos clients',
    'clientele.title':    "Une clientèle d'exception",
    'clientele.subtitle': "Africa Wine Food s'adresse à une clientèle exigeante, passionnée par les grands vins et l'art de vivre.",
    'clientele.c1.title': 'Particuliers aisés',
    'clientele.c1.desc':  "Amateurs éclairés et passionnés en quête de bouteilles d'exception pour leur cave personnelle.",
    'clientele.c2.title': 'Restaurants & Hôtels',
    'clientele.c2.desc':  "Établissements de luxe cherchant à offrir une carte des vins d'excellence à leur clientèle.",
    'clientele.c3.title': 'Collectionneurs',
    'clientele.c3.desc':  "Investisseurs vinicoles souhaitant enrichir leur patrimoine avec des millésimes rares et précieux.",
    'clientele.c4.title': 'Entreprises',
    'clientele.c4.desc':  "Solutions B2B pour cadeaux d'affaires, événements corporate et séminaires de prestige.",

    'temoignages.pretitle':  'Ils nous font confiance',
    'temoignages.title':     'Témoignages',
    'temoignages.t1.text':   "Africa Wine Food a transformé notre carte des vins. Leur sélection de Bordeaux grand cru est simplement incomparable, et leur service est d'une discrétion et d'une efficacité remarquables.",
    'temoignages.t1.name':   'Marc Duplessis',
    'temoignages.t1.role':   'Directeur F&B, Hôtel Le Méridien Abidjan',
    'temoignages.t2.text':   "En tant que sommelière professionnelle, je suis exigeante sur la traçabilité et l'authenticité. Africa Wine Food est le seul partenaire africain qui répond pleinement à mes critères. Leur expertise est rare.",
    'temoignages.t2.name':   'Aminata Konaré',
    'temoignages.t2.role':   'Sommelière certifiée, Restaurant La Terrasse Dakar',
    'temoignages.t3.text':   "J'ai constitué ma cave personnelle avec leur aide. Ils ont su dénicher des millésimes exceptionnels, notamment un Pétrus 2010 que je pensais introuvable. Un service premium, une vraie passion du vin.",
    'temoignages.t3.name':   'Kofi Mensah',
    'temoignages.t3.role':   'Collectionneur & Entrepreneur, Accra',

    'catalogue.pretitle':       'Notre sélection',
    'catalogue.title':          'Catalogue',
    'catalogue.subtitle':       "Des bouteilles d'exception, sélectionnées par nos experts pour les palais les plus fins.",
    'catalogue.filter.all':     'Tous',
    'catalogue.filter.rouge':   'Vins Rouges',
    'catalogue.filter.blanc':   'Blancs & Rosés',
    'catalogue.filter.champagne': 'Champagnes',
    'catalogue.filter.spirits': 'Whisky & Cognac',
    'catalogue.filter.rare':    'Collections Rares',
    'catalogue.devis':          'Demander un devis',
    'catalogue.from':           'À partir de',
    'badge.rouge':              'Vin Rouge',
    'badge.blanc':              'Vin Blanc',
    'badge.champagne':          'Champagne',
    'badge.spirits':            'Whisky',
    'badge.cognac':             'Cognac',
    'badge.rare':               'Collection Rare',

    'modal.details':  'Voir les détails',
    'modal.cepage':   'Cépage(s)',
    'modal.region':   'Région',
    'modal.service':  'Température de service',
    'modal.garde':    'Garde',
    'modal.alcohol':  "Degré d'alcool",
    'modal.tasting':  'Notes de dégustation',
    'modal.pairing':  'Accords mets & vins',

    'cart.add':       'Ajouter',
    'cart.add.full':  'Ajouter à ma sélection',
    'cart.toast':     'ajouté à votre sélection',
    'cart.toast.see': 'Voir →',

    'order.pretitle': 'Votre sélection',
    'order.title':    'Ma Commande',
    'order.subtitle': 'Finalisez votre sélection et transmettez-nous votre demande. Notre équipe vous contacte sous 24h.',
    'order.empty.title': 'Votre sélection est vide',
    'order.empty.desc':  'Parcourez notre catalogue et ajoutez les bouteilles qui vous font envie.',
    'order.empty.cta':   'Explorer le catalogue',
    'order.recap':       'Votre sélection',
    'order.items':       'Articles',
    'order.total':       'Total estimé',
    'order.total.note':  'Prix indicatifs HT. Un devis personnalisé et les modalités de paiement vous seront transmis par notre équipe.',
    'order.continue':    '← Continuer mes achats',
    'order.form.title':  'Vos coordonnées',
    'order.form.prenom': 'Prénom *',
    'order.form.nom':    'Nom *',
    'order.form.email':  'Email *',
    'order.form.phone':  'Téléphone *',
    'order.form.pays':   'Pays *',
    'order.form.pays.placeholder': 'Sélectionner...',
    'order.form.pays.other': 'Autre',
    'order.form.ville':  'Ville *',
    'order.form.adresse': 'Adresse de livraison',
    'order.form.delivery': 'Mode de livraison',
    'order.delivery.standard': 'Livraison standard (5–7 jours ouvrés)',
    'order.delivery.express':  'Livraison express (2–3 jours ouvrés)',
    'order.delivery.pickup':   'Retrait en agence — Lomé',
    'order.form.occasion': 'Occasion',
    'order.form.occasion.placeholder': 'Sélectionner (optionnel)...',
    'order.occasion.perso':   'Cave personnelle',
    'order.occasion.cadeau':  'Cadeau',
    'order.occasion.event':   'Événement / Réception',
    'order.occasion.business': 'Cadeau d\'affaires',
    'order.occasion.invest':  'Investissement viticole',
    'order.occasion.resto':   'Restaurant / Hôtel',
    'order.form.notes':       'Notes & instructions spéciales',
    'order.form.notes.placeholder': 'Occasion particulière, préférences d\'emballage, date de livraison souhaitée...',
    'order.form.submit':      'Envoyer ma demande de commande',
    'order.disclaimer':       'En soumettant ce formulaire, vous acceptez d\'être recontacté par notre équipe pour confirmer votre commande et les modalités de paiement sécurisé. Aucun prélèvement ne sera effectué sans votre accord préalable.',
    'order.success.title':    'Demande envoyée !',
    'order.success.desc':     'Notre équipe vous contactera sous 24h pour confirmer votre commande et vous transmettre un devis personnalisé avec les modalités de paiement.',
    'order.success.catalogue': 'Retour au catalogue',
    'order.success.home':      'Accueil',

    'about.pretitle':         'Notre histoire',
    'about.title':            'À propos',
    'about.story.title':      'Une passion née entre deux continents',
    'about.story.p1':         "Fondée en 2009 à Lomé par des passionnés de vin ayant fait leurs armes dans les plus grandes maisons bordelaises et bourguignonnes, Africa Wine Food est née d'une conviction : l'Afrique mérite un accès aux plus grands vins du monde, avec le service et l'expertise qui leur sont dus.",
    'about.story.p2':         "Depuis plus de 15 ans, nous sillonnons les vignobles du monde entier — Bordeaux, Bourgogne, Champagne, Napa Valley, Toscane — pour sélectionner avec rigueur les bouteilles qui méritent une place dans vos caves et vos tables d'exception.",
    'about.story.p3':         "Basés à Lomé, Togo, nous servons une clientèle exigeante partout en Afrique et à l'international. Nous sommes la référence incontournable pour les amateurs et professionnels du grand vin sur l'ensemble du continent.",
    'about.mission.title':    'Notre Mission',
    'about.mission.desc':     "Démocratiser l'accès aux grands vins et spiritueux d'exception en Afrique, en proposant une sélection pointue, un service irréprochable et une expertise authentique.",
    'about.vision.title':     'Notre Vision',
    'about.vision.desc':      "Devenir la maison de référence du vin de luxe en Afrique subsaharienne, et faire rayonner la culture du vin auprès des nouvelles générations africaines.",
    'about.values.title':     'Nos Valeurs',
    'about.values.desc':      "Excellence, authenticité, intégrité et passion guident chacune de nos décisions — du choix d'un millésime à la relation avec nos clients.",
    'about.stats.refs':       'Références',
    'about.stats.pays':       'Pays desservis',
    'about.stats.years':      "Ans d'expertise",
    'about.stats.clients':    'Clients satisfaits',
    'about.team.pretitle':    "L'expertise humaine",
    'about.team.title':       'Notre équipe',
    'about.team.m1.name':     'Jean-Philippe Konan',
    'about.team.m1.role':     'Fondateur & Directeur général',
    'about.team.m1.bio':      "Diplômé de l'École du Vin de Bordeaux, 20 ans d'expérience dans la distribution de vins fins en Afrique et en Europe.",
    'about.team.m2.name':     'Sophie Traoré',
    'about.team.m2.role':     'Directrice des ventes & Sommelière',
    'about.team.m2.bio':      "Master Sommelier certifiée, spécialiste des vins de Bourgogne et de Champagne. Elle dirige nos relations avec les établissements de luxe.",
    'about.team.m3.name':     'David Mensah',
    'about.team.m3.role':     'Responsable B2B & Développement',
    'about.team.m3.bio':      "Expert en développement commercial et logistique internationale, il coordonne nos partenariats avec les hôtels et restaurants 5 étoiles.",

    'blog.pretitle':          'Actualités & conseils',
    'blog.title':             'Le Blog',
    'blog.subtitle':          "Découvrez nos articles de fond, guides et conseils rédigés par nos experts sommeliers.",
    'blog.cat.degustation':   'Dégustation',
    'blog.cat.guide':         'Guide',
    'blog.cat.accords':       'Accords',
    'blog.a1.title':          "Les meilleurs Bordeaux 2024 : notre sélection exclusive",
    'blog.a1.excerpt':        "Le millésime 2024 s'annonce historique pour le Bordelais. Découvrez les châteaux qui ont transcendé des conditions climatiques exceptionnelles pour produire des vins d'anthologie...",
    'blog.a2.title':          "Guide complet du whisky single malt pour les connaisseurs",
    'blog.a2.excerpt':        "Du Speyside à l'Islay, des Highlands aux Lowlands — notre guide vous accompagne dans l'univers fascinant du whisky single malt d'exception et de ses subtilités aromatiques...",
    'blog.a3.title':          "Accords mets-vins : réussir un dîner d'affaires de prestige",
    'blog.a3.excerpt':        "Notre sommelière Sophie Traoré vous livre ses conseils pour composer une carte des vins qui impressionne vos convives sans ostentation, du champagne d'accueil au digestif...",
    'blog.read':              'Lire la suite →',

    'contact.pretitle':           'Parlons-en',
    'contact.title':              'Contact',
    'contact.subtitle':           "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner.",
    'contact.form.title':         'Nous écrire',
    'contact.form.name':          'Nom complet',
    'contact.form.email':         'Email',
    'contact.form.phone':         'Téléphone',
    'contact.form.type':          'Type de demande',
    'contact.form.select':        'Sélectionner...',
    'contact.form.opt.particulier': 'Particulier',
    'contact.form.opt.restaurant':  'Restaurant / Hôtel',
    'contact.form.opt.entreprise':  'Entreprise',
    'contact.form.opt.collector':   'Collectionneur',
    'contact.form.message':       'Message',
    'contact.form.send':          'Envoyer le message',
    'contact.form.success':       'Message envoyé ! Nous vous répondrons sous 24h.',
    'contact.devis.title':        'Demander un devis',
    'contact.devis.product':      'Produit souhaité',
    'contact.devis.quantity':     'Quantité',
    'contact.devis.occasion':     'Occasion',
    'contact.devis.email':        'Email de contact',
    'contact.devis.send':         'Obtenir un devis',
    'contact.devis.success':      'Devis demandé ! Nous vous contactons rapidement.',
    'contact.info.title':         'Nos coordonnées',
    'contact.info.address':       'Adresse',
    'contact.info.phone':         'Téléphone',
    'contact.call':               '📞 Appeler directement',
    'contact.map':                'Quartier Administratif, Lomé — Togo',

    'footer.slogan':        "L'excellence viticole, au cœur de l'Afrique.",
    'footer.nav.title':     'Navigation',
    'footer.cat.title':     'Nos produits',
    'footer.contact.title': 'Contact',
    'footer.hours':         'Lun–Sam : 9h–19h',
    'footer.legal':         '© {{year}} Africa Wine Food. Tous droits réservés.',
    'footer.warning':       "⚠️ L'abus d'alcool est dangereux pour la santé. À consommer avec modération. Interdit aux mineurs de moins de 18 ans.",
    'whatsapp.label':       'WhatsApp',

    /* ---- Nouvelles cles multipage ---- */
    'home.preview.pretitle': 'Nos sélections du moment',
    'home.preview.title':    'À la une',
    'home.preview.subtitle': "Un avant-goût de notre catalogue d'exception.",
    'home.blog.all':         'Voir tous les articles',

    'catalogue.cta.text': "Vous recherchez une bouteille en particulier ? Notre équipe est disponible pour vous aider.",
    'catalogue.cta.btn':  'Demander un conseil personnalisé',

    'about.header.subtitle': "Depuis 2009, la référence du vin de luxe en Afrique de l'Ouest.",
    'about.mvv.pretitle':    'Ce qui nous guide',
    'about.mvv.title':       'Mission, Vision & Valeurs',
    'about.stats.pretitle':  'En chiffres',
    'about.stats.title':     'Africa Wine Food en quelques chiffres',
    'about.cta.pretitle':    'Travaillons ensemble',
    'about.cta.title':       'Prêt à découvrir notre sélection ?',
    'about.cta.desc':        'Consultez notre catalogue ou contactez directement nos experts pour un accompagnement sur mesure.',

    'blog.more.pretitle':         'Autres articles',
    'blog.more.title':            'À lire également',
    'blog.a4.title':              'Champagne : comment choisir la bonne cuvée ?',
    'blog.a4.excerpt':            "Brut, blanc de blancs, millésime ou prestige : notre guide pour décrypter les étiquettes de champagne et choisir la cuvée parfaite pour chaque occasion...",
    'blog.a5.title':              "Constituer une cave à vins : les règles d'or",
    'blog.a5.excerpt':            "Température, hygrométrie, lumière et organisation : tout ce qu'il faut savoir pour constituer et conserver une cave à vins de qualité en région tropicale...",
    'blog.a6.title':              'Vins africains : les nouvelles cuvées à surveiller',
    'blog.a6.excerpt':            "L'Afrique du Sud, le Maroc, la Tunisie et l'Algérie produisent des vins d'une qualité croissante. Notre sélection des étiquettes africaines les plus prometteuses...",
    'blog.a7.title':              "L'art du cognac : histoire, terroir et dégustation",
    'blog.a7.excerpt':            "De la Grande Champagne à l'Armagnac, notre immersion dans l'univers du cognac d'exception pour mieux comprendre ce spiritueux iconique aux multiples nuances...",
    'blog.a1.body':               "Bordeaux 2024 est marqué par un été chaud et sec, tempéré par des pluies automnales salvatrices. Les châteaux ayant les meilleures expositions et des sols à bonne rétention hydrique ont produit des vins d'une concentration et d'une finesse rares.",
    'blog.newsletter.title':      'Restez informe',
    'blog.newsletter.desc':       "Recevez nos conseils, nos nouveautes et nos offres exclusives directement dans votre boite mail.",
    'blog.newsletter.btn':        "S'inscrire",
    'blog.newsletter.success':    "Merci ! Vous etes inscrit a notre newsletter.",

    'contact.info.hours':         'Horaires',
    'contact.map.pretitle':       'Ou nous trouver',
    'contact.map.title':          'Notre adresse',
    'contact.offices.pretitle':   'Nos implantations',
    'contact.offices.title':      'Nos bureaux en Afrique',
    'contact.offices.ci.city':    'Lomé',
    'contact.offices.ci.country': "Togo — Siège social",
    'contact.offices.sn.city':    'Dakar',
    'contact.offices.sn.country': 'Senegal — Bureau regional',
    'contact.offices.gh.city':    'Accra',
    'contact.offices.gh.country': 'Ghana — Bureau regional',
    'contact.offices.cm.city':    'Douala',
    'contact.offices.cm.country': 'Cameroun — Bureau regional',
  },

  en: {
    'nav.home':        'Home',
    'nav.catalogue':   'Catalogue',
    'nav.about':       'About',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Luxury wines & premium spirits agency',
    'hero.title':     "The finest wines & spirits,<br>at the heart of Africa",
    'hero.subtitle':  "Exclusive selection of grand crus and premium spirits, elegantly delivered across Africa.",
    'hero.cta':       'Explore our catalogue',

    'univers.pretitle':  'Our selection',
    'univers.title':     'Our World',
    'univers.subtitle':  "Four universes of viticultural excellence and exceptional spirits.",
    'univers.c1.title':  'Red, White & Rosé Wines',
    'univers.c1.desc':   "Classified grands crus and hidden gems from around the world, carefully selected by our experts.",
    'univers.c1.cta':    'Explore →',
    'univers.c2.title':  'Champagnes & Sparkling',
    'univers.c2.desc':   "From prestigious houses to small growers, the finest bubbles for every prestige occasion.",
    'univers.c2.cta':    'Explore →',
    'univers.c3.title':  'Premium Spirits',
    'univers.c3.desc':   "Single malt whiskies, exceptional cognacs, agricultural rums and rare spirits from around the world.",
    'univers.c3.cta':    'Explore →',
    'univers.c4.title':  'Rare Collections',
    'univers.c4.desc':   "Exceptional vintages, limited editions and collectible bottles for the most discerning connoisseurs.",
    'univers.c4.cta':    'Explore →',

    'pourquoi.pretitle':  'Our difference',
    'pourquoi.title':     'Why choose us',
    'pourquoi.p1.title':  'Exclusive selection',
    'pourquoi.p1.desc':   "Every bottle is chosen by our experts to guarantee authenticity, quality and excellence.",
    'pourquoi.p2.title':  'Premium delivery',
    'pourquoi.p2.desc':   "Custom packaging and secure transport to preserve the integrity of every bottle.",
    'pourquoi.p3.title':  'Expert advice',
    'pourquoi.p3.desc':   "Our certified sommeliers guide you in your choices, from food & wine pairings to wine investments.",

    'clientele.pretitle': 'Our clients',
    'clientele.title':    'An exceptional clientele',
    'clientele.subtitle': "Africa Wine Food serves a demanding clientele passionate about great wines and the art of fine living.",
    'clientele.c1.title': 'Affluent individuals',
    'clientele.c1.desc':  "Discerning enthusiasts in search of exceptional bottles for their personal cellar.",
    'clientele.c2.title': 'Restaurants & Hotels',
    'clientele.c2.desc':  "Luxury establishments seeking to offer an exceptional wine list to their clientele.",
    'clientele.c3.title': 'Collectors',
    'clientele.c3.desc':  "Wine investors looking to enrich their portfolio with rare and precious vintages.",
    'clientele.c4.title': 'Corporations',
    'clientele.c4.desc':  "B2B solutions for business gifts, corporate events and prestige seminars.",

    'temoignages.pretitle':  'They trust us',
    'temoignages.title':     'Testimonials',
    'temoignages.t1.text':   "Africa Wine Food has transformed our wine list. Their selection of Bordeaux grand cru is simply unmatched, and their service is remarkably discreet and efficient.",
    'temoignages.t1.name':   'Marc Duplessis',
    'temoignages.t1.role':   'F&B Director, Hotel Le Méridien Abidjan',
    'temoignages.t2.text':   "As a professional sommelier, I am demanding about traceability and authenticity. Africa Wine Food is the only African partner that fully meets my criteria. Their expertise is rare.",
    'temoignages.t2.name':   'Aminata Konaré',
    'temoignages.t2.role':   'Certified Sommelier, La Terrasse Restaurant Dakar',
    'temoignages.t3.text':   "I built my personal cellar with their help. They managed to find exceptional vintages, including a 2010 Pétrus I thought was impossible to find. A premium service, a true passion for wine.",
    'temoignages.t3.name':   'Kofi Mensah',
    'temoignages.t3.role':   'Collector & Entrepreneur, Accra',

    'catalogue.pretitle':       'Our selection',
    'catalogue.title':          'Catalogue',
    'catalogue.subtitle':       "Exceptional bottles, selected by our experts for the most refined palates.",
    'catalogue.filter.all':     'All',
    'catalogue.filter.rouge':   'Red Wines',
    'catalogue.filter.blanc':   'White & Rosé',
    'catalogue.filter.champagne': 'Champagnes',
    'catalogue.filter.spirits': 'Whisky & Cognac',
    'catalogue.filter.rare':    'Rare Collections',
    'catalogue.devis':          'Request a quote',
    'catalogue.from':           'From',
    'badge.rouge':              'Red Wine',
    'badge.blanc':              'White Wine',
    'badge.champagne':          'Champagne',
    'badge.spirits':            'Whisky',
    'badge.cognac':             'Cognac',
    'badge.rare':               'Rare Collection',

    'modal.details':  'View details',
    'modal.cepage':   'Grape variety',
    'modal.region':   'Region',
    'modal.service':  'Serving temperature',
    'modal.garde':    'Ageing potential',
    'modal.alcohol':  'Alcohol content',
    'modal.tasting':  'Tasting notes',
    'modal.pairing':  'Food & wine pairings',

    'cart.add':       'Add',
    'cart.add.full':  'Add to my selection',
    'cart.toast':     'added to your selection',
    'cart.toast.see': 'View →',

    'order.pretitle': 'Your selection',
    'order.title':    'My Order',
    'order.subtitle': 'Complete your selection and send us your request. Our team will contact you within 24 hours.',
    'order.empty.title': 'Your selection is empty',
    'order.empty.desc':  'Browse our catalogue and add the bottles you wish to order.',
    'order.empty.cta':   'Explore the catalogue',
    'order.recap':       'Your selection',
    'order.items':       'Items',
    'order.total':       'Estimated total',
    'order.total.note':  'Indicative prices excl. VAT. A personalised quote and payment terms will be provided by our team.',
    'order.continue':    '← Continue shopping',
    'order.form.title':  'Your details',
    'order.form.prenom': 'First name *',
    'order.form.nom':    'Last name *',
    'order.form.email':  'Email *',
    'order.form.phone':  'Phone *',
    'order.form.pays':   'Country *',
    'order.form.pays.placeholder': 'Select...',
    'order.form.pays.other': 'Other',
    'order.form.ville':  'City *',
    'order.form.adresse': 'Delivery address',
    'order.form.delivery': 'Delivery method',
    'order.delivery.standard': 'Standard delivery (5–7 business days)',
    'order.delivery.express':  'Express delivery (2–3 business days)',
    'order.delivery.pickup':   'Agency pick-up — Lomé',
    'order.form.occasion': 'Occasion',
    'order.form.occasion.placeholder': 'Select (optional)...',
    'order.occasion.perso':   'Personal cellar',
    'order.occasion.cadeau':  'Gift',
    'order.occasion.event':   'Event / Reception',
    'order.occasion.business': 'Corporate gift',
    'order.occasion.invest':  'Wine investment',
    'order.occasion.resto':   'Restaurant / Hotel',
    'order.form.notes':       'Notes & special instructions',
    'order.form.notes.placeholder': 'Special occasion, packaging preferences, desired delivery date...',
    'order.form.submit':      'Send my order request',
    'order.disclaimer':       'By submitting this form, you agree to be contacted by our team to confirm your order and secure payment terms. No charge will be made without your prior consent.',
    'order.success.title':    'Request sent!',
    'order.success.desc':     'Our team will contact you within 24 hours to confirm your order and send you a personalised quote with payment options.',
    'order.success.catalogue': 'Back to catalogue',
    'order.success.home':      'Home',

    'about.pretitle':         'Our story',
    'about.title':            'About us',
    'about.story.title':      'A passion born between two continents',
    'about.story.p1':         "Founded in 2009 in Lomé by wine enthusiasts who trained at the greatest Bordeaux and Burgundy houses, Africa Wine Food was born from a conviction: Africa deserves access to the world's finest wines, with the service and expertise they deserve.",
    'about.story.p2':         "For over 15 years, we have travelled the world's vineyards — Bordeaux, Burgundy, Champagne, Napa Valley, Tuscany — to rigorously select the bottles that deserve a place in your cellars and exceptional dining tables.",
    'about.story.p3':         "Based in Lomé, Togo, we serve a discerning clientele across Africa and internationally. We are the unmissable reference for fine wine enthusiasts and professionals across the continent.",
    'about.mission.title':    'Our Mission',
    'about.mission.desc':     "To democratize access to exceptional fine wines and spirits in Africa, offering a curated selection, impeccable service and genuine expertise.",
    'about.vision.title':     'Our Vision',
    'about.vision.desc':      "To become the reference house for luxury wine in Sub-Saharan Africa, and to spread wine culture among new African generations.",
    'about.values.title':     'Our Values',
    'about.values.desc':      "Excellence, authenticity, integrity and passion guide every decision we make — from choosing a vintage to our relationship with clients.",
    'about.stats.refs':       'References',
    'about.stats.pays':       'Countries served',
    'about.stats.years':      "Years of expertise",
    'about.stats.clients':    'Satisfied clients',
    'about.team.pretitle':    'Human expertise',
    'about.team.title':       'Our team',
    'about.team.m1.name':     'Jean-Philippe Konan',
    'about.team.m1.role':     'Founder & CEO',
    'about.team.m1.bio':      "Graduate of the Bordeaux Wine School, 20 years of experience in fine wine distribution across Africa and Europe.",
    'about.team.m2.name':     'Sophie Traoré',
    'about.team.m2.role':     'Sales Director & Sommelier',
    'about.team.m2.bio':      "Certified Master Sommelier, specialist in Burgundy and Champagne wines. She leads our relationships with luxury establishments.",
    'about.team.m3.name':     'David Mensah',
    'about.team.m3.role':     'B2B & Development Manager',
    'about.team.m3.bio':      "Expert in commercial development and international logistics, he coordinates our partnerships with 5-star hotels and restaurants.",

    'blog.pretitle':          'News & advice',
    'blog.title':             'The Blog',
    'blog.subtitle':          "Discover our in-depth articles, guides and tips written by our expert sommeliers.",
    'blog.cat.degustation':   'Tasting',
    'blog.cat.guide':         'Guide',
    'blog.cat.accords':       'Pairings',
    'blog.a1.title':          "The best Bordeaux 2024: our exclusive selection",
    'blog.a1.excerpt':        "The 2024 vintage promises to be historic for the Bordeaux region. Discover the châteaux that transcended exceptional climatic conditions to produce remarkable wines...",
    'blog.a2.title':          "Complete guide to single malt whisky for connoisseurs",
    'blog.a2.excerpt':        "From Speyside to Islay, from the Highlands to the Lowlands — our guide takes you through the fascinating world of exceptional single malt whisky and its aromatic subtleties...",
    'blog.a3.title':          "Food & wine pairings: hosting a prestigious business dinner",
    'blog.a3.excerpt':        "Our sommelier Sophie Traoré shares her advice on composing a wine list that impresses your guests without ostentation, from the welcome champagne to the digestif...",
    'blog.read':              'Read more →',

    'contact.pretitle':           "Let's talk",
    'contact.title':              'Contact',
    'contact.subtitle':           "Our team is available to answer all your questions and guide you in your choices.",
    'contact.form.title':         'Send us a message',
    'contact.form.name':          'Full name',
    'contact.form.email':         'Email',
    'contact.form.phone':         'Phone',
    'contact.form.type':          'Request type',
    'contact.form.select':        'Select...',
    'contact.form.opt.particulier': 'Individual',
    'contact.form.opt.restaurant':  'Restaurant / Hotel',
    'contact.form.opt.entreprise':  'Corporation',
    'contact.form.opt.collector':   'Collector',
    'contact.form.message':       'Message',
    'contact.form.send':          'Send message',
    'contact.form.success':       'Message sent! We will reply within 24 hours.',
    'contact.devis.title':        'Request a quote',
    'contact.devis.product':      'Desired product',
    'contact.devis.quantity':     'Quantity',
    'contact.devis.occasion':     'Occasion',
    'contact.devis.email':        'Contact email',
    'contact.devis.send':         'Get a quote',
    'contact.devis.success':      'Quote requested! We will contact you shortly.',
    'contact.info.title':         'Our contact details',
    'contact.info.address':       'Address',
    'contact.info.phone':         'Phone',
    'contact.call':               '📞 Call directly',
    'contact.map':                'Administrative District, Lomé — Togo',

    'footer.slogan':        "The finest wines & spirits, at the heart of Africa.",
    'footer.nav.title':     'Navigation',
    'footer.cat.title':     'Our products',
    'footer.contact.title': 'Contact',
    'footer.hours':         'Mon–Sat: 9am–7pm',
    'footer.legal':         '© {{year}} Africa Wine Food. All rights reserved.',
    'footer.warning':       "⚠️ Alcohol abuse is dangerous for your health. Drink responsibly. Sale prohibited to persons under 18.",
    'whatsapp.label':       'WhatsApp',

    /* ---- New multipage keys ---- */
    'home.preview.pretitle': 'Featured selections',
    'home.preview.title':    'Featured',
    'home.preview.subtitle': 'A taste of our exceptional catalogue.',
    'home.blog.all':         'View all articles',

    'catalogue.cta.text': 'Looking for a specific bottle? Our team is available to help you.',
    'catalogue.cta.btn':  'Request personalised advice',

    'about.header.subtitle': 'Since 2009, the reference for luxury wine in West Africa.',
    'about.mvv.pretitle':    'What drives us',
    'about.mvv.title':       'Mission, Vision & Values',
    'about.stats.pretitle':  'By the numbers',
    'about.stats.title':     'Africa Wine Food in figures',
    'about.cta.pretitle':    "Let's work together",
    'about.cta.title':       'Ready to discover our selection?',
    'about.cta.desc':        'Browse our catalogue or contact our experts directly for personalised guidance.',

    'blog.more.pretitle':         'More articles',
    'blog.more.title':            'Also worth reading',
    'blog.a4.title':              'Champagne: how to choose the right cuvée?',
    'blog.a4.excerpt':            "Brut, blanc de blancs, vintage or prestige: our guide to decoding champagne labels and choosing the perfect cuvée for every occasion...",
    'blog.a5.title':              'Building a wine cellar: the golden rules',
    'blog.a5.excerpt':            "Temperature, humidity, light and organisation: everything you need to know to build and maintain a quality wine cellar in a tropical region...",
    'blog.a6.title':              'African wines: the new labels to watch',
    'blog.a6.excerpt':            "South Africa, Morocco, Tunisia and Algeria produce wines of growing quality. Our selection of the most promising African labels...",
    'blog.a7.title':              "The art of cognac: history, terroir and tasting",
    'blog.a7.excerpt':            "From Grande Champagne to Armagnac, our immersion into the world of exceptional cognac to better understand this iconic spirit with its many nuances...",
    'blog.a1.body':               "Bordeaux 2024 is marked by a hot, dry summer tempered by life-saving autumn rains. The châteaux with the best exposures and soils with good water retention produced wines of rare concentration and finesse.",
    'blog.newsletter.title':      'Stay informed',
    'blog.newsletter.desc':       'Receive our tips, new arrivals and exclusive offers directly in your inbox.',
    'blog.newsletter.btn':        'Subscribe',
    'blog.newsletter.success':    'Thank you! You are now subscribed to our newsletter.',

    'contact.info.hours':         'Opening hours',
    'contact.map.pretitle':       'Find us',
    'contact.map.title':          'Our address',
    'contact.offices.pretitle':   'Our locations',
    'contact.offices.title':      'Our offices across Africa',
    'contact.offices.ci.city':    'Lomé',
    'contact.offices.ci.country': "Togo — Head office",
    'contact.offices.sn.city':    'Dakar',
    'contact.offices.sn.country': 'Senegal — Regional office',
    'contact.offices.gh.city':    'Accra',
    'contact.offices.gh.country': 'Ghana — Regional office',
    'contact.offices.cm.city':    'Douala',
    'contact.offices.cm.country': 'Cameroon — Regional office',
  }
};

/* ---- State ---- */
let currentLang = 'fr';

/* ---- Apply translations ---- */
function applyTranslations(lang) {
  const t = translations[lang];
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      const val = typeof t[key] === 'string' ? t[key].replace('{{year}}', year) : t[key];
      if (key === 'hero.title') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
  /* Placeholders bilingues */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = lang;
}

/* ---- Language Switcher ---- */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      applyTranslations(lang);
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
        b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
      });
    });
  });
}

/* ---- Sticky Navbar ---- */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  /* Transparent → opaque au scroll */
  function updateNav() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    navbar.classList.toggle('transparent', !scrolled);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  /* Lien actif basé sur le fichier courant */
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isActive =
      (href === 'index.html'     && (page === 'index.html' || page === '')) ||
      (href === 'catalogue.html' && page === 'catalogue.html') ||
      (href === 'about.html'     && page === 'about.html')     ||
      (href === 'blog.html'      && page === 'blog.html')      ||
      (href === 'contact.html'   && page === 'contact.html');
    link.classList.toggle('active', isActive);
  });
}

/* ---- Hamburger Menu ---- */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  /* Close on nav link click */
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });
  /* Close on Escape */
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

/* ---- Smooth Scroll (cross-browser) ---- */
function smoothScrollTo(top) {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top, behavior: 'smooth' });
    return;
  }
  /* Polyfill for Safari < 15.4 */
  const start = window.scrollY;
  const dist  = top - start;
  const dur   = 600;
  const t0    = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const ease = p < .5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    window.scrollTo(0, start + dist * ease);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - offset);
    });
  });
}

/* ---- Hero Parallax ---- */
function initParallax() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;
  let ticking = false;
  function updateParallax() {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
  }, { passive: true });
}

/* ---- IntersectionObserver Animations ---- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;
  /* Fallback: show everything immediately on browsers without IntersectionObserver */
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('animated'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0);
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('animated');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

/* ---- Testimonials Carousel ---- */
function initCarousel() {
  const track   = document.getElementById('carousel-track');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (!track) return;

  const slides = track.querySelectorAll('.testimonial-slide');
  let current = 0;
  let autoplayTimer;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => goTo(current + 1), 5000);
  }
  function stopAutoplay() { clearInterval(autoplayTimer); }

  prevBtn.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
  nextBtn.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => { stopAutoplay(); goTo(parseInt(dot.dataset.index)); startAutoplay(); });
  });

  /* Pause on hover */
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  /* Pause when tab is hidden — saves CPU/battery */
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  /* Touch/swipe support */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { stopAutoplay(); goTo(diff > 0 ? current + 1 : current - 1); startAutoplay(); }
  }, { passive: true });

  startAutoplay();
}

/* ---- Catalogue Filters ---- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        /* Animate hide/show */
        if (show) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => { if (card.dataset.category !== filter && btn.dataset.filter !== 'all') card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* ---- Blog Category Filters ---- */
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const cards      = document.querySelectorAll('.blog-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cats = (card.dataset.category || '').split(' ');
        const show = filter === 'all' || cats.includes(filter);
        if (show) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            const stillHidden = !(document.querySelector('.blog-filter-btn.active')?.dataset.filter === 'all') &&
                                !((card.dataset.category || '').split(' ').includes(
                                  document.querySelector('.blog-filter-btn.active')?.dataset.filter));
            if (stillHidden) card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ---- Animated Counters ---- */
function animateCounter(el, target, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;
  let triggered = false;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        animateCounter(el, target, 2000);
      });
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

/* ---- Back to Top ---- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => smoothScrollTo(0));
}

/* ---- Form Handling ---- */
function initForms() {
  /* Contact form */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      /* Basic validation */
      const email = contactForm.querySelector('[type="email"]');
      const msg   = contactForm.querySelector('textarea');
      if (!email.value || !msg.value) return;
      formSuccess.hidden = false;
      contactForm.reset();
      setTimeout(() => { formSuccess.hidden = true; }, 5000);
    });
  }
  /* Devis form */
  const devisForm    = document.getElementById('devis-form');
  const devisSuccess = document.getElementById('devis-success');
  if (devisForm && devisSuccess) {
    devisForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = devisForm.querySelector('[type="email"]');
      if (!email.value) return;
      devisSuccess.hidden = false;
      devisForm.reset();
      setTimeout(() => { devisSuccess.hidden = true; }, 5000);
    });
  }

  /* Newsletter form */
  const nlForm    = document.getElementById('newsletter-form');
  const nlSuccess = document.getElementById('nl-success');
  if (nlForm && nlSuccess) {
    nlForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = nlForm.querySelector('[type="email"]');
      if (!email.value) return;
      nlSuccess.hidden = false;
      nlForm.reset();
      setTimeout(() => { nlSuccess.hidden = true; }, 5000);
    });
  }
}

/* ---- Cart ---- */
let cart = [];

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem('awf-cart') || '[]'); } catch(e) { cart = []; }
}

function saveCart() {
  localStorage.setItem('awf-cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = total;
    badge.hidden = total === 0;
  });
  const btn = document.getElementById('cart-nav-btn');
  if (btn) btn.setAttribute('aria-label', `Voir le panier (${total} article${total !== 1 ? 's' : ''})`);
}

function addToCart(productId) {
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  showCartToast(productId);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateCartQty(productId, qty) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (qty <= 0) { removeFromCart(productId); return; }
  item.qty = qty;
  saveCart();
}

function showCartToast(productId) {
  const data = productsData.find(p => p.id === productId);
  if (!data) return;
  const t = data[currentLang] || data.fr;
  const tr = translations[currentLang] || translations.fr;

  const existing = document.querySelector('.cart-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    <span><strong>${t.name}</strong> ${tr['cart.toast'] || 'ajouté'}</span>
    <a href="commande.html">${tr['cart.toast.see'] || 'Voir →'}</a>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  const tid = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
  toast.querySelector('a').addEventListener('click', () => clearTimeout(tid));
}

function initCart() {
  loadCart();
  updateCartBadge();

  /* Boutons "Ajouter au panier" sur les cartes */
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const card = btn.closest('.product-card[data-product-id]');
      if (!card) return;
      addToCart(card.dataset.productId);
      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 1500);
    });
  });
}

/* ---- Products Data ---- */
const productsData = [
  {
    id: 'margaux-2018',
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-rouge',
    price: '650 €',
    priceXof: 425000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Château Margaux',
      appellation: 'AOC Margaux, Bordeaux — Millésime 2018',
      desc: "Premier Grand Cru Classé de Bordeaux, Château Margaux 2018 est l'expression ultime de l'élégance bordelaise. Ce millésime exceptionnel conjugue puissance et finesse avec une complexité aromatique remarquable.",
      cepage: 'Cabernet Sauvignon 87%, Merlot 8%, Petit Verdot 3%, Cabernet Franc 2%',
      region: 'Médoc, Bordeaux — France',
      service: '17–18 °C',
      garde: '30–40 ans',
      alcohol: '13,5 % vol.',
      tasting: "Robe pourpre profond aux reflets grenat. Nez somptueux de cassis, cerise noire, violette et notes fumées. Bouche ample et soyeuse, tannins racés et veloutés, finale interminable aux accents de graphite et de truffe noire.",
      pairing: "Agneau de lait rôti aux herbes de Provence, filet de bœuf Rossini, carré d'agneau en croûte, fromages affinés à pâte dure (Comté 36 mois)."
    },
    en: {
      badge: 'Red Wine',
      name: 'Château Margaux',
      appellation: 'AOC Margaux, Bordeaux — Vintage 2018',
      desc: "Premier Grand Cru Classé of Bordeaux, Château Margaux 2018 is the ultimate expression of Bordeaux elegance. This exceptional vintage combines power and finesse with remarkable aromatic complexity.",
      cepage: 'Cabernet Sauvignon 87%, Merlot 8%, Petit Verdot 3%, Cabernet Franc 2%',
      region: 'Médoc, Bordeaux — France',
      service: '17–18 °C',
      garde: '30–40 years',
      alcohol: '13.5% vol.',
      tasting: "Deep purple robe with garnet highlights. Sumptuous nose of blackcurrant, black cherry, violet and smoky notes. Ample and silky on the palate, refined and velvety tannins, an interminable finish with graphite and black truffle accents.",
      pairing: "Herb-roasted milk lamb, beef fillet Rossini, rack of lamb en croûte, aged hard cheeses (36-month Comté)."
    }
  },
  {
    id: 'opus-one-2019',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-rouge',
    price: '380 €',
    priceXof: 249000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Opus One',
      appellation: 'Napa Valley, Californie — Millésime 2019',
      desc: "Fruit de la collaboration légendaire entre Robert Mondavi et Baron Philippe de Rothschild, Opus One 2019 est l'ambassadeur du Nouveau Monde. Une cuvée d'assemblage d'une précision et d'une élégance remarquables.",
      cepage: 'Cabernet Sauvignon 76%, Merlot 12%, Cabernet Franc 6%, Petit Verdot 4%, Malbec 2%',
      region: 'Napa Valley, Californie — États-Unis',
      service: '17–18 °C',
      garde: '20–30 ans',
      alcohol: '14,5 % vol.',
      tasting: "Couleur rubis sombre et intense. Bouquet envoûtant de mûre, cassis, chocolat noir et cèdre. Palais généreux et structuré, belle fraîcheur en milieu de bouche, tanins mûrs et fondus, finale épicée et persistante.",
      pairing: "Côte de bœuf grillée, magret de canard aux cerises noires, côtelettes d'agneau au romarin, gratin dauphinois aux truffes."
    },
    en: {
      badge: 'Red Wine',
      name: 'Opus One',
      appellation: 'Napa Valley, California — Vintage 2019',
      desc: "Born of the legendary collaboration between Robert Mondavi and Baron Philippe de Rothschild, Opus One 2019 is the ambassador of the New World — a blend of remarkable precision and elegance.",
      cepage: 'Cabernet Sauvignon 76%, Merlot 12%, Cabernet Franc 6%, Petit Verdot 4%, Malbec 2%',
      region: 'Napa Valley, California — USA',
      service: '17–18 °C',
      garde: '20–30 years',
      alcohol: '14.5% vol.',
      tasting: "Deep, intense ruby colour. Enchanting bouquet of blackberry, blackcurrant, dark chocolate and cedar. Generous and structured palate, lovely mid-palate freshness, ripe and melting tannins, spiced and persistent finish.",
      pairing: "Grilled prime rib, duck breast with black cherries, rosemary lamb chops, truffle gratin dauphinois."
    }
  },
  {
    id: 'dom-perignon-2015',
    img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-champagne',
    price: '220 €',
    priceXof: 144000,
    fr: {
      badge: 'Champagne',
      name: 'Dom Pérignon Vintage',
      appellation: 'Champagne AOC — Millésime 2015',
      desc: "Dom Pérignon Vintage 2015 incarne la dualité entre l'ardeur solaire d'une année chaude et la maîtrise absolue de la maison Moët & Chandon. Un champagne d'une intensité et d'une précision rares.",
      cepage: 'Chardonnay 53%, Pinot Noir 47%',
      region: 'Champagne — France',
      service: '9–11 °C',
      garde: '20–30 ans',
      alcohol: '12,5 % vol.',
      tasting: "Robe dorée aux fines bulles persistantes. Nez complexe alliant agrumes confits, fleurs blanches et notes briochées. Bouche ample, tendue, avec une acidité cristalline qui soutient une matière généreuse. Finale longue sur le zeste de citron et l'amande.",
      pairing: "Homard rôti au beurre, Saint-Jacques en coquille, caviar Osciètre, risotto à la truffe blanche, sushis premium."
    },
    en: {
      badge: 'Champagne',
      name: 'Dom Pérignon Vintage',
      appellation: 'Champagne AOC — Vintage 2015',
      desc: "Dom Pérignon Vintage 2015 embodies the duality between the solar warmth of a hot year and the absolute mastery of Moët & Chandon. A champagne of rare intensity and precision.",
      cepage: 'Chardonnay 53%, Pinot Noir 47%',
      region: 'Champagne — France',
      service: '9–11 °C',
      garde: '20–30 years',
      alcohol: '12.5% vol.',
      tasting: "Golden robe with fine, persistent bubbles. Complex nose combining candied citrus, white flowers and brioche notes. Ample, tense palate, with crystalline acidity supporting generous substance. Long finish on lemon zest and almond.",
      pairing: "Butter-roasted lobster, scallop in shell, Oscietra caviar, white truffle risotto, premium sushi."
    }
  },
  {
    id: 'cristal-2016',
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-champagne',
    price: '350 €',
    priceXof: 230000,
    fr: {
      badge: 'Champagne',
      name: 'Cristal Roederer',
      appellation: 'Champagne AOC — Millésime 2016',
      desc: "Né en 1876 pour le Tsar Alexandre II, Cristal Roederer 2016 est le champagne de prestige absolu. Ce millésime frais et élégant illustre le style inimitable de la Maison Roederer, fondé sur la précision et la minéralité.",
      cepage: 'Pinot Noir 60%, Chardonnay 40%',
      region: 'Champagne — France',
      service: '8–10 °C',
      garde: '15–25 ans',
      alcohol: '12 % vol.',
      tasting: "Robe pâle, presque platine. Effervescence fine et abondante. Nez délicat de pêche blanche, pamplemousse, craie et notes de pain grillé. Bouche droite, précise, avec un fil de minéralité qui court de l'attaque à la finale.",
      pairing: "Crabe royal, homard bleu, turbot rôti, langoustines royales, coquilles Saint-Jacques au champagne."
    },
    en: {
      badge: 'Champagne',
      name: 'Cristal Roederer',
      appellation: 'Champagne AOC — Vintage 2016',
      desc: "Created in 1876 for Tsar Alexander II, Cristal Roederer 2016 is the champagne of absolute prestige. This fresh and elegant vintage illustrates the inimitable Roederer style, built on precision and minerality.",
      cepage: 'Pinot Noir 60%, Chardonnay 40%',
      region: 'Champagne — France',
      service: '8–10 °C',
      garde: '15–25 years',
      alcohol: '12% vol.',
      tasting: "Pale, almost platinum robe. Fine and abundant effervescence. Delicate nose of white peach, grapefruit, chalk and toasted bread notes. Straight, precise palate with a thread of minerality running from start to finish.",
      pairing: "King crab, blue lobster, roasted turbot, royal langoustines, scallops in champagne."
    }
  },
  {
    id: 'puligny-2020',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-blanc',
    price: '180 €',
    priceXof: 118000,
    fr: {
      badge: 'Vin Blanc',
      name: 'Puligny-Montrachet 1er Cru',
      appellation: 'AOC Bourgogne — Millésime 2020',
      desc: "Érigé en symbole du grand vin blanc de Bourgogne, ce Puligny-Montrachet Premier Cru 2020 illustre la quintessence du Chardonnay en Côte de Beaune. Élégance, minéralité et longueur : une trinité accomplie.",
      cepage: 'Chardonnay 100%',
      region: 'Côte de Beaune, Bourgogne — France',
      service: '12–14 °C',
      garde: '10–15 ans',
      alcohol: '13 % vol.',
      tasting: "Robe jaune dorée aux reflets verts. Nez expressif de fleurs d'acacia, agrumes, noisette fraîche et silex humide. Bouche riche et tendue à la fois, avec une minéralité calcaire caractéristique et une longue finale sur la noisette grillée et le miel d'acacia.",
      pairing: "Saint-Jacques rôties, sole meunière, homard à la crème, foie gras poêlé, fromages de chèvre affinés."
    },
    en: {
      badge: 'White Wine',
      name: 'Puligny-Montrachet 1er Cru',
      appellation: 'AOC Burgundy — Vintage 2020',
      desc: "Erected as a symbol of great white Burgundy, this Puligny-Montrachet Premier Cru 2020 illustrates the quintessence of Chardonnay on the Côte de Beaune. Elegance, minerality and length: a perfect trinity.",
      cepage: 'Chardonnay 100%',
      region: 'Côte de Beaune, Burgundy — France',
      service: '12–14 °C',
      garde: '10–15 years',
      alcohol: '13% vol.',
      tasting: "Golden yellow robe with green highlights. Expressive nose of acacia flowers, citrus, fresh hazelnut and wet flint. Rich yet tense palate, with characteristic limestone minerality and a long finish on roasted hazelnut and acacia honey.",
      pairing: "Seared scallops, sole meunière, lobster with cream, pan-fried foie gras, aged goat's cheese."
    }
  },
  {
    id: 'macallan-25',
    img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-spirits',
    price: '1 200 €',
    priceXof: 787000,
    fr: {
      badge: 'Whisky Single Malt',
      name: 'The Macallan 25 Years',
      appellation: 'Speyside, Scotland — Single Malt',
      desc: "Vieilli 25 ans dans des fûts de chêne sherry d'Oloroso espagnol, The Macallan 25 ans est l'un des whiskies les plus convoités au monde. Une profondeur aromatique sans égale, fruit d'un savoir-faire centenaire.",
      cepage: 'Orge maltée — Single Malt',
      region: 'Speyside, Écosse — Royaume-Uni',
      service: '18–20 °C (sans glaçons)',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '43 % vol.',
      tasting: "Couleur ambre profonde, reflets acajou. Nez envoûtant de fruits secs (raisin, figue), toffee, épices douces (cannelle, muscade) et chêne toasté. Bouche riche, veloutée, avec des notes de chocolat noir, orange confite et cuir. Finale chaude et interminable.",
      pairing: "Cigare Romeo y Julieta, chocolat noir 85%, foie gras au torchon, raisins secs, tartes aux noix. Excellent en digestif après un repas d'exception."
    },
    en: {
      badge: 'Single Malt Whisky',
      name: 'The Macallan 25 Years',
      appellation: 'Speyside, Scotland — Single Malt',
      desc: "Aged 25 years in Spanish Oloroso sherry oak casks, The Macallan 25 Year Old is one of the most coveted whiskies in the world. Unparalleled aromatic depth, born of a century-long craft.",
      cepage: 'Malted barley — Single Malt',
      region: 'Speyside, Scotland — United Kingdom',
      service: '18–20 °C (no ice)',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '43% vol.',
      tasting: "Deep amber colour, mahogany highlights. Enchanting nose of dried fruits (raisin, fig), toffee, warm spices (cinnamon, nutmeg) and toasted oak. Rich, velvety palate with notes of dark chocolate, candied orange and leather. Warm and never-ending finish.",
      pairing: "Romeo y Julieta cigar, 85% dark chocolate, foie gras au torchon, raisins, walnut tarts. Excellent as a digestif after an exceptional meal."
    }
  },
  {
    id: 'hennessy-paradis',
    img: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-spirits',
    price: '2 500 €',
    priceXof: 1640000,
    fr: {
      badge: 'Cognac',
      name: 'Hennessy Paradis Impérial',
      appellation: 'Cognac AOC, Grande Champagne',
      desc: "Hennessy Paradis Impérial est l'expression suprême du savoir-faire Hennessy. Assemblage de très vieilles eaux-de-vie sélectionnées parmi les plus précieuses réserves centenaires, il représente l'apogée de l'art du cognac.",
      cepage: 'Ugni Blanc — Grande Champagne',
      region: 'Grande Champagne, Cognac — France',
      service: '18–20 °C',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '40 % vol.',
      tasting: "Robe ambrée aux reflets dorés d'une rare limpidité. Nez d'une délicatesse extrême : jasmin, fleur d'oranger, miel de fleurs sauvages, épices orientales et vanille Bourbon. Bouche aérienne et opulente, finale infinie d'une longueur extraordinaire.",
      pairing: "Chocolat blanc à la vanille de Tahiti, pâtisseries à base de miel et d'amandes, cigares Cohiba, ou simplement en contemplation, seul ou avec un proche."
    },
    en: {
      badge: 'Cognac',
      name: 'Hennessy Paradis Impérial',
      appellation: 'Cognac AOC, Grande Champagne',
      desc: "Hennessy Paradis Impérial is the supreme expression of Hennessy's craftsmanship. A blend of very old eaux-de-vie selected from the most precious century-old reserves, it represents the pinnacle of the art of cognac.",
      cepage: 'Ugni Blanc — Grande Champagne',
      region: 'Grande Champagne, Cognac — France',
      service: '18–20 °C',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '40% vol.',
      tasting: "Amber robe with golden highlights of rare clarity. Nose of extreme delicacy: jasmine, orange blossom, wild flower honey, oriental spices and Bourbon vanilla. Airy and opulent palate, with an infinite finish of extraordinary length.",
      pairing: "White chocolate with Tahitian vanilla, honey and almond pastries, Cohiba cigars, or simply in quiet contemplation."
    }
  },
  {
    id: 'krug-grande-cuvee',
    img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-champagne',
    price: '280 €',
    priceXof: 184000,
    fr: {
      badge: 'Champagne',
      name: 'Krug Grande Cuvée',
      appellation: 'Champagne AOC — 170ème Édition',
      desc: "Krug Grande Cuvée est bien plus qu'un champagne : c'est une philosophie. Assemblage de plus de 120 vins provenant de 10 années différentes et de 3 cépages champenois, chaque édition est une création unique qui exprime la vision de la maison Krug.",
      cepage: 'Pinot Noir 47%, Chardonnay 35%, Meunier 18%',
      region: 'Champagne — France',
      service: '10–12 °C',
      garde: '10–20 ans',
      alcohol: '12 % vol.',
      tasting: "Robe vieil or intense. Effervescence soutenue et persistante. Nez d'une complexité extraordinaire : fruits à coque (noisette, amande), fleurs séchées, épices douces, notes toastées et zeste de citron confit. Bouche crémeuse, volumineuse, d'une richesse somptueuse.",
      pairing: "Homard grillé, risotto aux champignons de saison, langouste thermidor, fromages à pâte molle (Brie de Meaux, Époisses), crustacés en général."
    },
    en: {
      badge: 'Champagne',
      name: 'Krug Grande Cuvée',
      appellation: 'Champagne AOC — 170th Edition',
      desc: "Krug Grande Cuvée is far more than a champagne: it is a philosophy. A blend of over 120 wines from 10 different years and 3 Champagne grape varieties, each edition is a unique creation expressing the Krug house's vision.",
      cepage: 'Pinot Noir 47%, Chardonnay 35%, Meunier 18%',
      region: 'Champagne — France',
      service: '10–12 °C',
      garde: '10–20 years',
      alcohol: '12% vol.',
      tasting: "Intense old gold robe. Sustained and persistent effervescence. Nose of extraordinary complexity: nuts (hazelnut, almond), dried flowers, soft spices, toasted notes and candied lemon zest. Creamy, voluminous palate of sumptuous richness.",
      pairing: "Grilled lobster, seasonal mushroom risotto, thermidor crayfish, soft cheeses (Brie de Meaux, Époisses), shellfish in general."
    }
  },
  {
    id: 'petrus-2018',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-rouge',
    price: '3 500 €',
    priceXof: 2296000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Pétrus',
      appellation: 'AOC Pomerol, Bordeaux — Millésime 2018',
      desc: "Produit sur à peine 11,4 hectares d'argile bleue unique au monde, Pétrus 2018 est le mythe absolu du vin rouge. Issu presque exclusivement du cépage Merlot, ce millésime exceptionnel défie toutes les lois du vin.",
      cepage: 'Merlot 95%, Cabernet Franc 5%',
      region: 'Pomerol, Bordeaux — France',
      service: '17–18 °C',
      garde: '40–50 ans',
      alcohol: '14 % vol.',
      tasting: "Robe pourpre d'une densité presque opaque. Nez mythique : truffe noire, cerise à l'eau-de-vie, chocolat amer, violette et menthe fraîche. Bouche d'une richesse et d'une onctuosité incomparables, tannins de velours, finale éternelle sur la truffe et le cacao.",
      pairing: "Bœuf en croûte sauce Périgueux, agneau de lait truffé, pigeon rôti aux cèpes, vieux fromages (Pélardon, Saint-Nectaire affiné)."
    },
    en: {
      badge: 'Red Wine',
      name: 'Pétrus',
      appellation: 'AOC Pomerol, Bordeaux — Vintage 2018',
      desc: "Produced on just 11.4 hectares of unique blue clay, Pétrus 2018 is the absolute myth of red wine. Derived almost entirely from the Merlot grape, this exceptional vintage defies all the laws of wine.",
      cepage: 'Merlot 95%, Cabernet Franc 5%',
      region: 'Pomerol, Bordeaux — France',
      service: '17–18 °C',
      garde: '40–50 years',
      alcohol: '14% vol.',
      tasting: "Purple robe of almost opaque density. Mythic nose: black truffle, kirsch cherry, bitter chocolate, violet and fresh mint. Palate of incomparable richness and unctuousness, velvet tannins, eternal finish on truffle and cocoa.",
      pairing: "Beef wellington with Périgueux sauce, truffle milk lamb, pigeon roasted with porcini mushrooms, aged cheeses (Pélardon, aged Saint-Nectaire)."
    }
  },
  {
    id: 'sancerre-2022',
    img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-blanc',
    price: '75 €',
    priceXof: 49000,
    fr: {
      badge: 'Vin Blanc',
      name: 'Sancerre Henri Bourgeois',
      appellation: 'AOC Sancerre, Loire — Millésime 2022',
      desc: "Henri Bourgeois, figure emblématique du Sancerre depuis neuf générations, signe avec ce 2022 un vin blanc d'une pureté cristalline. L'expression parfaite du Sauvignon Blanc dans la vallée de la Loire.",
      cepage: 'Sauvignon Blanc 100%',
      region: 'Sancerre, Vallée de la Loire — France',
      service: '10–12 °C',
      garde: '5–8 ans',
      alcohol: '13 % vol.',
      tasting: "Robe jaune pâle aux reflets argentés. Nez éclatant de cassis bourgeons, citron vert, pamplemousse et herbe fraîche sur fond de silex. Bouche vive et minérale, attaque franche, bonne tension acide et finale sur les agrumes et la craie blanche.",
      pairing: "Chèvre frais (Crottin de Chavignol AOP), plateau de fruits de mer, saumon cru en gravlax, asperges vertes, tartare de dorade royale."
    },
    en: {
      badge: 'White Wine',
      name: 'Sancerre Henri Bourgeois',
      appellation: 'AOC Sancerre, Loire — Vintage 2022',
      desc: "Henri Bourgeois, an emblematic figure of Sancerre for nine generations, signs with this 2022 a white wine of crystalline purity. The perfect expression of Sauvignon Blanc in the Loire Valley.",
      cepage: 'Sauvignon Blanc 100%',
      region: 'Sancerre, Loire Valley — France',
      service: '10–12 °C',
      garde: '5–8 years',
      alcohol: '13% vol.',
      tasting: "Pale yellow robe with silver highlights. Dazzling nose of blackcurrant buds, lime, grapefruit and fresh grass on a flint background. Lively and mineral palate, frank attack, good acid tension and finish on citrus and white chalk.",
      pairing: "Fresh goat's cheese (Crottin de Chavignol AOP), seafood platter, gravlax salmon, green asparagus, sea bream tartare."
    }
  },
  {
    id: 'romanee-conti-2015',
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-rare',
    price: '18 000 €',
    priceXof: 11807000,
    fr: {
      badge: 'Collection Rare',
      name: 'Romanée-Conti DRC',
      appellation: 'AOC Grand Cru Bourgogne — Millésime 2015',
      desc: "La Romanée-Conti est le Graal absolu des amateurs de vin. Issu d'un monopole de 1,8 hectare classé Grand Cru depuis le XVIe siècle, ce millésime 2015 — solaire et d'une concentration légendaire — est peut-être le plus grand vin rouge jamais produit.",
      cepage: 'Pinot Noir 100%',
      region: 'Vosne-Romanée, Bourgogne — France',
      service: '16–17 °C',
      garde: '50+ ans',
      alcohol: '13 % vol.',
      tasting: "Robe rubis d'une transparence et d'une profondeur sublimes. Nez cosmique : cerise fraîche, rose séchée, épices de Noël, encens, vieux cuir et un terroir incomparable qui s'exprime dans toute sa noblesse. Bouche transcendantale, tannins de soie, longueur infinie.",
      pairing: "Par respect pour sa singularité, la Romanée-Conti se déguste de préférence seule, en méditation. Si vous l'accordez à un mets : gibier noble (bécasse, faisan truffé), ou jamais un simple vieux fromage de Bourgogne."
    },
    en: {
      badge: 'Rare Collection',
      name: 'Romanée-Conti DRC',
      appellation: 'AOC Grand Cru Burgundy — Vintage 2015',
      desc: "Romanée-Conti is the absolute Holy Grail for wine lovers. From a 1.8-hectare monopole classified as Grand Cru since the 16th century, this 2015 vintage — sunny and of legendary concentration — may be the greatest red wine ever produced.",
      cepage: 'Pinot Noir 100%',
      region: 'Vosne-Romanée, Burgundy — France',
      service: '16–17 °C',
      garde: '50+ years',
      alcohol: '13% vol.',
      tasting: "Ruby robe of sublime transparency and depth. Cosmic nose: fresh cherry, dried rose, Christmas spices, incense, old leather and an incomparable terroir expressing itself in full nobility. Transcendental palate, silk tannins, infinite length.",
      pairing: "Out of respect for its singularity, Romanée-Conti is best enjoyed alone, in meditation. If paired with food: noble game (woodcock, truffle pheasant), or perhaps just an old Burgundy cheese."
    }
  },
  {
    id: 'glenfarclas-50',
    img: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=800&q=85&auto=format&fit=crop',
    badgeClass: 'badge-rare',
    price: '5 800 €',
    priceXof: 3805000,
    fr: {
      badge: 'Collection Rare',
      name: 'Glenfarclas 50 Years',
      appellation: 'Speyside, Scotland — Édition Limitée',
      desc: "Glenfarclas 50 ans est l'un des single malts les plus rares et les plus recherchés d'Écosse. Distillé et vieilli 50 ans dans des fûts de sherry en chêne européen, c'est une déclaration d'amour au whisky de tradition.",
      cepage: 'Orge maltée — Single Malt',
      region: 'Speyside, Écosse — Royaume-Uni',
      service: '18–20 °C (sans glaçons)',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '50 % vol.',
      tasting: "Robe acajou profond aux reflets cuivrés, d'une beauté saisissante. Nez envoûtant de fruits secs (pruneau, datte, raisin de Corinthe), chocolat noir, vieux chêne, épices orientales et une touche d'herbes séchées. Bouche dense et complexe, finale d'une longueur prodigieuse.",
      pairing: "Pudding de Noël, chocolat noir aux noix de pécan, charcuterie de qualité, cigares Montecristo, fromages bleus (Roquefort, Stilton)."
    },
    en: {
      badge: 'Rare Collection',
      name: 'Glenfarclas 50 Years',
      appellation: 'Speyside, Scotland — Limited Edition',
      desc: "Glenfarclas 50 Year Old is one of the rarest and most sought-after single malts in Scotland. Distilled and aged 50 years in European oak sherry casks, it is a love letter to traditional whisky-making.",
      cepage: 'Malted barley — Single Malt',
      region: 'Speyside, Scotland — United Kingdom',
      service: '18–20 °C (no ice)',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '50% vol.',
      tasting: "Deep mahogany robe with copper highlights, of striking beauty. Enchanting nose of dried fruits (prune, date, currant), dark chocolate, aged oak, oriental spices and a hint of dried herbs. Dense and complex palate, with a finish of prodigious length.",
      pairing: "Christmas pudding, dark chocolate with pecans, quality charcuterie, Montecristo cigars, blue cheeses (Roquefort, Stilton)."
    }
  }
];

/* ---- Product Modal ---- */
function initProductModal() {
  const modal    = document.getElementById('product-modal');
  if (!modal) return;

  const backdrop    = document.getElementById('modal-backdrop');
  const closeBtn    = document.getElementById('modal-close');
  const addCartBtn  = document.getElementById('modal-add-cart');
  let currentModalId = null;

  function openModal(productId) {
    const data = productsData.find(p => p.id === productId);
    if (!data) return;
    currentModalId = productId;
    const t = data[currentLang] || data.fr;

    document.getElementById('modal-img').src            = data.img;
    document.getElementById('modal-img').alt            = t.name;
    const badge = document.getElementById('modal-badge');
    badge.textContent = t.badge;
    badge.className   = 'product-badge ' + data.badgeClass;
    document.getElementById('modal-price').textContent        = (window.AWF_CURRENCY && data.priceXof) ? window.AWF_CURRENCY.fmtPrice(data.priceXof) : data.price;
    document.getElementById('modal-product-name').textContent = t.name;
    document.getElementById('modal-appellation').textContent  = t.appellation;
    document.getElementById('modal-desc').textContent         = t.desc;
    document.getElementById('modal-cepage').textContent       = t.cepage;
    document.getElementById('modal-region').textContent       = t.region;
    document.getElementById('modal-service').textContent      = t.service;
    document.getElementById('modal-garde').textContent        = t.garde;
    document.getElementById('modal-alcohol').textContent      = t.alcohol;
    document.getElementById('modal-tasting').textContent      = t.tasting;
    document.getElementById('modal-pairing').textContent      = t.pairing;

    /* re-apply i18n labels */
    modal.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = (translations[currentLang] || translations.fr)[key];
      if (val) el.textContent = val;
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    currentModalId = null;
  }

  /* "Ajouter à ma sélection" button inside modal */
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      if (!currentModalId) return;
      addToCart(currentModalId);
      const tr = translations[currentLang] || translations.fr;
      addCartBtn.textContent = '✓ ' + (tr['cart.add.full'] || 'Ajouté');
      setTimeout(() => {
        addCartBtn.textContent = tr['cart.add.full'] || 'Ajouter à ma sélection';
      }, 2000);
    });
  }

  /* Click on product card */
  document.querySelectorAll('.product-card[data-product-id]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      if (e.target.closest('.btn-add-cart')) return;
      openModal(card.dataset.productId);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.productId);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

/* ---- Page Commande ---- */
function initCommandePage() {
  const emptyEl  = document.getElementById('cart-empty');
  const gridEl   = document.getElementById('commande-grid');
  const listEl   = document.getElementById('cart-items-list');
  const countEl  = document.getElementById('cart-count');
  const totalEl  = document.getElementById('cart-total-price');
  const orderForm    = document.getElementById('order-form');
  const orderSuccess = document.getElementById('order-success');

  if (!emptyEl || !gridEl) return;

  function renderCart() {
    if (cart.length === 0) {
      emptyEl.hidden = false;
      gridEl.hidden  = true;
      return;
    }
    emptyEl.hidden = true;
    gridEl.hidden  = false;

    listEl.innerHTML = '';
    let totalQty = 0;
    let totalAmt = 0;

    cart.forEach(item => {
      const data = productsData.find(p => p.id === item.id);
      if (!data) return;
      const t = data[currentLang] || data.fr;
      totalQty += item.qty;
      totalAmt += (data.priceXof || 0) * item.qty;
      const itemPriceStr = (window.AWF_CURRENCY && data.priceXof) ? window.AWF_CURRENCY.fmtPrice(data.priceXof) : data.price;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.dataset.id = item.id;
      row.innerHTML = `
        <div class="cart-item-img">
          <img src="${data.img}" alt="${t.name}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <p class="cart-item-badge">${t.badge}</p>
          <p class="cart-item-name">${t.name}</p>
          <p class="cart-item-appellation">${t.appellation}</p>
          <p class="cart-item-price">${itemPriceStr} / bouteille</p>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper" role="group" aria-label="Quantité">
            <button class="qty-btn qty-minus" aria-label="Diminuer">−</button>
            <input class="qty-input" type="number" value="${item.qty}" min="1" max="99" aria-label="Quantité" />
            <button class="qty-btn qty-plus" aria-label="Augmenter">+</button>
          </div>
          <button class="cart-remove-btn" aria-label="Supprimer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      `;

      /* Events */
      const qtyInput = row.querySelector('.qty-input');
      row.querySelector('.qty-minus').addEventListener('click', () => {
        const newQty = Math.max(1, item.qty - 1);
        updateCartQty(item.id, newQty);
        renderCart();
      });
      row.querySelector('.qty-plus').addEventListener('click', () => {
        updateCartQty(item.id, item.qty + 1);
        renderCart();
      });
      qtyInput.addEventListener('change', () => {
        const v = parseInt(qtyInput.value, 10);
        if (!isNaN(v) && v > 0) updateCartQty(item.id, v);
        else qtyInput.value = item.qty;
        renderCart();
      });
      row.querySelector('.cart-remove-btn').addEventListener('click', () => {
        removeFromCart(item.id);
        renderCart();
      });

      listEl.appendChild(row);
    });

    if (countEl) countEl.textContent = totalQty + ' article' + (totalQty !== 1 ? 's' : '');
    if (totalEl) {
      if (totalAmt > 0 && window.AWF_CURRENCY) {
        totalEl.textContent = window.AWF_CURRENCY.fmtPrice(totalAmt);
      } else if (totalAmt > 0) {
        totalEl.textContent = totalAmt.toLocaleString('fr-FR') + ' F CFA';
      } else {
        totalEl.textContent = 'Sur devis';
      }
    }
  }

  renderCart();
  window.addEventListener('awf:currency', renderCart);

  /* Form submission */
  if (orderForm && orderSuccess) {
    orderForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = orderForm.querySelector('[type="email"]');
      const prenom = orderForm.querySelector('#order-prenom');
      if (!email || !email.value || !prenom || !prenom.value) return;
      orderForm.hidden = true;
      orderSuccess.hidden = false;
      cart = [];
      saveCart();
    });
  }
}

/* ---- iOS viewport height fix ---- */
function setVh() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}

/* ---- Init ---- */
function init() {
  setVh();
  window.addEventListener('resize', setVh, { passive: true });
  window.addEventListener('orientationchange', setVh, { passive: true });
  applyTranslations(currentLang);
  initLangSwitcher();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initParallax();
  initScrollAnimations();
  initCarousel();
  initFilters();
  initBlogFilters();
  initCounters();
  initBackToTop();
  initForms();
  initCart();
  initProductModal();
  initCommandePage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
