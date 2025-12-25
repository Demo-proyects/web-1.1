// ==================== BASE DE DATOS DE PRODUCTOS COMPLETA ====================
const productsDatabase = [
    
    // ========================================================================
    // 1. NUEVOS PRODUCTOS (IDS 1000-1019) - IMÁGENES LOCALES
    // ========================================================================

    // --- Jeans Cortos ---
    {
        id: 1000,
        name: "Jeans Short Corte Clásico para Verano",
        price: 950.00,
        category: "men",
        subcategory: "clothes",
        tag: "Jeans Cortos",
        image: "img/jeans-corto-1.png", 
        colors: ['Azul Claro', 'Negro'],
        sizes: ['30', '32', '34', '36'],
        description: "Shorts de jean en corte clásico, ideales para días calurosos. Tejido denim elástico y cómodo.",
        rating: 4.5,
        reviews: 150,
        seller: "DenimCasual",
        shipping: "Envío gratis",
        stock: 45
    },
    {
        id: 1001,
        name: "Jeans Short Desgastado Slim Fit",
        price: 1050.00,
        category: "men",
        subcategory: "clothes",
        tag: "Jeans Cortos",
        image: "img/jeans-corto-2.png",
        colors: ['Blanco', 'Gris'],
        sizes: ['28', '30', '32', '34'],
        description: "Shorts de jean con estilo slim fit y ligeros detalles de desgaste. Comodidad y moda urbana.",
        rating: 4.6,
        reviews: 120,
        seller: "UrbanWear RD",
        shipping: "Envío gratis",
        stock: 30
    },

    // --- Jeans Largos ---
    {
        id: 1002,
        name: "Jeans Largo Clásico Regular Fit",
        price: 1350.00,
        category: "men",
        subcategory: "clothes",
        tag: "Jeans Largos",
        image: "img/jeans-1.png",
        colors: ['Azul Oscuro', 'Negro', 'Gris'],
        sizes: ['30', '32', '34', '36', '38'],
        description: "Jeans de corte regular fit, denim de alta resistencia. Un básico imprescindible.",
        rating: 4.8,
        reviews: 210,
        seller: "DenimDominicano",
        shipping: "Envío gratis",
        stock: 50
    },
    {
        id: 1003,
        name: "Jeans Largo Slim Tapered",
        price: 1450.00,
        category: "men",
        subcategory: "clothes",
        tag: "Jeans Largos",
        image: "img/jeans-2.png",
        colors: ['Azul Claro', 'Khaki', 'Verde'],
        sizes: ['28', '30', '32', '34', '36'],
        description: "Jeans modernos con corte slim y acabado tapered. Elasticidad para mayor confort.",
        rating: 4.7,
        reviews: 180,
        seller: "SlimDenim RD",
        shipping: "Envío gratis",
        stock: 40
    },

    // --- Camisas Manga Corta ---
    {
        id: 1004,
        name: "Camisa de Baloncesto Dry-Fit Manga Corta",
        price: 1250.00,
        category: "men",
        subcategory: "clothes",
        tag: "Camisas Manga Corta",
        image: "img/camisa-manga-corta-1.png",
        colors: ['Blanco', 'Azul'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: "Camisa de vestir en algodón egipcio, corte clásico.",
        rating: 4.8,
        reviews: 192,
        seller: "FormalWear RD",
        shipping: "Envío gratis",
        stock: 28
    },
    {
        id: 1005,
        name: "Camisa Casual Cuadros Franela",
        price: 1100.00,
        category: "men",
        subcategory: "clothes",
        tag: "Camisas Manga Corta",
        image: "img/camisa-manga-corta-2.png",
        colors: ['Negro', 'Vino'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Camisa de franela a cuadros, cómoda y cálida. Perfecta para looks casuales de fin de semana.",
        rating: 4.6,
        reviews: 140,
        seller: "CasualMen RD",
        shipping: "Envío gratis",
        stock: 35
    },
    {
        id: 1006,
        name: "Camisa de Lino Unicolor Manga Corta",
        price: 1150.00,
        category: "men",
        subcategory: "clothes",
        tag: "Camisas Manga Corta",
        image: "img/camisa-manga-corta-3.png",
        colors: ['Gris', 'Verde'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Camisa de lino fresca y ligera, ideal para climas cálidos. Estilo resort.",
        rating: 4.7,
        reviews: 160,
        seller: "LinoStyle RD",
        shipping: "Envío gratis",
        stock: 30
    },

    // --- Camisas ---
    {
        id: 1007,
        name: "Camisa Casual Negra y Azul",
        price: 850.00,
        category: "men",
        subcategory: "clothes",
        tag: "Camisas",
        image: "img/camisa-1.png",
        colors: ['Azul Marino', 'Blanco', 'Rojo'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: "Polo de algodón pima, cuello reforzado y corte moderno.",
        rating: 4.5,
        reviews: 145,
        seller: "PoloDominicano",
        shipping: "Envío gratis",
        stock: 35
    },
    {
        id: 1008,
        name: "Camiseta de Mujer Estampado Floral",
        price: 900.00,
        category: "women",
        subcategory: "clothes",
        tag: "Camisa",
        image: "img/camisa-mujer-1.png",
        colors: ['Azul/Estampado', 'Gris/Estampado', 'Verde/Estampado'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Camiseta de manga corta con estampado floral, ideal para un look tropical casual.",
        rating: 4.4,
        reviews: 98,
        seller: "SummerPrints RD",
        shipping: "Envío gratis",
        stock: 25
    },
    {
        id: 1009,
        name: "Camisa Lino Cuello Mao",
        price: 1000.00,
        category: "men",
        subcategory: "clothes",
        tag: "Camisas Casuales",
        image: "img/camisa-2.png",
        colors: ['Beige', 'Celeste', 'Rosado'],
        sizes: ['M', 'L', 'XL'],
        description: "Camisa de lino con cuello mao y corte relajado. Frescura garantizada.",
        rating: 4.7,
        reviews: 110,
        seller: "LinoStyle RD",
        shipping: "Envío gratis",
        stock: 20
    },

    // --- Camisa Baloncesto ---
    {
        id: 1010,
        name: "Jersey Baloncesto Dry-Fit 'Dominican Dream'",
        price: 1150.00,
        category: "women",
        subcategory: "clothes",
        tag: "Camisa Baloncesto",
        image: "img/manga-corta-mujer-1.png",
        colors: ['Rojo/Blanco', 'Azul/Amarillo', 'Negro/Rojo', 'Verde/Negro'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: "Jersey deportivo de baloncesto en tejido Dry-Fit transpirable. Diseño de alta visibilidad.",
        rating: 4.9,
        reviews: 205,
        seller: "BasketPro RD",
        shipping: "Envío gratis",
        stock: 40
    },

    // --- Tenis ---
    {
        id: 1011,
        name: "Tenis Running de Alto Rendimiento con Gel",
        price: 2400.00,
        category: "women",
        subcategory: "shoes",
        tag: "Tenis",
        image: "img/tenis-1.png",
        colors: ['Negro/Blanco', 'Gris/Azul', 'Rojo'],
        sizes: ['40', '41', '42', '43', '44', '45'],
        description: "Tenis de running con amortiguación en gel, ideales para largas distancias.",
        rating: 4.8,
        reviews: 230,
        seller: "RunDominicana",
        shipping: "Envío gratis",
        stock: 35
    },
    {
        id: 1012,
        name: "Tenis Casuales Clásicos de Cuero Sintético",
        price: 1600.00,
        category: "men",
        subcategory: "shoes",
        tag: "Tenis",
        image: "img/tenis-2.png",
        colors: ['Blanco', 'Negro', 'Azul Marino'],
        sizes: ['39', '40', '41', '42', '43', '44'],
        description: "Tenis de estilo clásico, versátiles para uso diario. Material de cuero sintético premium.",
        rating: 4.7,
        reviews: 190,
        seller: "UrbanShoes RD",
        shipping: "Envío gratis",
        stock: 40
    },
    {
        id: 1013,
        name: "Tenis de Baloncesto High-Top Pro",
        price: 2800.00,
        category: "men",
        subcategory: "shoes",
        tag: "Tenis",
        image: "img/tenis-3.png",
        colors: ['Negro/Amarillo', 'Blanco/Rojo', 'Azul/Naranja'],
        sizes: ['40', '41', '42', '43', '44', '45'],
        description: "Tenis profesionales de baloncesto con soporte de tobillo High-Top y suela de agarre superior.",
        rating: 4.9,
        reviews: 150,
        seller: "BasketPro RD",
        shipping: "Envío gratis",
        stock: 25
    },
    {
        id: 1014,
        name: "Tenis Estilo Urbano con Suela Chunky",
        price: 1850.00,
        category: "men",
        subcategory: "shoes",
        tag: "Tenis",
        image: "img/tenis-4.png",
        colors: ['Gris', 'Khaki', 'Marrón'],
        sizes: ['39', '40', '41', '42', '43', '44'],
        description: "Tenis de diseño vanguardista con suela gruesa (chunky). Máximo confort y estilo.",
        rating: 4.6,
        reviews: 110,
        seller: "StreetStyle RD",
        shipping: "Envío gratis",
        stock: 30
    },

    // --- Gorras ---
    {
        id: 1015,
        name: "Gorra Deportiva con Malla Transpirable",
        price: 650.00,
        category: "men",
        subcategory: "accessories",
        tag: "Gorras",
        image: "img/gorra-1.png",
        colors: ['Negro', 'Rojo', 'Blanco'],
        sizes: ['Única'],
        description: "Gorra deportiva con parte trasera de malla para ventilación. Ajustable y ligera.",
        rating: 4.7,
        reviews: 180,
        seller: "SportGear RD",
        shipping: "Envío gratis",
        stock: 50
    },
    {
        id: 1016,
        name: "Gorra de Béisbol Algodón Premium",
        price: 750.00,
        category: "men",
        subcategory: "accessories",
        tag: "Gorras",
        image: "img/gorra-2.png",
        colors: ['Azul Marino', 'Gris', 'Verde Olivo'],
        sizes: ['Única'],
        description: "Gorra estilo béisbol en algodón premium. Diseño clásico y visera curva.",
        rating: 4.6,
        reviews: 145,
        seller: "CapMasters RD",
        shipping: "Envío gratis",
        stock: 40
    },

    // --- Cinturones ---
    {
        id: 1017,
        name: "Cinturón Azul Genuino Hebilla Clásica",
        price: 850.00,
        category: "men",
        subcategory: "accessories",
        tag: "Cinturones",
        image: "img/cinturon-1.png",
        colors: ['Negro', 'Marrón', 'Café'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Cinturón de cuero genuino, perfecto para trajes o ropa formal. Hebilla de metal simple.",
        rating: 4.8,
        reviews: 160,
        seller: "LeatherGoods RD",
        shipping: "Envío gratis",
        stock: 35
    },
    {
        id: 1018,
        name: "Cinturón Casual de Lona con Anillo Doble",
        price: 650.00,
        category: "men",
        subcategory: "accessories",
        tag: "Cinturones",
        image: "img/cinturon-2.png",
        colors: ['Azul', 'Verde', 'Rojo'],
        sizes: ['Única'],
        description: "Cinturón de lona de estilo casual con cierre de doble anillo. Ideal para jeans y shorts.",
        rating: 4.5,
        reviews: 120,
        seller: "CasualBelts RD",
        shipping: "Envío gratis",
        stock: 40
    },

    // --- Conjunto ---
    {
        id: 1019,
        name: "Conjunto Urbano Deportivo (Short, Camisa, Tenis, Gorra)",
        price: 4500.00,
        category: "kids",
        subcategory: "sets",
        tag: "Conjuntos",
        image: "img/conjunto-1.png",
        colors: ['Negro/Rojo', 'Azul/Blanco'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Conjunto completo que incluye short deportivo, camisa manga corta, tenis, gorra y cinturón de lona, todos coordinados.",
        rating: 4.9,
        reviews: 90,
        seller: "StyleSets RD",
        shipping: "Envío gratis",
        stock: 20
    },
    {
        id: 1020,
        name: "Conjunto Urbano Deportivo (Short, Camisa, Tenis, Gorra)",
        price: 4500.00,
        category: "kids",
        subcategory: "sets",
        tag: "Conjuntos",
        image: "img/conjunto-2.png",
        colors: ['Negro/Rojo', 'Azul/Blanco'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Conjunto completo que incluye short deportivo, camisa, tenis, gorra, todos coordinados.",
        rating: 4.9,
        reviews: 50,
        seller: "StyleSets RD",
        shipping: "Envío gratis",
        stock: 20
    },
    // ========================================================================
// 2. CONJUNTOS MUJER (IDS 1020-1021) - IMÁGENES LOCALES
// ========================================================================

// --- Conjunto Urbano Mujer ---
{
    id: 1021,
    name: "Conjunto Urbano Mujer Camisa + Gorra + Tenis + Short",
    price: 2950.00,
    category: "women",
    subcategory: "clothes",
    tag: "Conjuntos Urbanos",
    image: "img/conjunto-mujer-1.png",
    colors: ['Negro', 'Beige', 'Blanco'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: "Conjunto urbano femenino compuesto por camisa oversize, gorra ajustable, tenis deportivos y short corto. Ideal para un look street moderno y cómodo.",
    rating: 4.8,
    reviews: 165,
    seller: "UrbanQueen RD",
    shipping: "Envío gratis",
    stock: 22
},
{
    id: 1022,
    name: "Conjunto Deportivo Casual Mujer Verano",
    price: 3100.00,
    category: "women",
    subcategory: "clothes",
    tag: "Conjuntos Urbanos",
    image: "img/conjunto-mujer-2.png",
    colors: ['Rosado', 'Celeste', 'Gris'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: "Conjunto casual para mujer con camisa crop, gorra urbana, tenis ligeros y short corto de cintura alta. Perfecto para verano y actividades diarias.",
    rating: 4.7,
    reviews: 142,
    seller: "StreetGirls RD",
    shipping: "Envío gratis",
    stock: 18
},
];

// ==================== DATOS DE FILTROS ====================
const filterData = {
    all: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop' },
            { id: 'women', label: 'Mujer', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop' },
            { id: 'men', label: 'Hombre', img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=100&h=100&fit=crop' },
            { id: 'kids', label: 'Niños', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=100&h=100&fit=crop' },
            { id: 'sports', label: 'Deportivo', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=100&h=100&fit=crop' }
        ],
        l3: { all: ['Todos', 'Más vendidos', 'Ofertas', 'Nuevos', 'Mejor valorados'] }
    },
    women: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop' },
            { id: 'clothes', label: 'Ropa', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100&h=100&fit=crop' },
            { id: 'shoes', label: 'Calzado', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&h=100&fit=crop' },
            { id: 'jewelry', label: 'Joyería', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop' },
            { id: 'bags', label: 'Bolsos', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop' },
            { id: 'underwear', label: 'Ropa interior', img: 'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=100&h=100&fit=crop' }
        ],
        l3: {
            clothes: ['Todos', 'Vestidos', 'Blusas', 'Pantalones', 'Faldas', 'Abrigos'],
            shoes: ['Todos', 'Tacones', 'Deportivos', 'Sandalias', 'Botas'],
            jewelry: ['Todos', 'Collares', 'Aretes', 'Pulseras', 'Anillos'],
            bags: ['Todos', 'Carteras', 'Mochilas', 'Bolsos de mano']
        }
    },
    men: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=100&h=100&fit=crop' },
            { id: 'clothes', label: 'Ropa', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=100&h=100&fit=crop' },
            { id: 'shoes', label: 'Calzado', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop' },
            { id: 'accessories', label: 'Accesorios', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&h=100&fit=crop' },
            { id: 'watches', label: 'Relojes', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=100&h=100&fit=crop' }
        ],
        l3: {
            clothes: ['Todos', 'Camisas', 'Pantalones', 'Chaquetas', 'Trajes', 'Polos', 'Jeans Cortos', 'Jeans Largos', 'Camisas Manga Normal', 'Camisas Manga Corta', 'Camisa Baloncesto'],
            shoes: ['Todos', 'Deportivos', 'Formales', 'Botas', 'Sandalias', 'Tenis'],
            accessories: ['Todos', 'Cinturones', 'Corbatas', 'Gorras', 'Bufandas']
        }
    },
    kids: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=100&h=100&fit=crop' },
            { id: 'clothes', label: 'Ropa', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=100&h=100&fit=crop' },
            { id: 'shoes', label: 'Calzado', img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=100&h=100&fit=crop' },
            { id: 'toys', label: 'Accesorios', img: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=100&h=100&fit=crop' },
            { id: 'school', label: 'Escolar', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop' }
        ],
        l3: { clothes: ['Todos', 'Niñas', 'Niños', 'Bebés', 'Ofertas'], shoes: ['Todos', 'Deportivos', 'Escolares', 'Sandalias'], toys: ['Todos', 'Educativos', 'Peluches', 'Juegos de mesa'] }
    },
    sports: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=100&h=100&fit=crop' },
            { id: 'clothes', label: 'Ropa deportiva', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop' },
            { id: 'shoes', label: 'Calzado', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop' },
            { id: 'equipment', label: 'Equipamiento', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop' }
        ],
        l3: { clothes: ['Todos', 'Camisetas', 'Shorts', 'Leggins', 'Chaquetas'], equipment: ['Todos', 'Pesas', 'Yoga', 'Cardio', 'Accesorios'] }
    },
    oferta: {
        l2: [
            { id: 'all', label: 'Todos', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop' },
            { id: 'women', label: 'Mujer', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop' },
            { id: 'men', label: 'Hombre', img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=100&h=100&fit=crop' },
            { id: 'kids', label: 'Niño', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=100&h=100&fit=crop' }
        ],
        l3: { all: ['Todos', 'Ofertas completas', 'Combinaciones'], women: ['Todos', 'Ofertas completas', 'Combinaciones'], men: ['Todos', 'Ofertas completas', 'Combinaciones'], kids: ['Todos', 'Ofertas completas', 'Combinaciones'] }
    }
};

// ==================== VARIABLES GLOBALES ====================
const l1Categories=[{id:'all',label:'Todos'},{id:'women',label:'Mujer'},{id:'men',label:'Hombre'},{id:'kids',label:'Niños'},{id:'sports',label:'Deportivo'},{id:'oferta',label:'Oferta'}];

let state={
    l1:'all',
    l2:'all',
    l3:'',
    desktopPrices: [], 
    desktopColors: [], 
    sortBy: 'featured'
};

// MODIFICACIÓN: Variables para la lógica de los primeros 20 aleatorios
let initialShuffledProducts = []; // Aquí guardaremos los 20 primeros mezclados
const NUMBER_OF_PRODUCTS_HOME = 20;

let visibleProducts = productsDatabase.length; 
const productsPerPage = 10; 
let currentFilteredProducts=[];

// >>>>> VARIABLES AÑADIDAS PARA CARRITO Y MODAL DE PRODUCTO <<<<<
let cartItems = [];
let cartCount = 0;
let modalState = {
    product: null,
    selectedColor: null,
    selectedSize: null,
    quantity: 1,
    maxStock: 0,
    shoeGender: null,
    cart: {} 
};
let totalStockCollapse = {isCollapsed: false, color: null, size: null};

// ==================== REFERENCIAS DOM ====================
const els={
    activeFilters:document.getElementById('activeFilters'),categoriesWrapper:document.getElementById('categoriesWrapper'),
    megaMenu:document.getElementById('megaMenu'),level1Filters:document.getElementById('level1Filters'),
    level2Filters:document.getElementById('level2Filters'),level3Filters:document.getElementById('level3Filters'),
    menuL1:document.getElementById('menu-l1-list'),menuL2:document.getElementById('menu-l2-grid'),
    locationModal:document.getElementById('locationModal'),registerModal:document.getElementById('registerModal'),
    cartModal:document.getElementById('cartModal'),cartModalBody:document.getElementById('cartModalBody'),
    cartTotalAmount:document.getElementById('cartTotalAmount'),cartErrorMessage:document.getElementById('cartErrorMessage'),
    cartErrorText:document.getElementById('cartErrorText'),productsGrid:document.getElementById('products-grid'),
    loadMoreContainer:document.getElementById('loadMoreContainer'),productModalOverlay:document.getElementById('productModalOverlay'),
    productModalContent:document.getElementById('productModalContent'),toast:document.getElementById('toastNotification'),
    globalCartCount:document.getElementById('globalCartCount'),
    modalBody:document.getElementById('modalBody'),desktopMainImage:document.getElementById('desktopMainImage'),
    mobileMain1:document.getElementById('mobileMain1'),mobileMain2:document.getElementById('mobileMain2'),
    mobileMain3:document.getElementById('mobileMain3'),modalTitle:document.getElementById('modalTitle'),
    mobileShortDescription:document.getElementById('mobileShortDescription'),mobilePrice:document.getElementById('mobilePrice'),
    mobileOldPrice:document.getElementById('mobileOldPrice'),mobileBadgeText:document.getElementById('mobileBadgeText'),
    desktopBadgeText:document.getElementById('desktopBadgeText'),salesCount:document.getElementById('salesCount'),
    sellerName:document.getElementById('sellerName'),modalPrice:document.getElementById('modalPrice'),
    oldPrice:document.getElementById('oldPrice'),mobileColorLabel:document.getElementById('mobileColorLabel'),
    desktopColorLabel:document.getElementById('desktopColorLabel'),colorContainer:document.getElementById('colorContainer'),
    sizeContainer:document.getElementById('sizeContainer'),sizeSection:document.getElementById('sizeSection'),
    stockWarning:document.getElementById('stockWarning'),qtyMinusBtn:document.getElementById('qtyMinusBtn'),
    currentInputQty:document.getElementById('currentInputQty'),qtyPlusBtn:document.getElementById('qtyPlusBtn'),
    stockMessage:document.getElementById('stockMessage'),actionButtonContainer:document.getElementById('actionButtonContainer'),
    mobileGallery:document.getElementById('mobileGallery')
};

// ==================== FUNCIONES NUEVAS: MEZCLA ALEATORIA ====================
// Esta función toma un array y lo mezcla aleatoriamente (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Normaliza la base de datos: elimina productos con imágenes externas,
// agrega valores por defecto y ajusta category/subcategory/tag según
// el nombre del archivo de imagen.
function normalizeProductsDatabase(){
    // Mantener solo productos con imágenes locales (empiezan por 'img/')
    const filtered = productsDatabase.filter(p=>p && p.image && typeof p.image==='string' && p.image.startsWith('img/'));
    // Vaciar y reinsertar en el array original para mantener la referencia
    productsDatabase.length = 0;
    filtered.forEach(p=>productsDatabase.push(p));

    // Heurísticas para inferir campos
    productsDatabase.forEach(p=>{
        if(!p.id) p.id = Math.floor(Math.random()*1000000);
        if(!p.name) p.name = (p.image||'').split('/').pop().replace(/[-_]/g,' ').replace(/\.[^.]+$/,'');
        if(!p.price) p.price = 999.00;
        if(!p.colors || !Array.isArray(p.colors) || p.colors.length===0) p.colors = ['Default'];
        if(!p.sizes || !Array.isArray(p.sizes) || p.sizes.length===0) p.sizes = ['S','M','L'];
        if(!p.description) p.description = p.name + ' - Descripción no disponible.';
        if(!p.rating) p.rating = 4.5;
        if(!p.reviews) p.reviews = 10;
        if(!p.seller) p.seller = 'Tienda Local';
        if(!p.shipping) p.shipping = 'Envío gratis';
        if(!p.stock && p.stock !== 0) p.stock = 10;

        const fname = (p.image||'').split('/').pop().toLowerCase();

        // Inferir subcategory y tag
        let inferredSub='clothes';
        let inferredTag = p.tag || '';
        if(/tenis|sneaker|shoe|zapato/.test(fname)){
            inferredSub = 'shoes'; inferredTag = inferredTag || 'Tenis';
        } else if(/jeans|pantalon|pantalones/.test(fname)){
            inferredSub = 'clothes';
            if(/corto|short/.test(fname)) inferredTag = inferredTag || 'Jeans Cortos';
            else if(/largo/.test(fname)) inferredTag = inferredTag || 'Jeans Largos';
            else inferredTag = inferredTag || 'Jeans';
        } else if(/camisa|manga|polo|blusa|jersey/.test(fname)){
            inferredSub = 'clothes';
            if(/manga-corta|manga-corta|mujer-manga-corta/.test(fname)) inferredTag = inferredTag || 'Camisas Manga Corta';
            else if(/baloncesto|basket|jersey/.test(fname)) inferredTag = inferredTag || 'Camisa Baloncesto';
            else inferredTag = inferredTag || 'Camisas';
        } else if(/gorra|cap|gorro/.test(fname)){
            inferredSub = 'accessories'; inferredTag = inferredTag || 'Gorras';
        } else if(/cinturon|cintur[oó]n|belt/.test(fname)){
            inferredSub = 'accessories'; inferredTag = inferredTag || 'Cinturones';
        } else if(/conjunto|set|combo/.test(fname)){
            inferredSub = 'sets'; inferredTag = inferredTag || 'Conjuntos';
        }

        // Inferir category por pistas (mujer/kids) en filename o nombre
        let inferredCat = p.category || 'men';
        if(/mujer|woman|women/.test(fname) || /mujer|woman|women/.test((p.name||'').toLowerCase())) inferredCat = 'women';
        if(/ni[oó]o|kids|kid|child/.test(fname) || /ni[oó]o|kids/.test((p.name||'').toLowerCase())) inferredCat = 'kids';

        p.subcategory = inferredSub;
        p.tag = inferredTag;
        p.category = inferredCat;
    });
}

// ==================== FUNCIONES MODAL UBICACIÓN ====================
function openModal(){els.locationModal.classList.add('open');closeMenu();}
function closeModal(){els.locationModal.classList.remove('open');}
if(els.locationModal) els.locationModal.addEventListener('click',(e)=>{if(e.target===els.locationModal)closeModal();});

// ==================== FUNCIONES MODAL MAPA ====================
function openMapModal(){document.getElementById('mapModal').classList.add('open');}
function closeMapModal(){document.getElementById('mapModal').classList.remove('open');}
const mapModalObj = document.getElementById('mapModal');
if(mapModalObj) mapModalObj.addEventListener('click',(e)=>{if(e.target===mapModalObj)closeMapModal();});

// ==================== FUNCIONES MODAL REGISTRO ====================
function openRegisterModal(){els.registerModal.classList.add('open');}
function closeRegisterModal(){els.registerModal.classList.remove('open');}
function registerUser(){
    const name=document.getElementById('registerName').value,email=document.getElementById('registerEmail').value,
    password=document.getElementById('registerPassword').value,confirmPassword=document.getElementById('registerConfirmPassword').value;
    if(!name||!email||!password||!confirmPassword){alert('Por favor, completa todos los campos');return;}
    if(password!==confirmPassword){alert('Las contraseñas no coinciden');return;}
    setTimeout(()=>{closeRegisterModal();alert('¡Registro completado! Esta es solo una demostración. En una aplicación real, tu cuenta se habría creado correctamente.');},1000);
}
if(els.registerModal) els.registerModal.addEventListener('click',(e)=>{if(e.target===els.registerModal)closeRegisterModal();});

// ==================== FUNCIONES MODAL CARRITO ====================
function openCartModal(){els.cartErrorMessage.classList.add('hidden');renderCartItems();els.cartModal.classList.add('open');}
function closeCartModal(){els.cartModal.classList.remove('open');}
function renderCartItems(){
    if(cartItems.length===0){
    els.cartModalBody.innerHTML=`<div class="cart-empty text-center p-8 text-gray-500"><i data-lucide="shopping-cart" width="48" style="margin:0 auto 1rem;display:block;color:#ccc;"></i><p>Tu carrito está vacío</p></div>`;
    els.cartTotalAmount.textContent='0.00';lucide.createIcons();return;
    }
    let total=0;
    els.cartModalBody.innerHTML=cartItems.map(item=>{
    const itemTotal=item.price*item.quantity;total+=itemTotal;
    return`<div class="cart-item flex items-center py-4 border-b border-gray-200 gap-4">
    <img src="${item.image}" alt="${item.name}" class="cart-item-image w-20 h-20 object-cover rounded-lg flex-shrink-0">
    <div class="cart-item-details flex-grow">
    <div class="cart-item-name font-semibold mb-1">${item.name}</div>
    <div class="cart-item-price text-temu-orange font-bold mb-2">DOP$ ${item.price.toLocaleString('es-DO',{minimumFractionDigits:2})}</div>
    <div class="cart-item-actions flex items-center gap-2">
    <div class="cart-item-qty flex items-center border border-gray-300 rounded overflow-hidden">
    <button class="cart-qty-btn bg-gray-100 border-none w-8 h-8 flex items-center justify-center cursor-pointer" onclick="updateCartItemQty(${item.id},-1)">-</button>
    <input type="text" class="cart-qty-input w-10 h-8 border-none text-center font-medium bg-white" value="${item.quantity}" readonly>
    <button class="cart-qty-btn bg-gray-100 border-none w-8 h-8 flex items-center justify-center cursor-pointer" onclick="updateCartItemQty(${item.id},1)">+</button>
    </div>
    <button class="cart-remove-btn bg-none border-none text-red-600 cursor-pointer p-1 rounded hover:bg-red-50" onclick="removeFromCart(${item.id})"><i data-lucide="trash-2" width="16"></i></button>
    </div></div>
    <div class="cart-item-total font-bold text-temu-orange">DOP$ ${itemTotal.toLocaleString('es-DO',{minimumFractionDigits:2})}</div>
    </div>`;
    }).join('');
    els.cartTotalAmount.textContent=total.toLocaleString('es-DO',{minimumFractionDigits:2});lucide.createIcons();
}
function updateCartItemQty(productId,change){
    const item=cartItems.find(item=>item.id===productId);if(!item)return;
    item.quantity+=change;if(item.quantity<1){removeFromCart(productId);return;}
    cartCount+=change;els.globalCartCount.textContent=cartCount;renderCartItems();
}
function removeFromCart(productId){
    const itemIndex=cartItems.findIndex(item=>item.id===productId);if(itemIndex===-1)return;
    const item=cartItems[itemIndex];cartCount-=item.quantity;els.globalCartCount.textContent=cartCount;
    cartItems.splice(itemIndex,1);renderCartItems();
}
function checkout(){
    if(cartItems.length===0){alert('Tu carrito está vacío');return;}
    els.cartErrorMessage.classList.add('hidden');
    alert('¡Compra realizada con éxito!');
    cartItems=[];cartCount=0;els.globalCartCount.textContent='0';closeCartModal();
}
if(els.cartModal) els.cartModal.addEventListener('click',(e)=>{if(e.target===els.cartModal)closeCartModal();});

// ==================== FUNCIONES MEGA MENU ====================
function toggleMenu(){window.innerWidth<768?els.megaMenu.classList.toggle('mobile-open'):els.megaMenu.classList.toggle('desktop-open');}
function closeMenu(){els.megaMenu.classList.remove('mobile-open','desktop-open');}

// ==================== UI SIDEBAR DESKTOP ====================
function toggleDesktopSidebar() {
    const sidebar = document.getElementById('desktopFilterSidebar');
    const btnText = document.getElementById('filterBtnText');
    
    if (sidebar.classList.contains('hidden-sidebar')) {
        sidebar.classList.remove('hidden-sidebar');
        sidebar.style.marginLeft = "0";
        if(btnText) btnText.textContent = "Ocultar filtros";
    } else {
        sidebar.classList.add('hidden-sidebar');
        sidebar.style.marginLeft = "-280px";
        if(btnText) btnText.textContent = "Mostrar filtros";
    }
}

function toggleFilterSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const icon = document.getElementById(sectionId + '-icon');
    if(!content || !icon) return;

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(-90deg)';
    } else {
        content.classList.add('open');
        content.style.maxHeight = '500px';
        icon.style.transform = 'rotate(0deg)';
    }
}

// ==================== RENDERIZADO FILTROS MÓVIL ====================
function renderL1(){
    if(els.level1Filters) els.level1Filters.innerHTML=l1Categories.map(item=>`<div class="filter-category-1 px-4 py-3 text-sm font-medium text-gray-500 cursor-pointer whitespace-nowrap border-b-2 border-transparent transition-all duration-200 flex-shrink-0 ${state.l1===item.id?'active text-temu-orange border-b-temu-orange font-semibold':''}" onclick="setL1('${item.id}')">${item.label}</div>`).join('');
}
function renderL2(){
    const currentData=filterData[state.l1];if(!currentData || !els.level2Filters)return;
    els.level2Filters.innerHTML=currentData.l2.map(item=>`<div class="filter-category-2 flex flex-col items-center gap-2 min-w-[70px] cursor-pointer flex-shrink-0 ${state.l2===item.id?'active':''}" onclick="setL2('${item.id}')">
    <div class="filter-circle w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-white transition-all duration-200 ${state.l2===item.id?'active border-temu-orange shadow-[0_0_0_2px_rgba(251,119,1,0.2)]':''}"><img src="${item.img}" alt="${item.label}" class="w-full h-full object-cover"></div>
    <div class="filter-name text-xs text-center text-gray-500 font-medium leading-tight ${state.l2===item.id?'active text-temu-orange font-semibold':''}">${item.label}</div></div>`).join('');
}
function renderL3(){
    const currentData=filterData[state.l1];if(!currentData||!currentData.l3){if(els.level3Filters) els.level3Filters.classList.add('hidden');return;}
    if(window.innerWidth>=768){
    // En desktop el L3 se maneja en el sidebar
    let allOptions=new Set();
    if(currentData.l3){for(const subKey in currentData.l3){if(Array.isArray(currentData.l3[subKey])){currentData.l3[subKey].forEach(opt=>{if(opt!=='Todos')allOptions.add(opt);});}}}
    const options=Array.from(allOptions);
    if(options.length===0){if(els.level3Filters) els.level3Filters.classList.add('hidden');return;}
    if(els.level3Filters) els.level3Filters.innerHTML=options.map(opt=>`<div class="filter-tag bg-gray-50 border border-gray-300 px-3 py-2 rounded-full text-xs cursor-pointer whitespace-nowrap transition-all duration-200 text-gray-700 font-medium flex-shrink-0 ${state.l3===opt?'active theme-btn text-white border-temu-orange font-semibold bg-temu-orange':'hover:bg-gray-200 hover:border-gray-400'}" onclick="setL3('${opt}')">${opt}</div>`).join('');
    if(els.level3Filters) options.length>0?els.level3Filters.classList.remove('hidden'):els.level3Filters.classList.add('hidden');
    }else{
    if(!currentData.l3[state.l2]){if(els.level3Filters) els.level3Filters.classList.add('hidden');return;}
    const options=currentData.l3[state.l2];
    if(els.level3Filters) els.level3Filters.innerHTML=options.map(opt=>`<div class="filter-tag bg-gray-50 border border-gray-300 px-3 py-2 rounded-full text-xs cursor-pointer whitespace-nowrap transition-all duration-200 text-gray-700 font-medium flex-shrink-0 ${state.l3===opt?'active theme-btn text-white border-temu-orange font-semibold bg-temu-orange':'hover:bg-gray-200 hover:border-gray-400'}" onclick="setL3('${opt}')">${opt}</div>`).join('');
    if(els.level3Filters) options.length>0&&state.l2!=='all'?els.level3Filters.classList.remove('hidden'):els.level3Filters.classList.add('hidden');
    }}

// ==================== RENDERIZADO SIDEBAR DESKTOP ====================
function renderDesktopSidebar() {
    // 1. Renderizar Categorías Principales (L1)
    const l1Container = document.getElementById('desktopL1Filters');
    if (l1Container) {
        l1Container.innerHTML = l1Categories.map(cat => `
            <div class="filter-option" onclick="setL1('${cat.id}')">
                <div class="flex items-center w-full ${state.l1 === cat.id ? 'text-temu-orange font-bold' : ''}">
                    <span class="w-4 h-4 mr-2 border border-gray-300 rounded-full flex items-center justify-center">
                        ${state.l1 === cat.id ? '<div class="w-2 h-2 bg-temu-orange rounded-full"></div>' : ''}
                    </span>
                    ${cat.label}
                </div>
            </div>
        `).join('');
    }

    // 2. Renderizar Subcategorías (L2)
    const l2Container = document.getElementById('desktopL2Filters');
    if (l2Container) {
        const currentData = filterData[state.l1];
        if (currentData && currentData.l2 && state.l1 !== 'all') {
            l2Container.innerHTML = currentData.l2.map(sub => `
                <div class="filter-option" onclick="setL2('${sub.id}')">
                    <div class="flex items-center w-full ${state.l2 === sub.id ? 'text-temu-orange font-bold' : ''}">
                        <input type="radio" name="desktop_l2" ${state.l2 === sub.id ? 'checked' : ''} class="accent-orange-600 mr-2 cursor-pointer">
                        ${sub.label}
                    </div>
                </div>
            `).join('');
            const subContent = document.getElementById('subcategory-content');
            const subIcon = document.getElementById('subcategory-icon');
            if(subContent) { subContent.classList.add('open'); subContent.style.maxHeight = '500px'; }
            if(subIcon) { subIcon.style.transform = 'rotate(0deg)'; }
        } else {
            l2Container.innerHTML = '<p class="text-xs text-gray-400 p-2">Selecciona una categoría</p>';
        }
    }
    
    // 3. Renderizar Tags (L3)
    const l3Container = document.getElementById('desktopL3Filters');
    if (l3Container) {
        const currentData = filterData[state.l1];
        let options = [];
        if (currentData && currentData.l3) {
            if (state.l2 !== 'all' && currentData.l3[state.l2]) {
                options = currentData.l3[state.l2];
            } else {
                let allOptions = new Set();
                for (const key in currentData.l3) {
                    if(Array.isArray(currentData.l3[key])) currentData.l3[key].forEach(opt => { if (opt !== 'Todos') allOptions.add(opt); });
                }
                options = Array.from(allOptions);
            }
        }
        if (options.length > 0) {
            l3Container.innerHTML = options.map(tag => `
                <div class="filter-option" onclick="setL3('${tag}')">
                    <div class="flex items-center w-full ${state.l3 === tag ? 'text-temu-orange font-bold' : ''}">
                        <input type="radio" name="desktop_l3" ${state.l3 === tag ? 'checked' : ''} class="accent-orange-600 mr-2 cursor-pointer">
                        ${tag}
                    </div>
                </div>
            `).join('');
                
                const tagContent = document.getElementById('tags-content');
                const tagIcon = document.getElementById('tags-icon');
                if(tagContent) { tagContent.classList.add('open'); tagContent.style.maxHeight = '500px'; }
                if(tagIcon) { tagIcon.style.transform = 'rotate(0deg)'; }
        } else {
                l3Container.innerHTML = '<p class="text-xs text-gray-400 p-2">No hay etiquetas</p>';
        }
    }
}

// ==================== MENÚ HAMBURGUESA ====================
function renderMenuL1(){
    if(els.menuL1) els.menuL1.innerHTML=l1Categories.map(item=>`<div class="mm-item px-4 py-2.5 cursor-pointer text-sm text-gray-500 flex justify-between items-center transition-all duration-200 ${state.l1===item.id?'active bg-white text-temu-orange font-semibold border-l-4 border-temu-orange':''}" onmouseenter="renderMenuL2('${item.id}')" onclick="menuSelect('${item.id}','all')"><span>${item.label}</span><i data-lucide="chevron-right" width="14"></i></div>`).join('');
    lucide.createIcons();renderMenuL2(state.l1||'all');
}
function renderMenuL2(l1Id){
    const allItems=document.querySelectorAll('.mm-item');allItems.forEach(el=>el.classList.remove('active','bg-white','text-temu-orange','font-semibold','border-l-4','border-temu-orange'));
    const activeItem=Array.from(allItems).find(el=>el.getAttribute('onclick').includes(`'${l1Id}'`));if(activeItem)activeItem.classList.add('active','bg-white','text-temu-orange','font-semibold','border-l-4','border-temu-orange');
    const data=filterData[l1Id];
    if(!els.menuL2) return;
    if(!data){els.menuL2.innerHTML='<p class="text-gray-500 text-sm">No hay subcategorías</p>';return;}
    els.menuL2.innerHTML=data.l2.map(item=>`<div class="filter-category-2 flex flex-col items-center gap-2 min-w-[80px] cursor-pointer" onclick="menuSelect('${l1Id}','${item.id}')">
    <div class="filter-circle w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-white hover:border-temu-orange transition-colors"><img src="${item.img}" alt="${item.label}" class="w-full h-full object-cover"></div>
    <div class="filter-name text-xs text-center text-gray-500 font-medium leading-tight">${item.label}</div></div>`).join('');
}
function menuSelect(l1Id,l2Id){
    state.l1 = l1Id;
    state.l2 = l2Id;
    state.l3 = '';
    
    if(l2Id === 'all'){
        renderMenuL2(l1Id);
        updateUI();
        return;
    }

    renderMenuL1();
    updateUI();
    closeMenu();
}

// ==================== LÓGICA FILTROS ====================
function setL1(id){state.l1=id;state.l2='all';state.l3='';visibleProducts=productsPerPage;updateUI();}
function setL2(id){state.l2=id;state.l3='';visibleProducts=productsPerPage;updateUI();}
function setL3(val){state.l3=val;visibleProducts=productsPerPage;renderL3();filterProducts();updateBreadcrumbs();}

function updateBreadcrumbs(){
    const l1Label=l1Categories.find(c=>c.id===state.l1)?.label||'Todos';let l2Label='',l3Label='';
    if(state.l2!=='all'){const l2Data=filterData[state.l1]?.l2.find(s=>s.id===state.l2);l2Label=l2Data?` › ${l2Data.label}`:'';}
    if(state.l3&&state.l3!==''&&state.l3!=='Todos'){l3Label=` › ${state.l3}`;}
    if(els.activeFilters) els.activeFilters.innerHTML=`<span class="text-temu-orange"><i data-lucide="filter" class="w-4 h-4 inline mr-1"></i><span class="font-bold">Filtros:</span></span><span class="ml-1">${l1Label}${l2Label}${l3Label}</span>${(state.l1!=='all'||state.l2!=='all'||(state.l3&&state.l3!==''))?`<button onclick="resetFilters()" class="ml-3 text-xs text-gray-500 hover:text-temu-orange border border-gray-300 hover:border-temu-orange px-2 py-1 rounded transition-colors"><i data-lucide="x-circle" class="w-3 h-3 inline mr-1"></i>Limpiar filtros</button>`:''}`;
    lucide.createIcons();
}

function resetFilters(){
    state.l1='all';state.l2='all';state.l3='';
    state.desktopPrices = [];
    state.desktopColors = [];
    state.sortBy = 'featured';
    
    document.querySelectorAll('input[type="checkbox"]').forEach(box => box.checked = false);
    const sortSelect = document.querySelector('select[onchange^="handleSort"]');
    if(sortSelect) sortSelect.value = 'featured';

    visibleProducts = productsDatabase.length;
    updateUI();
}

function updateUI(){
    renderL1();
    updateVisibility();

    // Normalizar la base de datos: eliminar externos y completar campos
    normalizeProductsDatabase();
    renderDesktopSidebar(); 
    filterProducts();
    updateBreadcrumbs();
}

function updateVisibility(){
    if(window.innerWidth<768){
        if(state.l1==='all'||!filterData[state.l1]){
            if(els.level2Filters) els.level2Filters.classList.add('hidden');
            if(els.level3Filters) els.level3Filters.classList.add('hidden');
            return;
        }
        if(els.level2Filters) els.level2Filters.classList.remove('hidden');
        renderL2();
        const currentData=filterData[state.l1];const hasL3=currentData.l3&&currentData.l3[state.l2];
        if(hasL3&&state.l2!=='all'){renderL3();if(els.level3Filters) els.level3Filters.classList.remove('hidden');}else{if(els.level3Filters) els.level3Filters.classList.add('hidden');}
    }else{
        if(els.level2Filters) els.level2Filters.classList.add('hidden');
        renderL3();
    }
}

// ==================== ORDENAMIENTO Y EVENTOS DE FILTRO ====================
function handleSort(value) {
    state.sortBy = value;
    filterProducts();
}

function setupDesktopFilterListeners() {
    const priceInputs = document.querySelectorAll('#price-content input[type="checkbox"]');
    priceInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                state.desktopPrices.push(e.target.value);
            } else {
                state.desktopPrices = state.desktopPrices.filter(val => val !== e.target.value);
            }
            filterProducts();
        });
    });

    const colorInputs = document.querySelectorAll('#color-content input[type="checkbox"]');
    colorInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                state.desktopColors.push(e.target.value);
            } else {
                state.desktopColors = state.desktopColors.filter(val => val !== e.target.value);
            }
            filterProducts();
        });
    });
}

// ==================== SISTEMA DE PRODUCTOS (FILTRADO COMPLETO) ====================
function filterProducts(){
    let filtered;

    // LÓGICA MODIFICADA: Si es la vista por defecto (Inicio sin filtros)
    // Usamos la lista pre-mezclada de 20 productos.
    const isDefaultHomeView = state.l1 === 'all' && 
                              state.l2 === 'all' && 
                              (!state.l3 || state.l3 === '') &&
                              state.desktopPrices.length === 0 &&
                              state.desktopColors.length === 0;

    if (isDefaultHomeView) {
        // En Home: Usar los 20 mezclados
        filtered = [...initialShuffledProducts];
    } else {
        // Con Filtros: Usar toda la base de datos y filtrar
        filtered = [...productsDatabase];

        if(state.l1!=='all'){filtered=filtered.filter(p=>p.category===state.l1);}
        if(state.l2!=='all'&&state.l1!=='all'){filtered=filtered.filter(p=>p.subcategory===state.l2);}
        if(state.l3&&state.l3!==''&&state.l3!=='Todos'){filtered=filtered.filter(p=>p.tag===state.l3);}

        if (state.desktopColors.length > 0) {
            filtered = filtered.filter(p => {
                return p.colors.some(c => state.desktopColors.includes(c));
            });
        }

        if (state.desktopPrices.length > 0) {
            filtered = filtered.filter(p => {
                const price = p.price;
                return state.desktopPrices.some(range => {
                    if (range === '0-500') return price < 500;
                    if (range === '500-1000') return price >= 500 && price <= 1000;
                    if (range === '1000-2000') return price > 1000 && price <= 2000;
                    if (range === '2000+') return price > 2000;
                    return false;
                });
            });
        }
    }

    switch (state.sortBy) {
        case 'price-low-high': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high-low': filtered.sort((a, b) => b.price - a.price); break;
        case 'newest': filtered.sort((a, b) => b.id - a.id); break;
        // Para 'featured' por defecto, si es Home View mantenemos el orden aleatorio
        case 'featured': default: 
            if(!isDefaultHomeView) {
                filtered.sort((a, b) => b.rating - a.rating); 
            }
            break;
    }

    currentFilteredProducts=filtered;
    renderProducts();
}

function renderProducts(){
    const products=currentFilteredProducts;
    
    // Función para renderizar el contenido de grid (reutilizable)
    const renderGridContent = (gridElement, loadMoreElement) => {
        // Caso: No hay productos en el filtro actual
        if(products.length === 0){
            gridElement.innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center p-8 text-center">
                    <p class="text-gray-500 mb-4">No se encontraron productos con estos filtros.</p>
                    <button onclick="resetFilters()" class="bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        Ver otros productos sugeridos
                    </button>
                </div>`;
            if(loadMoreElement) loadMoreElement.classList.add('hidden');
        } 
        else {
            const productsToShow = products.slice(0, visibleProducts);
            
            gridElement.innerHTML = productsToShow.map(p => {
                return `<div class="product-card" onclick="openProductModal(${p.id})">
                <div class="product-image-container"><img src="${p.image}" alt="${p.name}" class="product-image">
                <button class="product-cart-btn" onclick="addToCartDirect(${p.id},event)"><i data-lucide="shopping-cart" width="16"></i></button></div>
                <div class="product-name px-2 py-3 flex-grow">${p.name}</div>
                <div class="flex items-center mb-1 px-2"><div class="flex text-yellow-400 mr-2">${renderStars(p.rating)}</div><span class="text-xs text-gray-500">(${p.reviews})</span></div>
                <div class="px-2 pb-3"><div class="product-price text-base font-normal">DOP$ ${p.price.toLocaleString('es-DO',{minimumFractionDigits:2})}</div></div>
                <div class="text-xs text-gray-500 px-2 pb-3">${p.shipping}</div></div>`;
            }).join('');
            
            // Lógica del botón Ver Más / Seguir Viendo
            if(loadMoreElement) {
                if(products.length > visibleProducts){
                    // Aún hay más productos en este filtro para cargar
                    loadMoreElement.classList.remove('hidden');
                    loadMoreElement.querySelector('button').innerText = `Ver más productos`;
                    loadMoreElement.querySelector('button').onclick = loadMoreProducts;
                } else if (state.l1 !== 'all' || state.l2 !== 'all' || (state.l3 && state.l3 !== '')) {
                    // Se acabaron los productos de este filtro ESPECÍFICO -> Botón "Seguir explorando todo"
                    loadMoreElement.classList.remove('hidden');
                    loadMoreElement.querySelector('button').innerText = `Seguir explorando todo`;
                    loadMoreElement.querySelector('button').onclick = resetFilters;
                } else {
                    // Se acabaron todos los productos y no hay filtros activos (estás en "Todos")
                    loadMoreElement.classList.add('hidden');
                }
            }
        }
    };

    // Renderizamos ambos grids (móvil y desktop)
    if(els.productsGrid) renderGridContent(els.productsGrid, els.loadMoreContainer);
    
    const desktopGrid = document.getElementById('products-grid-desktop');
    const desktopLoadMore = document.getElementById('loadMoreContainer-desktop');
    if(desktopGrid) renderGridContent(desktopGrid, desktopLoadMore);
    
    lucide.createIcons();
}

function loadMoreProducts(){visibleProducts+=productsPerPage;renderProducts();}
function renderStars(rating){
    const fullStars=Math.floor(rating);const hasHalfStar=rating%1>=0.5;let stars='';
    for(let i=0;i<fullStars;i++)stars+='<svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.045a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.045a1 1 0 00-1.176 0l-2.817 2.045c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.029 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"/></svg>';
    if(hasHalfStar)stars+='<svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.045a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.045a1 1 0 00-1.176 0l-2.817 2.045c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.029 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" clip-path="url(#half-star)"/><defs><clipPath id="half-star"><rect x="0" y="0" width="10" height="20"/></clipPath></defs></svg>';
    const emptyStars=5-fullStars-(hasHalfStar?1:0);for(let i=0;i<emptyStars;i++)stars+='<svg class="w-3 h-3 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.045a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.045a1 1 0 00-1.176 0l-2.817 2.045c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.029 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"/></svg>';
    return stars;
}

// ==================== LÓGICA DEL MODAL DE PRODUCTO COMPLETO ====================
function openProductModal(productId){
    const product=productsDatabase.find(p=>p.id===productId);
    if(!product)return;
    
    modalState.product=product;
    modalState.selectedColor=product.colors[0];
    modalState.selectedSize=product.sizes[0];
    modalState.qty=1;
    modalState.shoeGender=null; // Reiniciar selección de género
    
    const price=product.price;
    
    els.modalTitle.textContent=product.name;
    els.mobileShortDescription.textContent=product.description.substring(0,100)+'...';
    els.salesCount.textContent=`${product.reviews}+ ventas`;
    els.sellerName.textContent=product.seller;
    
    els.modalPrice.textContent=`DOP$ ${price.toLocaleString('es-DO',{minimumFractionDigits:2})}`;
    els.mobilePrice.textContent=`DOP$ ${price.toLocaleString('es-DO',{minimumFractionDigits:2})}`;
    // Sin precio anterior para modo normal
    els.oldPrice.style.display='none';
    els.mobileOldPrice.style.display='none';
    
    const badgeText=`#${Math.floor(Math.random()*10)+1} Más vendidos de este vendedor`;
    els.mobileBadgeText.textContent=badgeText;
    els.desktopBadgeText.textContent=badgeText;
    
    els.desktopMainImage.src=product.image;
    els.mobileMain1.src=product.image;
    els.mobileMain2.src=product.image;
    els.mobileMain3.src=product.image;
    
    if(document.getElementById('thumb1')) document.getElementById('thumb1').querySelector('img').src=product.image;
    if(document.getElementById('thumb2')) document.getElementById('thumb2').querySelector('img').src=product.image;
    if(document.getElementById('thumb3')) document.getElementById('thumb3').querySelector('img').src=product.image;
    if(document.getElementById('thumb4')) document.getElementById('thumb4').querySelector('img').src=product.image;
    
    renderModalColors();
    // Renderizado especial para Zapatos (Insertar selector de género)
    renderShoeGenderSelector(); 
    renderModalSizes();
    
    els.stockMessage.textContent=`${product.stock} disponibles`;
    els.currentInputQty.value=1;
    els.qtyMinusBtn.disabled=true;
    
    checkTotalStockCollapse();
    updateModalUI();
    
    els.productModalOverlay.classList.remove('hidden');
    els.productModalOverlay.classList.add('flex');
    setTimeout(()=>{
    els.productModalOverlay.classList.remove('opacity-0');
    els.productModalOverlay.classList.add('open');
    els.productModalContent.classList.remove('translate-y-full');
    lucide.createIcons(); // Vuelve a renderizar los iconos dentro del modal (estrellas, etc.)
    },50);
}

function closeProductModal(){
    els.productModalOverlay.classList.add('opacity-0');
    els.productModalContent.classList.add('translate-y-full');
    setTimeout(()=>{
    els.productModalOverlay.classList.remove('flex','open');
    els.productModalOverlay.classList.add('hidden');
    },300);
}

if(els.productModalOverlay) els.productModalOverlay.addEventListener('click',(e)=>{
    if(e.target===els.productModalOverlay)closeProductModal();
});

function getStock(color=modalState.selectedColor,size=modalState.selectedSize){
    return modalState.product?.stock || 0;
}

function checkTotalStockCollapse(){
    const stock=getStock();
    if(stock===1){
    totalStockCollapse={isCollapsed:true,color:modalState.selectedColor,size:modalState.selectedSize};
    }else{
    totalStockCollapse={isCollapsed:false,color:null,size:null};
    }
}

function renderModalColors(){
    const colors=modalState.product.colors;
    els.colorContainer.innerHTML=colors.map(color=>{
    const isSelected=modalState.selectedColor===color;
    const isDisabled=totalStockCollapse.isCollapsed&&color!==totalStockCollapse.color;
    return`<div onclick="selectModalColor('${color}')" class="color-card cursor-pointer rounded-md p-1 border ${isSelected?'border-black selected':isDisabled?'border-gray-200 collapsed-disabled':'border-gray-200 hover:border-gray-400'}">
    <div class="aspect-[4/5] bg-gray-100 rounded overflow-hidden mb-1">
    <div class="w-full h-full bg-gray-300 flex items-center justify-center text-[10px] text-gray-500">${color.substring(0,2)}</div>
    </div>
    <div class="text-center text-xs font-medium text-gray-700 truncate">${color}</div>
    </div>`;
    }).join('');
    
    els.mobileColorLabel.textContent=modalState.selectedColor;
    els.desktopColorLabel.textContent=modalState.selectedColor;
}

function selectModalColor(color){
    if(totalStockCollapse.isCollapsed&&color!==totalStockCollapse.color)return;
    modalState.selectedColor=color;
    renderModalColors();
    renderModalSizes();
    updateModalQty(0);
}

// Nueva función para el selector de género en zapatos
function renderShoeGenderSelector() {
    // Buscamos si ya existe el contenedor, si no lo creamos
    let genderContainer = document.getElementById('genderSelectorContainer');
    if (modalState.product.subcategory !== 'shoes') {
        if (genderContainer) genderContainer.innerHTML = '';
        return;
    }

    if (!genderContainer) {
        genderContainer = document.createElement('div');
        genderContainer.id = 'genderSelectorContainer';
        genderContainer.className = 'mb-4';
        // Insertamos antes de la sección de tallas
        els.sizeSection.parentNode.insertBefore(genderContainer, els.sizeSection);
    }

    const genders = ['Hombre', 'Mujer', 'Niño'];
    
    genderContainer.innerHTML = `
        <div class="text-gray-900 font-bold text-sm mb-2">Para quién es:</div>
        <div class="flex gap-2">
            ${genders.map(g => `
                <button onclick="selectShoeGender('${g}')" 
                    class="px-4 py-2 border rounded-full text-sm transition-colors ${modalState.shoeGender === g ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-800'}">
                    ${g}
                </button>
            `).join('')}
        </div>
    `;
}

// Devuelve tallas reales por género para calzado
function getShoeSizesByGender(gender){
    if(!gender) return [];
    const g=gender.toLowerCase();
    if(g==='hombre'){
        return ['40','41','42','43','44','45','46'];
    }
    if(g==='mujer'){
        return ['35','36','37','38','39','40','41'];
    }
    // Niño / kids (tallas EU aproximadas)
    if(g==='niño' || g==='nino' || g==='kids'){
        return ['25','26','27','28','29','30','31','32','33','34','35'];
    }
    return [];
}

function selectShoeGender(gender) {
    modalState.shoeGender = gender;
    renderShoeGenderSelector();
    // Seleccionar la primera talla disponible del género si existe
    const sizesForGender = getShoeSizesByGender(gender).map(String);
    const available = modalState.product.sizes.map(s=>String(s));
    const firstAvailable = sizesForGender.find(s=>available.includes(s));
    if(firstAvailable) modalState.selectedSize = firstAvailable;
    renderModalSizes(); // Re-renderizar tallas para desbloquearlas
}

function renderModalSizes(){
    // Si hay tallas definidas en el producto las usamos, sino usamos las estándar
    let sizes = modalState.product.sizes;

    // Si son zapatos, usar tallas reales según género seleccionado
    const isShoe = modalState.product.subcategory === 'shoes';
    if(isShoe){
        if(!modalState.shoeGender){
            els.sizeContainer.innerHTML = `<div class="text-sm text-orange-600 bg-orange-50 p-2 rounded w-full">⚠️ Por favor, selecciona primero para quién es el calzado arriba.</div>`;
            return;
        }
        sizes = getShoeSizesByGender(modalState.shoeGender);
    }
    
    // Si NO son zapatos (ropa), intentamos mostrar todas las tallas estándar si el producto tiene tallas tipo letra
    const standardSizes = ['S','M','L','XL','XXL','XXXL'];
    const isClothingSize = sizes.some && sizes.some(s => standardSizes.includes(s));
    if(isClothingSize && modalState.product.subcategory !== 'shoes') {
        sizes = standardSizes;
    }

    els.sizeContainer.innerHTML='';
    if(totalStockCollapse.isCollapsed)els.sizeSection.classList.add('collapsed-warning');
    

    // Para zapatos: comparar con las tallas realmente disponibles en el producto
    const availableSizes = modalState.product.sizes.map(s=>String(s));
    sizes.forEach(size=>{
        const sStr = String(size);
        const isAvailable = availableSizes.includes(sStr);
        const realStock = isAvailable ? getStock(modalState.selectedColor, sStr) : 0;

        const isSelected = String(modalState.selectedSize) === sStr;
        const isDisabled = !isAvailable || realStock === 0 || (totalStockCollapse.isCollapsed && sStr !== String(totalStockCollapse.size));

        let classes = "size-btn h-9 min-w-[3rem] px-3 border rounded-full text-sm flex items-center justify-center mr-1 mb-1";
        if(isDisabled){
            classes += " text-gray-300 border-gray-100 bg-gray-50 cursor-not-allowed";
        } else {
            classes += " border-gray-300 text-gray-700 hover:border-gray-800 bg-white";
            if(isSelected) classes += " selected";
        }

        const btn = document.createElement('button');
        btn.className = classes;
        btn.textContent = sStr;
        if(!isDisabled){
            btn.onclick = ()=>handleSizeSelect(sStr, realStock===0);
        }
        els.sizeContainer.appendChild(btn);
    });

    if(getStock(modalState.selectedColor,modalState.selectedSize)===0&&!totalStockCollapse.isCollapsed){
        els.stockWarning.classList.remove('hidden');
    }else{
        els.stockWarning.classList.add('hidden');
    }
}

function handleSizeSelect(size,isOutOfStock){
    if(totalStockCollapse.isCollapsed&&size!==totalStockCollapse.size)return;
    if(!isOutOfStock){
    modalState.selectedSize=size;
    }else{
    els.sizeSection.classList.add('animate-flash-red');
    setTimeout(()=>els.sizeSection.classList.remove('animate-flash-red'),500);
    }
    renderModalSizes();
    updateModalQty(0);
}

function updateModalQty(change){
    const stock=getStock();
    let current=parseInt(els.currentInputQty.value);
    let next=current+change;
    if(next>stock)next=stock;
    if(next<1)next=1;
    if(change===0){
    if(current>stock)next=stock;
    if(stock===0)next=1;
    }
    els.currentInputQty.value=next;
    
    const plusDisabled=(next>=stock)||(stock===0)||totalStockCollapse.isCollapsed;
    const minusDisabled=(next<=1)||(stock===0)||totalStockCollapse.isCollapsed;
    
    els.qtyMinusBtn.disabled=minusDisabled;
    els.qtyPlusBtn.disabled=plusDisabled;
    
    els.stockMessage.textContent=`${stock} disponibles`;
}

function updateModalUI(){
    const product=modalState.product;
    const key=`${product.id}-${modalState.selectedColor}-${modalState.selectedSize}`;
    const qty=modalState.cart[key]||0;
    const currentStock=getStock();
    
    els.actionButtonContainer.innerHTML='';
    
    if(currentStock===0){
    const btn=document.createElement('button');
    btn.className="w-full bg-white text-gray-800 border-2 border-gray-800 font-bold text-lg py-3 rounded-full hover:bg-gray-50 transition shadow-sm cursor-not-allowed";
    btn.textContent="Buscar similares";
    btn.onclick=()=>{
    els.sizeSection.classList.add('animate-flash-red');
    setTimeout(()=>els.sizeSection.classList.remove('animate-flash-red'),500);
    };
    els.actionButtonContainer.appendChild(btn);
    return;
    }
    
    if(qty>0){
    const wrapper=document.createElement('div');
    wrapper.className="w-full bg-temu-orange text-white rounded-full shadow-lg flex items-stretch h-14 overflow-hidden select-none";
    
    const btnMinus=document.createElement('button');
    btnMinus.className="w-1/5 max-w-14 flex items-center justify-center text-3xl font-light hover:bg-black hover:bg-opacity-10 active:bg-opacity-20 transition-colors pb-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-full";
    btnMinus.textContent="−";
    btnMinus.disabled=(qty<=1);
    btnMinus.onclick=(e)=>{e.stopPropagation();updateModalCartQty(-1);};
    
    const content=document.createElement('div');
    content.className="flex-grow flex flex-col items-center justify-center leading-none border-x border-black border-opacity-10";
    const title=document.createElement('span');
    title.className="text-xl font-extrabold tracking-wide mb-0.5";
    title.textContent=`${qty} Añadidos`;
    const sub=document.createElement('span');
    sub.className="text-[10px] opacity-90 font-normal";
    sub.textContent=`${modalState.selectedColor}/${modalState.selectedSize}`;
    content.appendChild(title);
    content.appendChild(sub);
    
    const btnPlus=document.createElement('button');
    btnPlus.className="w-1/5 max-w-14 flex items-center justify-center text-3xl font-light hover:bg-black hover:bg-opacity-10 active:bg-opacity-20 transition-colors pb-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-full";
    btnPlus.textContent="+";
    btnPlus.disabled=(qty>=currentStock);
    btnPlus.onclick=(e)=>{e.stopPropagation();updateModalCartQty(1);};
    
    wrapper.appendChild(btnMinus);
    wrapper.appendChild(content);
    wrapper.appendChild(btnPlus);
    els.actionButtonContainer.appendChild(wrapper);
    }else{
    const btn=document.createElement('button');
    btn.id="addBtn";
    btn.className="w-full bg-temu-orange text-white font-bold text-lg py-3 rounded-full hover:opacity-90 transition shadow-md h-14";
    btn.textContent="Añadir a la cesta";
    btn.onclick=handleAddToCartFromModal;
    els.actionButtonContainer.appendChild(btn);
    }
}

function handleAddToCartFromModal(){
    const product=modalState.product;
    const qtyToAdd=parseInt(els.currentInputQty.value);
    const currentStock=getStock();
    if(currentStock===0||qtyToAdd>currentStock){
    flashModalError();
    return;
    }
    
    const finalPrice=product.price;
    
    const existingItem=cartItems.find(item=>item.id===product.id);
    if(existingItem){
    existingItem.quantity+=qtyToAdd;
    }else{
    cartItems.push({
    id:product.id,
    name:product.name,
    price:finalPrice,
    image:product.image,
    quantity:qtyToAdd
    });
    }
    
    cartCount+=qtyToAdd;
    els.globalCartCount.textContent=cartCount;
    els.currentInputQty.value=1;
    updateModalQty(0);
    updateModalUI();
    showToast("Añadido a la cesta");
    closeProductModal();
}

function updateModalCartQty(change){
    const product=modalState.product;
    const key=`${product.id}-${modalState.selectedColor}-${modalState.selectedSize}`;
    const current=modalState.cart[key]||0;
    const max=getStock();
    const next=current+change;
    
    if(next<=0){
    delete modalState.cart[key];
    }else{
    modalState.cart[key]=next;
    }
    updateModalUI();
    showToast(next<=0?"Eliminado de la cesta":"Actualizado");
}

function flashModalError(){
    const btn=document.getElementById('addBtn');
    if(btn)btn.classList.add('animate-shake');
    els.sizeSection.scrollIntoView({behavior:'smooth',block:'center'});
    els.sizeSection.classList.add('bg-red-50','animate-flash-red');
    setTimeout(()=>{
    if(btn)btn.classList.remove('animate-shake');
    els.sizeSection.classList.remove('bg-red-50','animate-flash-red');
    },500);
}

// ==================== GALERÍA MÓVIL ====================
function scrollGallery(direction){
    if(!els.mobileGallery)return;
    const scrollAmount=els.mobileGallery.offsetWidth;
    els.mobileGallery.scrollBy({left:direction*scrollAmount,behavior:'smooth'});
}

function changeDesktopImage(element,position){
    const pColor="333"; 
    els.desktopMainImage.src=`https://via.placeholder.com/500x500/${pColor}/fff?text=${modalState.selectedColor}+${position}`;
    document.querySelectorAll('.grid-cols-4>div').forEach(thumb=>{
    thumb.classList.remove('border-2','border-black');
    thumb.classList.add('border','border-transparent','hover:border-gray-300');
    });
    element.classList.remove('border-transparent','hover:border-gray-300');
    element.classList.add('border-2','border-black');
}

// ==================== LÓGICA CARRITO Y TOAST ====================
function addToCartDirect(productId,event){
    event.stopPropagation();
    const product=productsDatabase.find(p=>p.id===productId);
    if(!product)return;
    
    const finalPrice=product.price;
    
    const existingItem=cartItems.find(item=>item.id===productId);
    if(existingItem){
    existingItem.quantity+=1;
    }else{
    cartItems.push({
    id:product.id,
    name:product.name,
    price:finalPrice,
    image:product.image,
    quantity:1
    });
    }
    cartCount+=1;
    els.globalCartCount.textContent=cartCount;
    showToast("Añadido a la cesta");
}

function showToast(message){
    const toastMessageSpan=document.getElementById('toastMessage');
    if(toastMessageSpan) toastMessageSpan.innerHTML=`<div class="bg-green-600 rounded-full p-1 flex items-center justify-center"><svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg></div>${message}`;
    els.toast.classList.remove('hidden');
    els.toast.classList.add('animate-toast-enter');
    setTimeout(()=>{
    els.toast.classList.remove('animate-toast-enter');
    els.toast.classList.add('animate-toast-exit');
    setTimeout(()=>{
    els.toast.classList.add('hidden');
    },300);
    },2000);
}

// ==================== INICIALIZACIÓN ====================
function init(){
    lucide.createIcons();
    renderL1();
    renderMenuL1();
    
    setupDesktopFilterListeners();
    renderDesktopSidebar();
    
    updateVisibility();

    // MODIFICACIÓN: Crear la lista aleatoria inicial mezclando toda la base de datos
    // y mostrando todos los productos en la vista inicial.
    initialShuffledProducts = shuffleArray(productsDatabase);
    
    // Al filtrar inicialmente, usará esta lista shuffled porque no hay filtros activos
    filterProducts();
    
    if(window.innerWidth>=768){
    const wrapper=document.getElementById('categoriesWrapper'),menu=document.getElementById('megaMenu');
    if(wrapper && menu) {
        wrapper.addEventListener('mouseenter',()=>{menu.classList.add('desktop-open');});
        wrapper.addEventListener('mouseleave',()=>{menu.classList.remove('desktop-open');});
    }
    }
    
    document.addEventListener('click',(e)=>{
    const menu=document.getElementById('megaMenu'),wrapper=document.getElementById('categoriesWrapper');
    if(menu && wrapper && window.innerWidth<768&&menu.classList.contains('mobile-open')&&!wrapper.contains(e.target)&&!menu.contains(e.target))closeMenu();
    });
    
    window.addEventListener('resize',()=>{
    const menu=document.getElementById('megaMenu');
    if(menu) {
        if(window.innerWidth>=768){menu.classList.remove('mobile-open');}else{menu.classList.remove('desktop-open');}
    }
    updateUI();
    });
    
    // Ajustar visibleProducts según la vista
    const isDefaultHomeView = state.l1 === 'all' && 
                              state.l2 === 'all' && 
                              (!state.l3 || state.l3 === '') &&
                              state.desktopPrices.length === 0 &&
                              state.desktopColors.length === 0;

    // Si es Home, mostramos todos los productos mezclados; en otros casos, paginamos.
    visibleProducts = isDefaultHomeView ? initialShuffledProducts.length : productsPerPage;
}
init();