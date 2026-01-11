import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { blogPosts } from '@/data/blog-data';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const t = translations.blog;

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-display font-bold mb-4">Post Not Found</h1>
                    <Link to="/blog">
                        <Button>{t.backToBlog[language]}</Button>
                    </Link>
                </div>
            </main>
        );
    }

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Helmet>
                <title>{post.title[language]} | BlockPrints Blog</title>
                <meta name="description" content={post.excerpt[language]} />
                <meta name="keywords" content={post.keywords.join(', ')} />
                <link rel="canonical" href={`https://blockprints.store/blog/${post.slug}`} />
                <meta property="og:title" content={post.title[language]} />
                <meta property="og:description" content={post.excerpt[language]} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://blockprints.store/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title[language],
                        "description": post.excerpt[language],
                        "datePublished": post.date,
                        "author": {
                            "@type": "Organization",
                            "name": "BlockPrints"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "BlockPrints",
                            "url": "https://blockprints.store"
                        },
                        "keywords": post.keywords.join(', ')
                    })}
                </script>
            </Helmet>

            <main className="pt-20">
                {/* Header */}
                <section className="py-12 bg-gradient-hero">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <Link to="/blog">
                                <Button variant="ghost" className="mb-6 -ml-2">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    {t.backToBlog[language]}
                                </Button>
                            </Link>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                                {post.title[language]}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(post.date)}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime} {t.minRead[language]}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Featured Image */}
                            <div className="aspect-video bg-secondary/30 rounded-2xl overflow-hidden mb-10">
                                <img
                                    src={post.image}
                                    alt={post.title[language]}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:font-display prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-table:text-sm
                prose-th:bg-secondary prose-th:p-3
                prose-td:p-3 prose-td:border-b"
                            >
                                <ReactMarkdown>{post.content[language]}</ReactMarkdown>
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t">
                                <div className="flex flex-wrap gap-2">
                                    {post.keywords.map(keyword => (
                                        <span
                                            key={keyword}
                                            className="px-3 py-1 bg-secondary text-sm rounded-full text-muted-foreground"
                                        >
                                            #{keyword.replace(/\s+/g, '')}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogPost;
