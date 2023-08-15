import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Headline = styled.div`
  font-size: 1rem;
  span {
    color: red;
  }
`;
const Input = styled.input`
  border: 0;
  background-color: #f1faff;
  width: calc(100% - 30px);
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
type InputTextProps = {
  label: string;
  required?: boolean;
  defaultValue?: string;
};
export const InputText = ({
  label,
  defaultValue,
  required = false,
}: InputTextProps) => (
  <Wrapper>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>

    <Input type="text" value={defaultValue} />
  </Wrapper>
);
