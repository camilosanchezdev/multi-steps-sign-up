import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  &.error {
    margin: 0 0 36px 0;
  }
`;
const Headline = styled.div`
  font-size: 1rem;
  span {
    color: red;
  }
`;
const Input = styled.select`
  border: 0;
  background-color: #f1faff;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
export interface InputSelectOption {
  id: number;
  label: string;
}
type InputSelectProps = {
  label?: string;
  required?: boolean;
  options: InputSelectOption[];
  onError?: boolean;
};
export const InputSelect = ({
  label,
  required = false,
  options,
  onError,
}: InputSelectProps) => (
  <Wrapper className={onError ? "error" : ""}>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>
    <Input name="cars" id="cars">
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </Input>
  </Wrapper>
);
