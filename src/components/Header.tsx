import styled from "styled-components";

interface Props {
  count: number;
}

const Counter = styled.header`
  text-align: center;
  font-size: 4rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

function Header({ count }: Props): JSX.Element {
  return <Counter>Remaining Time : {count} s</Counter>;
}

export default Header;
