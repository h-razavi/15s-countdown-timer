import { memo } from "react";
import styled from "styled-components";

interface Props {
  onStart: () => void;
}

const Button = styled.button`
  display: block;
  margin: 2rem auto;
  font-size: 2rem;
  padding: 1rem;
`;

function Body({ onStart }: Props): JSX.Element {
  console.log("body rendered"); //This log is to show (and make sure) that this components has not been re-rendered
  return (
    <>
      <Button onClick={onStart}>Start Countdown</Button>
    </>
  );
}

export default memo(Body);
