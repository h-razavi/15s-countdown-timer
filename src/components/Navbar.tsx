import styled from "styled-components";

interface Props {
  lightThemeSelected: string;
  darkThemeSelected: string;
  browserThemeSelected: string;
  lightThemeChange: () => void;
  darkThemeChange: () => void;
  browserThemeChange: () => void;
}

const NavStyled = styled.nav`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  }
`;

const ThemeButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  &.active {
    background-color: cornflowerblue;
    color: white;
  }
`;

function Navbar({
  lightThemeSelected,
  darkThemeSelected,
  browserThemeSelected,
  lightThemeChange,
  darkThemeChange,
  browserThemeChange,
}: Props): JSX.Element {
  return (
    <NavStyled>
      Select Theme :
      <ThemeButton className={lightThemeSelected} onClick={lightThemeChange}>
        Light
      </ThemeButton>
      <ThemeButton className={darkThemeSelected} onClick={darkThemeChange}>
        Dark
      </ThemeButton>
      <ThemeButton
        className={browserThemeSelected}
        onClick={browserThemeChange}
      >
        System
      </ThemeButton>
    </NavStyled>
  );
}

export default Navbar;
