export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Given an image return the url
 * Works locally and deployed strapi
 * @param {any} image
 */
export const fromImgToUrl = (image) => {
  if (!image) {
    return "/macbook.jpeg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
