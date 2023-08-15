import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import { styled } from "styled-components";
import { InputText } from "@/components/Form/InputText";
import { InputTextarea } from "@/components/Form/InputTextarea";
import { InputSelect, InputSelectOption } from "@/components/Form/InputSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "./routes.enum";

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

export const BusinessDetails = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("Keenthemes Inc.");
  const [shortenedDescriptor, setShortenedDescriptor] = useState("KEENTHEMES");
  const [contactEmail, setContactEmail] = useState("test@test.com");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOnPressContinue = () => {
    setFormSubmitted(true);
    if (businessName && shortenedDescriptor && contactEmail) {
      navigate(AUTH_ROUTES.BILLING_DETAILS);
    }
  };
  return (
    <AuthLayout>
      <Title>Business Details</Title>
      <Subtitle />
      <Content>
        <InputText
          id="business-name"
          label="Business Name"
          required
          defaultValue={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          onError={formSubmitted && !businessName}
          errorMessage="Business Name required"
        />
        <InputText
          id="shortended-descriptor"
          label="Shortended Descriptor"
          required
          defaultValue={shortenedDescriptor}
          onChange={(e) => setShortenedDescriptor(e.target.value)}
          onError={formSubmitted && !shortenedDescriptor}
          errorMessage="Shortended Descriptor required"
        />
        <InputSelect label="Corporation Type" options={corporationTypes} />

        <InputTextarea label="Business Description" />
        <InputText
          id="contact-email"
          label="Contact Email"
          required
          defaultValue={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          onError={formSubmitted && !contactEmail}
          errorMessage="Email required"
        />
      </Content>
      <Actions prev next onPressNext={handleOnPressContinue} />
    </AuthLayout>
  );
};
