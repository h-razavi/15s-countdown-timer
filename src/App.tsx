import { memo, useState, useCallback } from "react";
//
import styled , { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { light, dark, browserTheme } from "./Theme.styled";
//
import Header from "./components/Header";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import MenuIcon from "./icons/MenuIcon";

const SideBarMenu = styled.div`
  color: ${({ theme }) => theme.colors.text};
  @media screen and (min-width: 640px) {
    display: none;
  }
`;

function App() {
  const [count, setCount] = useState<number>(15);
  const [intervalID, setIntervalID] = useState<number>();
  const [selectedTheme, setSelectedTheme] = useState(light);
  const [mobileNavToggled, setMobileNavToggled] = useState(false);

  const updateTimer = () => {
    setCount(prevCount => (prevCount <= 0 ? 0 : prevCount - 1));
    console.log("tick"); //This log is to show that counter interval has stopped
  };

  const startTimer = useCallback(() => {
    const timerIntervalID = window.setInterval(updateTimer, 1000);
    setIntervalID(timerIntervalID);
    setCount(15);
  }, []);

  if (count === 0) {
    clearInterval(intervalID);
  }

  function handleToggleNav() {
    setMobileNavToggled(!mobileNavToggled);
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        lightThemeSelected={selectedTheme === light ? "active" : ""}
        darkThemeSelected={selectedTheme === dark ? "active" : ""}
        browserThemeSelected={selectedTheme === browserTheme ? "active" : ""}
        lightThemeChange={() => setSelectedTheme(light)}
        darkThemeChange={() => setSelectedTheme(dark)}
        browserThemeChange={() => setSelectedTheme(browserTheme)}
      />
      <SideBarMenu>
        <span onClick={handleToggleNav}>
          <MenuIcon />
        </span>
        {mobileNavToggled && <SideBar />}
      </SideBarMenu>

      <Header count={count} />
      <Body onStart={startTimer} />
    </ThemeProvider>
  );
}

export default memo(App);
