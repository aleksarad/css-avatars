//TODOS:
//add a few more customizing options
// 2 masculine hairstyles
// smile / blush
//dropdown
//hide circle
//change background color?
//make an about modal - explaining stagnancy of some values
//consider storing css in an obj vs string - weigh pros/cons

import { shadeColor } from "./js/helpers/shadeColor.js";
import { copyCode } from "./js/helpers/copyToClipBoard.js";
import {
  baseClass,
  mediumStraightClass,
  longStraightClass,
  mediumCurlsClass,
  bunClass,
  shortClass,
  curlyTopClass,
  ponyClass,
} from "./js/cssClasses.js";

//update hair color
const hairColor = document.querySelector("#hair-color");
hairColor.addEventListener("input", function (e) {
  changeHair(e.target.value);
});

function changeHair(newColor) {
  const shadow = shadeColor(newColor, -20);
  document.documentElement.style.setProperty("--hair", `${newColor}`);
  document.documentElement.style.setProperty("--hair-shadow", `${shadow}`);
}

//update eye color
const eyeColor = document.querySelector("#eye-color");
eyeColor.addEventListener("input", function (e) {
  changeEyeColor(e.target.value);
});

function changeEyeColor(newColor) {
  document.documentElement.style.setProperty("--eye", `${newColor}`);
}

//update skin tone
const skinTone = document.querySelector("#skin-tone");
skinTone.addEventListener("input", function (e) {
  changeSkinColor(e.target.value);
});

function changeSkinColor(newColor) {
  document.documentElement.style.setProperty("--skin", `${newColor}`);
  generateShadow(newColor);
}

function generateShadow(hexColor) {
  const newShadow = shadeColor(hexColor, -25);
  document.documentElement.style.setProperty("--shadow", `${newShadow}`);
  const newMouthShade = shadeColor(hexColor, -50);
  document.documentElement.style.setProperty("--mouth", `${newMouthShade}`);
  const newBlack = shadeColor(hexColor, -60);
  document.documentElement.style.setProperty("--black", `${newBlack}`);
}

//update bg color
const bgColorInput = document.querySelector("#bg-color");
let BGColor = 'white';
bgColorInput.addEventListener("input", function (e) {
  changeBgColor(e.target.value);
});

function changeBgColor(newColor) {
  document.documentElement.style.setProperty("--circle", `${newColor}`);
}

//change background shape
const circleCheckbox = document.querySelector("#bg-checkbox");
const container = document.querySelector(".container");
let borderRadiusVal = '50%';
circleCheckbox.addEventListener("click", function(){
  if (circleCheckbox.checked == true) {
    container.style.borderRadius = "50%";
    borderRadiusVal = '50%';
  }; 
  if (circleCheckbox.checked === false) {
    container.style.borderRadius = "15px";
    borderRadiusVal = '15px';
  }; 
})

//CHANGE HAIRSTYLES

//select hair elements
const hairBack = document.querySelector("#hair-back");
const hairBack2 = document.querySelector("#hair-back2");
const hairTop = document.querySelector("#hair-top");

//clear hair classes:
function clearHair() {
  hairBack.className = "";
  hairBack2.className = "";
  hairTop.className = "";
}

//select dropdown
const hairSelect = document.querySelector("#hair-select");

hairSelect.addEventListener("change", function (e) {
  let hairStyle = e.target.value;
  switch (hairStyle) {
    case "med-curls":
      medCurls();
      break;
    case "med-bob":
      medBob();
      break;
    case "long-straight":
      longStraight();
      break;
    case "long-side":
      longSidePart();
      break;
    case "bun":
      bun();
      break;
    case "short":
      short();
      break;
    case "short-curly":
      shortCurly();
      break;
    case "pony":
      pony();
      break;
    case "bald":
      clearHair();
  }
});

function medCurls() {
  clearHair();
  hairBack.classList.add("med-curls-back");
  hairBack2.classList.add("med-curls-back2");
  hairTop.classList.add("med-curls-front");
}

function medBob() {
  clearHair();
  hairBack.classList.add("med-bob-back");
  hairTop.classList.add("med-bob-top");
}

function longStraight() {
  clearHair();
  hairBack.classList.add("long-straight-back");
  hairTop.classList.add("long-straight-top");
}

function longSidePart() {
  clearHair();
  hairBack.classList.add("long-side-back");
  hairTop.classList.add("long-side-top");
}

function bun() {
  clearHair();
  hairTop.classList.add("bun-top");
}

function short() {
  clearHair();
  hairTop.classList.add("short-hair");
}

function shortCurly() {
  clearHair();
  hairBack.classList.add("curly-top-back");
  hairBack2.classList.add("curly-top-back2");
  hairTop.classList.add("curly-top");
}

function pony() {
  clearHair();
  hairBack.classList.add("pony-back");
  hairTop.classList.add("pony-top");
}

//GENERATING CODE

const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", function () {
  const htmlCode = document.querySelector("#html-code");
  const cssCode = document.querySelector("#css-code");
  const avatarHTML = document.querySelector("#container").outerHTML;

  let skinHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--skin");

  let skinShadowHex = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--shadow");

  let hairHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--hair");

  let hairShadowHex = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--hair-shadow");

  let eyeHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--eye");

  let circleHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--circle");

  let CSSString = generateCSS(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex,
    borderRadiusVal
  );

  htmlCode.value = `${avatarHTML}`;
  cssCode.value = `${CSSString}`;
});

//generate CSS function
function generateCSS(
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex,
  borderRadiusVal
) {
  let args = [
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex,
    borderRadiusVal
  ];

  if (hairTop.classList.contains("med-bob-top"))
    return baseClass(...args) + mediumStraightClass(...args);
  if (hairTop.classList.contains("long-straight-top"))
    return baseClass(...args) + longStraightClass(...args);
  if (hairTop.classList.contains("med-curls-front"))
    return baseClass(...args) + mediumCurlsClass(...args);
  if (hairTop.classList.contains("bun-top"))
    return baseClass(...args) + bunClass(...args);
  if (hairTop.classList.contains("short-hair"))
    return baseClass(...args) + shortClass(...args);
  if (hairTop.classList.contains("curly-top"))
    return baseClass(...args) + curlyTopClass(...args);
  if (hairTop.classList.contains("pony-top"))
    return baseClass(...args) + ponyClass(...args);
  else {
    return baseClass(...args);
  }
}

//copy to clipboard
const copyButtonsContainer = document.querySelector("#copy-button-container");
copyButtonsContainer.addEventListener("click", function (e) {
  if (e.target.textContent === "copy html") copyCode("html");
  if (e.target.textContent === "copy css") copyCode("css");
});


//MODAL
const modal = document.querySelector("#about-modal")
const modalOpen = document.querySelector("#modal-open")
const modalClose = document.querySelector("#modal-close")

modalOpen.addEventListener("click", function(){
  modal.style.display = "block";
})

modalClose.addEventListener("click", function(){
  modal.style.display = "none";
})

window.addEventListener("click", function(e){
  if (e.target == modal) {
    modal.style.display = "none";
  }
})