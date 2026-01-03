import { motion } from "motion/react";
import { Marquee } from "../components/Marquee";
import { Globe } from "../components/globe";

const Clients = () => {
  const brands = [
    "Brand 1", "Brand 2", "Brand 3", "Brand 4",
    "Brand 5", "Brand 6", "Brand 7", "Brand 8"
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Delivered" },
    { number: "10+", label: "Global Certifications" }
  ];

  const certifications = [
    { name: "Google", icon: "/assets/logos/google.svg" },
    { name: "Microsoft", icon: "/assets/logos/microsoft.svg" },
    { name: "IBM", icon: "/assets/logos/ibm.svg" }
  ];

  return (
    <section className="c-space" id="clients">
      <div className="text-center mb-16">
        <h2 className="text-heading">Trusted by Leading Brands</h2>
      </div>

      <div className="mb-16">
        <Marquee items={brands.map((brand, index) => ({
          name: brand,
          img: `https://robohash.org/${index}`
        }))} />
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

      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-10 rounded-2xl border border-white/10 mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-6">Trusted Web Development Company in Tamilnadu</h3>
            <p className="text-xl text-neutral-300">
              At Simply Updify, we are trusted by 50+ clients across Tamilnadu for delivering modern websites, SEO strategies, and digital marketing solutions. Recognized by global leaders like Google, WordPress, Shopify, SEMRush, and DesignRush, we ensure every project is SEO-optimized, professional, and result-driven.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center -ml-8">
            <div className="w-64 h-64">
              <Globe />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-primary/20 rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center mb-2">
                <span className="text-neutral-400">Logo</span>
              </div>
              <p className="text-neutral-300">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold mb-4">OPTIMIZE YOUR MARKETING</h3>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          web design and development company in Tamilnadu
        </p>
      </div>

    </section>
  );
};

export default Clients;