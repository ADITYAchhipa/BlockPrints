import { Helmet } from 'react-helmet-async';
import {
    PAGE_SEO,
    ORGANIZATION_SCHEMA,
    WEBSITE_SCHEMA,
    STORE_SCHEMA,
    COLLECTION_PAGE_SCHEMA,
    LOCAL_BUSINESS_SCHEMA,
    BLOG_SCHEMA,
    generateProductSchema,
    generateArticleSchema,
} from '@/lib/seo-keywords';

interface SEOHeadProps {
    page: 'home' | 'shop' | 'about' | 'contact' | 'blog';
    product?: {
        name: string;
        description: string;
        price: number;
        image: string;
        category: string;
    };
    article?: {
        title: string;
        description: string;
        url: string;
        image: string;
        datePublished: string;
        author?: string;
    };
}

const SEOHead = ({ page, product, article }: SEOHeadProps) => {
    const seo = PAGE_SEO[page] || PAGE_SEO.home;

    // Get route-specific schemas (using any[] as schemas have different shapes)
    const getRouteSchemas = (): object[] => {
        const schemas: object[] = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];

        switch (page) {
            case 'home':
                schemas.push(STORE_SCHEMA);
                break;
            case 'shop':
                schemas.push(COLLECTION_PAGE_SCHEMA);
                break;
            case 'contact':
                schemas.push(LOCAL_BUSINESS_SCHEMA);
                break;
            case 'blog':
                schemas.push(BLOG_SCHEMA);
                break;
            // 'about' only gets Organization + Website (already added)
        }

        return schemas;
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="author" content="BlockPrints" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={seo.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:site_name" content="BlockPrints" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seo.canonical} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.ogImage} />

            {/* Route-specific Structured Data */}
            {getRouteSchemas().map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}

            {/* Product schema (if product data provided) */}
            {product && (
                <script type="application/ld+json">
                    {JSON.stringify(generateProductSchema(product))}
                </script>
            )}

            {/* Article schema (if article data provided) */}
            {article && (
                <script type="application/ld+json">
                    {JSON.stringify(generateArticleSchema(article))}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
