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

const Content = styled.div`
  margin: 20px 0;
`;
const ExpirationDate = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
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

export const BillingDetails = () => (
  <AuthLayout>
    <Title>Billing Details</Title>
    <Subtitle />
    <Content>
      <InputText label="Name On Card" required defaultValue="John Doe" />
      <InputTextCreditCard
        label="Card Number"
        required
        defaultValue="4111 1111 1111 1111"
      />
      <ExpirationDate>
        <InputSelect label="Expiration Date" required options={months} />
        <InputSelect options={years} />
        <InputText label="CVV" required defaultValue="123" />
      </ExpirationDate>
      <SaveCard>
        <Headline>
          <span> Save Card for further billing?</span>
          <small>If you need more info, please check budget planning</small>
        </Headline>
        <Toggle />
      </SaveCard>
    </Content>

    <Actions prev next to="/auth/completed" />
  </AuthLayout>
);
