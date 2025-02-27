import React from "react";

const hobbies = [
  {
    name: "Writing",
    description:
      "I'm a published author who enjoys crafting engaging stories and insightful articles on technology and faith.",
    icon: (
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z" />
      </svg>
    ),
  },
  {
    name: "Teaching",
    description:
      "I previously ran a community where I taught people the fundamentals of Frontend Development, helping beginners transition into tech.",
    icon: (
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
      </svg>
    ),
  },
  {
    name: "Video Editing",
    description:
      "I enjoy bringing ideas to life through creative video edits, adding motion graphics and storytelling elements to enhance engagement.",
    icon: (
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
      </svg>
    ),
  },
  {
    name: "Listening to Podcasts",
    description:
      "I keep up with industry trends, theology, and personal development through podcasts that inspire and educate.",
    icon: (
      <svg
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M96 96l0 160c0 53 43 96 96 96s96-43 96-96l-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c0-53-43-96-96-96S96 43 96 96zM320 240l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24z" />
      </svg>
    ),
  },
];

const Hobbies = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-8 bg-[hsla(0,0%,100%,0.5)] hover:shadow-xl transition-shadow duration-300 lg:p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Hobbies</h2>
      <p className="text-gray-600 mb-6 text-lg">
        When I don’t code, these are my hobbies:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 bg-gray-100 rounded-md"
          >
            {hobby.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {hobby.name}
              </h3>
              <p className="text-gray-600 text-sm">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
