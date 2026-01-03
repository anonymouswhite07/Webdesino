import { useState } from "react";
import { motion } from "motion/react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Simply Updify the best web development company in Tamilnadu?",
      answer: "Simply Updify combines technical expertise with deep local market knowledge to deliver websites that not only look great but also rank well on Google. Our data-driven approach, proven results, and commitment to client success set us apart."
    },
    {
      question: "Do you provide local SEO services for areas like Uttam Nagar, Karol Bagh, Kamla Nagar, and Krishan Vihar?",
      answer: "Yes, we specialize in hyperlocal SEO for businesses across Tamilnadu. Our local SEO strategies help businesses rank in neighborhood-specific searches, driving real foot traffic and leads."
    },
    {
      question: "How long does it take to see results from SEO with Simply Updify?",
      answer: "Most clients see initial improvements within 2-3 months, with significant results typically visible within 4-6 months. SEO is a long-term strategy, and we focus on sustainable growth that compounds over time."
    },
    {
      question: "Does Simply Updify also handle digital marketing campaigns in Tamilnadu?",
      answer: "Absolutely. We offer comprehensive digital marketing services including Google Ads, social media marketing, content marketing, and email campaigns tailored for the Tamilnadu market."
    },
    {
      question: "What industries does Simply Updify specialize in for website development and SEO?",
      answer: "We serve businesses across 20+ industries including e-commerce, real estate, healthcare, education, legal, IT, finance, and more. Each industry requires unique strategies, and we customize our approach accordingly."
    },
    {
      question: "Can Simply Updify help increase online sales for my eCommerce business?",
      answer: "Yes, we've helped multiple e-commerce businesses in Tamilnadu increase their online sales by 300-500%. Our approach combines technical SEO, conversion rate optimization, and targeted digital marketing."
    },
    {
      question: "Do you offer affordable web design packages for small businesses in Tamilnadu?",
      answer: "We offer flexible packages designed for businesses of all sizes. Our affordable options don't compromise on quality or results - they're strategically priced to help small businesses compete with larger competitors."
    },
    {
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer: "All our websites are fully responsive and built with SEO best practices from the ground up. We follow Google's Core Web Vitals and ensure fast loading times, mobile optimization, and structured data implementation."
    },
    {
      question: "Why is local SEO important for businesses in Tamilnadu?",
      answer: "Local SEO helps businesses appear in 'near me' searches and Google Maps results. For Tamilnadu businesses, this is crucial as most customers search locally. We optimize for local keywords, citations, and Google Business profiles."
    },
    {
      question: "How can I get started with Simply Updify's web development or SEO services?",
      answer: "Simply fill out our contact form or call us to schedule a free consultation. We'll discuss your goals, analyze your current situation, and create a customized strategy to help your business grow."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Frequently Asked Questions</h2>
        <p className="mt-4 text-xl text-neutral-400">
          Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 border border-white/10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left bg-primary/20 hover:bg-primary/30 transition-colors font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-neutral-200">
                {faq.question}
              </h3>
              <span className="text-2xl text-neutral-400">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-primary/10"
              >
                <div className="p-6 text-neutral-400 font-medium">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;