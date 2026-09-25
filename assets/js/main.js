/* AFRICA WINE FOOD - main.js */
/* Fonctionnalites : bilingue FR/EN, parallaxe, */
/* carousel, filtres, compteurs, sticky nav, */
/* hamburger, back-to-top, smooth scroll, formulaires */

'use strict';

/* Translations */
const translations = {
  fr: {
    'nav.home':        'Accueil',
    'nav.catalogue':   'Catalogue',
    'nav.about':       'À propos',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Agence de vins de luxe, spiritueux & distillerie premium',
    'hero.title':     "L'excellence viticole et distillerie,<br>au cœur de l'Afrique",
    'hero.subtitle':  "Sélection exclusive de grands crus, spiritueux et distilleries haut de gamme, livrés avec élégance partout en Afrique.",
    'hero.cta':       'Découvrir notre catalogue',

    'univers.pretitle':  'Notre sélection',
    'univers.title':     'Nos Univers',
    'univers.subtitle':  "Cinq univers de l'excellence viticole, spiritueux et distilleries d'exception.",
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

    'univers.c5.title':  'Crémants & Effervescents',
    'univers.c5.desc':   "Crémants d'Alsace, de Bourgogne, du Jura et autres effervescents d'exception, l'élégance pétillante à prix accessible.",
    'univers.c5.cta':    'Explorer →',

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


    'catalogue.pretitle':       'Notre sélection',
    'catalogue.title':          'Catalogue',
    'catalogue.subtitle':       "Des bouteilles d'exception, sélectionnées par nos experts pour les palais les plus fins.",
    'catalogue.filter.all':     'Tous',
    'catalogue.filter.rouge':   'Vins Rouges',
    'catalogue.filter.blanc':   'Blancs & Rosés',
    'catalogue.filter.champagne': 'Champagnes',
    'catalogue.filter.cremant': 'Crémants',
    'catalogue.filter.spirits': 'Spiritueux',
    'catalogue.filter.rare':    'Collections Rares',
    'catalogue.devis':          'Demander un devis',
    'catalogue.from':           'À partir de',
    'badge.rouge':              'Vin Rouge',
    'badge.blanc':              'Vin Blanc',
    'badge.champagne':          'Champagne',
    'badge.spirits':            'Whisky',
    'badge.cognac':             'Cognac',
    'badge.rare':               'Collection Rare',

    'modal.details':  'Détails',
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
    'catalogue.note': 'Prix indicatifs en F CFA, hors TVA.',
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
    'order.delivery.pickup':   'Retrait en agence, Lomé',
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
    'about.story.p1':         "Africa Wine Food est basée à Lomé, au Togo. Notre conviction : l'Afrique mérite un accès aux plus grands vins du monde, avec le service et l'expertise qui leur sont dus.",
    'about.story.p2':         "Nous sélectionnons avec rigueur des vins et des spiritueux venus de plusieurs pays, pour des bouteilles qui méritent une place dans vos caves et sur vos tables d'exception.",
    'about.story.p3':         "Nous servons une clientèle exigeante à Lomé et partout en Afrique, amateurs comme professionnels du vin.",
    'about.mission.title':    'Notre Mission',
    'about.mission.desc':     "Démocratiser l'accès aux grands vins et spiritueux d'exception en Afrique, en proposant une sélection pointue, un service irréprochable et une expertise authentique.",
    'about.vision.title':     'Notre Vision',
    'about.vision.desc':      "Devenir la maison de référence du vin de luxe en Afrique subsaharienne, et faire rayonner la culture du vin auprès des nouvelles générations africaines.",
    'about.values.title':     'Nos Valeurs',
    'about.values.desc':      "Excellence, authenticité, intégrité et passion guident chacune de nos décisions, du choix d'un millésime à la relation avec nos clients.",
    'about.team.pretitle':    "L'expertise humaine",
    'about.team.title':       'Notre équipe',
    'about.team.m1.name':     'Tintin Kokou BARBOZA',
    'about.team.m1.role':     'Fondateur & Directeur général',
    'about.team.m1.bio':      "Fondateur et directeur général d'Africa Wine Food, à Lomé.",

    'blog.pretitle':          'Actualités & conseils',
    'blog.title':             'Le Blog',
    'blog.subtitle':          "Découvrez nos articles de fond, guides et conseils rédigés par nos experts sommeliers.",
    'blog.cat.degustation':   'Dégustation',
    'blog.cat.guide':         'Guide',
    'blog.cat.accords':       'Accords',
    'blog.a1.title':          "Les meilleurs Bordeaux 2024 : notre sélection exclusive",
    'blog.a1.excerpt':        "Le millésime 2024 s'annonce historique pour le Bordelais. Découvrez les châteaux qui ont transcendé des conditions climatiques exceptionnelles pour produire des vins d'anthologie...",
    'blog.a2.title':          "Guide complet du whisky single malt pour les connaisseurs",
    'blog.a2.excerpt':        "Du Speyside à l'Islay, des Highlands aux Lowlands, notre guide vous accompagne dans l'univers fascinant du whisky single malt d'exception et de ses subtilités aromatiques...",
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
    'contact.map':                '34 rue Marne, Nyékonakpoè, Lomé, Togo',

    'footer.slogan':        "L'excellence viticole et distillerie, au cœur de l'Afrique.",
    'footer.nav.title':     'Navigation',
    'footer.cat.title':     'Nos produits',
    'footer.contact.title': 'Contact',
    'footer.hours':         'Lun–Ven : 9h–18h · Sam : 10h–18h',
    'footer.legal':         '© {{year}} Africa Wine Food. Tous droits réservés. &nbsp;·&nbsp; <a href="confidentialite.html" style="color:inherit;text-decoration:underline;">Politique de confidentialité</a>',
    'footer.warning':       "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> L'abus d'alcool est dangereux pour la santé. À consommer avec modération. Interdit aux mineurs de moins de 18 ans.",
    'whatsapp.label':       'WhatsApp',

    /* Nouvelles cles multipage */
    'home.preview.pretitle': 'Nos sélections du moment',
    'home.preview.title':    'À la une',
    'home.preview.subtitle': "Un avant-goût de notre catalogue d'exception.",
    'home.blog.all':         'Voir tous les articles',

    'catalogue.cta.text': "Vous recherchez une bouteille en particulier ? Notre équipe est disponible pour vous aider.",
    'catalogue.cta.btn':  'Demander un conseil personnalisé',

    'about.header.subtitle': "Vins et spiritueux d'exception, à Lomé, au Togo.",
    'about.dispenser.pretitle': 'Fabriqué en Finlande',
    'about.dispenser.title': 'Notre distributeur de boissons',
    'about.events.pretitle': 'En images',
    'about.events.title':    'Nos événements',
    'about.mvv.pretitle':    'Ce qui nous guide',
    'about.mvv.title':       'Mission, Vision & Valeurs',
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
    'blog.newsletter.desc':       "Recevez nos conseils, nos nouveautés et nos offres exclusives directement dans votre boite mail.",
    'blog.newsletter.btn':        "S'inscrire",
    'blog.newsletter.success':    "Merci ! Vous êtes inscrit à notre newsletter.",

    'contact.info.hours':         'Horaires',
    'contact.map.pretitle':       'Ou nous trouver',
    'contact.map.title':          'Notre adresse',
    'contact.offices.pretitle':   'Notre implantation',
    'contact.offices.title':      'Notre agence à Lomé',
    'contact.offices.tg.city':    'Lomé',
    'contact.offices.tg.country': "Togo, Siège social",
  },

  en: {
    'nav.home':        'Home',
    'nav.catalogue':   'Catalogue',
    'nav.about':       'About',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Luxury wines, spirits & distillery agency',
    'hero.title':     "The finest wines, spirits & distilleries,<br>at the heart of Africa",
    'hero.subtitle':  "Exclusive selection of grand crus, premium spirits and distilleries, elegantly delivered across Africa.",
    'hero.cta':       'Explore our catalogue',

    'univers.pretitle':  'Our selection',
    'univers.title':     'Our World',
    'univers.subtitle':  "Five universes of viticultural excellence, spirits and exceptional distilleries.",
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

    'univers.c5.title':  'Crémants & Sparkling Wines',
    'univers.c5.desc':   "Crémants from Alsace, Burgundy, Jura and other exceptional sparkling wines, elegant effervescence at accessible prices.",
    'univers.c5.cta':    'Explore →',

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


    'catalogue.pretitle':       'Our selection',
    'catalogue.title':          'Catalogue',
    'catalogue.subtitle':       "Exceptional bottles, selected by our experts for the most refined palates.",
    'catalogue.filter.all':     'All',
    'catalogue.filter.rouge':   'Red Wines',
    'catalogue.filter.blanc':   'White & Rosé',
    'catalogue.filter.champagne': 'Champagnes',
    'catalogue.filter.cremant': 'Crémants',
    'catalogue.filter.spirits': 'Spirits',
    'catalogue.filter.rare':    'Rare Collections',
    'catalogue.devis':          'Request a quote',
    'catalogue.from':           'From',
    'badge.rouge':              'Red Wine',
    'badge.blanc':              'White Wine',
    'badge.champagne':          'Champagne',
    'badge.spirits':            'Whisky',
    'badge.cognac':             'Cognac',
    'badge.rare':               'Rare Collection',

    'modal.details':  'Details',
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
    'catalogue.note': 'Indicative prices in F CFA, excluding VAT.',
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
    'order.delivery.pickup':   'Agency pick-up, Lomé',
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
    'about.story.p1':         "Africa Wine Food is based in Lomé, Togo. Our conviction: Africa deserves access to the world's finest wines, with the service and expertise they deserve.",
    'about.story.p2':         "We rigorously select wines and spirits from several countries, for bottles that deserve a place in your cellars and on your exceptional tables.",
    'about.story.p3':         "We serve a discerning clientele in Lomé and across Africa, wine enthusiasts and professionals alike.",
    'about.mission.title':    'Our Mission',
    'about.mission.desc':     "To democratize access to exceptional fine wines and spirits in Africa, offering a curated selection, impeccable service and genuine expertise.",
    'about.vision.title':     'Our Vision',
    'about.vision.desc':      "To become the reference house for luxury wine in Sub-Saharan Africa, and to spread wine culture among new African generations.",
    'about.values.title':     'Our Values',
    'about.values.desc':      "Excellence, authenticity, integrity and passion guide every decision we make, from choosing a vintage to our relationship with clients.",
    'about.team.pretitle':    'Human expertise',
    'about.team.title':       'Our team',
    'about.team.m1.name':     'Tintin Kokou BARBOZA',
    'about.team.m1.role':     'Founder & CEO',
    'about.team.m1.bio':      "Founder and CEO of Africa Wine Food, based in Lomé.",

    'blog.pretitle':          'News & advice',
    'blog.title':             'The Blog',
    'blog.subtitle':          "Discover our in-depth articles, guides and tips written by our expert sommeliers.",
    'blog.cat.degustation':   'Tasting',
    'blog.cat.guide':         'Guide',
    'blog.cat.accords':       'Pairings',
    'blog.a1.title':          "The best Bordeaux 2024: our exclusive selection",
    'blog.a1.excerpt':        "The 2024 vintage promises to be historic for the Bordeaux region. Discover the châteaux that transcended exceptional climatic conditions to produce remarkable wines...",
    'blog.a2.title':          "Complete guide to single malt whisky for connoisseurs",
    'blog.a2.excerpt':        "From Speyside to Islay, from the Highlands to the Lowlands, our guide takes you through the fascinating world of exceptional single malt whisky and its aromatic subtleties...",
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
    'contact.map':                'Administrative District, Lomé, Togo',

    'footer.slogan':        "The finest wines, spirits & distilleries, at the heart of Africa.",
    'footer.nav.title':     'Navigation',
    'footer.cat.title':     'Our products',
    'footer.contact.title': 'Contact',
    'footer.hours':         'Mon–Fri: 9am–6pm · Sat: 10am–6pm',
    'footer.legal':         '© {{year}} Africa Wine Food. All rights reserved. &nbsp;·&nbsp; <a href="confidentialite.html" style="color:inherit;text-decoration:underline;">Privacy Policy</a>',
    'footer.warning':       "<i class='fa-solid fa-triangle-exclamation' aria-hidden='true'></i> Alcohol abuse is dangerous for your health. Drink responsibly. Sale prohibited to persons under 18.",
    'whatsapp.label':       'WhatsApp',

    /* New multipage keys */
    'home.preview.pretitle': 'Featured selections',
    'home.preview.title':    'Featured',
    'home.preview.subtitle': 'A taste of our exceptional catalogue.',
    'home.blog.all':         'View all articles',

    'catalogue.cta.text': 'Looking for a specific bottle? Our team is available to help you.',
    'catalogue.cta.btn':  'Request personalised advice',

    'about.header.subtitle': "Exceptional wines and spirits, from Lomé, Togo.",
    'about.dispenser.pretitle': 'Made in Finland',
    'about.dispenser.title': 'Our drinks dispenser',
    'about.events.pretitle': 'In pictures',
    'about.events.title':    'Our events',
    'about.mvv.pretitle':    'What drives us',
    'about.mvv.title':       'Mission, Vision & Values',
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
    'contact.offices.pretitle':   'Our location',
    'contact.offices.title':      'Our agency in Lomé',
    'contact.offices.tg.city':    'Lomé',
    'contact.offices.tg.country': "Togo, Head office",
  }
};

/* State */
let currentLang = 'fr';

/* Apply translations */
function applyTranslations(lang) {
  const t = translations[lang];
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      const val = typeof t[key] === 'string' ? t[key].replace('{{year}}', year) : t[key];
      if (key === 'hero.title' || key === 'footer.legal' || key === 'footer.warning') {
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

/* Language Switcher */
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

/* Sticky Navbar */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  if (!navbar) return;
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

/* Hamburger Menu */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;
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

/* Smooth Scroll (cross-browser) */
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

/* Hero Parallax */
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

/* IntersectionObserver Animations */
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
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

/* Testimonials Carousel */
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

  /* Pause when tab is hidden - saves CPU/battery */
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

/* Catalogue Filters */
function applyFilter(filterBtns, cards, filter) {
  filterBtns.forEach(b => b.classList.remove('active'));
  const target = [...filterBtns].find(b => b.dataset.filter === filter) || filterBtns[0];
  target.classList.add('active');
  cards.forEach(card => {
    const show = filter === 'all' || card.dataset.category === filter;
    if (show) {
      card.style.display = '';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      setTimeout(() => { if (card.dataset.category !== filter && filter !== 'all') card.style.display = 'none'; }, 300);
    }
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(filterBtns, cards, btn.dataset.filter));
  });

  /* Lire ?filter= dans l'URL et activer le filtre correspondant */
  const urlFilter = new URLSearchParams(window.location.search).get('filter');
  if (urlFilter && urlFilter !== 'all') {
    applyFilter(filterBtns, cards, urlFilter);
    /* Scroll doux vers la grille produits */
    const grid = document.getElementById('products-grid');
    if (grid) setTimeout(() => grid.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  }
}

/* Blog Category Filters */
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

/* Animated Counters */
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

/* Back to Top */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => smoothScrollTo(0));
}

