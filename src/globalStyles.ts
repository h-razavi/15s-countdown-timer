import { createGlobalStyle } from "styled-components";

export interface ThemeType {
  name: string;
  colors: {
    background: string;
    text: string;
  };
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
