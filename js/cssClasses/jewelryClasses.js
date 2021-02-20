const goldHoopClass = () => {
    return `.gold-hoop {
        position: absolute;
        width: 75%;
        height: 40%;
        background: transparent;
        border-radius: 50%;
        border: 2px solid;
        border-color: #f5b916 transparent #f5b916 #f5b916;
        top: 73%;
        left: -19%;
      }`
}

const silverHoopClass = () => {
    return `.silver-hoop {
        position: absolute;
        width: 75%;
        height: 40%;
        background: transparent;
        border-radius: 50%;
        border: 2px solid;
        border-color: #d4d4d4 transparent #d4d4d4 #d4d4d4;
        top: 73%;
        left: -19%;
      }`
}

const silverStudClass = () => {
    return `.silver-stud {
        position: absolute;
        width: 48%;
        height: 25.6%;
        background: #d4d4d4;
        border-radius: 50%;
        top: 80%;
        left: 18%;
      }`
}

const goldStudClass = () => {
    return `.gold-stud {
        position: absolute;
        width: 48%;
        height: 25.6%;
        background: #f5b916;
        border-radius: 50%;
        top: 80%;
        left: 18%;
      }`
}

export { silverHoopClass, goldHoopClass, silverStudClass, goldStudClass};