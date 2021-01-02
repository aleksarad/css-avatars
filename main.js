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


// console.log(shadeColor("#e184b6", -35))