import { styled } from "styled-components";

const Wrapper = styled.label`
  cursor: pointer;
  margin: 15px 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  width: 100%;
`;
const Icon = styled.div`
  grid-column: span 2 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  grid-column: span 10 / span 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: 500;
  }
`;

type AccountPlanOptionProps = {
  title: string;
  description: string;
  value: string;
  icon: string;
};
export const AccountPlanOption = ({
  title,
  description,
  value,
  icon,
}: AccountPlanOptionProps) => (
  <Wrapper>
    <Item>
      <Icon>
        <i className={icon}></i>
      </Icon>
      <Text>
        <span>{title}</span>
        <small>{description}</small>
      </Text>
    </Item>
    <input type="radio" name="accountPlan" value={value} />
  </Wrapper>
);
