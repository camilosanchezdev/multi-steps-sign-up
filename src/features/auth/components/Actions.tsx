import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &.right {
    justify-content: flex-end;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &.primary {
    background-color: #3085e6;
    color: white;
  }
  &.secondary {
    background-color: #8cc2ff;
    color: white;
  }
  &:hover {
    background-color: #539aeb;
  }
`;
type ActionsProps = {
  prev?: boolean;
  next?: boolean;
  to?: string;
};
export const Actions = ({ prev, next, to }: ActionsProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper className={!prev && next ? "right" : ""}>
      {prev ? (
        <Button className="secondary" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Previous</span>
        </Button>
      ) : null}
      {next ? (
        <Button className="primary" onClick={() => navigate(String(to))}>
          <span>Continue</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      ) : null}
    </Wrapper>
  );
};
