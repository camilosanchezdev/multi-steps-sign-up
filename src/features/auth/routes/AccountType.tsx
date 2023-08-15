import { AuthLayout } from "@/components/Layout/AuthLayout";
import { useState } from "react";
import { styled } from "styled-components";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Card } from "../components/Card";
import { Actions } from "../components/Actions";

const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 40px 0;
`;

export const AccountType = () => {
  const [active, setActive] = useState(true);
  return (
    <AuthLayout>
      <Title>Choose Account Type</Title>
      <Subtitle />
      <Cards>
        <Card
          className={active === true ? "active" : ""}
          onClick={() => setActive(true)}
          icon="fa-regular fa-address-card"
          title="Personal Account"
          subtitle="If you need more info, please check it out"
        />

        <Card
          className={active === false ? "active" : ""}
          onClick={() => setActive(false)}
          icon="fa-solid fa-briefcase"
          title="Corporate Account"
          subtitle="Create corporate account to manage users"
        />
      </Cards>
      <Actions next to="/auth/account-info" />
    </AuthLayout>
  );
};
