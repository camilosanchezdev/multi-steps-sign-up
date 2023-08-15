import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 190px;
  align-items: center;
  gap: 10px;
  span {
    font-size: 0.8rem;
  }
`;
const Button = styled.button`
  display: flex;
  width: 60px;
  height: 30px;
  background-color: #ececec;
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  align-items: center;
  span {
    display: block;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 100%;
    margin: 0 10px;
    transition: all 0.5s ease;
    &.active {
      transform: translateX(100%);
    }
  }
  &.active {
    background-color: #77a5e0;
  }
`;
const Label = styled.span`
  cursor: pointer;
`;

export const Toggle = () => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper>
      <Button
        className={active ? "active" : ""}
        onClick={() => setActive(!active)}
      >
        <span className={active ? "active" : ""} />
      </Button>
      <Label onClick={() => setActive(!active)}>Save Card</Label>
    </Wrapper>
  );
};
