import { FunctionComponent, ReactNode } from "react";

interface CardProps {
  sizeRow?: number,
  className?: string,
  children: JSX.Element | JSX.Element[] | ReactNode,
}

const Card: FunctionComponent<CardProps> = ({children, sizeRow, ...props}) => {
  console.log(props);
  return (
    <div className={`col-${sizeRow}`}>
      <div className={`card ${props.className ?? ""}`}>
        { children }
      </div>
    </div>
  );
}

export default Card;
