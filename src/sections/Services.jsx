import { motion } from "motion/react";

const Services = () => {
  const services = [
    {
      title: "Web Designing Agency",
      description:
        "Elevate your online presence with our web development agency in Tamilnadu. We create visually stunning, user-friendly websites that capture your brand's essence and deliver captivating digital experiences",
      icon: "💻",
    },
    {
      title: "SEO Optimization Agency",
      description:
        "Boost your visibility with our expert SEO strategies. As a top SEO optimization agency in Tamilnadu, we help your website rank higher, driving organic traffic and sustainable growth",
      icon: "🔍",
    },
    {
      title: "Digital Marketing Agency",
      description:
        "Unlock growth with Tamilnadu's top digital marketing agency, using SEO, social media, and targeted campaigns to boost your brand and deliver real results",
      icon: "📈",
    },
  ];

  return (
    <section className="c-space section-spacing" id="services">
      <div className="text-center mb-16">
        <h2 className="text-heading">Services</h2>
        <p className="mt-4 text-xl text-neutral-400">
          Our services solve any business problem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-primary/30 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-neutral-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Services that we provide</h3>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          At our web design and development company in Tamilnadu, we focus on attracting new customers through responsive, user-friendly websites tailored to your audience. Our digital marketing strategies—SEO, social media, and targeted ads—drive traffic and convert visitors into loyal customers.
        </p>
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary/30 to-secondary/30 p-8 rounded-2xl border border-white/10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/OPTIMIZE YOUR MARKETING.png"
              alt="Optimize Your Marketing"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-bold mb-4">OPTIMIZE YOUR MARKETING</h3>
            <p className="text-xl text-neutral-300">
              Maximize your business potential with our data-driven marketing strategies. We help you reach the right audience at the right time with compelling campaigns that deliver measurable results.
            </p>
            <p className="text-neutral-400 mt-4">
              Our team of experts combines creativity with analytics to create marketing solutions that drive engagement, increase conversions, and grow your bottom line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;