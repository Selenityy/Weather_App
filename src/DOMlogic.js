// Create Div with Id Attribute & Append to Parent Div
const createNewDiv = (newDivId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", newDivId);
  parentDiv.appendChild(newDiv);
};

// Set Class Attribute
const setClassAttr = (divId, classList) => {
  let div = document.getElementById(divId);
  div.classList.add(classList);
};

// Create an Img div
const createImg = (newImgId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let newImg = document.createElement("img");
  newImg.setAttribute("id", newImgId);
  //   newImg.src = imageName;
  parentDiv.appendChild(newImg);
};

// Add Text to a Div
const addText = (divId, desiredText) => {
  let div = document.getElementById(divId);
  div.textContent = desiredText;
};

export { createNewDiv, setClassAttr, createImg, addText };
