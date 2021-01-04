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
  hairBack.classList.add("med-curls-back");
  hairBack2.classList.add("med-curls-back2");
  hairTop.classList.add("med-curls-front");
}

function medBob() {
  clearHair();
  hairBack.classList.add("med-bob-back");
  hairTop.classList.add("straight-top");
}

function longStraight() {
  clearHair();
  hairBack.classList.add("long-straight");
  hairTop.classList.add("straight-top");
}


//GENERATING CODE

const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", function () {
  const htmlCode = document.querySelector("#html-code");
  const cssCode = document.querySelector("#css-code");
  const avatarHTML = document.querySelector(".container").outerHTML;

  let skinHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--skin"
  );
  let skinShadowHex = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--shadow");
  let hairHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--hair"
  );
  let hairShadowHex = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--hair-shadow");
  let eyeHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--eye"
  );
  let circleHex = getComputedStyle(document.documentElement).getPropertyValue(
    "--circle"
  );

  let CSSString = generateCSS(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex
  );

  htmlCode.textContent = `${avatarHTML}`;
  cssCode.textContent = `${CSSString}`;
});


//generate CSS function
function generateCSS(
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) {
  const base = baseClass(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex
  );
  const mediumStraight = mediumStraightClass(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex
  );
  const longStraight = longStraightClass(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex
  );
  const mediumCurls = mediumCurlsClass(
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex
  );

  if (hairBack.classList.contains("med-bob-back")) return base + mediumStraight;
  if (hairBack.classList.contains("long-straight")) return base + longStraight;
  if (hairBack.classList.contains("med-curls-back")) return base + mediumCurls;
  else {
    return base
  }
}

//CSS Classes

const baseClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `.container {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${circleHex};
}

.head {
  position: absolute;
  width: 36%;
  height: 48%;
  border-radius: 50%;
  background: ${skinHex};
  left: 32%;
  top: 18%;
  z-index: 2;
}

.eye {
  position: absolute;
  width: 22%;
  height: 8%;
  border-radius: 50%;
  background: transparent;
  border-top: 5px solid ${skinShadowHex};
  transform: rotate(3deg);
  top: 47%;
}

.eye-left {
  left: 18%;
}

.eye-right {
  right: 18%;
  transform: scaleX(-1) rotate(3deg);
}

.eye::before {
  content: "";
  position: absolute;
  width: 53%;
  height: 95%;
  border-radius: 50%;
  background: ${eyeHex};
  top: -5%;
  left: 24%;
}

.eye::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: transparent;
  border-top: 3px solid black;
  top: -13%;
}


.brow {
  position: absolute;
  width: 26%;
  height: 8%;
  border-radius: 50%;
  background: transparent;
  border: 3px solid;
  border-color: ${hairHex} transparent transparent transparent;
}

.brow-left {
  left: 13%;
  top: 42%;
}

.brow-right {
  right: 13%;
  top: 42%;
}

.nose {
  position: absolute;
  width: 15%;
  height: 5%;
  background: ${skinShadowHex};
  top: 67%;
  left: 43%;
  border-radius: 50% 50% 50% 50% / 0% 0% 100% 100%;
}

.mouth {
  position: absolute;
  width: 28%;
  height: 10%;
  background: transparent;
  border-radius: 50%;
  border: 2px solid;
  border-color: transparent transparent #1a1a1a transparent;
  top: 69%;
  left: 35%;
}

.ear {
  position: absolute;
  width: 15%;
  height: 22%;
  background: ${skinHex};
  border-radius: 55% 45% 0% 100% / 48% 21% 79% 52%;
  z-index: 5;
}

.left-ear {
  top: 46%;
  left: -12%;
  transform: rotate(-18deg);
}

.right-ear {
  top: 46%;
  right: -12%;
  transform: rotate(18deg) scaleX(-1);
}

.neck {
  position: absolute;
  width: 17%;
  height: 23%;
  background: ${skinHex};
  top: 55%;
  left: 41.5%;
  border-radius: 30px;
}

.neck::after {
  content: "";
  position: absolute;
  background: ${skinShadowHex};
  width: 100%;
  height: 35%;
  top: 20%;
  border-radius: 50%;
} `;
};


