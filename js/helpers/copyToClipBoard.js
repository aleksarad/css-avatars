function copyCode(arg) {
    let textToCopy;
    if (arg === "html") {
      textToCopy = document.querySelector("#html-code");
    }
    if (arg === "css") {
      textToCopy = document.querySelector("#css-code");
    }
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

export { copyCode }