import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Headline = styled.div`
  font-size: 1rem;
  span {
    color: red;
  }
`;
const Textarea = styled.textarea`
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

type InputTextareaProps = {
  label: string;
  defaultValue?: string;
  required?: boolean;
};
export const InputTextarea = ({
  label,
  defaultValue,
  required = false,
}: InputTextareaProps) => (
  <Wrapper>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>
    <Textarea id="w3review" name="w3review" rows={4} cols={50}>
      {defaultValue}
    </Textarea>
  </Wrapper>
);
