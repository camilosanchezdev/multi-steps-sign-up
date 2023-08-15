import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  height: 80px;
  border: 1px dashed #cccccc;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  .icon {
    grid-column: span 2 / span 2;
    display: flex;
    align-items: center;
    i {
      font-size: 2rem;
    }
  }
  .text {
    grid-column: span 10 / span 10;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 1rem;
      font-weight: 600;
    }
    p {
      font-size: 0.9rem;
      font-weight: 500;
      color: #8f8f8f;
    }
  }
  &.active {
    background-color: #f1faff;
    border: 1px dashed #1c6bc5;
    .icon {
      transition: all 0.3s ease;
      color: #4b94e7;
    }
  }
`;

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  className: string;
  onClick: () => void;
  icon: string;
};
export const Card = ({
  id,
  title,
  subtitle,
  className,
  icon,
  onClick,
}: CardProps) => (
  <Wrapper className={className} onClick={onClick} data-testid={id}>
    <div className="icon">
      <i className={icon}></i>
    </div>
    <div className="text">
      <div className="title">{title}</div>
      <p>{subtitle}</p>
    </div>
  </Wrapper>
);
