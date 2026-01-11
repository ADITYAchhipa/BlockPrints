import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { language } = useLanguage();
  const t = translations.shop;

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, { en: string; hi: string }> = {
      'All': t.categories.all,
      'Dresses': t.categories.dresses,
      'Tops': t.categories.tops,
      'Shirts': t.categories.shirts,
      'Bottoms': t.categories.bottoms,
      'Accessories': t.categories.accessories,
    };
    return labels[cat]?.[language] || cat;
  };

  return (
    <>
      <SEOHead page="shop" />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {t.title[language]}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.description[language]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
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

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-12"
              >
                {t.noProducts[language]}
              </motion.p>
            )}
          </div>
        </section>

        {/* Custom Order CTA */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {t.customPrinting.title[language]}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t.customPrinting.description[language]}
              </p>
              <Link to="/contact">
                <Button variant="hero">
                  {t.customPrinting.contactBtn[language]}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
