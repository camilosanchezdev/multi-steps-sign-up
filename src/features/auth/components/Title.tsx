import styled from "styled-components";

const Headline = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

type TitleProps = {
  children: React.ReactNode;
};
export const Title = ({ children }: TitleProps) => (
  <Headline>{children}</Headline>
);
