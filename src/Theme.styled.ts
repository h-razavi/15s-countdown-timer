import type { ThemeType } from "./globalStyles";

export const light: ThemeType = {
  name: "light-theme",
  colors: {
    background: "palegoldenrod",
    text: "#000",
  },
};

export const dark: ThemeType = {
  name: "dark-theme",
  colors: {
    background: "#000",
    text: "#fff",
  },
};

export const browserTheme: ThemeType = {
  name: "browser-theme",
  colors: {
    background: window.matchMedia("(prefers-color-scheme: light)").matches
      ? light.colors.background
      : dark.colors.background,
    text: window.matchMedia("(prefers-color-scheme: light)").matches
      ? light.colors.text
      : dark.colors.text,
  },
};