/* Form Handling */
const WA_NUMBER = '22899072912';
function sendToWhatsApp(text) {
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
}

function initForms() {
  /* Contact form → WhatsApp */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name  = (contactForm.querySelector('#c-name')?.value || '').trim();
      const email = (contactForm.querySelector('#c-email')?.value || '').trim();
      const phone = (contactForm.querySelector('#c-phone')?.value || '').trim();
      const type  = contactForm.querySelector('#c-type')?.value || '';
      const msg   = (contactForm.querySelector('#c-message')?.value || '').trim();
      if (!email || !msg) return;
      const text =
        'Bonjour Africa Wine Food 🍷\n\n' +
        'Nom : ' + (name || '-') + '\n' +
        'Type de demande : ' + (type || '-') + '\n' +
        'Email : ' + email + '\n' +
        'Téléphone : ' + (phone || '-') + '\n\n' +
        'Message :\n' + msg;
      sendToWhatsApp(text);
      formSuccess.hidden = false;
      contactForm.reset();
      setTimeout(() => { formSuccess.hidden = true; }, 5000);
    });
  }

  /* Devis form → WhatsApp */
  const devisForm    = document.getElementById('devis-form');
  const devisSuccess = document.getElementById('devis-success');
  if (devisForm && devisSuccess) {
    const productSelect = document.getElementById('d-product');
    const otherGroup    = document.getElementById('d-product-other-group');
    const otherInput    = document.getElementById('d-product-other');
    if (productSelect && otherGroup) {
      productSelect.addEventListener('change', () => {
        const isOther = productSelect.value === 'autre';
        otherGroup.hidden = !isOther;
        if (otherInput) otherInput.required = isOther;
        if (!isOther && otherInput) otherInput.value = '';
      });
    }
    devisForm.addEventListener('submit', e => {
      e.preventDefault();
      const email    = (devisForm.querySelector('#d-email')?.value || '').trim();
      if (!email) return;
      const product  = (otherInput?.value || productSelect?.value || '-').trim();
      const qty      = devisForm.querySelector('#d-qty')?.value || '1';
      const occasion = devisForm.querySelector('#d-occasion')?.value || '-';
      const text =
        'Bonjour Africa Wine Food 🍷\n\n' +
        'Demande de devis :\n' +
        'Produit : ' + product + '\n' +
        'Quantité : ' + qty + '\n' +
        'Occasion : ' + occasion + '\n' +
        'Email : ' + email;
      sendToWhatsApp(text);
      devisSuccess.hidden = false;
      devisForm.reset();
      if (otherGroup) otherGroup.hidden = true;
      if (otherInput) { otherInput.required = false; otherInput.value = ''; }
      setTimeout(() => { devisSuccess.hidden = true; }, 5000);
    });
  }

  /* Newsletter forms - confirmation uniquement */
  [
    { formId: 'newsletter-form',  successId: 'nl-success' },
    { formId: 'nl-sidebar-form',  successId: null }
  ].forEach(({ formId, successId }) => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const emailEl = form.querySelector('[type="email"]');
      if (!emailEl?.value) return;
      const sc = successId ? document.getElementById(successId) : null;
      if (sc) { sc.hidden = false; setTimeout(() => { sc.hidden = true; }, 5000); }
      const btn = form.querySelector('[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = '✓ Inscrit !';
        setTimeout(() => { btn.textContent = orig; }, 4000);
      }
      form.reset();
    });
  });
}

/* Cart */
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

