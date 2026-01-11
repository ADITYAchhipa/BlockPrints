import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import aboutImage from '@/assets/about-craft.jpg';
import heroImage from '@/assets/hero-fabric.jpg';

const values = [
  {
    icon: Heart,
    title: 'Artisan First',
    description: 'We ensure fair wages and safe working conditions for all our artisan partners.',
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious',
    description: 'Natural dyes and organic fabrics reduce our environmental footprint.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We support entire artisan communities, not just individual craftspeople.',
  },
  {
    icon: Award,
    title: 'Heritage Preservation',
    description: 'Keeping ancient printing techniques alive for future generations.',
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Where Tradition Meets<br />
              <span className="text-primary">Modern Elegance</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chhaap was born from a deep love for India's textile heritage and a desire 
              to bring these ancient art forms to the world while supporting the artisan 
              communities that keep them alive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Art of Block Printing
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Block printing is one of the oldest forms of textile printing, with roots 
                  tracing back over 2,000 years in India. This ancient craft involves carving 
                  intricate designs into wooden blocks, which are then dipped in natural dyes 
                  and pressed onto fabric by hand.
                </p>
                <p>
                  Each print is unique, bearing the subtle imperfections that make handcrafted 
                  textiles so special. The slight variations in color and pattern are not flaws 
                  but signatures of the human touch that machines can never replicate.
                </p>
                <p>
                  Our artisans in Rajasthan use vegetable-based dyes derived from indigo, 
                  turmeric, pomegranate, and other natural sources—techniques passed down 
                  through generations of master craftsmen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="Artisan at work"
                className="rounded-2xl shadow-large w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-medium hidden lg:block">
                <p className="text-3xl font-display font-bold">50+</p>
                <p className="text-sm opacity-80">Artisan Families</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-background shadow-soft"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={heroImage}
                alt="Block printed fabric"
                className="rounded-2xl shadow-large w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                From Jaipur to Your Wardrobe
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every piece in our collection starts its journey in the dusty lanes of 
                  Sanganer and Bagru, historic printing centers near Jaipur. Here, artisan 
                  families work from dawn to dusk, carefully stamping each meter of fabric.
                </p>
                <p>
                  We visit our artisan partners regularly, discussing new designs and 
                  ensuring our collaboration remains meaningful. When you purchase from 
                  Chhaap, you're not just buying a garment—you're investing in a community 
                  and helping preserve a dying art form.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Unique Designs</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Natural Dyes</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
