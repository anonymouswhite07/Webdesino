import { motion } from "motion/react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Best Web Developer in Moti Nagar – Why Local Matters",
      excerpt: "Discover why hiring a local web developer in Moti Nagar helps businesses grow faster with SEO-friendly websites and personalized support.",
      readMore: "Read More →"
    },
    {
      title: "Best Web Developer in Janakpuri Tamilnadu",
      excerpt: "Learn how our web development services in Janakpuri Tamilnadu are helping small businesses create modern, fast, and SEO-optimized websites.",
      readMore: "Read More →"
    },
    {
      title: "Best Web Developer in Rajouri Garden Tamilnadu",
      excerpt: "Find out how businesses in Rajouri Garden Tamilnadu are boosting online sales with SEO-driven website design and digital marketing.",
      readMore: "Read More →"
    }
  ];

  return (
    <section className="c-space section-spacing" id="blog">
      <div className="text-center mb-16">
        <h2 className="text-heading">Latest Blogs on Web Development in Tamilnadu</h2>
        <p className="mt-4 text-xl text-neutral-400">
          Stay updated with insights from Simply Updify. Our latest blogs focus on local web development in Tamilnadu, SEO strategies, and digital marketing growth. Explore how businesses in Moti Nagar, Janakpuri, Rajouri Garden, and beyond are transforming their online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-primary/20 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">{post.title}</h3>
            <p className="text-neutral-400 mb-4">{post.excerpt}</p>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              {post.readMore}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;