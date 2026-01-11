import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-fabric.jpg';
import aboutImage from '@/assets/about-craft.jpg';

const Index = () => {
  const { language } = useLanguage();
  const t = translations;
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: Leaf,
      title: t.features.naturalDyes.title[language],
      description: t.features.naturalDyes.desc[language],
    },
    {
      icon: Heart,
      title: t.features.handcrafted.title[language],
      description: t.features.handcrafted.desc[language],
    },
    {
      icon: Sparkles,
      title: t.features.uniqueDesigns.title[language],
      description: t.features.uniqueDesigns.desc[language],
    },
  ];

  return (
    <>
      <SEOHead page="home" />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80 mb-6"
                >
                  {t.hero.badge[language]}
                </motion.span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                  <span className="text-foreground">{t.hero.titleLine1[language]}</span>
                  <br />
                  <span className="text-primary">{t.hero.titleLine2[language]}</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  {t.hero.description[language]}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/shop">
                    <Button variant="hero">
                      {t.hero.shopBtn[language]}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="heroOutline">
                      {t.hero.storyBtn[language]}
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={heroImage}
                    alt="Hand block printed fabric"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft max-w-xs"
                >
                  <p className="font-display text-lg italic text-foreground/80">
                    "{t.hero.quote[language]}"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{t.hero.quoteAuthor[language]}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-8 rounded-xl bg-background shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-2 block">{t.products.curatedCollection[language]}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t.products.featuredProducts[language]}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.products.description[language]}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/shop">
                <Button variant="outline" size="lg">
                  {t.products.viewAll[language]}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={aboutImage}
                    alt="Artisan at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-medium mb-2 block">{t.story.ourHeritage[language]}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {t.story.title[language]}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.story.para1[language]}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t.story.para2[language]}
                </p>
                <Link to="/about">
                  <Button variant="hero">
                    {t.story.readStory[language]}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t.newsletter.title[language]}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.newsletter.description[language]}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder[language]}
                  className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" type="submit">
                  {t.newsletter.subscribe[language]}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
