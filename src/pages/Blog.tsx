import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { blogPosts, blogCategories, BlogCategory } from '@/data/blog-data';

const Blog = () => {
    const { language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('all');
    const t = translations.blog;

    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const getCategoryLabel = (cat: BlogCategory) => {
        const labels: Record<BlogCategory, { en: string; hi: string }> = {
            all: t.categories.all,
            techniques: t.categories.techniques,
            care: t.categories.care,
            fashion: t.categories.fashion,
            culture: t.categories.culture,
        };
        return labels[cat][language];
    };

    return (
        <>
            <SEOHead page="home" />
            <main className="pt-20">
                {/* Header */}
                <section className="py-16 bg-gradient-hero">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <span className="text-primary font-medium mb-4 block">
                                {t.subtitle[language]}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                {t.title[language]}
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {t.description[language]}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Categories & Posts */}
                <section className="py-16">
                    <div className="container mx-auto px-4 lg:px-8">
                        {/* Category Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-3 mb-12"
                        >
                            {blogCategories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="rounded-full"
                                >
                                    {getCategoryLabel(category)}
                                </Button>
                            ))}
                        </motion.div>

                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
                                >
                                    <div className="aspect-video bg-secondary/30 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title[language]}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                            <span className="capitalize">{getCategoryLabel(post.category as BlogCategory)}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {post.readTime} {t.minRead[language]}
                                            </span>
                                        </div>
                                        <h2 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title[language]}
                                        </h2>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {post.excerpt[language]}
                                        </p>
                                        <Link to={`/blog/${post.slug}`}>
                                            <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                                                {t.readMore[language]}
                                                <ArrowRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-muted-foreground py-12"
                            >
                                No posts found in this category.
                            </motion.p>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Blog;
