import { reviews } from "../constants";
import { Marquee } from "../components/Marquee";

const Testimonial = () => {
  return (
    <section className="c-space section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-heading">⭐ Client Reviews – Web Development & SEO Services in Tamilnadu</h2>
      </div>

      <Marquee items={reviews} />

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
          📍 See All Google Reviews
        </button>
      </div>
    </section>
  );
};

export default Testimonial;