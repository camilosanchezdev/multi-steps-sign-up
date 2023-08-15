import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import { styled } from "styled-components";
import { AccountPlanOption } from "../components/AccountPlanOption";
import { useState } from "react";
import { InputText } from "@/components/Form/InputText";

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
export const AccountInfo = () => {
  const [sizeSelected, setSizeSelected] = useState(1);
  return (
    <AuthLayout>
      <Title>Account Info</Title>
      <Subtitle />
      <Content>
        <Headline>Specify team size</Headline>
        <Cards>
          {sizes.map((item) => (
            <Card
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

        {/* <Headline>Team Account Name</Headline>
        <Input type="text" /> */}
        <InputText label="Team Account Name" />
        <Headline>Select Account Plan</Headline>
        <Selection>
          <AccountPlanOption
            title="Company Account"
            description="Use images to enhance your post flow"
            value="1"
            icon="fa-solid fa-building-columns"
          />
          <AccountPlanOption
            title="Developer Account"
            description="Use images to your post time"
            value="2"
            icon="fa-solid fa-chart-pie"
          />
          <AccountPlanOption
            title="Testing Account"
            description="Use images to enhance time travel rivers"
            value="3"
            icon="fa-solid fa-chart-column"
          />
        </Selection>
      </Content>
      <Actions prev next to="/auth/business-details" />
    </AuthLayout>
  );
};