/* Products Data */
const productsData = [
  {
    id: 'margaux-2018',
    img: 'assets/images/vin-rouge-rafael-cordioli.jpg',
    badgeClass: 'badge-rouge',
    price: '650 €',
    priceXof: 425000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Château Margaux',
      appellation: 'AOC Margaux, Bordeaux, Millésime 2018',
      desc: "Premier Grand Cru Classé de Bordeaux, Château Margaux 2018 est l'expression ultime de l'élégance bordelaise. Ce millésime exceptionnel conjugue puissance et finesse avec une complexité aromatique remarquable.",
      cepage: 'Cabernet Sauvignon 87%, Merlot 8%, Petit Verdot 3%, Cabernet Franc 2%',
      region: 'Médoc, Bordeaux, France',
      service: '17–18 °C',
      garde: '30–40 ans',
      alcohol: '13,5 % vol.',
      tasting: "Robe pourpre profond aux reflets grenat. Nez somptueux de cassis, cerise noire, violette et notes fumées. Bouche ample et soyeuse, tannins racés et veloutés, finale interminable aux accents de graphite et de truffe noire.",
      pairing: "Agneau de lait rôti aux herbes de Provence, filet de bœuf Rossini, carré d'agneau en croûte, fromages affinés à pâte dure (Comté 36 mois)."
    },
    en: {
      badge: 'Red Wine',
      name: 'Château Margaux',
      appellation: 'AOC Margaux, Bordeaux, Vintage 2018',
      desc: "Premier Grand Cru Classé of Bordeaux, Château Margaux 2018 is the ultimate expression of Bordeaux elegance. This exceptional vintage combines power and finesse with remarkable aromatic complexity.",
      cepage: 'Cabernet Sauvignon 87%, Merlot 8%, Petit Verdot 3%, Cabernet Franc 2%',
      region: 'Médoc, Bordeaux, France',
      service: '17–18 °C',
      garde: '30–40 years',
      alcohol: '13.5% vol.',
      tasting: "Deep purple robe with garnet highlights. Sumptuous nose of blackcurrant, black cherry, violet and smoky notes. Ample and silky on the palate, refined and velvety tannins, an interminable finish with graphite and black truffle accents.",
      pairing: "Herb-roasted milk lamb, beef fillet Rossini, rack of lamb en croûte, aged hard cheeses (36-month Comté)."
    }
  },
  {
    id: 'opus-one-2019',
    img: 'assets/images/vin-rouge-maison-castel-cabernet.jpg',
    badgeClass: 'badge-rouge',
    price: '380 €',
    priceXof: 249000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Opus One',
      appellation: 'Napa Valley, Californie, Millésime 2019',
      desc: "Fruit de la collaboration légendaire entre Robert Mondavi et Baron Philippe de Rothschild, Opus One 2019 est l'ambassadeur du Nouveau Monde. Une cuvée d'assemblage d'une précision et d'une élégance remarquables.",
      cepage: 'Cabernet Sauvignon 76%, Merlot 12%, Cabernet Franc 6%, Petit Verdot 4%, Malbec 2%',
      region: 'Napa Valley, Californie, États-Unis',
      service: '17–18 °C',
      garde: '20–30 ans',
      alcohol: '14,5 % vol.',
      tasting: "Couleur rubis sombre et intense. Bouquet envoûtant de mûre, cassis, chocolat noir et cèdre. Palais généreux et structuré, belle fraîcheur en milieu de bouche, tanins mûrs et fondus, finale épicée et persistante.",
      pairing: "Côte de bœuf grillée, magret de canard aux cerises noires, côtelettes d'agneau au romarin, gratin dauphinois aux truffes."
    },
    en: {
      badge: 'Red Wine',
      name: 'Opus One',
      appellation: 'Napa Valley, California, Vintage 2019',
      desc: "Born of the legendary collaboration between Robert Mondavi and Baron Philippe de Rothschild, Opus One 2019 is the ambassador of the New World, a blend of remarkable precision and elegance.",
      cepage: 'Cabernet Sauvignon 76%, Merlot 12%, Cabernet Franc 6%, Petit Verdot 4%, Malbec 2%',
      region: 'Napa Valley, California, USA',
      service: '17–18 °C',
      garde: '20–30 years',
      alcohol: '14.5% vol.',
      tasting: "Deep, intense ruby colour. Enchanting bouquet of blackberry, blackcurrant, dark chocolate and cedar. Generous and structured palate, lovely mid-palate freshness, ripe and melting tannins, spiced and persistent finish.",
      pairing: "Grilled prime rib, duck breast with black cherries, rosemary lamb chops, truffle gratin dauphinois."
    }
  },
  {
    id: 'dom-perignon-2015',
    img: 'assets/images/champagne-bottle.jpg',
    badgeClass: 'badge-champagne',
    price: '220 €',
    priceXof: 144000,
    fr: {
      badge: 'Champagne',
      name: 'Dom Pérignon Vintage',
      appellation: 'Champagne AOC, Millésime 2015',
      desc: "Dom Pérignon Vintage 2015 incarne la dualité entre l'ardeur solaire d'une année chaude et la maîtrise absolue de la maison Moët & Chandon. Un champagne d'une intensité et d'une précision rares.",
      cepage: 'Chardonnay 53%, Pinot Noir 47%',
      region: 'Champagne, France',
      service: '9–11 °C',
      garde: '20–30 ans',
      alcohol: '12,5 % vol.',
      tasting: "Robe dorée aux fines bulles persistantes. Nez complexe alliant agrumes confits, fleurs blanches et notes briochées. Bouche ample, tendue, avec une acidité cristalline qui soutient une matière généreuse. Finale longue sur le zeste de citron et l'amande.",
      pairing: "Homard rôti au beurre, Saint-Jacques en coquille, caviar Osciètre, risotto à la truffe blanche, sushis premium."
    },
    en: {
      badge: 'Champagne',
      name: 'Dom Pérignon Vintage',
      appellation: 'Champagne AOC, Vintage 2015',
      desc: "Dom Pérignon Vintage 2015 embodies the duality between the solar warmth of a hot year and the absolute mastery of Moët & Chandon. A champagne of rare intensity and precision.",
      cepage: 'Chardonnay 53%, Pinot Noir 47%',
      region: 'Champagne, France',
      service: '9–11 °C',
      garde: '20–30 years',
      alcohol: '12.5% vol.',
      tasting: "Golden robe with fine, persistent bubbles. Complex nose combining candied citrus, white flowers and brioche notes. Ample, tense palate, with crystalline acidity supporting generous substance. Long finish on lemon zest and almond.",
      pairing: "Butter-roasted lobster, scallop in shell, Oscietra caviar, white truffle risotto, premium sushi."
    }
  },
  {
    id: 'cristal-2016',
    img: 'assets/images/vignoble-campagne.jpg',
    badgeClass: 'badge-champagne',
    price: '350 €',
    priceXof: 230000,
    fr: {
      badge: 'Champagne',
      name: 'Cristal Roederer',
      appellation: 'Champagne AOC, Millésime 2016',
      desc: "Né en 1876 pour le Tsar Alexandre II, Cristal Roederer 2016 est le champagne de prestige absolu. Ce millésime frais et élégant illustre le style inimitable de la Maison Roederer, fondé sur la précision et la minéralité.",
      cepage: 'Pinot Noir 60%, Chardonnay 40%',
      region: 'Champagne, France',
      service: '8–10 °C',
      garde: '15–25 ans',
      alcohol: '12 % vol.',
      tasting: "Robe pâle, presque platine. Effervescence fine et abondante. Nez délicat de pêche blanche, pamplemousse, craie et notes de pain grillé. Bouche droite, précise, avec un fil de minéralité qui court de l'attaque à la finale.",
      pairing: "Crabe royal, homard bleu, turbot rôti, langoustines royales, coquilles Saint-Jacques au champagne."
    },
    en: {
      badge: 'Champagne',
      name: 'Cristal Roederer',
      appellation: 'Champagne AOC, Vintage 2016',
      desc: "Created in 1876 for Tsar Alexander II, Cristal Roederer 2016 is the champagne of absolute prestige. This fresh and elegant vintage illustrates the inimitable Roederer style, built on precision and minerality.",
      cepage: 'Pinot Noir 60%, Chardonnay 40%',
      region: 'Champagne, France',
      service: '8–10 °C',
      garde: '15–25 years',
      alcohol: '12% vol.',
      tasting: "Pale, almost platinum robe. Fine and abundant effervescence. Delicate nose of white peach, grapefruit, chalk and toasted bread notes. Straight, precise palate with a thread of minerality running from start to finish.",
      pairing: "King crab, blue lobster, roasted turbot, royal langoustines, scallops in champagne."
    }
  },
  {
    id: 'puligny-2020',
    img: 'assets/images/oenologue-machine.jpg',
    badgeClass: 'badge-blanc',
    price: '180 €',
    priceXof: 118000,
    fr: {
      badge: 'Vin Blanc',
      name: 'Puligny-Montrachet 1er Cru',
      appellation: 'AOC Bourgogne, Millésime 2020',
      desc: "Érigé en symbole du grand vin blanc de Bourgogne, ce Puligny-Montrachet Premier Cru 2020 illustre la quintessence du Chardonnay en Côte de Beaune. Élégance, minéralité et longueur : une trinité accomplie.",
      cepage: 'Chardonnay 100%',
      region: 'Côte de Beaune, Bourgogne, France',
      service: '12–14 °C',
      garde: '10–15 ans',
      alcohol: '13 % vol.',
      tasting: "Robe jaune dorée aux reflets verts. Nez expressif de fleurs d'acacia, agrumes, noisette fraîche et silex humide. Bouche riche et tendue à la fois, avec une minéralité calcaire caractéristique et une longue finale sur la noisette grillée et le miel d'acacia.",
      pairing: "Saint-Jacques rôties, sole meunière, homard à la crème, foie gras poêlé, fromages de chèvre affinés."
    },
    en: {
      badge: 'White Wine',
      name: 'Puligny-Montrachet 1er Cru',
      appellation: 'AOC Burgundy, Vintage 2020',
      desc: "Erected as a symbol of great white Burgundy, this Puligny-Montrachet Premier Cru 2020 illustrates the quintessence of Chardonnay on the Côte de Beaune. Elegance, minerality and length: a perfect trinity.",
      cepage: 'Chardonnay 100%',
      region: 'Côte de Beaune, Burgundy, France',
      service: '12–14 °C',
      garde: '10–15 years',
      alcohol: '13% vol.',
      tasting: "Golden yellow robe with green highlights. Expressive nose of acacia flowers, citrus, fresh hazelnut and wet flint. Rich yet tense palate, with characteristic limestone minerality and a long finish on roasted hazelnut and acacia honey.",
      pairing: "Seared scallops, sole meunière, lobster with cream, pan-fried foie gras, aged goat's cheese."
    }
  },
  {
    id: 'macallan-25',
    img: 'assets/images/spiritueux-chivas-royal-salute-21.jpg',
    badgeClass: 'badge-spirits',
    price: '1 200 €',
    priceXof: 787000,
    fr: {
      badge: 'Whisky Single Malt',
      name: 'The Macallan 25 Years',
      appellation: 'Speyside, Scotland, Single Malt',
      desc: "Vieilli 25 ans dans des fûts de chêne sherry d'Oloroso espagnol, The Macallan 25 ans est l'un des whiskies les plus convoités au monde. Une profondeur aromatique sans égale, fruit d'un savoir-faire centenaire.",
      cepage: 'Orge maltée, Single Malt',
      region: 'Speyside, Écosse, Royaume-Uni',
      service: '18–20 °C (sans glaçons)',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '43 % vol.',
      tasting: "Couleur ambre profonde, reflets acajou. Nez envoûtant de fruits secs (raisin, figue), toffee, épices douces (cannelle, muscade) et chêne toasté. Bouche riche, veloutée, avec des notes de chocolat noir, orange confite et cuir. Finale chaude et interminable.",
      pairing: "Cigare Romeo y Julieta, chocolat noir 85%, foie gras au torchon, raisins secs, tartes aux noix. Excellent en digestif après un repas d'exception."
    },
    en: {
      badge: 'Single Malt Whisky',
      name: 'The Macallan 25 Years',
      appellation: 'Speyside, Scotland, Single Malt',
      desc: "Aged 25 years in Spanish Oloroso sherry oak casks, The Macallan 25 Year Old is one of the most coveted whiskies in the world. Unparalleled aromatic depth, born of a century-long craft.",
      cepage: 'Malted barley, Single Malt',
      region: 'Speyside, Scotland, United Kingdom',
      service: '18–20 °C (no ice)',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '43% vol.',
      tasting: "Deep amber colour, mahogany highlights. Enchanting nose of dried fruits (raisin, fig), toffee, warm spices (cinnamon, nutmeg) and toasted oak. Rich, velvety palate with notes of dark chocolate, candied orange and leather. Warm and never-ending finish.",
      pairing: "Romeo y Julieta cigar, 85% dark chocolate, foie gras au torchon, raisins, walnut tarts. Excellent as a digestif after an exceptional meal."
    }
  },
  {
    id: 'hennessy-paradis',
    img: 'assets/images/spiritueux-hennessy-cognac.jpg',
    badgeClass: 'badge-spirits',
    price: '2 500 €',
    priceXof: 1640000,
    fr: {
      badge: 'Cognac',
      name: 'Hennessy Paradis Impérial',
      appellation: 'Cognac AOC, Grande Champagne',
      desc: "Hennessy Paradis Impérial est l'expression suprême du savoir-faire Hennessy. Assemblage de très vieilles eaux-de-vie sélectionnées parmi les plus précieuses réserves centenaires, il représente l'apogée de l'art du cognac.",
      cepage: 'Ugni Blanc, Grande Champagne',
      region: 'Grande Champagne, Cognac, France',
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
      cepage: 'Ugni Blanc, Grande Champagne',
      region: 'Grande Champagne, Cognac, France',
      service: '18–20 °C',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '40% vol.',
      tasting: "Amber robe with golden highlights of rare clarity. Nose of extreme delicacy: jasmine, orange blossom, wild flower honey, oriental spices and Bourbon vanilla. Airy and opulent palate, with an infinite finish of extraordinary length.",
      pairing: "White chocolate with Tahitian vanilla, honey and almond pastries, Cohiba cigars, or simply in quiet contemplation."
    }
  },
  {
    id: 'krug-grande-cuvee',
    img: 'assets/images/champagne-bottle.jpg',
    badgeClass: 'badge-champagne',
    price: '280 €',
    priceXof: 184000,
    fr: {
      badge: 'Champagne',
      name: 'Krug Grande Cuvée',
      appellation: 'Champagne AOC, 170ème Édition',
      desc: "Krug Grande Cuvée est bien plus qu'un champagne : c'est une philosophie. Assemblage de plus de 120 vins provenant de 10 années différentes et de 3 cépages champenois, chaque édition est une création unique qui exprime la vision de la maison Krug.",
      cepage: 'Pinot Noir 47%, Chardonnay 35%, Meunier 18%',
      region: 'Champagne, France',
      service: '10–12 °C',
      garde: '10–20 ans',
      alcohol: '12 % vol.',
      tasting: "Robe vieil or intense. Effervescence soutenue et persistante. Nez d'une complexité extraordinaire : fruits à coque (noisette, amande), fleurs séchées, épices douces, notes toastées et zeste de citron confit. Bouche crémeuse, volumineuse, d'une richesse somptueuse.",
      pairing: "Homard grillé, risotto aux champignons de saison, langouste thermidor, fromages à pâte molle (Brie de Meaux, Époisses), crustacés en général."
    },
    en: {
      badge: 'Champagne',
      name: 'Krug Grande Cuvée',
      appellation: 'Champagne AOC, 170th Edition',
      desc: "Krug Grande Cuvée is far more than a champagne: it is a philosophy. A blend of over 120 wines from 10 different years and 3 Champagne grape varieties, each edition is a unique creation expressing the Krug house's vision.",
      cepage: 'Pinot Noir 47%, Chardonnay 35%, Meunier 18%',
      region: 'Champagne, France',
      service: '10–12 °C',
      garde: '10–20 years',
      alcohol: '12% vol.',
      tasting: "Intense old gold robe. Sustained and persistent effervescence. Nose of extraordinary complexity: nuts (hazelnut, almond), dried flowers, soft spices, toasted notes and candied lemon zest. Creamy, voluminous palate of sumptuous richness.",
      pairing: "Grilled lobster, seasonal mushroom risotto, thermidor crayfish, soft cheeses (Brie de Meaux, Époisses), shellfish in general."
    }
  },
  {
    id: 'petrus-2018',
    img: 'assets/images/vin-rouge-rioja-cosme-palacio.jpg',
    badgeClass: 'badge-rouge',
    price: '3 500 €',
    priceXof: 2296000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Pétrus',
      appellation: 'AOC Pomerol, Bordeaux, Millésime 2018',
      desc: "Produit sur à peine 11,4 hectares d'argile bleue unique au monde, Pétrus 2018 est le mythe absolu du vin rouge. Issu presque exclusivement du cépage Merlot, ce millésime exceptionnel défie toutes les lois du vin.",
      cepage: 'Merlot 95%, Cabernet Franc 5%',
      region: 'Pomerol, Bordeaux, France',
      service: '17–18 °C',
      garde: '40–50 ans',
      alcohol: '14 % vol.',
      tasting: "Robe pourpre d'une densité presque opaque. Nez mythique : truffe noire, cerise à l'eau-de-vie, chocolat amer, violette et menthe fraîche. Bouche d'une richesse et d'une onctuosité incomparables, tannins de velours, finale éternelle sur la truffe et le cacao.",
      pairing: "Bœuf en croûte sauce Périgueux, agneau de lait truffé, pigeon rôti aux cèpes, vieux fromages (Pélardon, Saint-Nectaire affiné)."
    },
    en: {
      badge: 'Red Wine',
      name: 'Pétrus',
      appellation: 'AOC Pomerol, Bordeaux, Vintage 2018',
      desc: "Produced on just 11.4 hectares of unique blue clay, Pétrus 2018 is the absolute myth of red wine. Derived almost entirely from the Merlot grape, this exceptional vintage defies all the laws of wine.",
      cepage: 'Merlot 95%, Cabernet Franc 5%',
      region: 'Pomerol, Bordeaux, France',
      service: '17–18 °C',
      garde: '40–50 years',
      alcohol: '14% vol.',
      tasting: "Purple robe of almost opaque density. Mythic nose: black truffle, kirsch cherry, bitter chocolate, violet and fresh mint. Palate of incomparable richness and unctuousness, velvet tannins, eternal finish on truffle and cocoa.",
      pairing: "Beef wellington with Périgueux sauce, truffle milk lamb, pigeon roasted with porcini mushrooms, aged cheeses (Pélardon, aged Saint-Nectaire)."
    }
  },
  {
    id: 'sancerre-2022',
    img: 'assets/images/champagne-bottle.jpg',
    badgeClass: 'badge-blanc',
    price: '75 €',
    priceXof: 49000,
    fr: {
      badge: 'Vin Blanc',
      name: 'Sancerre Henri Bourgeois',
      appellation: 'AOC Sancerre, Loire, Millésime 2022',
      desc: "Henri Bourgeois, figure emblématique du Sancerre depuis neuf générations, signe avec ce 2022 un vin blanc d'une pureté cristalline. L'expression parfaite du Sauvignon Blanc dans la vallée de la Loire.",
      cepage: 'Sauvignon Blanc 100%',
      region: 'Sancerre, Vallée de la Loire, France',
      service: '10–12 °C',
      garde: '5–8 ans',
      alcohol: '13 % vol.',
      tasting: "Robe jaune pâle aux reflets argentés. Nez éclatant de cassis bourgeons, citron vert, pamplemousse et herbe fraîche sur fond de silex. Bouche vive et minérale, attaque franche, bonne tension acide et finale sur les agrumes et la craie blanche.",
      pairing: "Chèvre frais (Crottin de Chavignol AOP), plateau de fruits de mer, saumon cru en gravlax, asperges vertes, tartare de dorade royale."
    },
    en: {
      badge: 'White Wine',
      name: 'Sancerre Henri Bourgeois',
      appellation: 'AOC Sancerre, Loire, Vintage 2022',
      desc: "Henri Bourgeois, an emblematic figure of Sancerre for nine generations, signs with this 2022 a white wine of crystalline purity. The perfect expression of Sauvignon Blanc in the Loire Valley.",
      cepage: 'Sauvignon Blanc 100%',
      region: 'Sancerre, Loire Valley, France',
      service: '10–12 °C',
      garde: '5–8 years',
      alcohol: '13% vol.',
      tasting: "Pale yellow robe with silver highlights. Dazzling nose of blackcurrant buds, lime, grapefruit and fresh grass on a flint background. Lively and mineral palate, frank attack, good acid tension and finish on citrus and white chalk.",
      pairing: "Fresh goat's cheese (Crottin de Chavignol AOP), seafood platter, gravlax salmon, green asparagus, sea bream tartare."
    }
  },
  {
    id: 'romanee-conti-2015',
    img: 'assets/images/collection-rare-decanteur-cristal-cerf.jpg',
    badgeClass: 'badge-rare',
    price: '18 000 €',
    priceXof: 11807000,
    fr: {
      badge: 'Collection Rare',
      name: 'Romanée-Conti DRC',
      appellation: 'AOC Grand Cru Bourgogne, Millésime 2015',
      desc: "La Romanée-Conti est le Graal absolu des amateurs de vin. Issu d'un monopole de 1,8 hectare classé Grand Cru depuis le XVIe siècle, ce millésime 2015, solaire et d'une concentration légendaire, est peut-être le plus grand vin rouge jamais produit.",
      cepage: 'Pinot Noir 100%',
      region: 'Vosne-Romanée, Bourgogne, France',
      service: '16–17 °C',
      garde: '50+ ans',
      alcohol: '13 % vol.',
      tasting: "Robe rubis d'une transparence et d'une profondeur sublimes. Nez cosmique : cerise fraîche, rose séchée, épices de Noël, encens, vieux cuir et un terroir incomparable qui s'exprime dans toute sa noblesse. Bouche transcendantale, tannins de soie, longueur infinie.",
      pairing: "Par respect pour sa singularité, la Romanée-Conti se déguste de préférence seule, en méditation. Si vous l'accordez à un mets : gibier noble (bécasse, faisan truffé), ou jamais un simple vieux fromage de Bourgogne."
    },
    en: {
      badge: 'Rare Collection',
      name: 'Romanée-Conti DRC',
      appellation: 'AOC Grand Cru Burgundy, Vintage 2015',
      desc: "Romanée-Conti is the absolute Holy Grail for wine lovers. From a 1.8-hectare monopole classified as Grand Cru since the 16th century, this 2015 vintage, sunny and of legendary concentration, may be the greatest red wine ever produced.",
      cepage: 'Pinot Noir 100%',
      region: 'Vosne-Romanée, Burgundy, France',
      service: '16–17 °C',
      garde: '50+ years',
      alcohol: '13% vol.',
      tasting: "Ruby robe of sublime transparency and depth. Cosmic nose: fresh cherry, dried rose, Christmas spices, incense, old leather and an incomparable terroir expressing itself in full nobility. Transcendental palate, silk tannins, infinite length.",
      pairing: "Out of respect for its singularity, Romanée-Conti is best enjoyed alone, in meditation. If paired with food: noble game (woodcock, truffle pheasant), or perhaps just an old Burgundy cheese."
    }
  },
  /* nouveaux produits */
  {
    id: 'provence-rose-2023',
    img: 'assets/images/oenologue-machine.jpg',
    badgeClass: 'badge-rose',
    price: '65 €',
    priceXof: 42000,
    fr: {
      badge: 'Vin Rosé',
      name: 'Château d\'Esclans Whispering Angel',
      appellation: 'AOC Côtes de Provence, Millésime 2023',
      desc: "Whispering Angel est devenu le rosé de référence mondial, symbole du lifestyle méditerranéen de luxe. Ce 2023 incarne l'élégance provençale dans toute sa splendeur : pâle, délicat et d'une fraîcheur incomparable.",
      cepage: 'Grenache 45%, Cinsault 35%, Vermentino 20%',
      region: 'Côtes de Provence, France',
      service: '8–10 °C',
      garde: '3–5 ans',
      alcohol: '13 % vol.',
      tasting: "Robe saumon très pâle, quasi platine. Nez délicat de fraise des bois, pêche blanche, fleurs de garrigue et agrumes frais. Bouche soyeuse et légère, fraîcheur cristalline, finale saline et élégante.",
      pairing: "Salade niçoise, poulpe grillé, ceviche de daurade, tapas méditerranéens, fromage de brebis frais."
    },
    en: {
      badge: 'Rosé Wine',
      name: 'Château d\'Esclans Whispering Angel',
      appellation: 'AOC Côtes de Provence, Vintage 2023',
      desc: "Whispering Angel has become the world reference rosé, symbol of the luxurious Mediterranean lifestyle. This 2023 embodies Provençal elegance in all its splendour: pale, delicate and incomparably fresh.",
      cepage: 'Grenache 45%, Cinsault 35%, Vermentino 20%',
      region: 'Côtes de Provence, France',
      service: '8–10 °C',
      garde: '3–5 years',
      alcohol: '13% vol.',
      tasting: "Very pale salmon robe, almost platinum. Delicate nose of wild strawberry, white peach, garrigue flowers and fresh citrus. Silky and light palate, crystalline freshness, saline and elegant finish.",
      pairing: "Niçoise salad, grilled octopus, sea bream ceviche, Mediterranean tapas, fresh sheep's cheese."
    }
  },
  {
    id: 'barolo-2017',
    img: 'assets/images/vin-rouge-cabernet-jacobs-creek.jpg',
    badgeClass: 'badge-rouge',
    price: '195 €',
    priceXof: 128000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Barolo Brunate, Ceretto',
      appellation: 'DOCG Barolo, Piémont, Millésime 2017',
      desc: "Le Barolo est le \"Roi des vins italiens\". Ceretto signe avec ce Brunate 2017 un vin d'une noblesse absolue, issu de l'un des meilleurs crus du Piémont. Puissant, complexe, fait pour traverser les décennies.",
      cepage: 'Nebbiolo 100%',
      region: 'La Morra, Piémont, Italie',
      service: '18–20 °C',
      garde: '20–30 ans',
      alcohol: '14,5 % vol.',
      tasting: "Robe grenat aux reflets orangés caractéristiques du Nebbiolo. Nez profond de rose séchée, goudron, cerise à l'eau-de-vie, réglisse et tabac. Bouche ample, structurée, tannins racés mais soyeux, acidité fraîche, finale interminable sur la violette et l'épice.",
      pairing: "Truffes blanches d'Alba, risotto au Barolo, côte de bœuf piémontaise, fonduta au Castelmagno, vieux parmesan."
    },
    en: {
      badge: 'Red Wine',
      name: 'Barolo Brunate, Ceretto',
      appellation: 'DOCG Barolo, Piedmont, Vintage 2017',
      desc: "Barolo is the 'King of Italian wines'. Ceretto signs this Brunate 2017 as a wine of absolute nobility, from one of Piedmont's finest crus. Powerful, complex, built to last decades.",
      cepage: 'Nebbiolo 100%',
      region: 'La Morra, Piedmont, Italy',
      service: '18–20 °C',
      garde: '20–30 years',
      alcohol: '14.5% vol.',
      tasting: "Garnet robe with the characteristic orange highlights of Nebbiolo. Deep nose of dried rose, tar, kirsch cherry, liquorice and tobacco. Ample, structured palate, refined but silky tannins, fresh acidity, interminable finish on violet and spice.",
      pairing: "Alba white truffles, Barolo risotto, Piedmontese beef rib, Castelmagno fonduta, aged Parmesan."
    }
  },
  {
    id: 'taittinger-prestige',
    img: 'assets/images/champagne-bottle.jpg',
    badgeClass: 'badge-champagne',
    price: '65 €',
    priceXof: 43000,
    fr: {
      badge: 'Champagne',
      name: 'Taittinger Comtes de Champagne',
      appellation: 'Champagne AOC Blanc de Blancs, Millésime 2013',
      desc: "Le Taittinger Comtes de Champagne est l'un des grands Blancs de Blancs de Champagne. Ce 2013, issu exclusivement de Chardonnay Grand Cru de la Côte des Blancs, est d'une élégance et d'une finesse absolues.",
      cepage: 'Chardonnay 100%',
      region: 'Champagne, Côte des Blancs, France',
      service: '8–10 °C',
      garde: '15–20 ans',
      alcohol: '12,5 % vol.',
      tasting: "Robe or pâle aux reflets verts. Bulles fines et persistantes. Nez aérien de fleur de citronnier, craie, poire williams et notes briochées raffinées. Bouche d'une pureté cristalline, tension admirable, finale minérale et longue.",
      pairing: "Huîtres fines de claires, caviar Beluga, Saint-Jacques crues, carpaccio de langoustines, tartare de turbot."
    },
    en: {
      badge: 'Champagne',
      name: 'Taittinger Comtes de Champagne',
      appellation: 'Champagne AOC Blanc de Blancs, Vintage 2013',
      desc: "Taittinger Comtes de Champagne is one of the great Blanc de Blancs champagnes. This 2013, made exclusively from Grand Cru Chardonnay from the Côte des Blancs, is of absolute elegance and finesse.",
      cepage: 'Chardonnay 100%',
      region: 'Champagne, Côte des Blancs, France',
      service: '8–10 °C',
      garde: '15–20 years',
      alcohol: '12.5% vol.',
      tasting: "Pale gold robe with green highlights. Fine, persistent bubbles. Airy nose of lemon blossom, chalk, Williams pear and refined brioche notes. Palate of crystalline purity, admirable tension, mineral and long finish.",
      pairing: "Fine de claires oysters, Beluga caviar, raw scallops, langoustine carpaccio, turbot tartare."
    }
  },
  {
    id: 'cremant-alsace-dopff',
    img: 'assets/images/vignoble-campagne.jpg',
    badgeClass: 'badge-cremant',
    price: '38 €',
    priceXof: 24900,
    fr: {
      badge: 'Crémant',
      name: 'Crémant d\'Alsace Brut, Dopff au Moulin',
      appellation: 'AOC Crémant d\'Alsace, Méthode Traditionnelle',
      desc: "Dopff au Moulin, pionnier du Crémant d'Alsace depuis 1900, propose avec ce Brut un effervescent d'une élégance et d'une fraîcheur remarquables. L'alliance parfaite entre la finesse alsacienne et la tradition champenoise.",
      cepage: 'Pinot Blanc 80%, Auxerrois 20%',
      region: 'Alsace, France',
      service: '7–9 °C',
      garde: '3–5 ans',
      alcohol: '12 % vol.',
      tasting: "Robe dorée aux fines bulles persistantes. Nez frais et élégant de pomme verte, poire, fleur blanche et légère note briochée. Bouche vive, crémeuse, belle fraîcheur, finale nette et agréable sur les agrumes.",
      pairing: "Flammekueche, choucroute de la mer, tarte flambée aux champignons, quiche lorraine, apéritif dînatoire."
    },
    en: {
      badge: 'Crémant',
      name: 'Crémant d\'Alsace Brut, Dopff au Moulin',
      appellation: 'AOC Crémant d\'Alsace, Traditional Method',
      desc: "Dopff au Moulin, pioneer of Crémant d'Alsace since 1900, presents this Brut as a sparkling of remarkable elegance and freshness. The perfect alliance between Alsatian finesse and Champagne tradition.",
      cepage: 'Pinot Blanc 80%, Auxerrois 20%',
      region: 'Alsace, France',
      service: '7–9 °C',
      garde: '3–5 years',
      alcohol: '12% vol.',
      tasting: "Golden robe with fine, persistent bubbles. Fresh and elegant nose of green apple, pear, white flower and a light brioche note. Lively, creamy palate, lovely freshness, clean and pleasant finish on citrus.",
      pairing: "Flammekueche, sea choucroute, mushroom tarte flambée, quiche Lorraine, aperitif platter."
    }
  },
  {
    id: 'rhum-barbancourt-15',
    img: 'assets/images/spiritueux-rhum-black-mamba.jpg',
    badgeClass: 'badge-spirits',
    price: '95 €',
    priceXof: 62000,
    fr: {
      badge: 'Rhum',
      name: 'Rhum Barbancourt Réserve Spéciale 15 ans',
      appellation: 'Rhum Agricole Haïtien, Vieilli 15 ans',
      desc: "Barbancourt Réserve Spéciale 15 ans est le fleuron de la distillerie haïtienne fondée en 1862. Vieilli en fûts de chêne du Limousin, ce rhum d'exception est une référence absolue en Afrique et dans les Caraïbes.",
      cepage: 'Canne à sucre, Rhum Agricole',
      region: 'Haïti, Caraïbes',
      service: '18–20 °C (pur ou avec un glaçon)',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '43 % vol.',
      tasting: "Robe ambrée aux reflets dorés. Nez complexe de vanille, caramel au beurre salé, fruits tropicaux mûrs (mangue, papaye), cannelle et chêne élégant. Bouche ronde et veloutée, belle longueur, finale chaleureuse et épicée.",
      pairing: "Cigares cubains, chocolat au lait, gâteaux créoles, ananas rôti au sucre de canne, cocktails premium (Daiquiri, Rhum Sour)."
    },
    en: {
      badge: 'Rum',
      name: 'Barbancourt Reserve Spéciale 15 Years',
      appellation: 'Haitian Agricultural Rum, Aged 15 years',
      desc: "Barbancourt Réserve Spéciale 15 Year Old is the flagship of the Haitian distillery founded in 1862. Aged in Limousin oak casks, this exceptional rum is an absolute reference across Africa and the Caribbean.",
      cepage: 'Sugar cane, Agricultural Rum',
      region: 'Haiti, Caribbean',
      service: '18–20 °C (neat or with one ice cube)',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '43% vol.',
      tasting: "Amber robe with golden highlights. Complex nose of vanilla, salted butter caramel, ripe tropical fruits (mango, papaya), cinnamon and elegant oak. Round and velvety palate, lovely length, warm and spiced finish.",
      pairing: "Cuban cigars, milk chocolate, Creole pastries, sugar cane caramelised pineapple, premium cocktails (Daiquiri, Rum Sour)."
    }
  },
  {
    id: 'armagnac-darroze-1990',
    img: 'assets/images/spiritueux-bourbon-jr-ewing.jpg',
    badgeClass: 'badge-spirits',
    price: '320 €',
    priceXof: 210000,
    fr: {
      badge: 'Armagnac',
      name: 'Armagnac Darroze 1990',
      appellation: 'AOC Bas-Armagnac, Millésime 1990, 33 ans',
      desc: "Francis Darroze sélectionne les meilleures propriétés du Bas-Armagnac depuis 1974. Ce millésime 1990, vieilli plus de 33 ans en fûts de chêne noir de Gascogne, est une pièce de collection d'une complexité rare.",
      cepage: 'Baco 22A, Ugni Blanc',
      region: 'Bas-Armagnac, Gascogne, France',
      service: '18–20 °C',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '47 % vol.',
      tasting: "Robe acajou profond, reflets ambrés. Nez d'une profondeur extraordinaire : pruneau d'Agen, cire d'abeille, vieux tabac, cuir fin, figue sèche et une touche de rancio magnifique. Bouche ample, grasse, finale d'une persistance exceptionnelle.",
      pairing: "Foie gras des Landes, magret séché, pruneaux à l'Armagnac, fromage Roquefort, desserts à base de pruneaux."
    },
    en: {
      badge: 'Armagnac',
      name: 'Armagnac Darroze 1990',
      appellation: 'AOC Bas-Armagnac, Vintage 1990, 33 years',
      desc: "Francis Darroze has been selecting the finest estates in Bas-Armagnac since 1974. This 1990 vintage, aged over 33 years in Gascon black oak casks, is a collector's piece of rare complexity.",
      cepage: 'Baco 22A, Ugni Blanc',
      region: 'Bas-Armagnac, Gascogne, France',
      service: '18–20 °C',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '47% vol.',
      tasting: "Deep mahogany robe, amber highlights. Nose of extraordinary depth: Agen prune, beeswax, old tobacco, fine leather, dried fig and a magnificent rancio note. Ample, rich palate, with a finish of exceptional persistence.",
      pairing: "Landes foie gras, dried duck breast, prunes in Armagnac, Roquefort cheese, prune-based desserts."
    }
  },
  {
    id: 'malbec-catena-zapata-2020',
    img: 'assets/images/vin-rouge-bordeaux-grand-reserve.jpg',
    badgeClass: 'badge-rouge',
    price: '110 €',
    priceXof: 72000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Adrianna Vineyard Malbec, Catena Zapata',
      appellation: 'Mendoza, Argentine, Millésime 2020',
      desc: "Issu du vignoble Adrianna planté à 1 500 m d'altitude dans la Cordillère des Andes, ce Malbec de Catena Zapata est considéré comme l'un des plus grands vins d'Amérique du Sud. Concentration, fraîcheur et terroir d'exception.",
      cepage: 'Malbec 100%',
      region: 'Mendoza, Patagonie, Argentine',
      service: '17–18 °C',
      garde: '15–20 ans',
      alcohol: '14 % vol.',
      tasting: "Robe pourpre intense et profonde. Nez éclatant de violette, mûre, framboise noire, cannelle et notes chocolatées. Bouche opulente et fraîche à la fois, tannins veloutés, acidité andine caractéristique, finale florale et épicée.",
      pairing: "Asado argentin (parilla), côte de bœuf grillée, empanadas de viande, fromages affinés (Manchego, Pecorino), chorizo ibérique."
    },
    en: {
      badge: 'Red Wine',
      name: 'Adrianna Vineyard Malbec, Catena Zapata',
      appellation: 'Mendoza, Argentina, Vintage 2020',
      desc: "From the Adrianna vineyard planted at 1,500m altitude in the Andes, this Catena Zapata Malbec is considered one of the greatest wines in South America. Concentration, freshness and exceptional terroir.",
      cepage: 'Malbec 100%',
      region: 'Mendoza, Patagonia, Argentina',
      service: '17–18 °C',
      garde: '15–20 years',
      alcohol: '14% vol.',
      tasting: "Intense and deep purple robe. Dazzling nose of violet, blackberry, black raspberry, cinnamon and chocolate notes. Opulent yet fresh palate, velvety tannins, characteristic Andean acidity, floral and spiced finish.",
      pairing: "Argentinian asado (parilla), grilled beef rib, meat empanadas, aged cheeses (Manchego, Pecorino), Iberian chorizo."
    }
  },
  {
    id: 'gin-hendricks-flora',
    img: 'assets/images/spiritueux-grey-goose-vodka.jpg',
    badgeClass: 'badge-spirits',
    price: '78 €',
    priceXof: 51000,
    fr: {
      badge: 'Gin Premium',
      name: 'Hendrick\'s Flora Adora',
      appellation: 'Gin Premium, Édition Limitée Florale',
      desc: "Hendrick's Flora Adora est une ode au monde des fleurs. Cette édition limitée de la distillerie écossaise Hendrick's célèbre la floraison avec des notes d'hibiscus, de rose et de fleurs de sureau d'une délicatesse exquise.",
      cepage: 'Gin distillé, Infusions florales',
      region: 'Girvan, Écosse, Royaume-Uni',
      service: 'Sur glace avec eau tonique premium',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '43,4 % vol.',
      tasting: "Nez floral et envoûtant d'hibiscus, de rose de mai et de fleur de sureau, avec les notes botaniques caractéristiques de Hendrick's (concombre, baies de genévrier). Bouche ronde et crémeuse, finale longue et parfumée.",
      pairing: "Gin Tonic au concombre et eau de rose, apéritifs légers, sashimi, tartare de saumon, fromages frais aux herbes."
    },
    en: {
      badge: 'Premium Gin',
      name: 'Hendrick\'s Flora Adora',
      appellation: 'Premium Gin, Limited Floral Edition',
      desc: "Hendrick's Flora Adora is an ode to the world of flowers. This limited edition from Scottish distillery Hendrick's celebrates flowering with notes of hibiscus, rose and elderflower of exquisite delicacy.",
      cepage: 'Distilled gin, Floral infusions',
      region: 'Girvan, Scotland, United Kingdom',
      service: 'Over ice with premium tonic water',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '43.4% vol.',
      tasting: "Floral and enchanting nose of hibiscus, May rose and elderflower, with Hendrick's characteristic botanical notes (cucumber, juniper berries). Round and creamy palate, long and fragrant finish.",
      pairing: "Gin Tonic with cucumber and rose water, light aperitifs, sashimi, salmon tartare, fresh herb cheeses."
    }
  },
  {
    id: 'chablis-raveneau-2021',
    img: 'assets/images/vin-rouge-vignoble-lac.jpg',
    badgeClass: 'badge-blanc',
    price: '145 €',
    priceXof: 95000,
    fr: {
      badge: 'Vin Blanc',
      name: 'Chablis Grand Cru Les Clos, Raveneau',
      appellation: 'AOC Chablis Grand Cru, Bourgogne, Millésime 2021',
      desc: "François et Jean-Marie Raveneau sont les gardiens de la quintessence de Chablis. Leur Grand Cru Les Clos 2021 est un vin blanc d'une minéralité absolue, expression ultime du terroir kimméridgien de Chablis.",
      cepage: 'Chardonnay 100%',
      region: 'Chablis, Bourgogne, France',
      service: '12–14 °C',
      garde: '10–20 ans',
      alcohol: '13 % vol.',
      tasting: "Robe or pâle aux reflets verts. Nez d'une précision chirurgicale : huître fraîche, silex, citron Meyer, iode et notes fumées. Bouche tendue comme un arc, minéralité tranchante et pure, salinité sublime, finale d'une longueur inouïe.",
      pairing: "Huîtres de Belon, coquilles Saint-Jacques crues, homard grillé nature, langoustines au court-bouillon, poissons nobles à l'unilatérale."
    },
    en: {
      badge: 'White Wine',
      name: 'Chablis Grand Cru Les Clos, Raveneau',
      appellation: 'AOC Chablis Grand Cru, Burgundy, Vintage 2021',
      desc: "François and Jean-Marie Raveneau are the guardians of the quintessence of Chablis. Their Grand Cru Les Clos 2021 is a white wine of absolute minerality, the ultimate expression of Chablis' Kimmeridgian terroir.",
      cepage: 'Chardonnay 100%',
      region: 'Chablis, Burgundy, France',
      service: '12–14 °C',
      garde: '10–20 years',
      alcohol: '13% vol.',
      tasting: "Pale gold robe with green highlights. Nose of surgical precision: fresh oyster, flint, Meyer lemon, iodine and smoky notes. Palate taut as a bow, sharp and pure minerality, sublime salinity, finish of extraordinary length.",
      pairing: "Belon oysters, raw scallops, plain grilled lobster, langoustines in court-bouillon, noble fish cooked skin-side down."
    }
  },
  {
    id: 'sassicaia-2019',
    img: 'assets/images/vin-rouge-crimson-legacy.jpg',
    badgeClass: 'badge-rouge',
    price: '290 €',
    priceXof: 190000,
    fr: {
      badge: 'Vin Rouge',
      name: 'Sassicaia DOC, Tenuta San Guido',
      appellation: 'DOC Bolgheri Sassicaia, Toscane, Millésime 2019',
      desc: "Le Sassicaia est le vin qui a créé la révolution des \"Super Tuscans\". Premier vin italien à obtenir sa propre AOC, ce 2019 de Tenuta San Guido est un concentré d'élégance italienne et de caractère bordelais transalpin.",
      cepage: 'Cabernet Sauvignon 85%, Cabernet Franc 15%',
      region: 'Bolgheri, Toscane, Italie',
      service: '17–18 °C',
      garde: '20–25 ans',
      alcohol: '14 % vol.',
      tasting: "Robe pourpre intense aux reflets violets. Nez complexe de cassis, graphite, cèdre, menthe et épices douces. Bouche d'une belle structure tannique avec une élégance typiquement italienne, fraîcheur remarquable, finale longue et savoureuse.",
      pairing: "Bistecca alla Fiorentina, tagliata di manzo, agneau rôti aux herbes toscanes, truffes noires de San Miniato, Pecorino affiné."
    },
    en: {
      badge: 'Red Wine',
      name: 'Sassicaia DOC, Tenuta San Guido',
      appellation: 'DOC Bolgheri Sassicaia, Tuscany, Vintage 2019',
      desc: "Sassicaia is the wine that created the 'Super Tuscans' revolution. The first Italian wine to obtain its own DOC, this 2019 from Tenuta San Guido is a concentration of Italian elegance and transalpine Bordeaux character.",
      cepage: 'Cabernet Sauvignon 85%, Cabernet Franc 15%',
      region: 'Bolgheri, Tuscany, Italy',
      service: '17–18 °C',
      garde: '20–25 years',
      alcohol: '14% vol.',
      tasting: "Intense purple robe with violet highlights. Complex nose of blackcurrant, graphite, cedar, mint and soft spices. Palate with lovely tannic structure and typically Italian elegance, remarkable freshness, long and savoury finish.",
      pairing: "Bistecca alla Fiorentina, tagliata di manzo, herb-roasted Tuscan lamb, black truffles from San Miniato, aged Pecorino."
    }
  },
  {
    id: 'johnnie-walker-blue',
    img: 'assets/images/spiritueux-johnnie-walker-collection.jpg',
    badgeClass: 'badge-spirits',
    price: '220 €',
    priceXof: 144000,
    fr: {
      badge: 'Blended Scotch',
      name: 'Johnnie Walker Blue Label',
      appellation: 'Scotch Whisky, Blended, Édition Prestige',
      desc: "Johnnie Walker Blue Label est le summum de l'art du blending écossais. Assemblage de whiskies rarissimes issus de distilleries parfois disparues, dont seulement 1 fût sur 10 000 atteint la qualité requise pour cette cuvée d'exception.",
      cepage: 'Malt et grain, Blended Scotch Whisky',
      region: 'Écosse, Royaume-Uni',
      service: '18 °C ou sur un glaçon sphérique',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '40 % vol.',
      tasting: "Couleur or profond aux reflets cuivrés. Nez envoûtant et soyeux de miel de bruyère, vanille, fruits secs, légère tourbe douce et fumée délicate de chêne. Bouche ronde, crémeuse, d'une douceur veloutée, finale longue et chaleureuse.",
      pairing: "Cigares Davidoff, chocolat praliné, noix de cajou grillées, saumon fumé écossais, desserts au caramel beurre salé."
    },
    en: {
      badge: 'Blended Scotch',
      name: 'Johnnie Walker Blue Label',
      appellation: 'Scotch Whisky, Blended, Prestige Edition',
      desc: "Johnnie Walker Blue Label is the pinnacle of Scottish blending art. A blend of extremely rare whiskies from sometimes-closed distilleries, where only 1 cask in 10,000 reaches the quality required for this exceptional blend.",
      cepage: 'Malt and grain, Blended Scotch Whisky',
      region: 'Scotland, United Kingdom',
      service: '18 °C or over a spherical ice cube',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '40% vol.',
      tasting: "Deep gold colour with copper highlights. Enchanting and silky nose of heather honey, vanilla, dried fruits, light sweet peat and delicate oak smoke. Round, creamy palate of velvety smoothness, long and warm finish.",
      pairing: "Davidoff cigars, praline chocolate, roasted cashews, Scottish smoked salmon, salted butter caramel desserts."
    }
  },
  {
    id: 'yquem-2016',
    img: 'assets/images/accessoire-decanteur-cristal.jpg',
    badgeClass: 'badge-rare',
    price: '750 €',
    priceXof: 492000,
    fr: {
      badge: 'Collection Rare',
      name: 'Château d\'Yquem',
      appellation: 'AOC Sauternes 1er Cru Supérieur, Millésime 2016',
      desc: "Château d'Yquem est le seul Premier Cru Supérieur de Sauternes, un statut unique dans le classement des vins de Bordeaux de 1855. Ce 2016, issu de raisins gorgés de botrytis cinerea, est l'une des plus grandes expressions de vins liquoreux au monde.",
      cepage: 'Sémillon 80%, Sauvignon Blanc 20%',
      region: 'Sauternes, Bordeaux, France',
      service: '12–14 °C',
      garde: '30–50 ans',
      alcohol: '13,5 % vol.',
      tasting: "Robe or intense aux reflets ambrés. Nez d'une richesse inouïe : abricot confit, mangue, crème brûlée, miel de fleurs, safran et épices orientales. Bouche opulente et équilibrée, acidité fraîche qui contrebalance la richesse, finale infiniment longue.",
      pairing: "Foie gras d'oie poêlé, roquefort AOP, desserts aux agrumes confits, tarte tatin, curry doux de homard. Peut aussi s'apprécier seul, en méditation sucrée."
    },
    en: {
      badge: 'Rare Collection',
      name: 'Château d\'Yquem',
      appellation: 'AOC Sauternes 1er Cru Supérieur, Vintage 2016',
      desc: "Château d'Yquem is the only Premier Cru Supérieur of Sauternes, a unique status in the 1855 Bordeaux wine classification. This 2016, from grapes laden with botrytis cinerea, is one of the greatest expressions of dessert wine in the world.",
      cepage: 'Sémillon 80%, Sauvignon Blanc 20%',
      region: 'Sauternes, Bordeaux, France',
      service: '12–14 °C',
      garde: '30–50 years',
      alcohol: '13.5% vol.',
      tasting: "Intense gold robe with amber highlights. Nose of extraordinary richness: candied apricot, mango, crème brûlée, flower honey, saffron and oriental spices. Opulent and balanced palate, fresh acidity balancing the richness, infinitely long finish.",
      pairing: "Pan-fried goose foie gras, Roquefort AOP, candied citrus desserts, tarte tatin, mild lobster curry. Can also be enjoyed alone, in sweet meditation."
    }
  },
  {
    id: 'veuve-clicquot-rose',
    img: 'assets/images/champagne-bottle.jpg',
    badgeClass: 'badge-champagne',
    price: '85 €',
    priceXof: 56000,
    fr: {
      badge: 'Champagne Rosé',
      name: 'Veuve Clicquot Rosé Vintage',
      appellation: 'Champagne AOC Rosé, Millésime 2015',
      desc: "La Grande Dame de Champagne propose avec ce Rosé Vintage 2015 une célébration de la féminité et de l'élégance. Audacieux, fruité et raffiné, il incarne la signature audacieuse de Madame Clicquot.",
      cepage: 'Pinot Noir 59%, Chardonnay 23%, Meunier 11%, Pinot Gris 4%, Pinot Blanc 3%',
      region: 'Champagne, France',
      service: '9–11 °C',
      garde: '10–15 ans',
      alcohol: '12,5 % vol.',
      tasting: "Robe or rosé aux reflets saumonés, bulles fines et élégantes. Nez généreux de fraise mûre, framboise, rose fraîche et notes briochées. Bouche équilibrée, vineux et frais à la fois, belle persistance aromatique sur les petits fruits rouges.",
      pairing: "Saumon fumé, carpaccio de thon, gambas grillées, framboises au naturel, tarte aux fraises façon Ispahan."
    },
    en: {
      badge: 'Rosé Champagne',
      name: 'Veuve Clicquot Rosé Vintage',
      appellation: 'Champagne AOC Rosé, Vintage 2015',
      desc: "The Grande Dame of Champagne presents this Rosé Vintage 2015 as a celebration of femininity and elegance. Bold, fruity and refined, it embodies Madame Clicquot's audacious signature.",
      cepage: 'Pinot Noir 59%, Chardonnay 23%, Meunier 11%, Pinot Gris 4%, Pinot Blanc 3%',
      region: 'Champagne, France',
      service: '9–11 °C',
      garde: '10–15 years',
      alcohol: '12.5% vol.',
      tasting: "Rosé gold robe with salmon highlights, fine and elegant bubbles. Generous nose of ripe strawberry, raspberry, fresh rose and brioche notes. Balanced palate, vinous and fresh at once, lovely aromatic persistence on small red fruits.",
      pairing: "Smoked salmon, tuna carpaccio, grilled prawns, natural raspberries, Ispahan-style strawberry tart."
    }
  },
  {
    id: 'glenfarclas-50',
    img: 'assets/images/spiritueux-whistlepig-boss-hog.jpg',
    badgeClass: 'badge-rare',
    price: '5 800 €',
    priceXof: 3805000,
    fr: {
      badge: 'Collection Rare',
      name: 'Glenfarclas 50 Years',
      appellation: 'Speyside, Scotland, Édition Limitée',
      desc: "Glenfarclas 50 ans est l'un des single malts les plus rares et les plus recherchés d'Écosse. Distillé et vieilli 50 ans dans des fûts de sherry en chêne européen, c'est une déclaration d'amour au whisky de tradition.",
      cepage: 'Orge maltée, Single Malt',
      region: 'Speyside, Écosse, Royaume-Uni',
      service: '18–20 °C (sans glaçons)',
      garde: 'Indéfinie (bouteille fermée)',
      alcohol: '50 % vol.',
      tasting: "Robe acajou profond aux reflets cuivrés, d'une beauté saisissante. Nez envoûtant de fruits secs (pruneau, datte, raisin de Corinthe), chocolat noir, vieux chêne, épices orientales et une touche d'herbes séchées. Bouche dense et complexe, finale d'une longueur prodigieuse.",
      pairing: "Pudding de Noël, chocolat noir aux noix de pécan, charcuterie de qualité, cigares Montecristo, fromages bleus (Roquefort, Stilton)."
    },
    en: {
      badge: 'Rare Collection',
      name: 'Glenfarclas 50 Years',
      appellation: 'Speyside, Scotland, Limited Edition',
      desc: "Glenfarclas 50 Year Old is one of the rarest and most sought-after single malts in Scotland. Distilled and aged 50 years in European oak sherry casks, it is a love letter to traditional whisky-making.",
      cepage: 'Malted barley, Single Malt',
      region: 'Speyside, Scotland, United Kingdom',
      service: '18–20 °C (no ice)',
      garde: 'Indefinite (sealed bottle)',
      alcohol: '50% vol.',
      tasting: "Deep mahogany robe with copper highlights, of striking beauty. Enchanting nose of dried fruits (prune, date, currant), dark chocolate, aged oak, oriental spices and a hint of dried herbs. Dense and complex palate, with a finish of prodigious length.",
      pairing: "Christmas pudding, dark chocolate with pecans, quality charcuterie, Montecristo cigars, blue cheeses (Roquefort, Stilton)."
    }
  },
  {
    id: "harvest-day-original",
    img: 'assets/images/spiritueux-harvest-day-vodka-original.jpg',
    badgeClass: 'badge-spirits',
    price: '14 €',
    priceXof: 9500,
    fr: {
      badge: "Vodka",
      name: "Harvest Day Original",
      appellation: "Vodka Premium, Ukraine",
      desc: "Vodka premium ukrainienne à la bouteille gravée et à l'étiquette dorée. Un profil net et pur, pensé pour se déguster frappée ou en cocktail.",
      cepage: "Vodka de grain",
      region: "Ukraine",
      service: "Bien frappée, 0–4 °C",
      garde: "Ne se bonifie pas en bouteille",
      alcohol: "Non précisé",
      tasting: "Robe cristalline. Nez neutre et net. Bouche douce et ronde, finale propre.",
      pairing: "Caviar, poissons fumés, blinis, cornichons, charcuteries."
    },
    en: {
      badge: "Vodka",
      name: "Harvest Day Original",
      appellation: "Premium Vodka, Ukraine",
      desc: "Premium Ukrainian vodka in an embossed bottle with a gold label. A clean, pure profile made to be served chilled or in cocktails.",
      cepage: "Grain vodka",
      region: "Ukraine",
      service: "Well chilled, 0–4 °C",
      garde: "Does not improve in the bottle",
      alcohol: "Non précisé",
      tasting: "Crystal-clear. Clean, neutral nose. Soft, round palate with a clean finish.",
      pairing: "Caviar, smoked fish, blinis, pickles, cured meats."
    }
  },
  {
    id: "harvest-day-classic",
    img: 'assets/images/spiritueux-harvest-day-vodka-classic.jpg',
    badgeClass: 'badge-spirits',
    price: '16 €',
    priceXof: 10500,
    fr: {
      badge: "Vodka",
      name: "Harvest Day Classic",
      appellation: "Vodka Pure Grain, Ukraine",
      desc: "Vodka pure de grain dans une bouteille originale à anse, reconnaissable entre toutes. Le choix classique pour le service traditionnel comme pour les cocktails.",
      cepage: "Vodka pure de grain",
      region: "Ukraine",
      service: "Bien frappée, 0–4 °C",
      garde: "Ne se bonifie pas en bouteille",
      alcohol: "40 % vol.",
      tasting: "Robe cristalline. Nez franc de céréale. Bouche souple et nette, finale rafraîchissante.",
      pairing: "Viandes froides, poissons marinés, harengs, plats épicés."
    },
    en: {
      badge: "Vodka",
      name: "Harvest Day Classic",
      appellation: "Pure Grain Vodka, Ukraine",
      desc: "Pure grain vodka in an original handled bottle. The classic choice for traditional service and for cocktails.",
      cepage: "Pure grain vodka",
      region: "Ukraine",
      service: "Well chilled, 0–4 °C",
      garde: "Does not improve in the bottle",
      alcohol: "40 % vol.",
      tasting: "Crystal-clear. Honest cereal nose. Supple, clean palate with a refreshing finish.",
      pairing: "Cold cuts, marinated fish, herring, spicy dishes."
    }
  },
  {
    id: "harvest-day-melon",
    img: 'assets/images/spiritueux-harvest-day-vodka-melon.jpg',
    badgeClass: 'badge-spirits',
    price: '15 €',
    priceXof: 10000,
    fr: {
      badge: "Vodka",
      name: "Harvest Day Melon",
      appellation: "Vodka aromatisée Melon, Ukraine",
      desc: "Vodka aromatisée au melon, fruitée et gourmande. Idéale glacée en shot, en long drink ou dans les cocktails d'été.",
      cepage: "Vodka aromatisée melon",
      region: "Ukraine",
      service: "Bien frappée, 0–4 °C",
      garde: "Ne se bonifie pas en bouteille",
      alcohol: "40 % vol.",
      tasting: "Nez de melon mûr. Bouche fruitée et douce, finale fraîche.",
      pairing: "Cocktails, desserts fruités, fromages frais, apéritif."
    },
    en: {
      badge: "Vodka",
      name: "Harvest Day Melon",
      appellation: "Melon Flavoured Vodka, Ukraine",
      desc: "Melon-flavoured vodka, fruity and easy to enjoy. Ideal ice-cold, as a long drink or in summer cocktails.",
      cepage: "Melon flavoured vodka",
      region: "Ukraine",
      service: "Well chilled, 0–4 °C",
      garde: "Does not improve in the bottle",
      alcohol: "40 % vol.",
      tasting: "Ripe melon on the nose. Fruity, soft palate with a fresh finish.",
      pairing: "Cocktails, fruity desserts, fresh cheeses, aperitif."
    }
  },
  {
    id: "lakeside-cabernet-franc",
    img: 'assets/images/vin-rouge-lakeside-cabernet-franc.jpg',
    badgeClass: 'badge-rouge',
    price: '14 €',
    priceXof: 9500,
    fr: {
      badge: "Vin Rouge",
      name: "Lakeside Cabernet Franc",
      appellation: "Ignatievo Single Vineyard, Bulgarie",
      desc: "Cabernet Franc issu d'un vignoble unique, à l'étiquette marquée d'une vague bleue. Un rouge frais et structuré.",
      cepage: "Cabernet Franc",
      region: "Ignatievo, Varna, Bulgarie",
      service: "16–18 °C",
      garde: "3–5 ans",
      alcohol: "Non précisé",
      tasting: "Robe rubis. Nez de fruits rouges et de note poivrée. Bouche fraîche aux tannins souples.",
      pairing: "Viandes rouges grillées, volaille rôtie, fromages à pâte pressée."
    },
    en: {
      badge: "Red Wine",
      name: "Lakeside Cabernet Franc",
      appellation: "Ignatievo Single Vineyard, Bulgaria",
      desc: "Single-vineyard Cabernet Franc with a signature blue wave label. A fresh, structured red.",
      cepage: "Cabernet Franc",
      region: "Ignatievo, Varna, Bulgaria",
      service: "16–18 °C",
      garde: "3–5 years",
      alcohol: "Non précisé",
      tasting: "Ruby robe. Red fruit and peppery notes. Fresh palate with supple tannins.",
      pairing: "Grilled red meats, roast poultry, pressed cheeses."
    }
  },
  {
    id: "the-wave-pinot-grigio",
    img: 'assets/images/vin-blanc-the-wave-pinot-grigio.jpg',
    badgeClass: 'badge-blanc',
    price: '11 €',
    priceXof: 7000,
    fr: {
      badge: "Vin Blanc",
      name: "The Wave Pinot Grigio",
      appellation: "Pinot Grigio, Bulgarie",
      desc: "Pinot Grigio léger et élégant, à l'étiquette ondulée The Wave. Un blanc désaltérant pour tous les jours.",
      cepage: "Pinot Grigio",
      region: "Varna, Bulgarie",
      service: "8–10 °C",
      garde: "1–3 ans",
      alcohol: "Non précisé",
      tasting: "Robe paille claire. Nez de poire et d'agrumes. Bouche vive et légère.",
      pairing: "Poissons grillés, salades, fruits de mer, apéritif."
    },
    en: {
      badge: "White Wine",
      name: "The Wave Pinot Grigio",
      appellation: "Pinot Grigio, Bulgaria",
      desc: "Light, elegant Pinot Grigio with The Wave wavy label. A refreshing everyday white.",
      cepage: "Pinot Grigio",
      region: "Varna, Bulgaria",
      service: "8–10 °C",
      garde: "1–3 years",
      alcohol: "Non précisé",
      tasting: "Pale straw robe. Pear and citrus on the nose. Lively, light palate.",
      pairing: "Grilled fish, salads, seafood, aperitif."
    }
  },
  {
    id: "lakeside-varnenski-misket",
    img: 'assets/images/vin-blanc-lakeside-varnenski-misket.jpg',
    badgeClass: 'badge-blanc',
    price: '14 €',
    priceXof: 9000,
    fr: {
      badge: "Vin Blanc",
      name: "Lakeside Varnenski Misket",
      appellation: "Ignatievo Single Vineyard, Bulgarie",
      desc: "Varnenski Misket, cépage aromatique emblématique de la région de Varna. Un blanc parfumé et expressif.",
      cepage: "Varnenski Misket",
      region: "Ignatievo, Varna, Bulgarie",
      service: "8–10 °C",
      garde: "1–3 ans",
      alcohol: "Non précisé",
      tasting: "Robe dorée claire. Nez floral et muscaté. Bouche fruitée et souple.",
      pairing: "Cuisine épicée douce, fromages frais, desserts aux fruits."
    },
    en: {
      badge: "White Wine",
      name: "Lakeside Varnenski Misket",
      appellation: "Ignatievo Single Vineyard, Bulgaria",
      desc: "Varnenski Misket, an aromatic grape emblematic of the Varna region. A fragrant, expressive white.",
      cepage: "Varnenski Misket",
      region: "Ignatievo, Varna, Bulgaria",
      service: "8–10 °C",
      garde: "1–3 years",
      alcohol: "Non précisé",
      tasting: "Light golden robe. Floral, muscat nose. Fruity, supple palate.",
      pairing: "Mildly spiced dishes, fresh cheeses, fruit desserts."
    }
  },
  {
    id: "the-wave-rubin",
    img: 'assets/images/vin-rouge-the-wave-rubin.jpg',
    badgeClass: 'badge-rouge',
    price: '11 €',
    priceXof: 7000,
    fr: {
      badge: "Vin Rouge",
      name: "The Wave Rubin",
      appellation: "Rubin, Bulgarie",
      desc: "Rubin, cépage rouge bulgare, sous l'étiquette The Wave. Un rouge charnu et fruité.",
      cepage: "Rubin",
      region: "Varna, Bulgarie",
      service: "16–18 °C",
      garde: "3–5 ans",
      alcohol: "Non précisé",
      tasting: "Robe rubis intense. Nez de fruits noirs et d'épices. Bouche ronde et généreuse.",
      pairing: "Grillades, plats mijotés, fromages affinés."
    },
    en: {
      badge: "Red Wine",
      name: "The Wave Rubin",
      appellation: "Rubin, Bulgaria",
      desc: "Rubin, a Bulgarian red grape, under The Wave label. A full-bodied, fruity red.",
      cepage: "Rubin",
      region: "Varna, Bulgaria",
      service: "16–18 °C",
      garde: "3–5 years",
      alcohol: "Non précisé",
      tasting: "Deep ruby robe. Black fruit and spice on the nose. Round, generous palate.",
      pairing: "Grills, slow-cooked dishes, aged cheeses."
    }
  },
  {
    id: "the-wave-riesling",
    img: 'assets/images/vin-blanc-the-wave-riesling.jpg',
    badgeClass: 'badge-blanc',
    price: '11 €',
    priceXof: 7000,
    fr: {
      badge: "Vin Blanc",
      name: "The Wave Riesling",
      appellation: "Riesling, Bulgarie",
      desc: "Riesling frais et aromatique, à l'acidité vive. Un blanc précis, parfait à l'apéritif.",
      cepage: "Riesling",
      region: "Varna, Bulgarie",
      service: "8–10 °C",
      garde: "2–4 ans",
      alcohol: "Non précisé",
      tasting: "Robe citron pâle. Nez d'agrumes et de fleurs blanches. Bouche tendue et fraîche.",
      pairing: "Fruits de mer, sushis, poissons, cuisine asiatique."
    },
    en: {
      badge: "White Wine",
      name: "The Wave Riesling",
      appellation: "Riesling, Bulgaria",
      desc: "Fresh, aromatic Riesling with lively acidity. A precise white, perfect as an aperitif.",
      cepage: "Riesling",
      region: "Varna, Bulgaria",
      service: "8–10 °C",
      garde: "2–4 years",
      alcohol: "Non précisé",
      tasting: "Pale lemon robe. Citrus and white flowers. Tense, fresh palate.",
      pairing: "Seafood, sushi, fish, Asian cuisine."
    }
  },
  {
    id: "lakeside-traminer",
    img: 'assets/images/vin-blanc-lakeside-traminer.jpg',
    badgeClass: 'badge-blanc',
    price: '14 €',
    priceXof: 9000,
    fr: {
      badge: "Vin Blanc",
      name: "Lakeside Traminer",
      appellation: "Ignatievo Single Vineyard, Bulgarie",
      desc: "Traminer aromatique et floral issu d'un vignoble unique. Un blanc expressif aux notes de rose et de fruits exotiques.",
      cepage: "Traminer",
      region: "Ignatievo, Varna, Bulgarie",
      service: "8–10 °C",
      garde: "2–4 ans",
      alcohol: "Non précisé",
      tasting: "Robe dorée. Nez de rose et de litchi. Bouche ample et parfumée.",
      pairing: "Cuisine épicée, foie gras, fromages bleus, desserts."
    },
    en: {
      badge: "White Wine",
      name: "Lakeside Traminer",
      appellation: "Ignatievo Single Vineyard, Bulgaria",
      desc: "Aromatic, floral single-vineyard Traminer. An expressive white with notes of rose and exotic fruit.",
      cepage: "Traminer",
      region: "Ignatievo, Varna, Bulgaria",
      service: "8–10 °C",
      garde: "2–4 years",
      alcohol: "Non précisé",
      tasting: "Golden robe. Rose and lychee on the nose. Ample, perfumed palate.",
      pairing: "Spicy cuisine, foie gras, blue cheeses, desserts."
    }
  },
  {
    id: "lakeside-sauvignon-blanc",
    img: 'assets/images/vin-blanc-lakeside-sauvignon-blanc.jpg',
    badgeClass: 'badge-blanc',
    price: '14 €',
    priceXof: 9000,
    fr: {
      badge: "Vin Blanc",
      name: "Lakeside Sauvignon Blanc",
      appellation: "Ignatievo Single Vineyard, Bulgarie",
      desc: "Sauvignon Blanc vif et aromatique issu d'un vignoble unique. Un blanc frais aux notes d'agrumes et d'herbes.",
      cepage: "Sauvignon Blanc",
      region: "Ignatievo, Varna, Bulgarie",
      service: "8–10 °C",
      garde: "1–3 ans",
      alcohol: "Non précisé",
      tasting: "Robe pâle aux reflets verts. Nez de pamplemousse et d'herbe fraîche. Bouche vive.",
      pairing: "Poissons, fruits de mer, fromages de chèvre, salades."
    },
    en: {
      badge: "White Wine",
      name: "Lakeside Sauvignon Blanc",
      appellation: "Ignatievo Single Vineyard, Bulgaria",
      desc: "Lively, aromatic single-vineyard Sauvignon Blanc. A fresh white with citrus and herbal notes.",
      cepage: "Sauvignon Blanc",
      region: "Ignatievo, Varna, Bulgaria",
      service: "8–10 °C",
      garde: "1–3 years",
      alcohol: "Non précisé",
      tasting: "Pale robe with green hints. Grapefruit and fresh grass. Lively palate.",
      pairing: "Fish, seafood, goat cheese, salads."
    }
  },
  {
    id: "la-plage-rosu",
    img: 'assets/images/vin-rouge-la-plage-rosu.jpg',
    badgeClass: 'badge-rouge',
    price: '11 €',
    priceXof: 7500,
    fr: {
      badge: "Vin Rouge",
      name: "La Plage Roșu",
      appellation: "Vin rouge, Roumanie",
      desc: "Un vin rouge à l'étiquette turquoise ornée de petits bateaux, pensé pour les moments d'été et de partage.",
      cepage: "Non précisé",
      region: "Dobrogea, Roumanie (Crama Rasova)",
      service: "16–18 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rouge souple et fruité, facile à boire.",
      pairing: "Grillades, charcuteries, plats en sauce, fromages doux."
    },
    en: {
      badge: "Red Wine",
      name: "La Plage Roșu",
      appellation: "Red wine, Romania",
      desc: "A red wine with a turquoise label decorated with little boats, made for summer moments and sharing.",
      cepage: "Not specified",
      region: "Dobrogea, Romania (Crama Rasova)",
      service: "16–18 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A supple, fruity red that is easy to drink.",
      pairing: "Grills, cured meats, dishes in sauce, mild cheeses."
    }
  },
  {
    id: "la-plage-damour-blanc",
    img: 'assets/images/vin-blanc-la-plage-damour.jpg',
    badgeClass: 'badge-blanc',
    price: '11 €',
    priceXof: 7500,
    fr: {
      badge: "Vin Blanc",
      name: "La Plage D'Amour Blanc",
      appellation: "Vin blanc, Roumanie",
      desc: "Un vin blanc à l'étiquette illustrée d'une scène de plage colorée. Frais et convivial, idéal à l'apéritif.",
      cepage: "Non précisé",
      region: "Dobrogea, Roumanie (Crama Rasova)",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un blanc frais et fruité, léger en bouche.",
      pairing: "Apéritif, salades, poissons, fruits de mer."
    },
    en: {
      badge: "White Wine",
      name: "La Plage D'Amour Blanc",
      appellation: "White wine, Romania",
      desc: "A white wine with a colourful illustrated beach-scene label. Fresh and convivial, ideal as an aperitif.",
      cepage: "Not specified",
      region: "Dobrogea, Romania (Crama Rasova)",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fresh, fruity white, light on the palate.",
      pairing: "Aperitif, salads, fish, seafood."
    }
  },
  {
    id: "la-plage-damour-rose",
    img: 'assets/images/vin-rose-la-plage-damour.jpg',
    badgeClass: 'badge-rose',
    price: '11 €',
    priceXof: 7500,
    fr: {
      badge: "Vin Rosé",
      name: "La Plage D'Amour Rosé",
      appellation: "Vin rosé, Roumanie",
      desc: "Un vin rosé à la robe pâle et à l'étiquette de serviettes de plage colorées. Un rosé d'été par excellence.",
      cepage: "Non précisé",
      region: "Dobrogea, Roumanie (Crama Rasova)",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rosé frais et gourmand aux notes de fruits rouges.",
      pairing: "Salades composées, grillades légères, cuisine méditerranéenne."
    },
    en: {
      badge: "Rosé Wine",
      name: "La Plage D'Amour Rosé",
      appellation: "Rosé wine, Romania",
      desc: "A rosé with a pale robe and a label of colourful beach towels. A summer rosé par excellence.",
      cepage: "Not specified",
      region: "Dobrogea, Romania (Crama Rasova)",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fresh, gourmet rosé with red fruit notes.",
      pairing: "Composed salads, light grills, Mediterranean cuisine."
    }
  },
  {
    id: "moft-cuvee-alb",
    img: 'assets/images/vin-blanc-moft-cuvee-alb.jpg',
    badgeClass: 'badge-blanc',
    price: '16 €',
    priceXof: 10500,
    fr: {
      badge: "Vin Blanc",
      name: "MOFT Cuvée Alb",
      appellation: "Vin blanc, Roumanie",
      desc: "Une cuvée blanche à l'étiquette épurée et élégante signée MOFT. Un blanc de caractère au style contemporain.",
      cepage: "Chardonnay, Sauvignon Blanc, Muscat Ottonel",
      region: "Roumanie",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un blanc sec, net et frais.",
      pairing: "Poissons, volailles, fromages de chèvre."
    },
    en: {
      badge: "White Wine",
      name: "MOFT Cuvée Alb",
      appellation: "White wine, Romania",
      desc: "A white cuvée with a clean, elegant label by MOFT. A white with character and a contemporary style.",
      cepage: "Chardonnay, Sauvignon Blanc, Muscat Ottonel",
      region: "Romania",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A dry, crisp and fresh white.",
      pairing: "Fish, poultry, goat cheese."
    }
  },
  {
    id: "moft-cuvee-rosu",
    img: 'assets/images/vin-rouge-moft-cuvee-rosu.jpg',
    badgeClass: 'badge-rouge',
    price: '18 €',
    priceXof: 11500,
    fr: {
      badge: "Vin Rouge",
      name: "MOFT Cuvée Roșu",
      appellation: "Vin rouge, Roumanie",
      desc: "Une cuvée rouge à l'étiquette épurée et élégante signée MOFT. Un rouge structuré au style contemporain.",
      cepage: "Fetească Neagră, Syrah, Cabernet Sauvignon, Pinot Noir",
      region: "Roumanie",
      service: "16–18 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rouge structuré aux tannins souples.",
      pairing: "Viandes rouges, plats mijotés, fromages affinés."
    },
    en: {
      badge: "Red Wine",
      name: "MOFT Cuvée Roșu",
      appellation: "Red wine, Romania",
      desc: "A red cuvée with a clean, elegant label by MOFT. A structured red with a contemporary style.",
      cepage: "Fetească Neagră, Syrah, Cabernet Sauvignon, Pinot Noir",
      region: "Romania",
      service: "16–18 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A structured red with supple tannins.",
      pairing: "Red meats, slow-cooked dishes, aged cheeses."
    }
  },
  {
    id: "natterjack-irish-whiskey",
    img: 'assets/images/spiritueux-natterjack-irish-whiskey.jpg',
    badgeClass: 'badge-spirits',
    price: '59 €',
    priceXof: 39000,
    fr: {
      badge: "Whiskey",
      name: "Natterjack Irish Whiskey",
      appellation: "Whiskey irlandais, Irlande",
      desc: "Un whiskey irlandais reconnaissable à son étiquette ornée d'un crapaud calamite, l'animal emblème de la marque. Un caractère affirmé et une belle rondeur.",
      cepage: "Irish whiskey",
      region: "Irlande",
      service: "Sec ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "Non précisé",
      tasting: "Notes de vanille, de fruits secs et de bois toasté, finale douce et persistante.",
      pairing: "Chocolat noir, fromages affinés, cigare, digestif."
    },
    en: {
      badge: "Whiskey",
      name: "Natterjack Irish Whiskey",
      appellation: "Irish whiskey, Ireland",
      desc: "An Irish whiskey recognisable by its label featuring a natterjack toad, the brand's emblem. Strong character and a lovely roundness.",
      cepage: "Irish whiskey",
      region: "Ireland",
      service: "Neat or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "Not specified",
      tasting: "Notes of vanilla, dried fruit and toasted oak, with a soft, lingering finish.",
      pairing: "Dark chocolate, aged cheeses, cigar, digestif."
    }
  },
  {
    id: "natterjack-the-mistake",
    img: 'assets/images/spiritueux-natterjack-the-mistake.jpg',
    badgeClass: 'badge-spirits',
    price: '69 €',
    priceXof: 45000,
    fr: {
      badge: "Whiskey",
      name: "Natterjack The Mistake",
      appellation: "Whiskey irlandais triple distillation, Irlande",
      desc: "L'édition The Mistake du Natterjack : un whiskey irlandais triple distillé et fortement vieilli en fût, reconnaissable à son étiquette jaune.",
      cepage: "Irish whiskey triple distillation",
      region: "Irlande",
      service: "Sec ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "46 % vol.",
      tasting: "Un profil boisé et puissant, aux notes de fût et d'épices douces.",
      pairing: "Chocolat noir, fromages affinés, cigare, digestif."
    },
    en: {
      badge: "Whiskey",
      name: "Natterjack The Mistake",
      appellation: "Triple distilled Irish whiskey, Ireland",
      desc: "The Mistake edition of Natterjack: a triple distilled, heavily oaked Irish whiskey with a distinctive yellow label.",
      cepage: "Triple distilled Irish whiskey",
      region: "Ireland",
      service: "Neat or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "46% vol.",
      tasting: "A woody, powerful profile with cask and sweet spice notes.",
      pairing: "Dark chocolate, aged cheeses, cigar, digestif."
    }
  },
  {
    id: "whaletale-xo-brandy",
    img: 'assets/images/spiritueux-whaletale-xo-brandy.jpg',
    badgeClass: 'badge-spirits',
    price: '57 €',
    priceXof: 37500,
    fr: {
      badge: "Brandy",
      name: "Whaletale XO Brandy",
      appellation: "Potstill XO Brandy, Afrique du Sud",
      desc: "Un brandy XO sud-africain distillé en alambic (potstill), présenté dans un flacon élégant orné d'une queue de baleine. Un digestif de prestige aux couleurs ambrées.",
      cepage: "Brandy de vin, distillation potstill",
      region: "Afrique du Sud",
      service: "Sec, à température ambiante",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "38 % vol.",
      tasting: "Robe ambrée. Notes de fruits secs, de vanille et de bois précieux, bouche ronde et longue.",
      pairing: "Chocolat noir, fruits secs, cigare, café."
    },
    en: {
      badge: "Brandy",
      name: "Whaletale XO Brandy",
      appellation: "Potstill XO Brandy, South Africa",
      desc: "A South African XO brandy distilled in a pot still, presented in an elegant decanter featuring a whale tail. A prestige digestif with an amber colour.",
      cepage: "Wine brandy, pot still distillation",
      region: "South Africa",
      service: "Neat, at room temperature",
      garde: "Keeps well once opened",
      alcohol: "38% vol.",
      tasting: "Amber robe. Notes of dried fruit, vanilla and precious wood, with a round, long palate.",
      pairing: "Dark chocolate, dried fruit, cigar, coffee."
    }
  },
  {
    id: "whaletale-whisky",
    img: 'assets/images/spiritueux-whaletale-whisky.jpg',
    badgeClass: 'badge-spirits',
    price: '34 €',
    priceXof: 22000,
    fr: {
      badge: "Whisky",
      name: "Whaletale Whisky",
      appellation: "Whisky, Afrique du Sud et Écosse",
      desc: "Un whisky de la maison Whaletale, dans le même flacon élégant que le XO Brandy. Produit d'Afrique du Sud et d'Écosse.",
      cepage: "Whisky",
      region: "Afrique du Sud et Écosse",
      service: "Sec ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "43 % vol.",
      tasting: "Robe dorée. Un whisky souple aux notes de miel et de céréales.",
      pairing: "Fromages affinés, fruits secs, chocolat."
    },
    en: {
      badge: "Whisky",
      name: "Whaletale Whisky",
      appellation: "Whisky, South Africa and Scotland",
      desc: "A whisky from Whaletale, in the same elegant decanter as the XO Brandy. Product of South Africa and Scotland.",
      cepage: "Whisky",
      region: "South Africa and Scotland",
      service: "Neat or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "43% vol.",
      tasting: "Golden robe. A supple whisky with notes of honey and cereal.",
      pairing: "Aged cheeses, dried fruit, chocolate."
    }
  },
  {
    id: "marula-gin",
    img: 'assets/images/spiritueux-marula-gin.jpg',
    badgeClass: 'badge-spirits',
    price: '28 €',
    priceXof: 18500,
    fr: {
      badge: "Gin Premium",
      name: "Marula Gin",
      appellation: "Gin premium, Afrique du Sud",
      desc: "Un gin premium sud-africain à infusion naturelle de marula, le fruit de l'éléphant. Une étiquette inspirée de la savane.",
      cepage: "Gin, infusion naturelle de marula",
      region: "Afrique du Sud",
      service: "Bien frais, avec tonic et zeste",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "Non précisé",
      tasting: "Notes de genièvre, d'agrumes et de fruit exotique, finale fraîche.",
      pairing: "Gin tonic, cocktails, tapas, fruits de mer."
    },
    en: {
      badge: "Premium Gin",
      name: "Marula Gin",
      appellation: "Premium gin, South Africa",
      desc: "A South African premium gin with a natural marula infusion, the elephant fruit. A label inspired by the savannah.",
      cepage: "Gin, natural marula infusion",
      region: "South Africa",
      service: "Well chilled, with tonic and a twist",
      garde: "Keeps well once opened",
      alcohol: "Not specified",
      tasting: "Notes of juniper, citrus and exotic fruit, with a fresh finish.",
      pairing: "Gin and tonic, cocktails, tapas, seafood."
    }
  },
  {
    id: "le-mousquet-armagnac-orange",
    img: 'assets/images/spiritueux-le-mousquet-liqueur-armagnac-orange.jpg',
    badgeClass: 'badge-spirits',
    price: '16 €',
    priceXof: 10500,
    fr: {
      badge: "Liqueur",
      name: "Le Mousquet Liqueur d'Armagnac à l'orange",
      appellation: "Liqueur d'Armagnac à l'orange, 50 cl, France",
      desc: "Une liqueur française qui associe l'armagnac et l'orange. Une douceur parfumée, à servir en digestif.",
      cepage: "Armagnac et orange",
      region: "France",
      service: "Frais ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "36 % vol.",
      tasting: "Notes d'écorce d'orange confite et de raisin, bouche douce et chaleureuse.",
      pairing: "Desserts au chocolat, crêpes, glaces, digestif."
    },
    en: {
      badge: "Liqueur",
      name: "Le Mousquet Liqueur d'Armagnac à l'orange",
      appellation: "Armagnac and orange liqueur, 50 cl, France",
      desc: "A French liqueur combining armagnac and orange. A fragrant sweetness, served as a digestif.",
      cepage: "Armagnac and orange",
      region: "France",
      service: "Chilled or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "36% vol.",
      tasting: "Notes of candied orange peel and grape, with a soft, warming palate.",
      pairing: "Chocolate desserts, crêpes, ice cream, digestif."
    }
  },
  {
    id: "les-prunelles-cabernet-sauvignon",
    img: 'assets/images/vin-rouge-les-prunelles-cabernet-sauvignon.jpg',
    badgeClass: 'badge-rouge',
    price: '10 €',
    priceXof: 6500,
    fr: {
      badge: "Vin Rouge",
      name: "Les Prunelles Cabernet Sauvignon",
      appellation: "IGP Pays d'Oc, France",
      desc: "Un Cabernet Sauvignon du Pays d'Oc de la collection Les Prunelles. Un rouge du sud de la France, généreux et facile à apprécier.",
      cepage: "Cabernet Sauvignon",
      region: "Pays d'Oc, France",
      service: "16–18 °C",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "Non précisé",
      tasting: "Notes de cassis et de poivron doux, tannins souples.",
      pairing: "Viandes rouges grillées, agneau, fromages affinés."
    },
    en: {
      badge: "Red Wine",
      name: "Les Prunelles Cabernet Sauvignon",
      appellation: "IGP Pays d'Oc, France",
      desc: "A Cabernet Sauvignon from the Pays d'Oc, Les Prunelles collection. A generous red from the south of France, easy to enjoy.",
      cepage: "Cabernet Sauvignon",
      region: "Pays d'Oc, France",
      service: "16–18 °C",
      garde: "Keeps well once opened",
      alcohol: "Not specified",
      tasting: "Notes of blackcurrant and sweet pepper, with supple tannins.",
      pairing: "Grilled red meats, lamb, aged cheeses."
    }
  },
  {
    id: "gin-km12",
    img: 'assets/images/spiritueux-gin-km12-erable.jpg',
    badgeClass: 'badge-spirits',
    price: '39 €',
    priceXof: 25500,
    fr: {
      badge: "Gin",
      name: "Gin Km12",
      appellation: "Gin au sirop d'érable, Monts-Valin",
      desc: "Un gin artisanal du Québec affiné au sirop d'érable. Une douceur boisée rare, pour amateurs de spiritueux originaux.",
      cepage: "Gin au sirop d'érable",
      region: "Monts-Valin, Québec (Canada)",
      service: "Sec, avec un glaçon ou en cocktail",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "40 % vol.",
      tasting: "Notes de genièvre, de caramel d'érable et de bois, finale douce.",
      pairing: "Cocktails, fromages, desserts, dégustation seul."
    },
    en: {
      badge: "Gin",
      name: "Gin Km12",
      appellation: "Gin with maple syrup, Monts-Valin",
      desc: "A craft gin from Quebec made with maple syrup. A rare, woody sweetness for lovers of original spirits.",
      cepage: "Gin with maple syrup",
      region: "Monts-Valin, Quebec (Canada)",
      service: "Neat, on the rocks or in cocktails",
      garde: "Keeps well once opened",
      alcohol: "40% vol.",
      tasting: "Notes of juniper, maple caramel and wood, with a soft finish.",
      pairing: "Cocktails, cheeses, desserts, sipping neat."
    }
  },
  {
    id: "pipa-rosa-tradicao",
    img: 'assets/images/vin-rouge-pipa-rosa-tradicao.jpg',
    badgeClass: 'badge-rouge',
    price: '12 €',
    priceXof: 8000,
    fr: {
      badge: "Vin Rouge",
      name: "Pipa Rosa Tradição",
      appellation: "Vin rouge, Portugal",
      desc: "Un vin rouge portugais de la maison Pipa Rosa, à la belle étiquette noire ornée de fleurs et d’une rose gravée sur fût. Un rouge chaleureux, dans la tradition portugaise.",
      cepage: "Non précisé",
      region: "Portugal",
      service: "16–18 °C",
      garde: "3–6 ans",
      alcohol: "14 % vol.",
      tasting: "Un rouge généreux et rond, aux notes de fruits noirs mûrs et d’épices.",
      pairing: "Viandes rouges grillées, plats mijotés, fromages affinés."
    },
    en: {
      badge: "Red Wine",
      name: "Pipa Rosa Tradição",
      appellation: "Red wine, Portugal",
      desc: "A Portuguese red wine from Pipa Rosa, with a striking black label decorated with flowers and a rose engraved on a barrel. A warm red in the Portuguese tradition.",
      cepage: "Not specified",
      region: "Portugal",
      service: "16–18 °C",
      garde: "3–6 years",
      alcohol: "14% vol.",
      tasting: "A generous, round red with notes of ripe black fruit and spice.",
      pairing: "Grilled red meats, slow-cooked dishes, aged cheeses."
    }
  },
  {
    id: "blacks-maple-mayhem",
    img: 'assets/images/spiritueux-blacks-maple-mayhem-irish-whiskey.jpg',
    badgeClass: 'badge-spirits',
    price: '48 €',
    priceXof: 31500,
    fr: {
      badge: "Whiskey",
      name: "Blacks Maple Mayhem",
      appellation: "Whiskey irlandais, Maple Bourbon Cask, Irlande",
      desc: "Un whiskey irlandais vieilli en fûts de bourbon à l'érable, pour une douceur d'érable et de vanille. Non filtré à froid, embouteillé à 43 %. Distillé à Kinsale par Blacks.",
      cepage: "Irish whiskey, fûts de bourbon à l'érable",
      region: "Kinsale, Irlande",
      service: "Sec ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "43 % vol.",
      tasting: "Nez de sucre chaud, de fumée légère, de vanille, de caramel d'érable et de pruneaux cuits. Bouche onctueuse aux noix enrobées d'érable, cannelle et épices. Finale moyenne d'érable, de bois et de fumée.",
      pairing: "Crêpes, desserts au caramel, fromages affinés, digestif."
    },
    en: {
      badge: "Whiskey",
      name: "Blacks Maple Mayhem",
      appellation: "Irish whiskey, Maple Bourbon Cask, Ireland",
      desc: "An Irish whiskey aged in maple bourbon casks for a sweet kiss of maple and vanilla. Non chill filtered, bottled at 43%. Distilled in Kinsale by Blacks.",
      cepage: "Irish whiskey, maple bourbon casks",
      region: "Kinsale, Ireland",
      service: "Neat or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "43% vol.",
      tasting: "Warm sugar, hints of smoke, vanilla, maple caramel and baked prunes on the nose. A smooth, oily palate of maple-coated nuts, cinnamon and spice. A medium finish of maple, oak and smoke.",
      pairing: "Pancakes, caramel desserts, aged cheeses, digestif."
    }
  },
  {
    id: "blacks-triple-threat",
    img: 'assets/images/spiritueux-blacks-triple-threat-irish-whiskey.jpg',
    badgeClass: 'badge-spirits',
    price: '46 €',
    priceXof: 30500,
    fr: {
      badge: "Whiskey",
      name: "Blacks Triple Threat",
      appellation: "Whiskey irlandais, Three Cask Blend, Irlande",
      desc: "Un whiskey irlandais vieilli en fûts de bourbon, de sherry et de chêne vierge. Un assemblage de trois fûts aux notes de vanille, de bois toasté et de miel. Distillé à Kinsale par Blacks.",
      cepage: "Irish whiskey, assemblage de trois fûts",
      region: "Kinsale, Irlande",
      service: "Sec ou avec un glaçon",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "40 % vol.",
      tasting: "Nez de fruits d'été complexes et de petits pains à la cannelle. Bouche d'abord épicée puis adoucie par le caramel, le caramel au beurre et la vanille. Finale moyenne de fruits secs, de sucre caramélisé et d'épices de chêne.",
      pairing: "Chocolat noir, fruits secs, fromages affinés, digestif."
    },
    en: {
      badge: "Whiskey",
      name: "Blacks Triple Threat",
      appellation: "Irish whiskey, Three Cask Blend, Ireland",
      desc: "An Irish whiskey aged in bourbon, sherry and virgin oak casks. A three cask blend with notes of vanilla, toasted wood and honey. Distilled in Kinsale by Blacks.",
      cepage: "Irish whiskey, three cask blend",
      region: "Kinsale, Ireland",
      service: "Neat or on the rocks",
      garde: "Keeps well once opened",
      alcohol: "40% vol.",
      tasting: "Complex summer fruits and fresh cinnamon buns on the nose. Initially spicy on the palate, quickly mellowed by caramel, butterscotch and vanilla. A medium finish of dry fruit, caramelised sugar and oak spice.",
      pairing: "Dark chocolate, dried fruit, aged cheeses, digestif."
    }
  },
  {
    id: "blacks-black-beak-juniper-tempest",
    img: 'assets/images/spiritueux-blacks-black-beak-juniper-tempest-gin.jpg',
    badgeClass: 'badge-spirits',
    price: '50 €',
    priceXof: 33000,
    fr: {
      badge: "Gin",
      name: "Black Beak Juniper Tempest",
      appellation: "Gin irlandais, Kinsale, Irlande",
      desc: "Un gin irlandais aux baies de genièvre, à la bruyère irlandaise et à la verveine, relevé de zestes d'agrumes. Distillé et embouteillé à Kinsale par Blacks.",
      cepage: "Gin, genièvre, bruyère irlandaise, verveine, zestes d'agrumes",
      region: "Kinsale, Irlande",
      service: "Bien frais, avec un tonic premium et un quartier de pamplemousse rose",
      garde: "Se conserve bien une fois ouvert",
      alcohol: "42 % vol.",
      tasting: "Genièvre franc et parfumé, notes salées, zestes d'agrumes et de pamplemousse rose, finale fraîche.",
      pairing: "Gin tonic, cocktails, fruits de mer, apéritif."
    },
    en: {
      badge: "Gin",
      name: "Black Beak Juniper Tempest",
      appellation: "Irish gin, Kinsale, Ireland",
      desc: "An Irish gin with juniper berries, Irish heather and vervain, lifted with citrus zest. Distilled and bottled in Kinsale by Blacks.",
      cepage: "Gin, juniper, Irish heather, vervain, citrus zest",
      region: "Kinsale, Ireland",
      service: "Well chilled, with premium tonic and a wedge of pink grapefruit",
      garde: "Keeps well once opened",
      alcohol: "42% vol.",
      tasting: "Bold, fragrant juniper, sea-salted notes, citrus and pink grapefruit zest, with a fresh finish.",
      pairing: "Gin and tonic, cocktails, seafood, aperitif."
    }
  },
  {
    id: "zantho-zweigelt",
    img: 'assets/images/vin-rouge-zantho-zweigelt-burgenland.jpg',
    badgeClass: 'badge-rouge',
    price: '12 €',
    priceXof: 8000,
    fr: {
      badge: "Vin Rouge",
      name: "Zantho Zweigelt",
      appellation: "Burgenland, Autriche",
      desc: "Un Zweigelt du Burgenland, issu de jeunes vignes du sud-est du lac de Neusiedl. Un rouge autrichien frais, fruité et facile à boire.",
      cepage: "Zweigelt",
      region: "Burgenland, Autriche",
      service: "14–16 °C",
      garde: "2–4 ans",
      alcohol: "Non précisé",
      tasting: "Un rouge juteux aux notes de cerise et de baies rouges, tannins souples, finale fraîche.",
      pairing: "Charcuteries, volaille rôtie, pâtes, viandes blanches."
    },
    en: {
      badge: "Red Wine",
      name: "Zantho Zweigelt",
      appellation: "Burgenland, Austria",
      desc: "A Zweigelt from Burgenland, made from young vines at the south-eastern end of Lake Neusiedl. A fresh, fruity Austrian red that is easy to drink.",
      cepage: "Zweigelt",
      region: "Burgenland, Austria",
      service: "14–16 °C",
      garde: "2–4 years",
      alcohol: "Not specified",
      tasting: "A juicy red with cherry and red berry notes, supple tannins and a fresh finish.",
      pairing: "Cured meats, roast poultry, pasta, white meats."
    }
  },
  {
    id: "portal-da-vinha",
    img: 'assets/images/vin-blanc-portal-da-vinha.jpg',
    badgeClass: 'badge-blanc',
    price: '11 €',
    priceXof: 7000,
    fr: {
      badge: "Vin Blanc",
      name: "Portal da Vinha",
      appellation: "Vin blanc",
      desc: "Un vin blanc à l'étiquette vert d'eau ornée d'un portail de vigne, photographié au milieu des raisins.",
      cepage: "Non précisé",
      region: "Non précisé",
      service: "8–10 °C",
      garde: "1–3 ans",
      alcohol: "Non précisé",
      tasting: "Un blanc frais et fruité, léger en bouche.",
      pairing: "Apéritif, salades, poissons, fruits de mer."
    },
    en: {
      badge: "White Wine",
      name: "Portal da Vinha",
      appellation: "White wine",
      desc: "A white wine with a soft green label featuring a vineyard gate, photographed among the grapes.",
      cepage: "Not specified",
      region: "Not specified",
      service: "8–10 °C",
      garde: "1–3 years",
      alcohol: "Not specified",
      tasting: "A fresh, fruity white, light on the palate.",
      pairing: "Aperitif, salads, fish, seafood."
    }
  }
];

