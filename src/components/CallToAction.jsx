import React from "react";
import { ArrowRight } from "iconsax-react"; // Ensure ArrowRight icon is already installed

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
    <div className="px-12 py-16 bg-cream-light">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12">Read My Blog Posts</h2>

      {/* Blog Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a
          href={blogPost.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="w-full overflow-hidden">
            <img
              src={blogPost.imageUrl}
              alt={blogPost.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 relative">
            <h3 className="text-2xl font-bold mb-2">{blogPost.title}</h3>
            <p className="text-gray-600 mb-4 w-4/5 text-sm">
              {blogPost.description}
            </p>

            {/* Styled Arrow Icon */}
            <div className="absolute bottom-6 right-6 flex items-center justify-center bg-black p-3 rounded-full shadow-lg transition-transform duration-300 transform group-hover:translate-x-2">
              <ArrowRight size="24" className="text-white -rotate-45" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
