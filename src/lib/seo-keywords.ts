// SEO Keywords Part 2 - Extended keyword combinations for 5000+ total keywords
// This file generates keyword permutations programmatically

import {
    SITE_CONFIG,
    PRIMARY_KEYWORDS,
    PRODUCT_KEYWORDS,
    PRINT_STYLE_KEYWORDS,
    MATERIAL_KEYWORDS,
    DYE_KEYWORDS,
    LOCATION_KEYWORDS,
    OCCASION_KEYWORDS,
    STYLE_KEYWORDS,
    SHOPPING_KEYWORDS,
    SIZE_KEYWORDS,
    GIFT_KEYWORDS,
} from './seo-config';

// Pattern keywords for generating combinations
const PATTERNS = [
    "floral", "flower", "rose", "lotus", "sunflower", "marigold", "jasmine",
    "geometric", "chevron", "zigzag", "stripes", "checks", "polka dots",
    "paisley", "buta", "bootie", "mango", "keri",
    "mandala", "medallion", "circular", "round",
    "border", "pallu", "all over", "scattered",
    "traditional", "motif", "ethnic", "tribal", "folk",
    "leaf", "leaves", "vine", "tree", "nature", "botanical",
    "bird", "peacock", "parrot", "elephant", "animal",
    "abstract", "contemporary", "modern", "minimalist",
];

// Color keywords
const COLORS = [
    "red", "maroon", "burgundy", "wine", "crimson",
    "blue", "navy", "royal blue", "sky blue", "teal", "turquoise", "indigo",
    "green", "olive", "sage", "emerald", "forest green", "mint",
    "yellow", "mustard", "gold", "turmeric", "saffron",
    "orange", "rust", "terracotta", "coral", "peach",
    "pink", "magenta", "fuchsia", "rose", "blush",
    "purple", "violet", "lavender", "plum", "mauve",
    "brown", "beige", "tan", "camel", "coffee", "chocolate",
    "black", "charcoal", "grey", "gray", "silver",
    "white", "off white", "cream", "ivory", "ecru",
    "multi color", "multicolor", "colorful", "vibrant",
];

// Long-tail keyword generators
export function generateProductColorKeywords(): string[] {
    const keywords: string[] = [];
    const products = ["saree", "kurta", "dupatta", "dress", "suit", "fabric", "bedsheet"];

    products.forEach(product => {
        COLORS.forEach(color => {
            keywords.push(`${color} ${product}`);
            keywords.push(`${color} block print ${product}`);
            keywords.push(`${color} cotton ${product}`);
        });
    });

    return keywords;
}

export function generateProductPatternKeywords(): string[] {
    const keywords: string[] = [];
    const products = ["saree", "kurta", "dupatta", "dress", "suit", "fabric"];

    products.forEach(product => {
        PATTERNS.forEach(pattern => {
            keywords.push(`${pattern} ${product}`);
            keywords.push(`${pattern} print ${product}`);
            keywords.push(`${pattern} block print ${product}`);
        });
    });

    return keywords;
}

export function generatePrintStyleProductKeywords(): string[] {
    const keywords: string[] = [];
    const printStyles = ["dabu", "ajrakh", "bagh", "kalamkari", "batik", "sanganeri", "bagru"];
    const products = Object.keys(PRODUCT_KEYWORDS);

    printStyles.forEach(style => {
        products.forEach(product => {
            keywords.push(`${style} ${product}`);
            keywords.push(`${style} print ${product}`);
            keywords.push(`${style} cotton ${product}`);
            keywords.push(`buy ${style} ${product} online`);
        });
    });

    return keywords;
}

export function generateLocationProductKeywords(): string[] {
    const keywords: string[] = [];
    const locations = [...LOCATION_KEYWORDS.india, ...LOCATION_KEYWORDS.international];
    const products = ["block print", "saree", "kurta", "fabric", "clothing", "textiles"];

    locations.forEach(location => {
        products.forEach(product => {
            keywords.push(`${product} ${location}`);
            keywords.push(`${product} in ${location}`);
            keywords.push(`buy ${product} ${location}`);
            keywords.push(`${product} shop ${location}`);
            keywords.push(`${product} store ${location}`);
        });
    });

    return keywords;
}

export function generateOccasionProductKeywords(): string[] {
    const keywords: string[] = [];
    const occasions = ["wedding", "festive", "party", "casual", "office", "diwali", "eid"];
    const products = ["saree", "kurta", "suit", "dress", "lehenga", "dupatta"];

    occasions.forEach(occasion => {
        products.forEach(product => {
            keywords.push(`${occasion} ${product}`);
            keywords.push(`${occasion} wear ${product}`);
            keywords.push(`block print ${occasion} ${product}`);
            keywords.push(`${occasion} collection ${product}`);
        });
    });

    return keywords;
}

export function generatePriceKeywords(): string[] {
    const keywords: string[] = [];
    const products = ["saree", "kurta", "suit", "dress", "fabric", "bedsheet", "dupatta"];
    const priceRanges = [
        "under 1000", "under 2000", "under 3000", "under 5000",
        "1000 to 2000", "2000 to 5000", "5000 to 10000",
        "affordable", "cheap", "budget", "premium", "luxury", "designer",
    ];

    products.forEach(product => {
        priceRanges.forEach(price => {
            keywords.push(`${product} ${price}`);
            keywords.push(`block print ${product} ${price}`);
        });
    });

    return keywords;
}

