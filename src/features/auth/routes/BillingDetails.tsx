import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import styled from "styled-components";
import { InputText } from "@/components/Form/InputText";
import { InputTextCreditCard } from "@/features/auth/components/InputTextCreditCard";
import { InputSelect, InputSelectOption } from "@/components/Form/InputSelect";
import {
  getExpirationDateMonths,
  getExpirationDateYears,
} from "@/utils/getExpirationDate.util";
import { Toggle } from "@/components/Form/Toggle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AUTH_ROUTES } from "./routes.enum";

const Content = styled.div`
  margin: 20px 0;
`;
const ExpirationDate = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin: 20px 0;
`;
const SaveCard = styled.div`
  margin: 20px 0;
  display: flex;
`;
const Headline = styled.div`
  font-size: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  small {
    color: #8a8a8a;
  }
`;

const months: InputSelectOption[] = getExpirationDateMonths();

const years: InputSelectOption[] = getExpirationDateYears();

export const BillingDetails = () => {
  const navigate = useNavigate();
  const [cardName, setCardName] = useState("John Doe");
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [cardCVV, setCardCVV] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleOnPressContinue = () => {
    setFormSubmitted(true);
    if (cardName && cardNumber && cardCVV) {
      navigate(AUTH_ROUTES.COMPLETED);
    }
  };
  return (
    <AuthLayout>
      <Title>Billing Details</Title>
      <Subtitle />
      <Content>
        <InputText
          id="name-on-card"
          label="Name On Card"
          required
          errorMessage="Name on card is required"
          onError={formSubmitted && !cardName}
          defaultValue={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <InputTextCreditCard
          id="card-number"
          label="Card Number"
          required
          errorMessage="Card number is required"
          onError={formSubmitted && !cardNumber}
          defaultValue={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <ExpirationDate className={formSubmitted && !cardCVV ? "error" : ""}>
          <InputSelect
            label="Expiration Date"
            required
            options={months}
            onError={formSubmitted && !cardCVV}
          />
          <InputSelect options={years} onError={formSubmitted && !cardCVV} />
          <InputText
            id="cvv"
            label="CVV"
            required
            errorMessage="CVV is required"
            onError={formSubmitted && !cardCVV}
            defaultValue={cardCVV}
            onChange={(e) => setCardCVV(e.target.value)}
          />
        </ExpirationDate>
        <SaveCard>
          <Headline>
            <span> Save Card for further billing?</span>
            <small>If you need more info, please check budget planning</small>
          </Headline>
          <Toggle />
        </SaveCard>
      </Content>

      <Actions prev next onPressNext={handleOnPressContinue} />
    </AuthLayout>
  );
};
