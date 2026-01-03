import { motion } from "motion/react";

const LocalPresence = () => {
  const areas = [
    "Krishan Vihar & Nearby Areas",
    "Uttam Nagar & Nearby Areas",
    "Kamla Nagar & Nearby Areas",
    "Karol Bagh & Nearby Areas",
    "Hauz Khas & Nearby Areas",
    "DLF Camellias & Nearby Areas"
  ];

  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">Your Local Web Development Company in Tamilnadu</h2>
        <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
          At Simply Updify, we are proud to be the trusted local web development and digital marketing company in Tamilnadu. We help businesses across Dwarka, Uttam Nagar, Bawana, Karol Bagh, Kalkaji, Govindpuri, Kamla Nagar, Shakti Nagar, Civil Lines, Rajouri Garden, Sabzi Mandi, and Krishan Vihar establish a strong digital presence.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-8 rounded-2xl border border-white/10 mb-16">
        <p className="text-xl text-neutral-300 text-center max-w-3xl mx-auto">
          Whether you run a small shop, a clinic, a real estate agency, or an ecommerce brand, our SEO-optimized websites and marketing strategies ensure higher visibility, more leads, and improved conversions. We focus on Google Maps SEO and hyperlocal strategies so your business shows up when customers in your neighborhood search online.
        </p>
      </div>



      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors">
          Get a Free Consultation →
        </button>
      </div>
    </section>
  );
};

export default LocalPresence;