/* Product Modal */
function initProductModal() {
  const modal    = document.getElementById('product-modal');
  if (!modal) return;

  const backdrop    = document.getElementById('modal-backdrop');
  const closeBtn    = document.getElementById('modal-close');
  const addCartBtn  = document.getElementById('modal-add-cart');
  let currentModalId = null;
  let focusTrapHandler = null;

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

    /* Focus trap */
    const sel = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(modal.querySelectorAll(sel));
    if (focusable.length > 1) {
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (focusTrapHandler) document.removeEventListener('keydown', focusTrapHandler);
      focusTrapHandler = function(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
        }
      };
      document.addEventListener('keydown', focusTrapHandler);
    }
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    currentModalId = null;
    if (focusTrapHandler) { document.removeEventListener('keydown', focusTrapHandler); focusTrapHandler = null; }
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

/* Page Commande */
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
      if (orderForm)    orderForm.hidden    = true;
      if (orderSuccess) orderSuccess.hidden = true;
      return;
    }
    emptyEl.hidden = true;
    gridEl.hidden  = false;
    if (orderForm    && orderSuccess && !orderSuccess.hidden) return; // succès déjà affiché
    if (orderForm)    orderForm.hidden    = false;
    if (orderSuccess) orderSuccess.hidden = true;

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
          <p class="cart-item-price">${itemPriceStr}${data.priceXof ? ' / bouteille' : ''}</p>
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

  /* Form submission → WhatsApp */
  if (orderForm && orderSuccess) {
    orderForm.addEventListener('submit', e => {
      e.preventDefault();
      const prenom   = (orderForm.querySelector('#order-prenom')?.value || '').trim();
      const nom      = (orderForm.querySelector('#order-nom')?.value || '').trim();
      const email    = (orderForm.querySelector('#order-email')?.value || '').trim();
      const phone    = (orderForm.querySelector('#order-phone')?.value || '').trim();
      const pays     = orderForm.querySelector('#order-pays')?.value || '';
      const ville    = (orderForm.querySelector('#order-ville')?.value || '').trim();
      const adresse  = (orderForm.querySelector('#order-adresse')?.value || '').trim();
      const delivery = orderForm.querySelector('[name="delivery"]:checked')?.value || '';
      const occasion = orderForm.querySelector('#order-occasion')?.value || '';
      const notes    = (orderForm.querySelector('#order-notes')?.value || '').trim();
      if (!email || !prenom) return;

      let cartLines = '';
      cart.forEach(item => {
        const data = productsData.find(p => p.id === item.id);
        if (!data) return;
        const t = data[currentLang] || data.fr;
        cartLines += '  - ' + t.name + ' x' + item.qty + '\n';
      });

      const text =
        'Bonjour Africa Wine Food 🍷\n\n' +
        'Demande de commande :\n' + cartLines + '\n' +
        'Coordonnées :\n' +
        'Nom : ' + prenom + ' ' + nom + '\n' +
        'Email : ' + email + '\n' +
        'Tél : ' + (phone || '-') + '\n' +
        'Pays : ' + (pays || '-') + ' | Ville : ' + (ville || '-') + '\n' +
        'Adresse : ' + (adresse || '-') + '\n' +
        'Livraison : ' + (delivery || '-') + '\n' +
        'Occasion : ' + (occasion || '-') + '\n' +
        'Notes : ' + (notes || '-');

      sendToWhatsApp(text);
      orderForm.hidden = true;
      orderSuccess.hidden = false;
      cart = [];
      saveCart();
    });
  }
}

/* iOS viewport height fix */
function setVh() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}

/* Init */
/* chaque initialisation est isolee : une erreur n'arrete pas les suivantes */
function safe(fn) {
  try { fn(); } catch (e) { console.warn('init', fn.name, e); }
}

function init() {
  setVh();
  window.addEventListener('resize', setVh, { passive: true });
  window.addEventListener('orientationchange', setVh, { passive: true });
  applyTranslations(currentLang);
  safe(initLangSwitcher);
  safe(initNavbar);
  safe(initHamburger);
  safe(initSmoothScroll);
  safe(initParallax);
  safe(initScrollAnimations);
  safe(initCarousel);
  safe(initFilters);
  safe(initBlogFilters);
  safe(initCounters);
  safe(initBackToTop);
  safe(initForms);
  safe(initCart);
  safe(initProductModal);
  safe(initCommandePage);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


/* Lightbox galerie photos */
(function initLightbox() {
  const dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  const big = dlg.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      big.src = a.getAttribute('href');
      big.alt = (a.querySelector('img') || {}).alt || '';
      dlg.showModal();
    });
  });
  dlg.addEventListener('click', function (e) { if (e.target !== big) dlg.close(); });
})();
