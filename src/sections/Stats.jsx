import { motion } from "motion/react";

const Stats = () => {
  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "60+", label: "Projects Delivered" },
    { number: "10+", label: "Global Certifications" }
  ];

  const certifications = [
    "Google Certified Partner Tamilnadu",
    "WordPress Certified Agency Tamilnadu",
    "Shopify Partner Web Development Tamilnadu",
    "SEMRush Certified Digital Marketing Tamilnadu",
    "DesignRush Accredited Web Development Company Tamilnadu"
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Trusted Web Development Company in Tamilnadu</h2>
        <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
          At Simply Updify, we are trusted by 50+ clients across Tamilnadu for delivering modern websites, SEO strategies, and digital marketing solutions. Recognized by global leaders like Google, WordPress, Shopify, SEMRush, and DesignRush, we ensure every project is SEO-optimized, professional, and result-driven.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
            <div className="text-xl text-neutral-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary/20 p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Global Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-neutral-300">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-8 rounded-2xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src="/assets/Digital Marketings.png"
                alt="Digital Marketing"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-2xl font-bold mb-4">OPTIMIZE YOUR MARKETING</h3>
              <p className="text-xl text-neutral-300 mb-4">
                Take Control of Your Business Processes With our SaaS
              </p>
              <p className="text-neutral-400">
                Streamline your business operations with our tailored SaaS solutions. Our platforms offer seamless integration and user-friendly interfaces, allowing you to manage tasks and optimize workflows efficiently.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">01</div>
              <div className="text-neutral-300">Signup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">02</div>
              <div className="text-neutral-300">Choose a Plan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">03</div>
              <div className="text-neutral-300">Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">04</div>
              <div className="text-neutral-300">Final Result</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;