import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import { styled } from "styled-components";
import { AccountPlanOption } from "../components/AccountPlanOption";
import { useState } from "react";
import { InputText } from "@/components/Form/InputText";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "./routes.enum";

const Content = styled.div`
  margin: 40px 0;
`;
const Headline = styled.div`
  font-size: 1rem;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;
const Card = styled.div`
  font-size: 1rem;
  width: 160px;
  height: 60px;
  border: 1px dashed #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &.active {
    background-color: #f1faff;
    border: 1px dashed #1c6bc5;
    color: #4b94e7;
  }
`;
const Detail = styled.small`
  display: block;
  margin: 0 0 20px 0;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
`;

const sizes = [
  { id: 1, value: "1-1" },
  { id: 2, value: "2-10" },
  { id: 3, value: "10-50" },
  { id: 4, value: "50+" },
];
enum AccountPlanEnum {
  COMPANY_ACCOUNT = 1,
  DEVELOPER_ACCOUNT,
  TESTING_ACCOUNT,
}
export const AccountInfo = () => {
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(1);
  const [planSelected, setPlanSelected] = useState(
    AccountPlanEnum.COMPANY_ACCOUNT
  );
  const handleOnPressContinue = () => {
    setFormSubmitted(true);
    if (accountName) {
      navigate(AUTH_ROUTES.BUSINESS_DETAILS);
    }
  };
  return (
    <AuthLayout>
      <Title>Account Info</Title>
      <Subtitle />
      <Content>
        <Headline>Specify team size</Headline>
        <Cards>
          {sizes.map((item) => (
            <Card
              key={item.id}
              data-testid={item.value}
              className={item.id === sizeSelected ? "active" : ""}
              onClick={() => setSizeSelected(item.id)}
            >
              {item.value}
            </Card>
          ))}
        </Cards>
        <Detail>
          Customers will see this shortened version of your statement descriptor
        </Detail>

        <InputText
          label="Team Account Name"
          required
          errorMessage="Account name is required"
          onError={formSubmitted && !accountName}
          defaultValue={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <Headline>Select Account Plan</Headline>
        <Selection>
          <AccountPlanOption
            checked={planSelected === AccountPlanEnum.COMPANY_ACCOUNT}
            title="Company Account"
            description="Use images to enhance your post flow"
            value="1"
            icon="fa-solid fa-building-columns"
            onChange={() => setPlanSelected(AccountPlanEnum.COMPANY_ACCOUNT)}
          />
          <AccountPlanOption
            checked={planSelected === AccountPlanEnum.DEVELOPER_ACCOUNT}
            title="Developer Account"
            description="Use images to your post time"
            value="2"
            icon="fa-solid fa-chart-pie"
            onChange={() => setPlanSelected(AccountPlanEnum.DEVELOPER_ACCOUNT)}
          />
          <AccountPlanOption
            checked={planSelected === AccountPlanEnum.TESTING_ACCOUNT}
            title="Testing Account"
            description="Use images to enhance time travel rivers"
            value="3"
            icon="fa-solid fa-chart-column"
            onChange={() => setPlanSelected(AccountPlanEnum.TESTING_ACCOUNT)}
          />
        </Selection>
      </Content>
      <Actions prev next onPressNext={handleOnPressContinue} />
    </AuthLayout>
  );
};
