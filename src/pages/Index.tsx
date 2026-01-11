import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-fabric.jpg';
import aboutImage from '@/assets/about-craft.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Natural Dyes',
    description: 'Colors extracted from plants, roots, and minerals for eco-friendly beauty.',
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Each piece is carefully hand-printed by skilled artisans.',
  },
  {
    icon: Sparkles,
    title: 'Unique Designs',
    description: 'Traditional patterns reimagined for the modern wardrobe.',
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
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
                ✨ Handcrafted Block Prints
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <span className="text-foreground">Wear the Art of</span>
                <br />
                <span className="text-primary">Ancient Traditions</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Discover clothing that tells a story. Each piece is hand-printed using 
                centuries-old techniques and natural dyes, connecting you to the rich 
                heritage of Indian textile artistry.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button variant="hero">
                    Shop Collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="heroOutline">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img
                  src={heroImage}
                  alt="Beautiful block printed fabric"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-medium max-w-xs hidden lg:block"
              >
                <p className="font-display text-lg font-medium text-foreground mb-2">
                  "Each print carries the soul of the artisan"
                </p>
                <p className="text-sm text-muted-foreground">— Master Craftsman, Jaipur</p>
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
                transition={{ delay: index * 0.15 }}
                className="text-center p-8 rounded-xl bg-background shadow-soft"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">Curated Collection</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of block printed garments, each one a masterpiece 
              of traditional craftsmanship.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
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
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="Artisan crafting block prints"
                className="rounded-2xl shadow-medium w-full h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-2 block">Our Heritage</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Preserving Centuries of Artistry
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For generations, master artisans in Rajasthan have passed down the sacred art 
                of block printing. Each wooden block is carved by hand, each pattern a reflection 
                of ancient wisdom and natural beauty.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Chhaap, we partner directly with these artisan families, ensuring fair wages 
                and keeping this precious craft alive for future generations.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Read Our Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-primary-foreground text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" className="rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
