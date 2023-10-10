export const changeURL = () => {
  /*
   The basic purpose of this function is to change the URL when we are in development mode, 
   as not changing it can cause problems.
   
    */
  if (window.location.protocol === "http:") {
    return "https://github.com/lukePeavey/quotable";
  } else {
    return `${window.location.href}`;
  }
};
