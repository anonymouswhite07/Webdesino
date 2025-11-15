import { motion } from "motion/react";

const Industries = () => {
  const industries = [
    { icon: "✈️", title: "Immigration" },
    { icon: "🛒", title: "E-commerce" },
    { icon: "💻", title: "IT & Software" },
    { icon: "⚖️", title: "Legal & Compliance" },
    { icon: "🏥", title: "Health & Wellness" },
    { icon: "🤝", title: "NGO / Nonprofit" },
    { icon: "🌱", title: "Agriculture / Agritech" },
    { icon: "👕", title: "Fashion & Apparel" },
    { icon: "💎", title: "Recruitment & HR" },
    { icon: "✈️", title: "Travel / Hospitality" },
    { icon: "🏠", title: "Real Estate & Property" },
    { icon: "💰", title: "Finance & Fintech" },
    { icon: "📊", title: "Business & Consulting" },
    { icon: "🚚", title: "Logistics & Supply Chain" },
    { icon: "📚", title: "EdTech / Education" },
    { icon: "💼", title: "Portfolio / Investments" },
    { icon: "🏨", title: "Hotels & Resorts" },
    { icon: "☁️", title: "SaaS / Cloud" },
    { icon: "📱", title: "Mobile Apps / Software Products" },
    { icon: "📣", title: "Digital Marketing / Advertising" },
    { icon: "🏗️", title: "Construction & Infrastructure" },
    { icon: "⚙️", title: "Manufacturing / Industry" },
    { icon: "🔋", title: "Energy & Utilities" },
    { icon: "🧪", title: "Pharma / Chemical" }
  ];

  return (
    <section className="c-space section-spacing" id="industries">
      <div className="text-center mb-16">
        <h2 className="text-heading">Strategic Solutions for Diverse Industries</h2>
        <p className="mt-4 text-xl text-neutral-400">
          Touching every possible industry to serve
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-primary/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <span className="text-3xl mb-3">{industry.icon}</span>
            <p className="text-center text-neutral-300">{industry.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;