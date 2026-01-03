import { motion } from "motion/react";

const ServiceAreas = () => {
  const areas = [
    "Uttam Nagar", "Kamla Nagar", "Krishan Vihar",
    "Karol Bagh", "Hauz Khas", "DLF Camellias"
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Service Areas Across Tamilnadu</h2>
        <p className="mt-4 text-xl text-neutral-400">
          At Simply Updify, we proudly serve businesses in:
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4 bg-primary/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-2xl">📍</span>
            <p className="ml-2 font-medium text-neutral-300">{area}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary/20 rounded-2xl border border-white/10 p-8 text-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-neutral-400 text-xl">
            Google Maps Integration<br />
            <span className="text-sm">Interactive map showing our service areas across Tamilnadu</span>
          </p>
        </div>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
          View All Service Areas
        </button>
      </div>
    </section>
  );
};

export default ServiceAreas;