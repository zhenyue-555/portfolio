//dynamically import images into different components
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };