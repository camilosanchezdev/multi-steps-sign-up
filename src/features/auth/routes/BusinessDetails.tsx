import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import { styled } from "styled-components";
import { InputText } from "@/components/Form/InputText";
import { InputTextarea } from "@/components/Form/InputTextarea";
import { InputSelect, InputSelectOption } from "@/components/Form/InputSelect";

const Content = styled.div`
  margin: 40px 0;
`;

const corporationTypes: InputSelectOption[] = [
  {
    id: 1,
    label: "Limited Liability",
  },
  {
    id: 2,
    label: "General Partnership",
  },
  {
    id: 3,
    label: "Non-profit",
  },
  {
    id: 4,
    label: "Sole Propietorship",
  },
];

export const BusinessDetails = () => (
  <AuthLayout>
    <Title>Business Details</Title>
    <Subtitle />
    <Content>
      <InputText
        label="Business Name"
        required
        defaultValue="Keenthemes Inc."
      />
      <InputText
        label="Shortended Descriptor"
        required
        defaultValue="KEENTHEMES"
      />
      <InputSelect
        label="Corporation Type"
        required
        options={corporationTypes}
      />
      <InputText
        label="Corporation Type"
        required
        defaultValue="Limited Liability"
      />
      <InputTextarea label="Business Description" />
      <InputText label="Contact Email" required defaultValue="test@test.com" />
    </Content>
    <Actions prev next to="/auth/billing-details" />
  </AuthLayout>
);
