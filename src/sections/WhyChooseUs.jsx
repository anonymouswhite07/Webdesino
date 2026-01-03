import { motion } from "motion/react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Proven Results",
      description: "Trusted by businesses across Tamilnadu with measurable growth in traffic, leads, and sales."
    },
    {
      title: "Timely Delivery",
      description: "We respect deadlines and deliver fully tested, functional websites on time, every time."
    },
    {
      title: "Award Winning",
      description: "Recognized for professional work and high-quality digital solutions that set industry benchmarks."
    },
    {
      title: "Highest Rankings in Tamilnadu",
      description: "Our SEO-first approach ensures your business ranks on top of Google searches in Tamilnadu."
    },
    {
      title: "SEO-Optimized Websites",
      description: "Every site we build is mobile-friendly, fast-loading, and built to perform on Google search."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is available round the clock for maintenance, updates, and assistance."
    }
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Why Choose Simply Updify as Your Web Development Company in Tamilnadu?</h2>
        <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
          At Simply Updify, we deliver professional web development and digital marketing solutions that help businesses in Tamilnadu grow faster. With SEO-optimized websites, timely delivery, and award-winning strategies, we ensure your online presence stands out in a competitive market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-primary/20 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✔</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;