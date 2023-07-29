export function setLocalDarkMode(isDarkMode: boolean) {
  localStorage.setItem("darkMode", `${isDarkMode}`);
  // localStorage.setItem("darkMode", isDarkMode);
  document
    .getElementsByTagName("html")[0]
    .setAttribute("dark-mode", `${isDarkMode}`);
}

export function removeDarkMode() {
  localStorage.removeItem("darkMode");
  document.getElementsByTagName("html")[0].removeAttribute("dark-mode");
}
