import { experiences } from "../constants";
import { Timeline } from "../components/Timeline";

const Experiences = () => {
  return (
    <section className="c-space section-spacing" id="industries">
      <h2 className="text-heading">Industries We Serve</h2>
      <p className="mt-4 text-xl text-neutral-400 max-w-3xl">
        At Simply Updify, we deliver tailor-made websites and digital solutions for businesses across multiple industries. From real estate and ecommerce to healthcare, startups, and education, we build SEO-optimized websites that generate leads, boost sales, and build trust.
      </p>

      <div className="mt-12">
        <Timeline />
      </div>
    </section>
  );
};

export default Experiences;