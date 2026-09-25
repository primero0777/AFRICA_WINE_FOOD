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
    'nav.events':      'Événements',
    "events.pretitle": "En images",
    "events.title": "Événements",
    "events.subtitle": "Soirées de dégustation, salons professionnels et rendez-vous Africa Wine Food.",
    "events.next.pretitle": "À venir",
    "events.next.title": "Prochains événements",
    "events.night.pretitle": "La soirée",
    "events.night.title": "La Nuit du Vin en photos",
    "events.ouaga.pretitle": "Ouagadougou",
    "events.ouaga.title": "La Nuit du Vin à Ouaga",
    "events.cocktail.pretitle": "Lomé",
    "events.cocktail.title": "Lomé Cocktail Festival et Cocktail Week",
    "events.fairs.pretitle": "Sourcing",
    "events.fairs.title": "Salons professionnels",
    "events.field.pretitle": "Sur le terrain",
    "events.field.title": "Nos équipes en point de vente",
    "events.films.pretitle": "En vidéo",
    "events.films.title": "Nos films",
    'nav.about':       'À propos',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Agence de vins de luxe, spiritueux & distillerie premium',
    'hero.title':     "L'excellence viticole et distillerie,<br>au cœur de l'Afrique",
    'hero.subtitle':  "Sélection exclusive de grands crus, spiritueux et distilleries haut de gamme, livrés avec élégance partout en Afrique.",
    'hero.cta':       'Découvrir notre catalogue',

    'univers.pretitle':  'Notre sélection',
    'univers.title':     'Nos Univers',
    'univers.subtitle':  "Nos vins, spiritueux, notre marque Africa Spirits et nos distributeurs.",
    'univers.c1.title':  "Vins rouges, blancs et rosés",
    'univers.c1.desc':   "Des vins du Portugal, de Roumanie, d'Autriche et de Bulgarie, choisis pour leur qualité et leur prix.",
    'univers.c1.cta':    'Explorer →',
    'univers.c2.title':  "Whiskeys et spiritueux",
    'univers.c2.desc':   "Whiskeys irlandais, gins, vodkas et spiritueux du monde entier pour les amateurs et les professionnels.",
    'univers.c2.cta':    'Explorer →',
    'univers.c3.title':  "Cognacs et bruns",
    'univers.c3.desc':   "Cognacs de Grande Champagne, brandys, rhums et liqueurs d'exception.",
    'univers.c3.cta':    'Explorer →',
    'univers.c4.title':  "Africa Spirits Sodabi",
    'univers.c4.desc':   "Notre marque : le sodabi, eau-de-vie traditionnelle d'Afrique de l'Ouest, en édition Natural Infusion.",
    'univers.c4.cta':    'Explorer →',

    'univers.c5.title':  "Distributeurs Ukko",
    'univers.c5.desc':   "Des distributeurs de boissons bag-in-box conçus en Finlande, personnalisables à votre marque.",
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
    'catalogue.onrequest': 'Prix sur demande',
    'catalogue.featured': 'À la une',
    'catalogue.filter.equipement': 'Distributeurs',
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
    'footer.hours':         'Lun–Ven : 9h–21h · Sam : 9h–22h',
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
    'nav.events':      'Events',
    "events.pretitle": "In pictures",
    "events.title": "Events",
    "events.subtitle": "Tasting evenings, trade fairs and Africa Wine Food gatherings.",
    "events.next.pretitle": "Coming up",
    "events.next.title": "Upcoming events",
    "events.night.pretitle": "The evening",
    "events.night.title": "The Night of Wine in pictures",
    "events.ouaga.pretitle": "Ouagadougou",
    "events.ouaga.title": "The Night of Wine in Ouaga",
    "events.cocktail.pretitle": "Lomé",
    "events.cocktail.title": "Lomé Cocktail Festival and Cocktail Week",
    "events.fairs.pretitle": "Sourcing",
    "events.fairs.title": "Trade fairs",
    "events.field.pretitle": "In the field",
    "events.field.title": "Our teams in stores",
    "events.films.pretitle": "On video",
    "events.films.title": "Our films",
    'nav.about':       'About',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.pretitle':  'Luxury wines, spirits & distillery agency',
    'hero.title':     "The finest wines, spirits & distilleries,<br>at the heart of Africa",
    'hero.subtitle':  "Exclusive selection of grand crus, premium spirits and distilleries, elegantly delivered across Africa.",
    'hero.cta':       'Explore our catalogue',

    'univers.pretitle':  'Our selection',
    'univers.title':     'Our World',
    'univers.subtitle':  "Our wines, spirits, our Africa Spirits brand and our dispensers.",
    'univers.c1.title':  "Red, white and rosé wines",
    'univers.c1.desc':   "Wines from Portugal, Romania, Austria and Bulgaria, chosen for their quality and value.",
    'univers.c1.cta':    'Explore →',
    'univers.c2.title':  "Whiskeys and spirits",
    'univers.c2.desc':   "Irish whiskeys, gins, vodkas and spirits from around the world for enthusiasts and professionals.",
    'univers.c2.cta':    'Explore →',
    'univers.c3.title':  "Cognacs and dark spirits",
    'univers.c3.desc':   "Grande Champagne cognacs, brandies, rums and exceptional liqueurs.",
    'univers.c3.cta':    'Explore →',
    'univers.c4.title':  "Africa Spirits Sodabi",
    'univers.c4.desc':   "Our brand: sodabi, the traditional West African spirit, in a Natural Infusion edition.",
    'univers.c4.cta':    'Explore →',

    'univers.c5.title':  "Ukko dispensers",
    'univers.c5.desc':   "Bag-in-box drinks dispensers designed in Finland, customisable with your brand.",
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
    'catalogue.onrequest': 'Price on request',
    'catalogue.featured': 'Featured',
    'catalogue.filter.equipement': 'Dispensers',
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
    'footer.hours':         'Mon–Fri: 9am–9pm · Sat: 9am–10pm',
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
    id: "ukko-tonkka-distributeur",
    img: "assets/images/produits/equipement-ukko-tonkka-distributeur.jpg",
    badgeClass: "badge-rare",
    price: "Sur devis",
    fr: {
      badge: "Distributeur",
      name: "Ukko Tonkka, distributeur de boissons",
      appellation: "Distributeur bag-in-box, Finlande",
      desc: "Un distributeur de boissons bag-in-box conçu en Finlande par Ukko, au robinet rouge, disponible en blanc et en noir. Il se personnalise, comme la version Africa Wine Food et Africa Spirits Sodabi.",
      cepage: "Distributeur de vin et de boissons en bag-in-box",
      region: "Finlande",
      service: "Tous types de boissons en bag-in-box",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Non précisé",
      pairing: "Non précisé"
    },
    en: {
      badge: "Dispenser",
      name: "Ukko Tonkka, distributeur de boissons",
      appellation: "Bag-in-box dispenser, Finland",
      desc: "A bag-in-box drinks dispenser designed in Finland by Ukko, with a red tap, available in white and black. It can be customised, like the Africa Wine Food and Africa Spirits Sodabi versions.",
      cepage: "Wine and drinks bag-in-box dispenser",
      region: "Finland",
      service: "All bag-in-box drinks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "Not specified",
      pairing: "Not specified"
    }
  },
  {
    id: "whaletale-xo-brandy",
    img: "assets/images/produits/spiritueux-whaletale-xo-brandy.jpg",
    badgeClass: "badge-spirits",
    price: "57 €",
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
    id: "blacks-maple-mayhem",
    img: "assets/images/produits/spiritueux-blacks-maple-mayhem-irish-whiskey.jpg",
    badgeClass: "badge-spirits",
    price: "48 €",
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
    id: "frapin-chateau-de-fontpinot-xo",
    img: "assets/images/produits/spiritueux-frapin-chateau-de-fontpinot-xo.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Cognac",
      name: "Frapin Château de Fontpinot XO",
      appellation: "Cognac XO Single Vineyard, Grande Champagne, France",
      desc: "Un cognac XO issu d'un seul vignoble, le Château de Fontpinot, en Grande Champagne. Présenté dans son étui cylindrique bordeaux.",
      cepage: "Non précisé",
      region: "Grande Champagne, Cognac, France",
      service: "Sec, à température ambiante",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un XO profond aux notes de fruits confits, d'épices et de bois précieux.",
      pairing: "Chocolat noir, cigare, fruits secs, digestif."
    },
    en: {
      badge: "Cognac",
      name: "Frapin Château de Fontpinot XO",
      appellation: "XO Single Vineyard Cognac, Grande Champagne, France",
      desc: "An XO cognac from a single vineyard, Château de Fontpinot, in Grande Champagne. Presented in its burgundy cylindrical tube.",
      cepage: "Not specified",
      region: "Grande Champagne, Cognac, France",
      service: "Neat, at room temperature",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A deep XO with notes of candied fruit, spice and precious wood.",
      pairing: "Dark chocolate, cigar, dried fruit, digestif."
    }
  },
  {
    id: "africa-spirits-sodabi",
    img: "assets/images/produits/spiritueux-africa-spirits-sodabi.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Sodabi",
      name: "Africa Spirits Sodabi",
      appellation: "Sodabi, Natural Infusion",
      desc: "Le sodabi, eau-de-vie traditionnelle d'Afrique de l'Ouest, en édition Natural Infusion sous la marque Africa Spirits. Une étiquette inspirée des tissus kenté, des palmiers et de l'art de la distillation.",
      cepage: "Sodabi, infusion naturelle",
      region: "Afrique de l'Ouest",
      service: "Frais, en digestif ou en cocktail",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Une eau-de-vie parfumée, aux notes d'infusion naturelle.",
      pairing: "Cocktails, cuisine africaine, digestif."
    },
    en: {
      badge: "Sodabi",
      name: "Africa Spirits Sodabi",
      appellation: "Sodabi, Natural Infusion",
      desc: "Sodabi, the traditional West African spirit, in a Natural Infusion edition under the Africa Spirits brand. A label inspired by kente fabrics, palm trees and the art of distillation.",
      cepage: "Sodabi, natural infusion",
      region: "West Africa",
      service: "Chilled, as a digestif or in cocktails",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fragrant spirit with natural infusion notes.",
      pairing: "Cocktails, African cuisine, digestif."
    }
  },
  {
    id: "el-cabron-spiced-rum",
    img: "assets/images/produits/spiritueux-el-cabron-spiced-rum.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Rhum",
      name: "El Cabrón Spiced Rum",
      appellation: "Rhum épicé, fûts de bourbon",
      desc: "Un rhum épicé finalisé en fûts de bourbon, qui allie la force jamaïcaine et le charme de l'île de la Réunion. Il est présenté dans une bouteille scellée de cire rouge, avec son étui cylindrique.",
      cepage: "Rhum épicé, finition en fûts de bourbon",
      region: "Jamaïque et île de la Réunion",
      service: "Sec ou avec des glaçons",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Ambre sombre, riche et engageant. Notes de caramel au beurre, de tabac et une touche de vanille, avec une première gorgée souple et assurée.",
      pairing: "Cigare, chocolat noir, desserts au caramel."
    },
    en: {
      badge: "Rum",
      name: "El Cabrón Spiced Rum",
      appellation: "Spiced rum, bourbon casks",
      desc: "A spiced rum finished in bourbon casks, combining Jamaican strength and the charm of Réunion Island. It comes in a bottle sealed with red wax, with its cylindrical tube.",
      cepage: "Spiced rum, bourbon cask finish",
      region: "Jamaica and Réunion Island",
      service: "Neat or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "Dark amber, rich and inviting. Notes of butterscotch, tobacco and a touch of vanilla, with a smooth, confident first sip.",
      pairing: "Cigar, dark chocolate, caramel desserts."
    }
  },
  {
    id: "moft-cuvee-rosu",
    img: "assets/images/produits/vin-rouge-moft-cuvee-rosu.jpg",
    badgeClass: "badge-rouge",
    price: "18 €",
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
    id: "harvest-day-original",
    img: "assets/images/produits/spiritueux-harvest-day-vodka-original.jpg",
    badgeClass: "badge-spirits",
    price: "14 €",
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
    img: "assets/images/produits/spiritueux-harvest-day-vodka-classic.jpg",
    badgeClass: "badge-spirits",
    price: "16 €",
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
    img: "assets/images/produits/spiritueux-harvest-day-vodka-melon.jpg",
    badgeClass: "badge-spirits",
    price: "15 €",
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
    id: "natterjack-irish-whiskey",
    img: "assets/images/produits/spiritueux-natterjack-irish-whiskey.jpg",
    badgeClass: "badge-spirits",
    price: "59 €",
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
    img: "assets/images/produits/spiritueux-natterjack-the-mistake.jpg",
    badgeClass: "badge-spirits",
    price: "69 €",
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
    id: "whaletale-whisky",
    img: "assets/images/produits/spiritueux-whaletale-whisky.jpg",
    badgeClass: "badge-spirits",
    price: "34 €",
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
    img: "assets/images/produits/spiritueux-marula-gin.jpg",
    badgeClass: "badge-spirits",
    price: "28 €",
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
    img: "assets/images/produits/spiritueux-le-mousquet-liqueur-armagnac-orange.jpg",
    badgeClass: "badge-spirits",
    price: "16 €",
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
    id: "gin-km12",
    img: "assets/images/produits/spiritueux-gin-km12-erable.jpg",
    badgeClass: "badge-spirits",
    price: "39 €",
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
    id: "blacks-triple-threat",
    img: "assets/images/produits/spiritueux-blacks-triple-threat-irish-whiskey.jpg",
    badgeClass: "badge-spirits",
    price: "46 €",
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
    img: "assets/images/produits/spiritueux-blacks-black-beak-juniper-tempest-gin.jpg",
    badgeClass: "badge-spirits",
    price: "50 €",
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
    id: "lost-irish-whiskey",
    img: "assets/images/produits/spiritueux-lost-irish-whiskey.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Whiskey",
      name: "Lost Irish",
      appellation: "Whiskey irlandais, Irlande",
      desc: "Un whiskey irlandais dans une bouteille noire à l'étiquette orange, sous la marque Lost Irish.",
      cepage: "Non précisé",
      region: "Irlande",
      service: "Sec ou avec un glaçon",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un whiskey souple et rond, aux notes de vanille et de céréales.",
      pairing: "Chocolat noir, fromages affinés, digestif."
    },
    en: {
      badge: "Whiskey",
      name: "Lost Irish",
      appellation: "Irish whiskey, Ireland",
      desc: "An Irish whiskey in a black bottle with an orange label, under the Lost Irish brand.",
      cepage: "Not specified",
      region: "Ireland",
      service: "Neat or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A supple, round whiskey with vanilla and cereal notes.",
      pairing: "Dark chocolate, aged cheeses, digestif."
    }
  },
  {
    id: "abasolo-whisky-mexique",
    img: "assets/images/produits/spiritueux-abasolo-whisky-mexique.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Whisky",
      name: "Abasolo El Whisky de México",
      appellation: "Whisky de maïs ancestral, Mexique",
      desc: "Un whisky mexicain issu à 100 % de maïs ancestral, distillé en alambic de cuivre, selon les traditions anciennes.",
      cepage: "Maïs ancestral, distillé en alambic de cuivre",
      region: "Mexique",
      service: "Sec ou avec un glaçon",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un whisky doux et rond, aux notes de maïs grillé et de vanille.",
      pairing: "Cuisine mexicaine, chocolat, fruits secs."
    },
    en: {
      badge: "Whisky",
      name: "Abasolo El Whisky de México",
      appellation: "Ancestral corn whisky, Mexico",
      desc: "A Mexican whisky made from 100% ancestral corn, distilled in copper pot stills according to ancient traditions.",
      cepage: "Ancestral corn, copper pot distilled",
      region: "Mexico",
      service: "Neat or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A smooth, round whisky with notes of toasted corn and vanilla.",
      pairing: "Mexican cuisine, chocolate, dried fruit."
    }
  },
  {
    id: "las-californias-gin",
    img: "assets/images/produits/spiritueux-las-californias-gin.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Gin",
      name: "Las Californias Gin Nativo",
      appellation: "Gin, Baja California, Mexique",
      desc: "Un gin mexicain élaboré avec des plantes de la Baja California, dans une bouteille en verre bulle à l'étiquette verte et or.",
      cepage: "Gin aux plantes de la Baja California",
      region: "Baja California, Mexique",
      service: "Bien frais, avec un tonic et un zeste",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un gin frais aux notes de genièvre, de sauge et d'agrumes.",
      pairing: "Gin tonic, cocktails, fruits de mer."
    },
    en: {
      badge: "Gin",
      name: "Las Californias Gin Nativo",
      appellation: "Gin, Baja California, Mexico",
      desc: "A Mexican gin made with Baja California botanicals, in a bubbled glass bottle with a green and gold label.",
      cepage: "Gin with Baja California botanicals",
      region: "Baja California, Mexico",
      service: "Well chilled, with tonic and a twist",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fresh gin with juniper, sage and citrus notes.",
      pairing: "Gin and tonic, cocktails, seafood."
    }
  },
  {
    id: "frapin-cognac-grande-champagne",
    img: "assets/images/produits/spiritueux-frapin-cognac-grande-champagne.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Cognac",
      name: "Frapin Cognac Grande Champagne",
      appellation: "Cognac Grande Champagne, France",
      desc: "Un cognac Grande Champagne, 1er Cru de Cognac, issu d'un domaine familial unique, présenté dans son coffret blanc.",
      cepage: "Non précisé",
      region: "Grande Champagne, Cognac, France",
      service: "Sec, à température ambiante",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un cognac élégant aux notes de fleurs, de fruits mûrs et de bois fin.",
      pairing: "Chocolat noir, cigare, café, digestif."
    },
    en: {
      badge: "Cognac",
      name: "Frapin Cognac Grande Champagne",
      appellation: "Grande Champagne Cognac, France",
      desc: "A Grande Champagne Cognac, 1er Cru de Cognac, from a single family estate, presented in its white gift box.",
      cepage: "Not specified",
      region: "Grande Champagne, Cognac, France",
      service: "Neat, at room temperature",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "An elegant cognac with notes of flowers, ripe fruit and fine wood.",
      pairing: "Dark chocolate, cigar, coffee, digestif."
    }
  },
  {
    id: "gran-infante-real-1870",
    img: "assets/images/produits/spiritueux-gran-infante-real-1870.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Brandy",
      name: "Gran Infante Real 1870",
      appellation: "Very Old Brandy, Espagne",
      desc: "Un brandy Very Old, présenté dans un coffret en bois vert. Une pièce de prestige de la maison espagnole Infante.",
      cepage: "Non précisé",
      region: "Espagne",
      service: "Sec, à température ambiante",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un brandy riche aux notes de fruits secs, de caramel et de bois.",
      pairing: "Chocolat noir, fruits secs, cigare."
    },
    en: {
      badge: "Brandy",
      name: "Gran Infante Real 1870",
      appellation: "Very Old Brandy, Spain",
      desc: "A Very Old brandy, presented in a green wooden case. A prestige piece from the Spanish house Infante.",
      cepage: "Not specified",
      region: "Spain",
      service: "Neat, at room temperature",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A rich brandy with notes of dried fruit, caramel and wood.",
      pairing: "Dark chocolate, dried fruit, cigar."
    }
  },
  {
    id: "ron-heredero-gran-reserva",
    img: "assets/images/produits/spiritueux-ron-heredero-gran-reserva.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Rhum",
      name: "Ron Heredero Gran Reserva",
      appellation: "Rhum Gran Reserva Limitada, 70 cl",
      desc: "Un rhum Gran Reserva en édition limitée, 70 cl, présenté dans un cadre en bois sombre. Un rhum de dégustation.",
      cepage: "Non précisé",
      region: "Non précisé",
      service: "Sec, à température ambiante",
      garde: "Non précisé",
      alcohol: "40 % vol.",
      tasting: "Un rhum riche aux notes de canne, de vanille et de fruits secs.",
      pairing: "Chocolat noir, cigare, café."
    },
    en: {
      badge: "Rum",
      name: "Ron Heredero Gran Reserva",
      appellation: "Gran Reserva Limitada rum, 70 cl",
      desc: "A limited edition Gran Reserva rum, 70 cl, presented in a dark wooden frame. A sipping rum.",
      cepage: "Not specified",
      region: "Not specified",
      service: "Neat, at room temperature",
      garde: "Not specified",
      alcohol: "40% vol.",
      tasting: "A rich rum with notes of cane, vanilla and dried fruit.",
      pairing: "Dark chocolate, cigar, coffee."
    }
  },
  {
    id: "suenos-del-sur",
    img: "assets/images/produits/spiritueux-suenos-del-sur.jpg",
    badgeClass: "badge-blanc",
    price: "Sur devis",
    fr: {
      badge: "Vin fortifié",
      name: "Sueños del Sur",
      appellation: "Oloroso, Cream et Palo Cortado, Espagne",
      desc: "Une gamme de trois vins fortifiés espagnols, Oloroso, Cream et Palo Cortado, aux étiquettes ornées de cavaliers dans le désert.",
      cepage: "Non précisé",
      region: "Espagne",
      service: "12–14 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Des vins généreux aux notes de noix, de fruits secs et de caramel.",
      pairing: "Fromages affinés, fruits secs, desserts, jambon."
    },
    en: {
      badge: "Fortified wine",
      name: "Sueños del Sur",
      appellation: "Oloroso, Cream and Palo Cortado, Spain",
      desc: "A range of three Spanish fortified wines, Oloroso, Cream and Palo Cortado, with labels showing riders in the desert.",
      cepage: "Not specified",
      region: "Spain",
      service: "12–14 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "Generous wines with notes of nuts, dried fruit and caramel.",
      pairing: "Aged cheeses, dried fruit, desserts, ham."
    }
  },
  {
    id: "kikongo-jungle-rhum",
    img: "assets/images/produits/spiritueux-kikongo-jungle-rhum.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Rhum",
      name: "Kikongo Jungle Rhum",
      appellation: "Rhum, édition limitée",
      desc: "Un rhum en édition limitée, dans un flacon carré orné d'un gorille doré et d'un bouchon assorti.",
      cepage: "Non précisé",
      region: "Non précisé",
      service: "Sec ou avec un glaçon",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rhum ambré aux notes de canne, d'épices et de vanille.",
      pairing: "Cocktails, chocolat, desserts."
    },
    en: {
      badge: "Rum",
      name: "Kikongo Jungle Rhum",
      appellation: "Rum, limited edition",
      desc: "A limited edition rum, in a square flask decorated with a golden gorilla and a matching stopper.",
      cepage: "Not specified",
      region: "Not specified",
      service: "Neat or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "An amber rum with notes of cane, spice and vanilla.",
      pairing: "Cocktails, chocolate, desserts."
    }
  },
  {
    id: "abk6-xo-cognac",
    img: "assets/images/produits/spiritueux-abk6-xo-cognac.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Cognac",
      name: "ABK6 XO",
      appellation: "Cognac XO, France",
      desc: "Un cognac XO de la maison ABK6, présenté dans un flacon rectangulaire à l'étiquette ornée.",
      cepage: "Non précisé",
      region: "Cognac, France",
      service: "Sec, à température ambiante",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un XO aux notes de fruits secs, d'épices et de bois.",
      pairing: "Chocolat noir, cigare, digestif."
    },
    en: {
      badge: "Cognac",
      name: "ABK6 XO",
      appellation: "XO Cognac, France",
      desc: "An XO cognac from the ABK6 house, presented in a rectangular flask with an ornate label.",
      cepage: "Not specified",
      region: "Cognac, France",
      service: "Neat, at room temperature",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "An XO with notes of dried fruit, spice and wood.",
      pairing: "Dark chocolate, cigar, digestif."
    }
  },
  {
    id: "abk6-orange-liqueur",
    img: "assets/images/produits/spiritueux-abk6-orange-liqueur.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Liqueur",
      name: "ABK6 Orange Liqueur",
      appellation: "Liqueur d'orange au cognac, France",
      desc: "Une liqueur d'orange de la maison ABK6, dans un flacon rond gravé. Une douceur parfumée à servir en digestif.",
      cepage: "Non précisé",
      region: "France",
      service: "Frais ou avec un glaçon",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un parfum d'écorce d'orange confite, une bouche douce et chaleureuse.",
      pairing: "Desserts au chocolat, crêpes, glaces."
    },
    en: {
      badge: "Liqueur",
      name: "ABK6 Orange Liqueur",
      appellation: "Orange and cognac liqueur, France",
      desc: "An orange liqueur from the ABK6 house, in an engraved round flask. A fragrant sweetness to serve as a digestif.",
      cepage: "Not specified",
      region: "France",
      service: "Chilled or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A candied orange peel aroma, with a soft, warming palate.",
      pairing: "Chocolate desserts, crêpes, ice cream."
    }
  },
  {
    id: "rhum-km12-monts-valin",
    img: "assets/images/produits/spiritueux-rhum-km12-monts-valin.jpg",
    badgeClass: "badge-spirits",
    price: "Sur devis",
    fr: {
      badge: "Rhum",
      name: "Rhum Km12 Monts-Valin",
      appellation: "Rhum aux épices boréales, Québec",
      desc: "Un rhum aux épices boréales de la Distillerie du Fjord, au Québec, sous l'étiquette violette Km12.",
      cepage: "Rhum aux épices boréales",
      region: "Monts-Valin, Québec (Canada)",
      service: "Sec ou avec un glaçon",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rhum épicé aux notes de résine, de vanille et de bois.",
      pairing: "Cocktails, desserts, chocolat."
    },
    en: {
      badge: "Rum",
      name: "Rhum Km12 Monts-Valin",
      appellation: "Boreal spiced rum, Quebec",
      desc: "A boreal spiced rum from the Distillerie du Fjord in Quebec, under the purple Km12 label.",
      cepage: "Boreal spiced rum",
      region: "Monts-Valin, Quebec (Canada)",
      service: "Neat or on the rocks",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A spiced rum with notes of resin, vanilla and wood.",
      pairing: "Cocktails, desserts, chocolate."
    }
  },
  {
    id: "lakeside-cabernet-franc",
    img: "assets/images/produits/vin-rouge-lakeside-cabernet-franc.jpg",
    badgeClass: "badge-rouge",
    price: "14 €",
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
    id: "the-wave-rubin",
    img: "assets/images/produits/vin-rouge-the-wave-rubin.jpg",
    badgeClass: "badge-rouge",
    price: "11 €",
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
    id: "la-plage-rosu",
    img: "assets/images/produits/vin-rouge-la-plage-rosu.jpg",
    badgeClass: "badge-rouge",
    price: "11 €",
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
    id: "les-prunelles-cabernet-sauvignon",
    img: "assets/images/produits/vin-rouge-les-prunelles-cabernet-sauvignon.jpg",
    badgeClass: "badge-rouge",
    price: "10 €",
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
    id: "pipa-rosa-tradicao",
    img: "assets/images/produits/vin-rouge-pipa-rosa-tradicao.jpg",
    badgeClass: "badge-rouge",
    price: "12 €",
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
    id: "zantho-zweigelt",
    img: "assets/images/produits/vin-rouge-zantho-zweigelt-burgenland.jpg",
    badgeClass: "badge-rouge",
    price: "12 €",
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
    id: "budureasca-cuvee-noire",
    img: "assets/images/produits/vin-rouge-budureasca-cuvee-noire.jpg",
    badgeClass: "badge-rouge",
    price: "Sur devis",
    fr: {
      badge: "Vin Rouge",
      name: "Budureasca Cuvée Noire",
      appellation: "Vin rouge demi-sec, Roumanie",
      desc: "Un vin rouge demi-sec de la cave roumaine Budureasca, à l'étiquette brune et à la capsule dorée. Un rouge rond et accessible.",
      cepage: "Non précisé",
      region: "Dealu Mare, Roumanie",
      service: "16–18 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rouge souple aux notes de fruits noirs mûrs, rond et légèrement sucré en finale.",
      pairing: "Viandes rôties, charcuteries, fromages doux."
    },
    en: {
      badge: "Red Wine",
      name: "Budureasca Cuvée Noire",
      appellation: "Semi-dry red wine, Romania",
      desc: "A semi-dry red wine from the Romanian winery Budureasca, with a brown label and a gold capsule. A round, approachable red.",
      cepage: "Not specified",
      region: "Dealu Mare, Romania",
      service: "16–18 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A supple red with ripe black fruit notes, round with a lightly sweet finish.",
      pairing: "Roast meats, cured meats, mild cheeses."
    }
  },
  {
    id: "uniqo-douro",
    img: "assets/images/produits/vin-rouge-uniqo-douro.jpg",
    badgeClass: "badge-rouge",
    price: "Sur devis",
    fr: {
      badge: "Vin Rouge",
      name: "UNIQO Douro DOC",
      appellation: "Douro DOC 2024, Portugal",
      desc: "Un vin rouge du Douro, au Portugal, millésime 2024, à l'étiquette gravée d'un paysage de vallée. Un rouge de caractère.",
      cepage: "Non précisé",
      region: "Douro, Portugal",
      service: "16–18 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rouge structuré aux notes de fruits noirs et d'épices.",
      pairing: "Viandes grillées, plats mijotés, fromages affinés."
    },
    en: {
      badge: "Red Wine",
      name: "UNIQO Douro DOC",
      appellation: "Douro DOC 2024, Portugal",
      desc: "A red wine from the Douro in Portugal, 2024 vintage, with a label engraved with a valley landscape. A red with character.",
      cepage: "Not specified",
      region: "Douro, Portugal",
      service: "16–18 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A structured red with black fruit and spice notes.",
      pairing: "Grilled meats, slow-cooked dishes, aged cheeses."
    }
  },
  {
    id: "the-wave-pinot-grigio",
    img: "assets/images/produits/vin-blanc-the-wave-pinot-grigio.jpg",
    badgeClass: "badge-blanc",
    price: "11 €",
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
    img: "assets/images/produits/vin-blanc-lakeside-varnenski-misket.jpg",
    badgeClass: "badge-blanc",
    price: "14 €",
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
    id: "the-wave-riesling",
    img: "assets/images/produits/vin-blanc-the-wave-riesling.jpg",
    badgeClass: "badge-blanc",
    price: "11 €",
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
    img: "assets/images/produits/vin-blanc-lakeside-traminer.jpg",
    badgeClass: "badge-blanc",
    price: "14 €",
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
    img: "assets/images/produits/vin-blanc-lakeside-sauvignon-blanc.jpg",
    badgeClass: "badge-blanc",
    price: "14 €",
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
    id: "la-plage-damour-blanc",
    img: "assets/images/produits/vin-blanc-la-plage-damour.jpg",
    badgeClass: "badge-blanc",
    price: "11 €",
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
    img: "assets/images/produits/vin-rose-la-plage-damour.jpg",
    badgeClass: "badge-rose",
    price: "11 €",
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
    img: "assets/images/produits/vin-blanc-moft-cuvee-alb.jpg",
    badgeClass: "badge-blanc",
    price: "16 €",
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
    id: "portal-da-vinha",
    img: "assets/images/produits/vin-blanc-portal-da-vinha.jpg",
    badgeClass: "badge-blanc",
    price: "11 €",
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
  },
  {
    id: "budureasca-cuvee-rose",
    img: "assets/images/produits/vin-rose-budureasca-cuvee-rose.jpg",
    badgeClass: "badge-rose",
    price: "Sur devis",
    fr: {
      badge: "Vin Rosé",
      name: "Budureasca Cuvée Rosé",
      appellation: "Vin rosé demi-sec, Roumanie",
      desc: "Un rosé demi-sec de la cave Budureasca, à l'étiquette bleue et à la capsule dorée. Frais, fruité et gourmand.",
      cepage: "Non précisé",
      region: "Dealu Mare, Roumanie",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rosé frais aux notes de fruits rouges, tendre et gourmand.",
      pairing: "Salades, grillades légères, cuisine épicée douce."
    },
    en: {
      badge: "Rosé Wine",
      name: "Budureasca Cuvée Rosé",
      appellation: "Semi-dry rosé wine, Romania",
      desc: "A semi-dry rosé from the Budureasca winery, with a blue label and a gold capsule. Fresh, fruity and easy to enjoy.",
      cepage: "Not specified",
      region: "Dealu Mare, Romania",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fresh rosé with red fruit notes, tender and gourmet.",
      pairing: "Salads, light grills, mildly spiced cuisine."
    }
  },
  {
    id: "budureasca-cuvee-blanc",
    img: "assets/images/produits/vin-blanc-budureasca-cuvee-blanc.jpg",
    badgeClass: "badge-blanc",
    price: "Sur devis",
    fr: {
      badge: "Vin Blanc",
      name: "Budureasca Cuvée Blanc",
      appellation: "Vin blanc demi-sec, Roumanie",
      desc: "Un blanc demi-sec de la cave Budureasca, à l'étiquette vert d'eau. Un vin aromatique et facile à boire.",
      cepage: "Non précisé",
      region: "Dealu Mare, Roumanie",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un blanc aromatique, souple, à la finale légèrement douce.",
      pairing: "Apéritif, fromages frais, desserts aux fruits."
    },
    en: {
      badge: "White Wine",
      name: "Budureasca Cuvée Blanc",
      appellation: "Semi-dry white wine, Romania",
      desc: "A semi-dry white from the Budureasca winery, with a soft green label. An aromatic wine that is easy to drink.",
      cepage: "Not specified",
      region: "Dealu Mare, Romania",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "An aromatic, supple white with a lightly sweet finish.",
      pairing: "Aperitif, fresh cheeses, fruit desserts."
    }
  },
  {
    id: "portas-da-herdade-rose",
    img: "assets/images/produits/vin-rose-portas-da-herdade.jpg",
    badgeClass: "badge-rose",
    price: "Sur devis",
    fr: {
      badge: "Vin Rosé",
      name: "Portas da Herdade Rosé",
      appellation: "Vinho Regional Alentejano, Portugal",
      desc: "Un vin rosé de l'Alentejo, au Portugal, sous l'étiquette blanche Portas da Herdade. Frais, léger et convivial.",
      cepage: "Non précisé",
      region: "Alentejo, Portugal",
      service: "8–10 °C",
      garde: "Non précisé",
      alcohol: "Non précisé",
      tasting: "Un rosé frais aux arômes de fruits rouges.",
      pairing: "Apéritif, salades, poissons grillés."
    },
    en: {
      badge: "Rosé Wine",
      name: "Portas da Herdade Rosé",
      appellation: "Vinho Regional Alentejano, Portugal",
      desc: "A rosé from the Alentejo in Portugal, under the white Portas da Herdade label. Fresh, light and convivial.",
      cepage: "Not specified",
      region: "Alentejo, Portugal",
      service: "8–10 °C",
      garde: "Not specified",
      alcohol: "Not specified",
      tasting: "A fresh rosé with red fruit aromas.",
      pairing: "Aperitif, salads, grilled fish."
    }
  },
  {
    id: "tradicao-frisante-branco",
    img: "assets/images/produits/vin-blanc-tradicao-frisante.jpg",
    badgeClass: "badge-blanc",
    price: "Sur devis",
    fr: {
      badge: "Vin Blanc",
      name: "Tradição Frisante Branco",
      appellation: "Vinho frisante blanc, Portugal",
      desc: "Un vin blanc frisante du Portugal, à l'étiquette ornée d'une sardine. Léger, pétillant et rafraîchissant.",
      cepage: "Non précisé",
      region: "Portugal",
      service: "6–8 °C",
      garde: "Non précisé",
      alcohol: "12 % vol.",
      tasting: "Un blanc léger et vif, à la fine effervescence.",
      pairing: "Fruits de mer, sardines grillées, apéritif."
    },
    en: {
      badge: "White Wine",
      name: "Tradição Frisante Branco",
      appellation: "Frisante white wine, Portugal",
      desc: "A frisante white wine from Portugal, with a sardine on the label. Light, lightly sparkling and refreshing.",
      cepage: "Not specified",
      region: "Portugal",
      service: "6–8 °C",
      garde: "Not specified",
      alcohol: "12% vol.",
      tasting: "A light, lively white with a fine fizz.",
      pairing: "Seafood, grilled sardines, aperitif."
    }
  },
  {
    id: "zantho-gruner-veltliner",
    img: "assets/images/produits/vin-blanc-zantho-gruner-veltliner.jpg",
    badgeClass: "badge-blanc",
    price: "Sur devis",
    fr: {
      badge: "Vin Blanc",
      name: "Zantho Grüner Veltliner",
      appellation: "Burgenland, Autriche",
      desc: "Un Grüner Veltliner du Burgenland, le cépage blanc emblématique de l'Autriche, sous l'étiquette au lézard de Zantho.",
      cepage: "Grüner Veltliner",
      region: "Burgenland, Autriche",
      service: "8–10 °C",
      garde: "1–3 ans",
      alcohol: "Non précisé",
      tasting: "Un blanc vif et poivré, aux notes d'agrumes et de pomme verte.",
      pairing: "Poissons, cuisine asiatique, salades, charcuteries."
    },
    en: {
      badge: "White Wine",
      name: "Zantho Grüner Veltliner",
      appellation: "Burgenland, Austria",
      desc: "A Grüner Veltliner from Burgenland, Austria's emblematic white grape, under the Zantho lizard label.",
      cepage: "Grüner Veltliner",
      region: "Burgenland, Austria",
      service: "8–10 °C",
      garde: "1–3 years",
      alcohol: "Not specified",
      tasting: "A lively, peppery white with citrus and green apple notes.",
      pairing: "Fish, Asian cuisine, salads, cured meats."
    }
  },
  {
    id: "zantho-pink",
    img: "assets/images/produits/vin-rose-zantho-pink.jpg",
    badgeClass: "badge-rose",
    price: "Sur devis",
    fr: {
      badge: "Vin Rosé",
      name: "Zantho Pink",
      appellation: "Burgenland, Autriche",
      desc: "Un rosé autrichien du Burgenland, à l'étiquette rose vif ornée du lézard Zantho. Frais et fruité.",
      cepage: "Non précisé",
      region: "Burgenland, Autriche",
      service: "8–10 °C",
      garde: "1–2 ans",
      alcohol: "Non précisé",
      tasting: "Un rosé frais aux notes de fraise et de cerise.",
      pairing: "Apéritif, salades, cuisine légère."
    },
    en: {
      badge: "Rosé Wine",
      name: "Zantho Pink",
      appellation: "Burgenland, Austria",
      desc: "An Austrian rosé from Burgenland, with a bright pink label and the Zantho lizard. Fresh and fruity.",
      cepage: "Not specified",
      region: "Burgenland, Austria",
      service: "8–10 °C",
      garde: "1–2 years",
      alcohol: "Not specified",
      tasting: "A fresh rosé with strawberry and cherry notes.",
      pairing: "Aperitif, salads, light cuisine."
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

    /* masque les lignes dont la valeur est inconnue */
    ['cepage', 'region', 'service', 'garde', 'alcohol'].forEach(k => {
      const row = document.getElementById('modal-' + k).closest('.modal-spec');
      const unknown = /^(non précisé|not specified)$/i.test(String(t[k] || '').trim());
      if (row) row.style.display = unknown ? 'none' : '';
    });

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