//MEDIUM STRAIGHT
const mediumStraightClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `.straight-top {
    position: absolute;
    width: 108%;
    height: 95%;
    background: transparent;
    border-top: 2.8rem solid ${hairHex};
    border-radius: 50%;
    left: -4%;
    top: -9%;
  }
  
  .straight-top::after {
    content: "";
    position: absolute;
    width: 1.5%;
    height: 25%;
    border-radius: 10px;
    background: ${skinHex};
    left: 48.5%;
    top: -14%;
  }
  
  .med-bob-back {
    position: absolute;
    width: 60%;
    height: 58%;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    background: ${hairHex};
    box-shadow: 0 0 2px var ${hairShadowHex};
    left: 20%;
    top: 14%;
  }`;
};


//LONG STRAIGHT
const longStraightClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `
  .straight-top {
    position: absolute;
    width: 108%;
    height: 95%;
    background: transparent;
    border-top: 2.8rem solid ${hairHex};
    border-radius: 50%;
    left: -4%;
    top: -9%;
  }
  
  .straight-top::after {
    content: "";
    position: absolute;
    width: 1.5%;
    height: 25%;
    border-radius: 10px;
    background: ${skinHex};
    left: 48.5%;
    top: -14%;
  }
  
  .long-straight {
    position: absolute;
    width: 60%;
    height: 80%;
    border-radius: 50%;
    background: ${hairHex};
    box-shadow: 0 0 2px var${hairShadowHex};
    left: 20%;
    top: 14%;
  }
  
  .long-straight::after {
    content: "";
    position: absolute;
    height: 35%;
    width: 45%;
    border-radius: 50%;
    background: ${circleHex};
    bottom: -3%;
    left: 27%;
  }`
}

//MED CURLS
const mediumCurlsClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `
  .med-curls-front {
    position: absolute;
    width: 75%;
    height: 39%;
    border-radius: 50%;
    background: ${hairHex};
    box-shadow: 0px 4px 0px 0px var ${skinShadowHex};
    top: -12%;
    left: 20%;
    z-index: 5;
  }
  
  .med-curls-front::before {
    content: "";
    position: absolute;
    width: 95%;
    height: 85%;
    border-radius: 50%;
    background: ${hairHex};
    left: -70%;
    top: 50%;
    transform: rotate(-48deg);
  }
  
  .med-curls-front::after {
    content: "";
    position: absolute;
    width: 92%;
    height: 90%;
    border-radius: 50%;
    background: ${hairHex};
    left: 66%;
    top: 55%;
    transform: rotate(40deg);
    z-index: -1;
  }
  
  .med-curls-back {
    position: absolute;
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background: ${hairHex};
    top: 28%;
    left: 21%;
  }
  
  .med-curls-back::before {
    content: "";
    position: absolute;
    width: 105%;
    height: 105%;
    border-radius: 50%;
    background: ${hairHex};
    top: 60%;
    left: -15%;
  }
  
  .med-curls-back::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 80%;
    border-radius: 50%;
    background: ${hairHex};
    top: 100%;
    left: 45%;
  }
  
  .med-curls-back2 {
    position: absolute;
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background: ${hairHex};
    top: 28%;
    right: 21%;
    transform: scaleX(-1);
  }
  
  .med-curls-back2::before {
    content: "";
    position: absolute;
    width: 105%;
    height: 105%;
    border-radius: 50%;
    background: ${hairHex};
    top: 60%;
    left: -15%;
  }
  
  .med-curls-back2::after {
    content: "";
    position: absolute;
    width: 120%;
    height: 80%;
    border-radius: 50%;
    background: ${hairHex};
    top: 100%;
    left: 45%;
  }`
}

