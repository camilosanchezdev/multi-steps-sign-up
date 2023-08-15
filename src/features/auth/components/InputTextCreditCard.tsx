import { styled } from "styled-components";
import {
  AmericanExpressIcon,
  MasterCardIcon,
  VisaIcon,
} from "../../../components/Icons/Icons";

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
const InputContainer = styled.div`
  position: relative;
`;
const Icons = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  right: 0;
  top: 20px;
  justify-content: center;
  align-items: center;
  svg {
    height: 25px;
    width: 100%;
  }
`;
const Alert = styled.small`
  color: red;
`;
type InputTextCreditCardProps = {
  id?: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  onError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputTextCreditCard = ({
  id,
  label,
  defaultValue,
  required = false,
  errorMessage,
  onError,
  onChange,
}: InputTextCreditCardProps) => (
  <Wrapper>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>
    <InputContainer>
      <Input
        data-testid={id}
        type="text"
        value={defaultValue}
        onChange={onChange}
      />
      <Icons>
        <VisaIcon />
        <MasterCardIcon />
        <AmericanExpressIcon />
      </Icons>
    </InputContainer>
    {onError ? <Alert role="alert">{errorMessage}</Alert> : null}
  </Wrapper>
);
