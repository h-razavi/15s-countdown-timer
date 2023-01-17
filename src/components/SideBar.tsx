import styled from "styled-components";

const SideBarStyled = styled.aside`
  width: 40%;
  height: 100vh;
  padding: 1rem;
  color: #555;
  background: #fff;
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
`;

function SideBar(): JSX.Element {
  return (
    <Backdrop>
      <SideBarStyled>
        <h2>React Countdown Timer</h2>
      </SideBarStyled>
    </Backdrop>
  );
}

export default SideBar;