export function generateMaterialProductKeywords(): string[] {
    const keywords: string[] = [];
    const materials = ["cotton", "silk", "linen", "khadi", "chanderi", "mulmul", "organic cotton"];
    const products = ["saree", "kurta", "suit", "dress", "fabric", "dupatta", "shirt"];

    materials.forEach(material => {
        products.forEach(product => {
            keywords.push(`${material} ${product}`);
            keywords.push(`${material} block print ${product}`);
            keywords.push(`pure ${material} ${product}`);
            keywords.push(`handloom ${material} ${product}`);
        });
    });

    return keywords;
}

// Generate all 5000+ keywords
export function generateAllKeywords(): string[] {
    const allKeywords = new Set<string>([
        ...PRIMARY_KEYWORDS,
        ...Object.values(PRODUCT_KEYWORDS).flat(),
        ...PRINT_STYLE_KEYWORDS,
        ...MATERIAL_KEYWORDS,
        ...DYE_KEYWORDS,
        ...Object.values(LOCATION_KEYWORDS).flat(),
        ...OCCASION_KEYWORDS,
        ...STYLE_KEYWORDS,
        ...SHOPPING_KEYWORDS,
        ...SIZE_KEYWORDS,
        ...GIFT_KEYWORDS,
        ...PATTERNS,
        ...COLORS,
        ...generateProductColorKeywords(),
        ...generateProductPatternKeywords(),
        ...generatePrintStyleProductKeywords(),
        ...generateLocationProductKeywords(),
        ...generateOccasionProductKeywords(),
        ...generatePriceKeywords(),
        ...generateMaterialProductKeywords(),
    ]);

    return Array.from(allKeywords);
}

// Get keyword count
export function getKeywordCount(): number {
    return generateAllKeywords().length;
}

// Page-specific SEO configurations - minimal keywords (Google ignores huge keyword lists)
export const PAGE_SEO = {
    home: {
        title: "BlockPrints - Authentic Hand Block Printed Clothing & Textiles from India",
        description: "Shop authentic hand block printed sarees, kurtas, dupattas, home textiles & fabrics. Natural dyes, Dabu, Ajrakh, Kalamkari prints. Direct from Jaipur artisans. Worldwide shipping.",
        keywords: "block print, hand block print, indian block print, jaipur block print, block print saree, block print kurta, dabu print, ajrakh, natural dye clothing, handcrafted indian textiles",
        canonical: SITE_CONFIG.domain,
        ogImage: `${SITE_CONFIG.domain}/logo.svg`,
    },
    shop: {
        title: "Shop Block Printed Clothing & Textiles | BlockPrints Collection",
        description: "Explore our curated collection of hand block printed sarees, kurtas, suits, dresses, dupattas, bedsheets & fabrics. Natural dyes, sustainable fashion. Free worldwide shipping.",
        keywords: "buy block print online, block print saree, block print kurta, cotton block print, block print fabric, handloom saree, indian ethnic wear, sustainable fashion",
        canonical: `${SITE_CONFIG.domain}/shop`,
        ogImage: `${SITE_CONFIG.domain}/logo.svg`,
    },
    about: {
        title: "About BlockPrints - Our Heritage & Artisan Story | Indian Block Printing",
        description: "Discover BlockPrints journey preserving 2000-year-old Indian block printing traditions. Meet our Jaipur artisans, learn about natural dyes, Dabu, Ajrakh techniques.",
        keywords: "indian block printing history, jaipur artisans, traditional textile art, natural dye process, dabu printing, ajrakh technique, sustainable fashion india",
        canonical: `${SITE_CONFIG.domain}/about`,
        ogImage: `${SITE_CONFIG.domain}/logo.svg`,
    },
    contact: {
        title: "Contact BlockPrints | Customer Support & Inquiries",
        description: "Get in touch with BlockPrints for orders, custom requests, wholesale inquiries, or artisan collaborations. We ship worldwide from India.",
        keywords: "contact blockprints, block print store, wholesale block print, custom block print order, indian clothing store",
        canonical: `${SITE_CONFIG.domain}/contact`,
        ogImage: `${SITE_CONFIG.domain}/logo.svg`,
    },
};

// Structured data for organization
export const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/logo.png`,
    description: "Authentic hand block printed clothing and textiles from India. Natural dyes, sustainable fashion, direct from artisans.",
    email: SITE_CONFIG.email,
    sameAs: [
        "https://facebook.com/blockprints",
        "https://instagram.com/blockprints",
        "https://pinterest.com/blockprints",
        "https://twitter.com/blockprints",
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
    },
};

// Structured data for website
export const WEBSITE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_CONFIG.domain}/shop?q={search_term_string}`,
        "query-input": "required name=search_term_string",
    },
};

// Generate product structured data
export function generateProductSchema(product: {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
        brand: {
            "@type": "Brand",
            name: SITE_CONFIG.name,
        },
        offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: SITE_CONFIG.name,
            },
        },
        category: product.category,
    };
}
