import { motion } from "motion/react";

const WhyWebDesino = () => {
  const keywords = [
    "Web Developer in Uttam Nagar",
    "SEO Services in Kamla Nagar",
    "Digital Marketing in Karol Bagh",
    "Website Development in Krishan Vihar",
    "Ecommerce Development in Tamilnadu",
    "Local SEO Agency for Tamilnadu Businesses"
  ];

  const results = [
    { number: "10K", label: "Sales Generated for Clients" },
    { number: "50+", label: "Happy Clients" },
    { number: "60+", label: "Projects Completed" }
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">🚀 Why Simply Updify Ranks #1 for Web Development & SEO in Tamilnadu</h2>
        <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
          At Simply Updify, we are recognized as the leading web development and SEO company in Tamilnadu. Our unmatched combination of authority, proven client results, case studies, local SEO strategies, free tools, and resources ensures that our campaigns consistently dominate Google search results.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-8 rounded-2xl border border-white/10 mb-16">
        <p className="text-xl text-neutral-300 text-center mb-6">
          This is why Simply Updify ranks at the top for high-value keywords like "Web Development in Tamilnadu" and also achieves visibility for local + service searches that bring real clients and measurable sales.
        </p>

        <h3 className="text-2xl font-bold mb-6 text-center">🏆 Keywords We Consistently Rank For:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {keywords.map((keyword, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-primary/20 rounded-lg border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-green-500 mr-3">⭐</span>
              <p className="text-neutral-300">{keyword}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {results.map((result, index) => (
          <motion.div
            key={index}
            className="text-center p-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl font-bold text-blue-400 mb-2">{result.number}</div>
            <div className="text-xl text-neutral-300">{result.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Our Client Results Speak for Themselves</h3>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          At Simply Updify, we've helped businesses across Tamilnadu generate ₹6.3 Crore+ in combined online sales through SEO, web development, and digital marketing.
        </p>
      </div>
    </section>
  );
};

export default WhyWebDesino;