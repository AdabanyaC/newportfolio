import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import { staggerContainer } from "./../utils/motion";

const CallToAction = () => {
  const blogPost = {
    title: "How to Create a Custom Offcanvas Menu Using ReactJS",
    description:
      "This article will teach you how to create a custom reusable offcanvas menu component using ReactJS, React Hooks and TailwindCSS.",
    imageUrl:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1689106806277/6e656f81-7c05-4daa-8fac-7828f9839a06.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", // Replace with your blog cover image URL
    postUrl:
      "https://clintonadabanya.hashnode.dev/how-to-create-a-custom-offcanvas-menu-using-reactjs",
  };

  return (
    <motion.div
      id="blog"
      className="px-4 md:px-16 py-16 bg-cream-light"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl text-wow-green font-semibold mb-12">
        Read My Blog Posts
      </h2>

      {/* Blog Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.a
          href={blogPost.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[hsla(0,0%,100%,0.5)] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full overflow-hidden">
            <motion.img
              src={blogPost.imageUrl}
              alt={blogPost.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="p-6 relative">
            <h3 className="text-2xl font-bold mb-2 text-wow-green">
              {blogPost.title}
            </h3>
            <p className=" mb-4 w-4/5 text-wow-gray">{blogPost.description}</p>

            {/* Styled Arrow Icon */}
            <motion.div
              className="absolute bottom-6 right-6 flex items-center justify-center bg-wow-green p-3 rounded-full shadow-lg transition-transform duration-300 transform group-hover:translate-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowRight size="24" className="text-cream-light -rotate-45" />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CallToAction;
