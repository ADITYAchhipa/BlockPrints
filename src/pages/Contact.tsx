import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: t.visitUs[language],
      details: ['BlockPrints Studio', 'Sanganer, Jaipur', 'Rajasthan 302029, India'],
    },
    {
      icon: Mail,
      title: t.emailUs[language],
      details: ['hello@blockprints.store', 'orders@blockprints.store'],
    },
    {
      icon: Phone,
      title: t.callUs[language],
      details: ['+91 98765 43210', '+91 12345 67890'],
    },
    {
      icon: Clock,
      title: t.workingHours[language],
      details: [t.workingDays[language], t.sundayClosed[language]],
    },
  ];

  const faqs = [
    { q: t.faq.q1[language], a: t.faq.a1[language] },
    { q: t.faq.q2[language], a: t.faq.a2[language] },
    { q: t.faq.q3[language], a: t.faq.a3[language] },
    { q: t.faq.q4[language], a: t.faq.a4[language] },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.successTitle[language],
      description: t.successDesc[language],
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEOHead page="contact" />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-primary font-medium mb-4 block">{t.getInTouch[language]}</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {t.title[language]}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.description[language]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-semibold mb-6">{t.sendMessage[language]}</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.yourName[language]}</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t.email[language]}</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.subject[language]}</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.subjectPlaceholder[language]}
                      required
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.message[language]}</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder[language]}
                      rows={6}
                      required
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    {t.send[language]}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-semibold mb-6">{t.contactInfo[language]}</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-card shadow-soft"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-soft bg-card h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-3" />
                    <p className="text-muted-foreground">{t.mapComingSoon[language]}</p>
                    <p className="text-sm text-muted-foreground/70">Sanganer, Jaipur, Rajasthan</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-2 block">{t.faq.title[language]}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {t.faq.heading[language]}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-background shadow-soft"
                >
                  <h3 className="font-display font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
