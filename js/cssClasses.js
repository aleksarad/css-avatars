//CSS Classes
const baseClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex,
  borderRadiusVal
) => {
  return `.container {
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: ${borderRadiusVal};
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
    top: 46%;
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
  return `.med-bob-top {
    position: absolute;
    width: 108%;
    height: 95%;
    background: transparent;
    border-top: 2.8rem solid ${hairHex};
    border-radius: 50%;
    left: -4%;
    top: -9%;
  }
  
  .med-bob-top::after {
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
  .long-straight-top {
    position: absolute;
    width: 108%;
    height: 95%;
    background: transparent;
    border-top: 2.8rem solid ${hairHex};
    border-radius: 50%;
    left: -4%;
    top: -9%;
  }
  
  .long-straight-top::after {
    content: "";
    position: absolute;
    width: 1.5%;
    height: 25%;
    border-radius: 10px;
    background: ${skinHex};
    left: 48.5%;
    top: -14%;
  }
  
  .long-straight-back {
    position: absolute;
    width: 60%;
    height: 80%;
    border-radius: 50%;
    background: ${hairHex};
    left: 20%;
    top: 13%;
  }
  
  .long-straight-back::after {
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

//BUN
const bunClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `
    .bun-top {
        position: absolute;
        width: 98%;
        height: 70%;
        background: transparent;
        border-top: 2.3rem solid ${hairHex};
        border-radius: 50%;
        left: 1%;
        top: -4%;
      }
      
      .bun-top::after {
        content: "";
        width: 48%;
        height: 50%;
        border-radius: 50%;
        background: ${hairHex};
        left: 26%;
        top: -60%;
        position: absolute;
        z-index: -2;
      }
      
      .bun-top::before {
        content: "";
        position: absolute;
        width: 46%;
        height: 25%;
        border-radius: 50%;
        background: ${hairShadowHex};
        left: 27%;
        top: -34%;
        z-index: -1;
      }`;
};

const shortClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `
.short-hair {
    position: absolute;
    width: 97%;
    height: 60%;
    background: transparent;
    border-top: 2.5rem solid ${hairHex};
    border-radius: 50%;
    left: 1.5%;
    top: -2%;
    }
    
    .short-hair::after {
    content: '';
    position: absolute;
    background: ${skinHex};
    width: 92%;
    height: 20%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    left: 4%;
    top: -1%;
}
`;
};

const curlyTopClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `
    .curly-top {
      position: absolute;
      width: 97%;
      height: 60%;
      background: transparent;
      border-top: 2.5rem solid ${hairHex};
      border-radius: 50%;
      left: 1.5%;
      top: -2%;
    }
    
    .curly-top::after {
      content: '';
      position: absolute;
      background: ${skinHex};
      width: 92%;
      height: 20%;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      left: 4%;
      top: -1%;
    }
    
    .curly-top-back {
      position: absolute;
      width: 8%;
      height: 12%;
      border-radius: 50%;
      background: ${hairHex};
      left: 33%;
      top: 17%;
      transform: rotate(-10deg);
    }
    
    .curly-top-back::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${hairHex};
      left: 75%;
      top: -20%;
      transform: rotate(0deg);
    }
    
    .curly-top-back::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${hairHex};
      left: 150%;
      top: -20%;
      transform: rotate(0deg);
    }
    
    .curly-top-back2 {
      position: absolute;
      width: 8%;
      height: 12%;
      border-radius: 50%;
      background:  ${hairHex};
      left: 49%;
      top: 13%;
      transform: rotate(5deg);
    }
    
    .curly-top-back2::after {
      content: '';
      position: absolute;
      width: 90%;
      height: 100%;
      border-radius: 50%;
      background: ${hairHex};
      left: 80%;
      top: 8%;
      transform: rotate(0deg);
    }
    
    .curly-top-back2::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${hairHex};
      left: 120%;
      top: 19%;
      transform: rotate(15deg);
    }    
    `;
};

const ponyClass = (
  hairHex,
  hairShadowHex,
  eyeHex,
  skinHex,
  skinShadowHex,
  circleHex
) => {
  return `.pony-top {
        position: absolute;
        width: 98%;
        height: 70%;
        background: transparent;
        border-top: 2.3rem solid ${hairHex};
        border-radius: 50%;
        left: 1%;
        top: -4%;
      }
      
      .pony-top::after {
        content: "";
        width: 40%;
        height: 50%;
        border-radius: 50%;
        background: ${hairHex};
        left: 29%;
        top: -56%;
        position: absolute;
        z-index: -2;
      }
      
      .pony-top::before {
        content: "";
        position: absolute;
        width: 40%;
        height: 25%;
        border-radius: 50%;
        background: ${hairShadowHex};
        left: 29.5%;
        top: -34%;
        z-index: -1;
      }
      
      .pony-back {
        position: absolute;
        width: 10%;
        height: 58%;
        background: transparent;
        border-radius: 50%;
        border: 2.7rem solid;
        border-color: transparent ${hairHex} transparent transparent;
        left: 12%;
        top: 10%;
        transform: rotate(15deg);
      }`;
};

export {
  baseClass,
  mediumStraightClass,
  longStraightClass,
  mediumCurlsClass,
  bunClass,
  shortClass,
  curlyTopClass,
  ponyClass,
};
