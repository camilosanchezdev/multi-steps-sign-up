import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
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
};
export const InputSelect = ({
  label,
  required = false,
  options,
}: InputSelectProps) => (
  <Wrapper>
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
