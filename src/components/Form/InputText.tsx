import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0 0 0;
  &.error {
    margin: 0 0 16px 0;
  }
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
const Alert = styled.small`
  color: red;
`;
type InputTextProps = {
  id?: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  onError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputText = ({
  id,
  label,
  defaultValue,
  required = false,
  onError,
  errorMessage,
  onChange,
}: InputTextProps) => (
  <Wrapper className={onError ? "error" : ""}>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>

    <Input
      data-testid={id}
      type="text"
      value={defaultValue}
      onChange={onChange}
    />
    {onError ? <Alert role="alert">{errorMessage}</Alert> : null}
  </Wrapper>
);
