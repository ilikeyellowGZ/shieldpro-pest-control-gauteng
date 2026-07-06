import { PestInfo, ServiceItem, ReviewItem, BlogPost, ServiceArea } from '../types';
import { PEST_IMAGES } from './pestImages';

export const PEST_DATABASE: PestInfo[] = [
  {
    id: 'cockroaches',
    name: 'German & American Cockroaches',
    scientificName: 'Blattella germanica / Periplaneta americana',
    icon: 'Bug',
    dangerLevel: 'High',
    gautengRisk: 'Extremely common year-round across Gauteng, peaking in summer. Major issue in Sandton apartments, Pretoria residential complex ceilings, and restaurant kitchens.',
    signsOfInfestation: [
      'Sighting of live insects, particularly at night in damp areas',
      'Small black specks resembling ground pepper (feces) in cupboards',
      'Oval-shaped egg casings (oothecae) hidden in dark crevices',
      'A distinct, unpleasant musty odor in severe cases'
    ],
    treatmentApproach: 'We utilize a professional dual-action treatment protocol: targeting harborages with advanced, low-toxicity gel baits coupled with targeted residual barrier sprays. Safe for family and kitchen environments when applied professionally.',
    preventionTips: [
      'Seal all food in airtight containers and wipe down countertops nightly',
      'Eliminate standing water and fix leaking pipes beneath sinks immediately',
      'Seal cracks and crevices along baseboards, cupboards, and pipe entry points'
    ],
    description: 'Cockroaches are resilient pests that carry pathogenic bacteria, viruses, and allergens. In Gauteng’s warm climate, they reproduce incredibly fast, making professional barrier treatment essential.',
    image: PEST_IMAGES.cockroaches
  },
  {
    id: 'rodents',
    name: 'Rats & Mice',
    scientificName: 'Rattus norvegicus / Mus musculus',
    icon: 'Rat',
    dangerLevel: 'High',
    gautengRisk: 'High in both metropolitan urban hubs (like JHB Central, Randburg, and Pretoria Central) and agricultural holdings on the East and West Rand. Highly active in winter searching for warmth.',
    signsOfInfestation: [
      'Scratching noises in ceilings, drywalling, or subfloors at night',
      'Dark, spindle-shaped droppings (3-12mm long) along walls or cupboards',
      'Gnawed electrical cables, wooden skirtings, or packaged pantry goods',
      'Greasy smudge marks (rub marks) along walls and floor junctions'
    ],
    treatmentApproach: 'Our multi-layered rodent strategy includes thermal entry-point inspections, strategic placement of tamper-resistant external and internal bait stations, and complete structural exclusion (proofing) to block access.',
    preventionTips: [
      'Trim tree branches hanging near roof lines to prevent ceiling access',
      'Store pet food and refuse in heavy-duty bins with secure lids',
      'Ensure weep holes and air vents are fitted with high-quality wire mesh'
    ],
    description: 'Rodents pose severe health risks by transmitting leptospirosis and salmonella, while their gnawing behavior presents a major fire hazard from damaged electrical wiring.',
    image: PEST_IMAGES.rodents
  },
  {
    id: 'termites',
    name: 'Subterranean & Harvester Termites',
    scientificName: 'Isoptera',
    icon: 'ShieldAlert',
    dangerLevel: 'Extreme',
    gautengRisk: 'Severe structural threat in areas with red soils like Centurion, Midrand, and Pretoria. Destroys wooden roof trusses, floors, and structural supports rapidly.',
    signsOfInfestation: [
      'Thin mud shelter tubes running up foundations, walls, or trusses',
      'Discarded papery insect wings near windowsills or doors in spring',
      'Hollow-sounding woodwork or cracking paint on wooden door frames',
      'Papery or blistering drywall surfaces with tiny soil deposits'
    ],
    treatmentApproach: 'We conduct full-perimeter soil barrier treatments using premium, non-repellent termiticides that transfer throughout the colony, ensuring complete nest elimination. Includes solid multi-year structural guarantees.',
    preventionTips: [
      'Avoid stacking firewood, timber, or soil directly against external walls',
      'Ensure sub-floor vents remain completely unblocked for proper airflow',
      'Address any damp areas near the building foundation immediately'
    ],
    description: 'Termites are a silent disaster, chewing through wood 24/7. Standard Gauteng home insurance policies do not cover termite damage, making preventative soil treatment vital.',
    image: PEST_IMAGES.termites
  },
  {
    id: 'bedbugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    icon: 'Sparkles',
    dangerLevel: 'Medium',
    gautengRisk: 'High incidence in high-density apartments, hotels, student accommodation, and guesthouses across Johannesburg, Pretoria, and transport hubs.',
    signsOfInfestation: [
      'Itchy, red bite clusters on skin, often arranged in a line or zigzag',
      'Tiny rusty or reddish-brown blood spots on sheets, pillows, or mattresses',
      'Dark pinprick-sized spots of insect excrement along mattress seams',
      'Discarded translucent skins or tiny white eggs wedged in bed cracks'
    ],
    treatmentApproach: 'A highly rigorous, multi-room deep knockdown protocol utilizing high-temperature localized steam treatment alongside advanced targeted insect growth regulators (IGRs) to destroy both active bugs and unhatched eggs.',
    preventionTips: [
      'Inspect luggage seams and hotel headboards thoroughly when travelling',
      'Wash and dry secondhand clothing or linens on high heat immediately',
      'Avoid purchasing secondhand mattresses or upholstered bed frames'
    ],
    description: 'Bed bugs do not transmit disease, but they cause severe psychological distress, loss of sleep, and painful secondary skin infections from scratching bite marks.',
    image: PEST_IMAGES.bedbugs
  },
  {
    id: 'ants',
    name: 'Black, Pugnacious & Garden Ants',
    scientificName: 'Formicidae',
    icon: 'Activity',
    dangerLevel: 'Low',
    gautengRisk: 'Highly active in paved suburban gardens and building interiors throughout JHB and Pretoria, especially during dry winter spells and early spring rains.',
    signsOfInfestation: [
      'Long trails of active ants crawling along walls, kitchen counters, or paving',
      'Small mounds of loose sand or fine soil emerging from brick paving joints',
      'Rustling noises inside hollow electrical wall sockets or dry cavities'
    ],
    treatmentApproach: 'Rather than simple contact sprays that disperse the nest, we deploy highly attractive professional bait gels. Worker ants carry this slow-acting bait directly to the queen, neutralizing the colony at its core.',
    preventionTips: [
      'Immediately clean up sticky syrup, sugar, or pet food spills',
      'Seal gaps around windows, exterior doors, and structural expansion joints',
      'Keep outdoor vegetation trimmed and clear of touching outer walls'
    ],
    description: 'While garden ants are mostly a nuisance, pugnacious or carpenter ants can contaminate food supplies, undermine outdoor brick paving, and nest deep inside electrical structures.',
    image: PEST_IMAGES.ants
  },
  {
    id: 'fleas',
    name: 'Cat & Dog Fleas',
    scientificName: 'Ctenocephalides felis / canis',
    icon: 'Scissors',
    dangerLevel: 'Medium',
    gautengRisk: 'Common in family homes with pets across Gauteng suburbs, especially during hot, humid summer months.',
    signsOfInfestation: [
      'Pets scratching, biting, or grooming excessively',
      'Tiny black jumping insects visible on carpets, rugs, or pet bedding',
      'Tiny dark flecks on pet skin or bedding (flea dirt, which turns red on wet tissue)'
    ],
    treatmentApproach: 'A comprehensive indoor/outdoor space spray utilizing professional residual insecticides combined with targeted insect growth regulators (IGRs) to break the larval life cycle permanently.',
    preventionTips: [
      'Regularly apply vet-approved flea and tick treatments to all pets',
      'Wash pet blankets and bedding weekly on a hot cycle',
      'Vacuum carpets, floorboards, and upholstered furniture frequently'
    ],
    description: 'Fleas multiply rapidly. Their bites are painful, cause allergic dermatitis in pets, and can transmit tapeworms and other pathogens to humans.',
    image: PEST_IMAGES.fleas
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'cockroach-control',
    title: 'Cockroach Control',
    shortDesc: 'Complete elimination of cockroach infestations in kitchens, apartments, and commercial facilities.',
    fullDesc: 'Cockroach infestations require more than simple spray treatments. Our professional approach targets the hidden breeding harborages behind appliances, in electrical conduits, and within cabinet joints using precise, long-lasting gel bait technology and residual microencapsulated barrier sprays.',
    iconName: 'Bug',
    benefits: [
      'Advanced non-repellent gel baits that pests share to destroy the hidden nest',
      'Virtually odorless treatment — no need to evacuate for hours on end',
      'Discreet service for food-handling businesses and residential estates'
    ],
    process: [
      'Thorough inspection of warm crevices, sinks, electrical boxes, and motors',
      'Application of targeted professional gel baits in safe, inaccessible spots',
      'Strategic boundary spray along baseboards to prevent new entries',
      'Follow-up evaluation and guidance on preventative sanitation'
    ],
    urgencyLevel: 'High Urgency (reproduces in 21-day cycles)',
    pageId: 'service-cockroach'
  },
  {
    id: 'rodent-control',
    title: 'Rodent Exclusion & Baiting',
    shortDesc: 'Humane, highly effective rat and mouse control with structural exclusion to block access points.',
    fullDesc: 'Gauteng houses face frequent issues with rats in roof spaces and ceilings, particularly during the colder winter months. Our team inspects high-risk ceiling areas, establishes safe, tamper-proof baiting systems, and seals critical structural entry cracks to prevent future returns.',
    iconName: 'Rat',
    benefits: [
      'Secure, child- and pet-safe locked bait stations used exclusively',
      'Full roof and crawlspace inspection targeting travel runs and nests',
      'Professional exclusion service to seal wire entries, fascia gaps, and pipes'
    ],
    process: [
      'Thermal and physical scan of roof trusses, gutters, and floor spaces',
      'Deployment of premium weather-resistant rodenticides in locked stations',
      'Sealing of gaps larger than 6mm using specialized wire mesh and sealant',
      'Secondary inspection to verify complete clearance and bait consumption'
    ],
    urgencyLevel: 'Critical (presents chew-induced fire and hygiene hazards)',
    pageId: 'service-rodent'
  },
  {
    id: 'termite-treatment',
    title: 'Soil-Barrier Termite Treatment',
    shortDesc: 'Full sub-slab soil treatments and perimeter barriers with extended multi-year guarantees.',
    fullDesc: 'Termite colonies in Gauteng build deep underground tunnels, destroying foundations and woodwork silently. We perform deep structural soil baiting and liquid barrier injections directly into foundation sub-slabs to eradicate active colonies and protect your investment for years.',
    iconName: 'ShieldAlert',
    benefits: [
      'Utilizes advanced non-repellent termiticides that transfer back to the nest queen',
      'Includes a comprehensive written structural protection guarantee',
      'Critical for property buyers, renovations, and new construction sites'
    ],
    process: [
      'Trenching or drilling around external foundation perimeters',
      'Injection of high-performance liquid termiticide into key soil segments',
      'Sub-slab floor drilling for internal protection walls if required',
      'Backfilling and neat concrete resealing with minimal visual footprint'
    ],
    urgencyLevel: 'Extremely Critical (causes irreversible structural damage)',
    pageId: 'service-termite'
  },
  {
    id: 'bedbug-treatment',
    title: 'Discreet Bed Bug Eradication',
    shortDesc: 'Rigorous multi-room thermal and chemical knockdown designed for homes, rentals, and hotels.',
    fullDesc: 'Bed bugs travel easily in luggage and spread rapidly across adjoining walls. Our specialized protocols combine professional localized heat/steam application to destroy heat-sensitive eggs with premium residual insect growth regulators (IGRs) to completely halt reproduction.',
    iconName: 'Sparkles',
    benefits: [
      'Targets both mature insects and dormant, chemical-resistant eggs',
      'Highly discreet packaging and technicians to protect commercial reputation',
      'Detailed pre-treatment preparation checklist provided to maximize success'
    ],
    process: [
      'Detailed inspection of mattress seams, bed frames, headboards, and plugs',
      'Deep thermal dry steam treatment targeting mattress folds and crevices',
      'Precision application of microencapsulated residuals and growth regulators',
      'Mandatory secondary follow-up treatment at 10-14 days to clear newly hatched nymphs'
    ],
    urgencyLevel: 'High Urgency (leads to bite sores and severe sleeplessness)',
    pageId: 'service-bedbug'
  },
  {
    id: 'ant-control',
    title: 'Suburban Ant Nest Baiting',
    shortDesc: 'Queen-focused gel bait treatments that solve chronic ant issues in gardens and homes.',
    fullDesc: 'Spraying active ant lines only triggers colonial fragmentation, causing nests to split and multiply. Our professional system relies on slow-acting bait matrices that worker ants feed on and deliver directly to the subterranean queen, solving the issue permanently.',
    iconName: 'Activity',
    benefits: [
      'Eradicates the deep-seated breeding nest instead of just visible worker ants',
      'Perfect for garden paving joints, kitchen walls, and exterior pathways',
      'Eco-responsible baits that target specific insect feeding mechanisms'
    ],
    process: [
      'Identification of specific ant species (black, pugnacious, sugar ants)',
      'Strategic bait placement along confirmed active travel pathways',
      'Application of external dry-granule perimeter barriers around structures',
      'Advice on sealing paving gaps and managing organic landscape elements'
    ],
    urgencyLevel: 'Medium Urgency (food contamination and electrical nesting risk)',
    pageId: 'service-ant'
  },
  {
    id: 'flea-control',
    title: 'Flea & Tick Sanitization',
    shortDesc: 'Deep residual carpet and lawn treatments to break severe flea cycles in pet environments.',
    fullDesc: 'Severe flea issues quickly spread across carpets, furniture fabrics, and garden lawns, biting both family members and pets. Our dual-mode space sprays eliminate active biting adults immediately, while IGR compounds stop dormant cocoons and larvae from developing.',
    iconName: 'Scissors',
    benefits: [
      'Covers both indoor soft furnishings and outdoor lawn/kennel harborages',
      'Breaks the complex 4-stage flea life cycle at every development point',
      'Safe for pets and children once dry (typically 3-4 hours post-treatment)'
    ],
    process: [
      'Advice on pet veterinary treatment coordination to ensure concurrent pet hygiene',
      'Deep space spray of interior carpets, rugs, baseboards, and pet sleep zones',
      'Precision chemical treatment of shaded garden lawn areas and soil gaps',
      'Post-treatment care guidelines to handle delayed pupal emergence safely'
    ],
    urgencyLevel: 'High Urgency (painful skin welts and pet discomfort)',
    pageId: 'service-flea'
  },
  {
    id: 'residential-pest',
    title: 'Residential Pest Protection',
    shortDesc: 'Comprehensive, family-safe preventative plans for Gauteng houses and complexes.',
    fullDesc: 'Protect your family from cockroaches, rodents, spiders, and ants. Our signature Residential Pest Plan provides an initial thorough knockdown of active pests followed by standard barrier applications, sealing tips, and seasonal follow-ups tailored to our local Gauteng climate.',
    iconName: 'Home',
    benefits: [
      'Treatments tailored around children, domestic pets, and sensitive plants',
      'Professional technicians trained to work respectfully inside private homes',
      'Peace of mind with same-day emergency support where available'
    ],
    process: [
      'Full internal and external perimeter inspection of the residence',
      'Application of low-toxicity, targeted treatments based on lifestyle needs',
      'Proofing suggestions to reduce structural access points',
      'Optional biannual maintenance programs to secure permanent protection'
    ],
    urgencyLevel: 'Preventative / Active Protection',
    pageId: 'service-residential'
  },
  {
    id: 'commercial-pest',
    title: 'Commercial & Retail Pest Management',
    shortDesc: 'Audit-ready, highly discreet pest control for food services, warehouses, and offices.',
    fullDesc: 'A single pest sighting can compromise your brand’s reputation and breach local health regulations. We deliver premium, audit-ready commercial pest management following HACCP and SANS guidelines, complete with written reporting, active monitor maps, and swift, highly discreet response times.',
    iconName: 'Building2',
    benefits: [
      'Fully compliant with SANS 10133 hygiene standards and municipal bylaws',
      'Detailed commercial file containing pesticide sheets and station bait maps',
      'Discreet, after-hours technician routing to shield customer views'
    ],
    process: [
      'Initial facility risk audit identifying pest entry risks and sanitation issues',
      'Installation of code-compliant, tamper-resistant monitoring stations',
      'Establishment of regular monthly or bi-monthly site maintenance rotations',
      'Instant digital service report delivery for compliance file records'
    ],
    urgencyLevel: 'Critical Compliance (protects business license and brand)',
    pageId: 'service-commercial'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Sandton & Northern Suburbs',
    region: 'Johannesburg',
    suburbs: ['Sandown', 'Bryanston', 'Fourways', 'Douglasdale', 'Rivonia', 'Morningside', 'Paulshof', 'Sunninghill', 'Lonehill', 'Dainfern', 'Kyalami'],
    description: 'Highly prone to high-density apartment cockroach crossovers, commercial office rodent proofing, and luxury estate garden ant trails.',
    urgencyNote: 'Same-day technician routes active daily.'
  },
  {
    name: 'Randburg & West Rand',
    region: 'Johannesburg',
    suburbs: ['Northcliff', 'Linden', 'Gallo Manor', 'Randpark Ridge', 'Roodepoort', 'Krugersdorp', 'Weltevredenpark', 'Constantia Kloof', 'Ruimsig', 'Lanseria'],
    description: 'Prone to harvester termites in open gardens, rodents near agricultural boundaries, and general residential pantry pest invasions.',
    urgencyNote: 'Emergency call-outs available.'
  },
  {
    name: 'Pretoria & Centurion',
    region: 'Pretoria',
    suburbs: ['Waterkloof', 'Brooklyn', 'Garsfontein', 'Faerie Glen', 'Moreleta Park', 'Centurion Central', 'Eldoraigne', 'Wierda Park', 'Rooihuiskraal', 'Irene'],
    description: 'Severe risk of subterranean termites destroying wood trusses and structural floors due to red soils, alongside severe garden ant activity.',
    urgencyNote: 'Specialist termite soil barrier teams stationed here.'
  },
  {
    name: 'Midrand & Kyalami',
    region: 'Midrand & Centurion',
    suburbs: ['Halfway House', 'Carlswald', 'Noordwyk', 'Vorna Valley', 'Waterfall Estate', 'Blue Hills', 'Clayville', 'President Park'],
    description: 'Frequently handles warehouse bird proofing, commercial office park insect control, and large-scale residential estate perimeter safety.',
    urgencyNote: 'Discreet corporate services.'
  },
  {
    name: 'East Rand (Ekurhuleni)',
    region: 'East Rand',
    suburbs: ['Bedfordview', 'Edenvale', 'Kempton Park', 'Boksburg', 'Benoni', 'Germiston', 'Alberton', 'Brakpan', 'Springs'],
    description: 'Major industrial warehouses requiring strict baiting, logistics hubs needing bird exclusion, and old-suburb homes with roof rat issues.',
    urgencyNote: 'HACCP-compliant industrial contracts.'
  },
  {
    name: 'Soweto & Southern Gauteng',
    region: 'Johannesburg',
    suburbs: ['Orlando', 'Diepkloof', 'Pimville', 'Meadowlands', 'Dobsonville', 'Baragwanath', 'Mondeor', 'Glenvista', 'Southgate'],
    description: 'Handles high-density residential properties, retail shops, and school campus hygiene barrier programs.',
    urgencyNote: 'Community-centric prompt service.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David Ndlovu',
    location: 'Waterfall Estate, Midrand',
    type: 'Residential',
    rating: 5,
    date: '2026-05-14',
    comment: 'We had a persistent roof rat problem making noise every winter night. BugProctect Pro responded immediately, conducted a thorough ceiling inspection, and proofed all our fascia gaps. Haven\'t heard a single scratch since. Exceptional, professional South African service.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Elena Vassgili',
    location: 'Sandton Central, Johannesburg',
    type: 'Commercial',
    rating: 5,
    date: '2026-06-02',
    comment: 'As a restaurant owner, kitchen hygiene is my absolute top priority. BugProctect Pro manages our monthly preventative pest control program. Their technicians are SANS-compliant, incredibly discreet, and provide perfect digital service reports for our health inspectors.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Johan Pretorius',
    location: 'Eldoraigne, Centurion',
    type: 'Residential',
    rating: 5,
    date: '2026-04-20',
    comment: 'Woke up to find mud tubes running up our master bedroom drywall - subterranean termites. The team did an extensive soil injection barrier all around our house foundation. They explained the science, worked cleanly, and gave us a multi-year structural guarantee.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Naledi Molefe',
    location: 'Waterkloof, Pretoria',
    type: 'Residential',
    rating: 5,
    date: '2026-06-25',
    comment: 'Extremely polite crew who prioritized our pet\'s safety. They treated our garden and carpets for fleas using pet-friendly compounds. Highly recommend BugProctect Pro for any family home in Gauteng!',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Marcus Henderson',
    location: 'Kempton Park, East Rand',
    type: 'Commercial',
    rating: 5,
    date: '2026-06-11',
    comment: 'We run a logistics warehouse. Bird and rodent control are essential to protect stock. BugProctect Pro established a stellar bait network and completed bird spike installations on our high beams. Reliable, punctual, and highly effective.',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Winter Drives Rodents into Gauteng Ceilings',
    excerpt: 'As Gauteng temperatures plummet during winter, rats and mice actively seek warm structural spaces. Learn how to identify early signs and proof your home.',
    content: 'Unlike coastal areas, Gauteng experiences dry, very cold winter nights. This drastic shift drives field mice and roof rats to seek shelter inside warm roof voids and drywall spaces. Once inside, they shred insulation material for nesting, chew on vital electrical cables (a major hidden fire hazard), and contaminate water tanks.\n\nTo protect your home, trim tree branches at least 2 meters back from your gutters, seal open cable feed holes with stainless steel wool, and keep garden compost piles far from the house perimeter. If you already hear scratching overhead, prompt professional baiting is recommended to prevent nesting.',
    date: '2026-06-15',
    author: 'Sipho Zuma (Senior Technician)',
    readTime: '4 min read',
    category: 'Rodent Prevention',
    image: PEST_IMAGES.rodents
  },
  {
    id: 'blog-2',
    title: 'Subterranean Termites: The Silent Threat to Centurion & Pretoria Foundations',
    excerpt: 'Gauteng’s red soil regions are notorious for destructive termite activity. Here are 5 warning signs every homeowner should watch for.',
    content: 'Subterranean termites require soil contact to survive, using mud shelter tubes to travel safely into homes to feed on wood trusses, door frames, and floors. Centurion, Midrand, and parts of Pretoria East are high-risk zones due to clay-rich soils and rapid suburban developments encroaching on natural colonies.\n\nWatch out for: papery or hollow-sounding timber, buckling wood floor panels, tiny wings discarded near windowsills, and mud shelter paths running up foundation walls. Treating termites requires drilling and pressurized termiticide injection directly beneath concrete slabs — a process that must be handled by trained, SANS-registered specialists to ensure the colony queen is fully reached.',
    date: '2026-05-28',
    author: 'Deon Roux (Termite Specialist)',
    readTime: '6 min read',
    category: 'Termite Care',
    image: PEST_IMAGES.termites
  },
  {
    id: 'blog-3',
    title: 'Commercial Kitchen Compliance: Navigating SANS & HACCP standards',
    excerpt: 'For Gauteng hospitality businesses, pest control is not just about keeping bugs out — it is a strict legal requirement. Learn what inspectors look for.',
    content: 'Under South African National Standards (SANS) 10133 and general food hygiene bylaws, any facility preparing food must have a proactive, fully documented pest management system. A single cockroach or rodent sighting by health inspectors can lead to severe operational fines or immediate business closure.\n\nCompliance requires establishing locked bait stations, holding comprehensive material safety data sheets (MSDS) on site, keeping active pest sighting logs, and using SANS-registered, low-toxicity compounds. BugProctect Pro provides a comprehensive commercial folder with digital records, making audits absolutely stress-free.',
    date: '2026-06-10',
    author: 'Nadine Pillay (Corporate Auditor)',
    readTime: '5 min read',
    category: 'Commercial Compliance',
    image: PEST_IMAGES.cockroaches
  }
];

