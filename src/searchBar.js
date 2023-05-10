import { addText, createNewDiv, addBtn } from "./DOMlogic";
import searchImg from "./assets/searchIcon.png";

const createSearchForm = () => {
  let parentDiv = document.getElementById("searchLocation");
  let form = document.createElement("form");
  form.setAttribute("id", "myForm");
  form.setAttribute("name", "myForm");
  form.setAttribute("action", "");
  form.setAttribute("method", "GET");
  parentDiv.appendChild(form);

  let button = document.createElement("button");
  let img = document.createElement("img");
  img.setAttribute("id", "searchImg");
  img.src = searchImg;
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submitBtn");
  button.innerHTML = "";
  button.appendChild(img);
  form.appendChild(button);

  let label = document.createElement("label");
  label.setAttribute("for", "location");
  form.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("id", "location");
  input.setAttribute("type", "text");
  input.setAttribute("name", "location");
  input.setAttribute("placeholder", "Search Location...");
  form.appendChild(input);
};

const createToggleBtn = () => {
  let parentDiv = document.getElementById("searchLocation");

  let label = document.createElement("label");
  label.setAttribute("class", "toggle");
  parentDiv.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  label.appendChild(input);

  let span = document.createElement("span");
  span.setAttribute("class", "slider");
  label.appendChild(span);
};

const createSearchHeader = () => {
  createNewDiv("searchBar", "content");

  createNewDiv("searchLocation", "searchBar");
  createNewDiv("toggleDay", "searchBar");

  addBtn("today", "toggleDay");
  addText("today", "Today");
  addBtn("tomorrow", "toggleDay");
  addText("tomorrow", "Tomorrow");
  addBtn("threeDay", "toggleDay");
  addText("threeDay", "3 Day");

  createSearchForm();
  createToggleBtn();
};

export { createSearchHeader, createSearchForm };
