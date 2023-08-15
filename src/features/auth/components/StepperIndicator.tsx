import styled from "styled-components";

const Wrapper = styled.div`
  margin: 80px 0;
  color: white;
`;
const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 3 / span 3;
  border: 1px dashed #4a9cfa;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  font-weight: 500;
  &.active {
    background: #50cd89;
    border: 0;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: span 9 / span 9;
  h2 {
    color: #ececec;
    font-size: 1.3rem;
    font-weight: 500;
  }
  small {
    color: #ececec;
    font-weight: 500;
  }
  &.active {
    h2 {
      color: white;
    }
    small {
      color: white;
    }
  }
`;
const Step = styled.div``;
interface IStep {
  id: number;
  title: string;
  subtitle: string;
  active: boolean;
}
const Steps: IStep[] = [
  {
    id: 1,
    title: "Account Type",
    subtitle: "Select your account settings",
    active: true,
  },
  {
    id: 2,
    title: "Account Info",
    subtitle: "Setup your account settings",
    active: false,
  },
  {
    id: 3,
    title: "Business Details",
    subtitle: "Setup your business details",
    active: false,
  },
  {
    id: 4,
    title: "Billing Details",
    subtitle: "Provide your payment info",
    active: false,
  },
  {
    id: 5,
    title: "Completed",
    subtitle: "Your account is created",
    active: false,
  },
];
const Separator = styled.div`
  display: block;
  height: 60px;
  margin-left: calc(50px / 2);
  border-left: 1px dashed #4a9cfa;
`;

export const StepperIndicator = () => {
  return (
    <Wrapper>
      {Steps.map((step) => (
        <Step key={step.id}>
          <Item>
            <Number className={step.active ? "active" : ""}>{step.id}</Number>
            <Text className={step.active ? "active" : ""}>
              <h2>{step.title}</h2>
              <small>{step.subtitle}</small>
            </Text>
          </Item>
          {step.id !== 5 && <Separator />}
        </Step>
      ))}
    </Wrapper>
  );
};
