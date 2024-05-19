export const initializeDarkMode = (setDarkMode) => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  setDarkMode(prefersDarkScheme);
  applyDarkMode(prefersDarkScheme);
};

export const applyDarkMode = (darkMode) => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};
