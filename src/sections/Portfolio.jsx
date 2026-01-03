import { motion } from "motion/react";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "BookBuzzz",
      description: "When BookBuzzz approached us, their website and marketplace sales were nearly zero. After just 3 months of SEO, marketing, and website optimization, they now generate ₹25,00,000+ monthly sales across website and marketplaces.",
      image: "/assets/projects/elearning.jpg"
    },
    {
      title: "LuckyNutra",
      description: "When LuckyNutra came to us, they had only ₹3,000/month sales on website and 0 on marketplaces. Within 2 months, with our SEO & performance marketing strategies, they now generate ₹10,00,000+ monthly sales.",
      image: "/assets/projects/auth-system.jpg"
    },
    {
      title: "BuyKhariBaoli",
      description: "BuyKhariBaoli started with only ₹30,000/month sales from their website. After implementing our SEO campaigns and optimizing user experience, they now achieve ₹6,00,000/month in sales directly from the website.",
      image: "/assets/projects/ecommerce.jpg"
    },
    {
      title: "Meritshot",
      description: "Meritshot partnered with us for a focused SEO strategy. Within months, we ranked their website on highly competitive global keywords such as \"Investment Banking Course\", \"Best Institute for Investment Banking\", and \"Indian No.1 Institute for Investment Banking\", driving significant worldwide visibility and student enrollments.",
      image: "/assets/projects/online-learning.jpg"
    }
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Portfolio & Case Studies</h2>
        <p className="mt-4 text-xl text-neutral-400">
          At Simply Updify, we help brands transform their online presence with proven website development and digital marketing strategies. Here are some real client success stories that highlight our expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="bg-primary/20 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">📚 {study.title}</h3>
              <p className="text-neutral-400 mb-4">{study.description}</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  View Website →
                </button>
                <button className="px-4 py-2 border border-white/30 hover:bg-white/10 rounded-lg transition-colors">
                  Read Case Study →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;