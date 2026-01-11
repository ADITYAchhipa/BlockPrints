import { Helmet } from 'react-helmet-async';
import { PAGE_SEO, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, generateProductSchema } from '@/lib/seo-keywords';

interface SEOHeadProps {
    page: 'home' | 'shop' | 'about' | 'contact';
    product?: {
        name: string;
        description: string;
        price: number;
        image: string;
        category: string;
    };
}

const SEOHead = ({ page, product }: SEOHeadProps) => {
    const seo = PAGE_SEO[page];

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
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

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(ORGANIZATION_SCHEMA)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(WEBSITE_SCHEMA)}
            </script>
            {product && (
                <script type="application/ld+json">
                    {JSON.stringify(generateProductSchema(product))}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
