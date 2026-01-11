import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import aboutImage from '@/assets/about-craft.jpg';
import heroImage from '@/assets/hero-fabric.jpg';

const About = () => {
  const { language } = useLanguage();
  const t = translations.about;

  const values = [
    {
      icon: Heart,
      title: t.values.artisanFirst.title[language],
      description: t.values.artisanFirst.desc[language],
    },
    {
      icon: Leaf,
      title: t.values.ecoConscious.title[language],
      description: t.values.ecoConscious.desc[language],
    },
    {
      icon: Users,
      title: t.values.communityDriven.title[language],
      description: t.values.communityDriven.desc[language],
    },
    {
      icon: Award,
      title: t.values.heritage.title[language],
      description: t.values.heritage.desc[language],
    },
  ];

  const stats = [
    { number: '500+', label: t.stats.designs[language] },
    { number: '100%', label: t.stats.naturalDyes[language] },
    { number: '20+', label: t.stats.experience[language] },
    { number: '50+', label: t.stats.artisanFamilies[language] },
  ];

  return (
    <>
      <SEOHead page="about" />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-medium mb-4 block">{t.ourStory[language]}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {t.titleLine1[language]}{' '}
                <span className="text-primary">{t.titleLine2[language]}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.intro[language]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Art of Block Printing */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {t.artTitle[language]}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.artPara1[language]}</p>
                  <p>{t.artPara2[language]}</p>
                  <p>{t.artPara3[language]}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-2 block">{t.ourValues[language]}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {t.valuesTitle[language]}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card shadow-soft text-center"
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
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {t.journeyTitle[language]}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t.journeyPara1[language]}</p>
                  <p>{t.journeyPara2[language]}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={heroImage}
                    alt="Our journey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
