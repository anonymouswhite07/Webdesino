import { useState } from "react";
import { motion } from "motion/react";

const Consultation = () => {
  const [url, setUrl] = useState("");

  const handleAudit = (e) => {
    e.preventDefault();
    if (url) {
      alert(`Running SEO audit for: ${url}`);
      // In a real app, this would connect to an API
    }
  };

  return (
    <section className="c-space section-spacing">
      <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-10 rounded-2xl border border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-4">Boost Your Online Growth with Free SEO Consultation</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
          At Simply Updify, we help businesses in Tamilnadu and across India achieve higher Google rankings, more leads, and better conversions. Book your free consultation or request a website audit today to discover how we can transform your digital presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
            📞 Book Free 30-Minute SEO Consultation
          </button>
          <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-lg font-medium transition-colors">
            🛠 Request a Free Website Audit
          </button>
        </div>

        <div className="max-w-2xl mx-auto bg-primary/20 p-6 rounded-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Free Website SEO Audit Tool</h3>
          <p className="text-neutral-400 mb-4">
            Enter your website URL and we'll generate a quick SEO audit using Google PageSpeed Insights. Get insights on performance, mobile optimization, and SEO readiness.
          </p>

          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
              className="flex-grow px-4 py-2 bg-primary/30 border border-white/10 rounded-lg focus:outline-none focus:border-white/30"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Run SEO Audit →
            </button>
          </form>

          <p className="text-neutral-400 mt-4 text-sm">
            Enter your website URL below and get an instant SEO analysis including speed, meta tags, mobile optimization, and ranking opportunities. This free SEO audit helps businesses across Tamilnadu & India identify growth opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;