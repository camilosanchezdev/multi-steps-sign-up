import { styled } from "styled-components";
import bgAuth from "@/assets/bg-auth.png";
import { StepperIndicator } from "@/features/auth/components/StepperIndicator";
import logo from "@/assets/logo.png";

const Wrapper = styled.main`
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

const Aside = styled.aside`
  background-image: url(${bgAuth});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: span 3 / span 3;
  grid-row: span 3 / span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  display: grid;
  grid-template-rows: repeat(6, minmax(0, 1fr));
`;

const Stepper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: span 3 / span 3;
`;

const Logo = styled.img`
  width: 250px;
`;

const Content = styled.div`
  background-color: white;
  grid-column: span 9 / span 9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Form = styled.div`
  width: 50%;
  height: calc(100vh - 400px);
`;

type AuthLayoutProps = {
  children: React.ReactNode;
};
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Wrapper>
      <Aside>
        <Stepper>
          <Logo src={logo} alt="Network" title="Network" />
          <StepperIndicator />
        </Stepper>
      </Aside>
      <Content>
        <Form>{children}</Form>
      </Content>
    </Wrapper>
  );
};
