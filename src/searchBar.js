import { createNewDiv, setClassAttr } from "./DOMlogic";

const createSearchBar = () => {
  console.log("cat");
  createNewDiv("searchBar", "content");
  createNewDiv("searchIcon", "searchBar");
  createNewDiv("searchLocation", "searchBar");
};

export { createSearchBar };
