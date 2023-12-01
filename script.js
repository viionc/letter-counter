const headerElement = document.querySelector("h1");
const counterElement = document.getElementById("counter");
const textareaElement = document.querySelector("textarea");
const darkModeButton = document.getElementById("dark-mode-button");

const updateCounter = () => {
    counterElement.innerText = textareaElement.value.length;
};

const changeDarkMode = () => {
    headerElement.classList.toggle("dark");
    textareaElement.classList.toggle("dark");
    document.body.classList.toggle("dark");
    darkModeButton.classList.toggle("dark");
    darkModeButton.innerText = darkModeButton.innerHTML.includes("Dark") ? "Light" : "Dark";
};

textareaElement.addEventListener("input", updateCounter);
darkModeButton.addEventListener("click", changeDarkMode);
