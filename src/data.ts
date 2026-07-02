import { MaterialCategory, GoogleReview } from "./types";

export const COMPANY_INFO = {
  name: "Materiales Leloir",
  rubro: "Corralón de Materiales de Construcción",
  address: "Martín Fierro 4361, B1714 Villa Udaondo, Provincia de Buenos Aires",
  phone: "011 4621-1467",
  phoneLink: "tel:01146211467",
  whatsapp: "5491146211467",
  whatsappLink: "https://wa.me/5491146211467",
  googleRating: 4.5,
  googleReviewCount: 35,
  yearsExperience: 70,
  foundationYear: 1956,
  coverageZones: [
    "Parque Leloir",
    "Villa Udaondo",
    "Ituzaingó",
    "Castelar",
    "Hurlingham",
    "Padua",
    "Merlo",
    "Paso del Rey"
  ]
};

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: "cementos",
    title: "Cemento, Cal y Pegamentos",
    iconName: "Layers",
    description: "Ligantes y adhesivos esenciales para revoques, carpetas, hormigón y colocación de cerámicos.",
    items: [
      { id: "cem-1", name: "Cemento Loma Negra (50kg)", unit: "Bolsa", tags: ["Más Vendido", "Hormigón"] },
      { id: "cem-2", name: "Cal Hidratada Cacique (25kg)", unit: "Bolsa", tags: ["Albañilería"] },
      { id: "cem-3", name: "Pegamento Klaukol Impermeable (30kg)", unit: "Bolsa", tags: ["Cerámicos"] },
      { id: "cem-4", name: "Cemento Blanco San Martín (25kg)", unit: "Bolsa", tags: ["Terminaciones"] },
      { id: "cem-5", name: "Plasticor / Cemento de Albañilería (40kg)", unit: "Bolsa", tags: ["Revoque"] }
    ]
  },
  {
    id: "aridos",
    title: "Arena, Piedra y Cascote",
    iconName: "Grid",
    description: "Áridos de primera calidad sueltos o en bolsones reforzados para hormigones, rellenos y mezclas.",
    items: [
      { id: "ari-1", name: "Bolsón de Arena Fina", unit: "M3 (Aprox)", tags: ["Mezclas"] },
      { id: "ari-2", name: "Bolsón de Piedra Partida (1-3)", unit: "M3 (Aprox)", tags: ["Estructural"] },
      { id: "ari-3", name: "Bolsón de Cascote Picado Limpio", unit: "M3 (Aprox)", tags: ["Contrapisos"] },
      { id: "ari-4", name: "Arena Fina a Granel (Metro)", unit: "Metro", tags: ["Obras Grandes"] },
      { id: "ari-5", name: "Piedra Partida 1-3 a Granel (Metro)", unit: "Metro", tags: ["Hormigón Armado"] }
    ]
  },
  {
    id: "ladrillos",
    title: "Ladrillos Huecos, Vista y Comunes",
    iconName: "Square",
    description: "Mampostería tradicional para paredes portantes, tabiques divisorios y detalles de terminación.",
    items: [
      { id: "lad-1", name: "Ladrillo Hueco 12x18x33 (9 tubos)", unit: "Unidad", tags: ["Pared Exterior", "Estándar"] },
      { id: "lad-2", name: "Ladrillo Hueco 8x18x33 (6 tubos)", unit: "Unidad", tags: ["Pared Divisoria"] },
      { id: "lad-3", name: "Ladrillo Hueco 18x18x33 (Pared de 20)", unit: "Unidad", tags: ["Portante"] },
      { id: "lad-4", name: "Ladrillo Común de Obra Seleccionado", unit: "Mil (1000u)", tags: ["Cimientos", "Parilla"] },
      { id: "lad-5", name: "Ladrillo Vista Cordobés Primera", unit: "Unidad", tags: ["Estética", "Visto"] }
    ]
  },
  {
    id: "hierros",
    title: "Hierros y Mallas Cima",
    iconName: "Hammer",
    description: "Hierros nervados de alta resistencia y mallas soldadas para armaduras de losas, vigas y columnas.",
    items: [
      { id: "hie-1", name: "Hierro Aletado del 8 (Acindar - 12m)", unit: "Barra", tags: ["Estructura"] },
      { id: "hie-2", name: "Hierro Aletado del 10 (Acindar - 12m)", unit: "Barra", tags: ["Columnas"] },
      { id: "hie-3", name: "Hierro Aletado del 6 (Acindar - 12m)", unit: "Barra", tags: ["Estribos"] },
      { id: "hie-4", name: "Malla Sima 15x15 (4.2mm - 2x3m)", unit: "Plancha", tags: ["Platea", "Losas"] },
      { id: "hie-5", name: "Malla Sima 15x15 (5.5mm - 2x3m)", unit: "Plancha", tags: ["Tránsito Pesado"] },
      { id: "hie-6", name: "Alambre Recocido Negro (Calibre 14)", unit: "Kg", tags: ["Ataduras"] }
    ]
  },
  {
    id: "gruesos",
    title: "Materiales Gruesos y Estructuras",
    iconName: "Coins",
    description: "Bloques de hormigón, viguetas pretensadas y aditivos para resolver la estructura de tu edificación.",
    items: [
      { id: "gru-1", name: "Bloque de Hormigón 19x19x39", unit: "Unidad", tags: ["Fácil Colocación"] },
      { id: "gru-2", name: "Vigueta Pretensada Shapp (Largo a elección)", unit: "Metro lineal", tags: ["Techos", "Losas"] },
      { id: "gru-3", name: "Bloque de EPS Isopor para Techo (10cm)", unit: "Unidad", tags: ["Liviano", "Térmico"] },
      { id: "gru-4", name: "Bloque Cerámico para Techo Sapori", unit: "Unidad", tags: ["Tradicional"] },
      { id: "gru-5", name: "Ceresita Hidrófugo Bidón (10kg)", unit: "Bidón", tags: ["Capa Aisladora"] }
    ]
  },
  {
    id: "insumos",
    title: "Insumos, Techados y Herramientas de Obra",
    iconName: "Wrench",
    description: "Complementos indispensables para la obra diaria, asilaciones y ferretería pesada de corralón.",
    items: [
      { id: "ins-1", name: "Membrana Asfáltica Megaflex 4mm con Aluminio", unit: "Rollo (10m2)", tags: ["Impermeabilizante"] },
      { id: "ins-2", name: "Fieltro Ruberoid Pesado", unit: "Rollo", tags: ["Bajo Teja"] },
      { id: "ins-3", name: "Disco de Corte Diamantado 115mm (Albañilería)", unit: "Unidad", tags: ["Ferretería"] },
      { id: "ins-4", name: "Clavos Punta París 2 y 1/2 (por Kg)", unit: "Kg", tags: ["Encofrado"] },
      { id: "ins-5", name: "Aditivo Tacurú para mezclas (5 lts)", unit: "Lata", tags: ["Mejor Adherencia"] }
    ]
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Sebastián De Vicenzo",
    rating: 5,
    date: "Hace 2 meses",
    text: "Excelente atención. Hiper profesionales. Resuelven consultas rápido y a precios lógicos. En la zona de Udaondo no hay otro que trabaje con tanta seriedad.",
    initials: "SD",
    verified: true
  },
  {
    id: "rev-2",
    author: "María Inés Percival",
    rating: 5,
    date: "Hace 4 meses",
    text: "Muy buen servicio, atención y post venta. Rápida entrega del pedido en obra. Compramos todo el grueso de la casa y el camión con grúa nos acomodó los bolsones impecable.",
    initials: "MP",
    verified: true
  },
  {
    id: "rev-3",
    author: "Carlos Barrionuevo (Arquitecto)",
    rating: 5,
    date: "Hace 6 meses",
    text: "Buena atención y variedad de materiales. Tiempos de entrega muy buenos. Ideal para arquitectos que necesitamos coordinar entregas precisas. Trato directo y confiable.",
    initials: "CB",
    verified: true
  },
  {
    id: "rev-4",
    author: "Gustavo Alderete",
    rating: 5,
    date: "Hace 3 semanas",
    text: "Atendido por sus propios dueños, con precios competitivos y pronta entrega. Se nota la trayectoria de tantos años en Leloir. Saben asesorarte y no te venden de más.",
    initials: "GA",
    verified: true
  },
  {
    id: "rev-5",
    author: "Patricia Gómez",
    rating: 4,
    date: "Hace 1 mes",
    text: "Entrega garantizada. Años en la zona. Excelente predisposición de los chicos del corralón para coordinar el horario de descarga. Muy recomendables.",
    initials: "PG",
    verified: true
  },
  {
    id: "rev-6",
    author: "Juan Manuel Castro",
    rating: 5,
    date: "Hace 5 meses",
    text: "Recomendable, buena atención y entrega puntual. Los precios son excelentes y el trato es de vecinos de toda la vida. 10 puntos todo el proceso.",
    initials: "JC",
    verified: true
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "70 Años de Trayectoria",
    description: "Fundados en 1956, conocemos el suelo, los accesos de la zona y las necesidades de cada obra en Parque Leloir y alrededores.",
    iconName: "Award"
  },
  {
    title: "Entrega Rápida en Obra",
    description: "Flota propia de camiones volcadores y camiones con hidrogrúa para posicionar tus bolsones donde los necesites, sin demoras.",
    iconName: "Truck"
  },
  {
    title: "Atención de Sus Dueños",
    description: "Atención directa, seria y honesta. Te atendemos nosotros para darte la solución exacta, con el asesoramiento de toda una vida.",
    iconName: "UserCheck"
  },
  {
    title: "Precios Competitivos",
    description: "Alianzas de larga data con marcas líderes nos permiten ofrecerte excelentes presupuestos para compras chicas o acopios de obra entera.",
    iconName: "TrendingDown"
  },
  {
    title: "Variedad de Materiales",
    description: "Desde arena y cemento hasta hierros, ladrillos huecos y aditivos. Encontrá todo en un solo lugar y ahorrá costos de flete.",
    iconName: "Package"
  },
  {
    title: "Soluciones Rápidas",
    description: "La obra no espera. Respondemos presupuestos por WhatsApp en minutos y resolvemos cualquier imprevisto de forma profesional.",
    iconName: "Zap"
  }
];

