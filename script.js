const headerElement = document.querySelector("h1");
const counterElement = document.getElementById("counter");
const textareaElement = document.querySelector("textarea");
const darkModeButton = document.getElementById("dark-mode-button");
const fontSizeRange = document.getElementById("font-size-range");
const fontSizeRangeWrapper = document.querySelector(".range-wrapper");

const useLocalStorage = (key, value) => {
    if (typeof value !== "undefined") {
        JSON.stringify(localStorage.setItem(key, value));
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
};

let darkModeEnabled = useLocalStorage("darkMode") ?? false;

const updateCounter = () => {
    useLocalStorage("textarea", `"${textareaElement.value}"`);
    counterElement.innerText = textareaElement.value.length;
};

const changeDarkMode = () => {
    darkModeEnabled = !darkModeEnabled;
    useLocalStorage("darkMode", darkModeEnabled);
    applyStyles();
};

const applyStyles = () => {
    headerElement.classList.toggle("dark");
    textareaElement.classList.toggle("dark");
    document.body.classList.toggle("dark");
    darkModeButton.classList.toggle("dark");
    fontSizeRangeWrapper.classList.toggle("dark");
    darkModeButton.innerText = darkModeEnabled ? "Light" : "Dark";
};

const changeFontSize = (event) => {
    const value = event.target.value;
    useLocalStorage("fontSize", value);
    textareaElement.style.fontSize = value + "px";
};

textareaElement.addEventListener("input", updateCounter);
darkModeButton.addEventListener("click", changeDarkMode);
fontSizeRange.addEventListener("input", changeFontSize);

window.addEventListener("load", () => {
    if (darkModeEnabled) applyStyles();
    textareaElement.innerHTML = useLocalStorage("textarea") ?? "";
    const fontSize = useLocalStorage("fontSize") ?? 16;
    console.log(fontSize);
    fontSizeRange.value = fontSize;
    textareaElement.style.fontSize = fontSize + "px";
    updateCounter();
});
