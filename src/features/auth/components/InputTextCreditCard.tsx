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
type InputTextCreditCardProps = {
  label: string;
  required?: boolean;
  defaultValue?: string;
};
export const InputTextCreditCard = ({
  label,
  defaultValue,
  required = false,
}: InputTextCreditCardProps) => (
  <Wrapper>
    <Headline>
      {label}
      {required ? <span> *</span> : null}
    </Headline>
    <InputContainer>
      <Input type="text" value={defaultValue} />
      <Icons>
        <VisaIcon />
        <MasterCardIcon />
        <AmericanExpressIcon />
      </Icons>
    </InputContainer>
  </Wrapper>
);
