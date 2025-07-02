export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}; // making it easier to dynamically import images into different components