import { AuthLayout } from "@/components/Layout/AuthLayout";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Actions } from "../components/Actions";
import styled from "styled-components";

const Content = styled.div`
  margin: 20px 0;
`;
const Card = styled.div`
  padding: 20px;
  margin: 0 0 20px 0;
  background-color: #fff8dd;
  border: 1px dashed #ffe478;
  display: flex;
  gap: 20px;
  .icon {
    span {
      display: flex;
      height: 50px;
      width: 50px;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background-color: #ffe478;
      i {
        font-size: 1.5rem;
        color: #cfb95e;
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #747474;
    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const Completed = () => (
  <AuthLayout>
    <Title>You Are Done</Title>
    <Subtitle />
    <Content>
      <p>
        Writing headlines for blog posts is as much an art as it is a science
        and probably warrants its own post, but for all advise is with what
        works for your great & amazing audience.
      </p>
    </Content>
    <Card>
      <div className="icon">
        <span>
          <i className="fa-solid fa-exclamation"></i>
        </span>
      </div>
      <div className="text">
        <h2>We need your attention!</h2>
        <p>To start using great tools, please, Create Team Platform</p>
      </div>
    </Card>
    <Actions prev />
  </AuthLayout>
);
