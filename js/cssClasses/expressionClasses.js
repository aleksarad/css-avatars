//smileClass
const smileClass = (
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex,
    borderRadiusVal,
    mouthColorHex,
    blackHex
  ) => {
    return `
    .smile {
        position: absolute;
        width: 28%;
        height: 10%;
        background: transparent;
        border-radius: 50%;
        border: 2px solid;
        border-color: transparent transparent ${blackHex} transparent;
        top: 69%;
        left: 35%;
      }
    `;
};

//grinClass
const grinClass = (
    hairHex,
    hairShadowHex,
    eyeHex,
    skinHex,
    skinShadowHex,
    circleHex,
    borderRadiusVal,
    mouthColorHex,
    blackHex
  ) => {
    return `
    .grin {
        position: absolute;
        width: 28%;
        height: 8%;
        border-top: 1px solid ${skinShadowHex};
        border-bottom: 1px ${skinShadowHex};
        background: ${mouthColorHex};
        border-radius: 50% 50% 50% 50% / 0% 0% 100% 100%;
        top: 77.5%;
        left: 37%;
      }
      
      .grin::before {
        position: absolute;
        content: "";
        background: white;
        width: 88%;
        height: 30%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        left: 6%;
      }
      
      .grin::after {
        position: absolute;
        content: "";
        background: #ed4b6be2;
        width: 50%;
        height: 38%;
        border-radius: 50%;
        left: 25%;
        bottom: 6%;
      }
    `;
};

//blushClass
const blushClass = () => {
    return `
    .blush-left {
        position: absolute;
        width: 23%;
        height: 9%;
        background: #ed4b6b61;
        top: 59%;
        transform: rotate(5deg);
        border-radius: 50%;
        left: 15%;
      }
      
      .blush-right {
        position: absolute;
        width: 23%;
        height: 9%;
        background: #ed4b6b61;
        top: 59%;
        transform: rotate(-5deg);
        border-radius: 50%;
        right: 15%;
      }
    `;
};

export { smileClass, grinClass, blushClass };