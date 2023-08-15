import { AuthLayout } from "@/components/Layout/AuthLayout";
import { useState } from "react";
import { styled } from "styled-components";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Card } from "../components/Card";
import { Actions } from "../components/Actions";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "./routes.enum";

const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 40px 0;
`;
enum AcountTypeEnum {
  PERSONAL_ACCOUNT = 1,
  CORPORATE_ACCOUNT,
}
export const AccountType = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(AcountTypeEnum.PERSONAL_ACCOUNT);
  const handleMarkAsActive = (accountId: number) => {
    setActive(accountId);
  };
  return (
    <AuthLayout>
      <Title>Choose Account Type</Title>
      <Subtitle />
      <Cards>
        <Card
          id="personal-account"
          className={active === AcountTypeEnum.PERSONAL_ACCOUNT ? "active" : ""}
          onClick={() => handleMarkAsActive(AcountTypeEnum.PERSONAL_ACCOUNT)}
          icon="fa-regular fa-address-card"
          title="Personal Account"
          subtitle="If you need more info, please check it out"
        />

        <Card
          id="coporate-account"
          className={
            active === AcountTypeEnum.CORPORATE_ACCOUNT ? "active" : ""
          }
          onClick={() => handleMarkAsActive(AcountTypeEnum.CORPORATE_ACCOUNT)}
          icon="fa-solid fa-briefcase"
          title="Corporate Account"
          subtitle="Create corporate account to manage users"
        />
      </Cards>
      <Actions next onPressNext={() => navigate(AUTH_ROUTES.ACCOUNT_INFO)} />
    </AuthLayout>
  );
};
