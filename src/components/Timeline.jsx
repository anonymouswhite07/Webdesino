import { motion } from "motion/react";

const industries = [
  {
    title: "Real Estate",
    description: "High-performance real estate websites with property listings, lead forms, and SEO-ready structures.",
    example: "View Example – Land Sathi"
  },
  {
    title: "Agencies & Startups",
    description: "Conversion-focused websites for startups and agencies to build credibility and attract clients.",
    example: "View Example – Ambassador Perk"
  },
  {
    title: "Education & Training",
    description: "Online learning platforms and coaching institute websites with student-friendly navigation.",
    example: "View Example – ProSkills Hub"
  },
  {
    title: "Healthcare & Clinics",
    description: "Trusted healthcare websites for hospitals, clinics, and medical suppliers with appointment booking.",
    example: "View Example – Mentok Healthcare"
  },
  {
    title: "Ecommerce & Retail",
    description: "Ecommerce websites with integrated payments, modern UI, and optimized product catalogs.",
    example: "View Example – Buy Khari Baoli"
  },
  {
    title: "Small Businesses",
    description: "Affordable, professional websites for SMEs and local businesses to boost online presence.",
    example: "View Example – Book Buzzz"
  },
  {
    title: "Corporate & SaaS",
    description: "Corporate and SaaS websites with clean UI, secure integrations, and lead generation systems.",
    example: "View Example – CS Hub"
  },
  {
    title: "Fashion & Lifestyle",
    description: "Stylish, modern websites for fashion, lifestyle, and wellness brands with ecommerce features.",
    example: "View Example – Nourish Mantra"
  },
  {
    title: "Freelance & Talent Platforms",
    description: "Dynamic platforms for talent acquisition, freelance gigs, and creative marketplaces.",
    example: "View Example – Site Karo"
  }
];

export const Timeline = () => {
  return (
    <div className="flex flex-col">
      {industries.map((industry, index) => (
        <div key={index} className="relative pl-8 py-6 group">
          {/* Line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-neutral-700 transform -translate-x-1/2"></div>
          
          {/* Dot */}
          <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-primary/20 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">🏡 {industry.title}</h3>
              <p className="text-neutral-400 mb-4">{industry.description}</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                {industry.example}
              </button>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};