export const FAQS = [
  {
    q: 'How quickly can your Gauteng team respond?',
    a: 'We offer same-day service for emergency pest problems across Johannesburg, Pretoria, and surrounding areas whenever a technician is active in your suburb. For standard service bookings, we typically schedule appointments within 24 to 48 hours of your request.'
  },
  {
    q: 'Are your pest control treatments safe for children and domestic pets?',
    a: 'Yes, your family’s safety is our highest priority. All products we apply are SANS-registered, highly targeted, and strictly applied by trained professionals according to direct label instructions. We use sealed, tamper-resistant bait stations for rodents, and will advise you on pet-friendly garden baiting solutions.'
  },
  {
    q: 'Do I need to leave my house during treatment?',
    a: 'For most standard treatments like cockroach gel baiting or garden ant treatment, you do not need to leave. However, for full indoor chemical space sprays (like severe flea or bed bug knockdown treatments), we recommend leaving the property for 3 to 4 hours to let the product settle and dry completely.'
  },
  {
    q: 'How long does a typical pest treatment take?',
    a: 'A standard residential treatment for an average 3-bedroom Gauteng home takes between 45 to 90 minutes. Detailed termite soil barriers or extensive commercial warehouse proofing may require several hours or a full day depending on structural layout and property size.'
  },
  {
    q: 'Will the pests come back after treatment?',
    a: 'We design our premium treatments to reduce active pest populations immediately and prevent future recurrence. For long-term protection, we provide clear prevention advice (like sealing weep holes and trimming trees). For heavy risks like termites, we include solid multi-year guarantees, and offer routine maintenance plans for high-risk businesses.'
  },
  {
    q: 'Do you service commercial restaurants and food handling facilities?',
    a: 'Absolutely. We specialize in SANS-registered, SABS-approved commercial pest prevention. We provide full compliance documentation, active bait station maps, and discreet, after-hours technician visits to ensure your kitchen remains SANS-compliant and your guests remain undisturbed.'
  },
  {
    q: 'Do you offer monthly or quarterly pest maintenance contracts?',
    a: 'Yes, we provide customizable preventative maintenance plans. This is highly recommended for restaurants, warehouses, property management complexes, and homes located in heavy pest risk areas like Centurion (termites) or high-density urban apartments (cockroaches).'
  },
  {
    q: 'What areas of Gauteng do you cover?',
    a: 'We provide full service coverage across Johannesburg, Sandton, Randburg, Fourways, Roodepoort, Midrand, Centurion, Pretoria, Ekurhuleni (East Rand including Edenvale, Boksburg, Benoni, Kempton Park), Alberton, and Soweto.'
  },
  {
    q: 'How much does professional pest control cost?',
    a: 'Pest control pricing depends on several specific factors: the pest type, the size of your property, the severity of the active infestation, and the treatment method required. Rather than a flat generic fee, we provide free, highly accurate personalized quotes. We recommend booking a free digital assessment.'
  },
  {
    q: 'What should I do to prepare my home before the technician arrives?',
    a: 'For standard treatments, simply ensure key skirting boards are accessible, food is stored away, and kitchen counters are clear. For specific intensive treatments like bed bug thermal sprays, our coordinator will send you a quick, detailed list (e.g., washing bed linen on high heat and vacuuming carpet borders).'
  }
];

export const INDUSTRIES = [
  {
    title: 'Homes & Private Estates',
    desc: 'Protecting families from disease-carrying cockroaches, roof rats, and dangerous spider species with low-toxicity, targeted applications.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Restaurants & Hospitality',
    desc: 'Discreet, compliance-certified pest prevention satisfying municipal health audits, HACCP standards, and protecting guest reviews.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Warehousing & Logistics',
    desc: 'Extensive external rodent baiting and high-beam bird proofing to safeguard stock, packaging, and heavy machinery.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Offices & Corporate Parks',
    desc: 'Clean, odorless pest suppression maintaining focus and high hygiene levels across shared workstations and lunch rooms.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Schools & Daycare Centers',
    desc: 'Extra-low residue barrier treatments specifically scheduled over school holidays or weekends for absolute student safety.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Body Corporates & Complexes',
    desc: 'Scheduled exterior perimeters and drainage cockroach treatments to prevent pest transfers between adjacent sectional title units.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop'
  }
];