export const CLIENT_SEGMENTS = [
  {
    title: "Para Familias",
    badge: "Construcción / Refacción",
    description: "Te ayudamos a comprar lo justo y necesario para tu casa sin gastar de más. Asesoramiento amigable y entrega cuidada.",
    phrase: "«Te explicamos qué materiales necesitás y te acompañamos paso a paso en tu proyecto»"
  },
  {
    title: "Para Albañiles y Contratistas",
    badge: "Trabajo Diario",
    description: "Materiales rápidos en obra para no detener los trabajos. Trato de colega, cuentas claras, variedad y descarga veloz.",
    phrase: "«Sabemos que el día del albañil vale oro. Descarga rápida y entrega garantizada»"
  },
  {
    title: "Para Arquitectos y Profesionales",
    badge: "Grandes Obras & Acopios",
    description: "Coordinación estricta, cumplimiento de plazos, presupuestos formales claros y stock garantizado para obras a gran escala.",
    phrase: "«Soporte profesional, logística con grúas y acopios seguros para tus proyectos en la zona»"
  },
  {
    title: "Para Pequeñas Refacciones",
    badge: "Arreglos Rápidos",
    description: "Resolvé rápido sin perder tiempo recorriendo corralones. Compras en bolsones, bolsas individuales y entrega inmediata.",
    phrase: "«¿Un revoque, un contrapiso, un baño nuevo? Te enviamos el bolsón y las bolsas en el día»"
  }
];
