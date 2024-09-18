// utils/slugify.js
export const slugify = (text) => {
  return text.toLowerCase().replace(/ /g, "-");
};
