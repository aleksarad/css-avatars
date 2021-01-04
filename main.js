//update hair color
const hairColor = document.querySelector("#hair-color");
hairColor.addEventListener("input", function (e) {
  changeHair(e.target.value);
});

function changeHair(newColor) {
  const shadow = shadeColor(newColor, -35);
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
  const newBlack = shadeColor(hexColor, -60);
  document.documentElement.style.setProperty("--black", `${newBlack}`);
}

function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

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
    case "bald":
      clearHair();
  }
});

//MEDIUM CURLY

function medCurls() {
  clearHair();
  hairBack.classList.add('med-curls-back');
  hairBack2.classList.add('med-curls-back2');
  hairTop.classList.add('med-curls-front');
}

function medBob() {
  clearHair();
  hairBack.classList.add('med-bob-back');
  hairTop.classList.add('straight-top');
}

function longStraight() {
  clearHair();
  hairBack.classList.add('long-straight');
  hairTop.classList.add('straight-top');
}


//generate button 
const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", function(){
  const avatarCode = document.querySelector("#avatar-code");
  const avatarHTML = document.querySelector(".container").outerHTML;
  avatarCode.textContent = `${avatarHTML}`
})


//code
// const avatarContainer = document.querySelector(".container").outerHTML
// console.log(document.querySelector(".container").outerHTML)
// console.log(window.getComputedStyle(document.querySelector(".container")));
// const avatarCode = document.querySelector("#avatar-code");
// avatarCode.textContent = `${avatarContainer}`



//what do we need our generated output to contain?

//HTML with updated classes - CHECK
//CSS
//either we pull the live css from somewhere
// OR we can store the classes in js variables, we would need to keep track of colors too

console.log(document.styleSheets[0])