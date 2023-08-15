import styled from "styled-components";

const Headline = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #9c9c9c;
  span {
    color: #1c7ad1;
    cursor: pointer;
  }
`;

export const Subtitle = () => (
  <Headline>
    If you need more info, please check out <span>Help Page</span>.
  </Headline>
);
