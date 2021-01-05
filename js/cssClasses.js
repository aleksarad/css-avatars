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
    top: 39%;
  }
  
  .brow-right {
    right: 13%;
    top: 39%;
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
    left: -11%;
    transform: rotate(-18deg);
  }
  
  .right-ear {
    top: 46%;
    right: -11%;
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
      top: 13%;
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
      top: 13%;
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
    }`;
};

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
    }`;
};

export { baseClass, mediumStraightClass, longStraightClass, mediumCurlsClass }
