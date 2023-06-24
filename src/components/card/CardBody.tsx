import { FunctionComponent, ReactNode } from "react";

interface CardBodyProps {
  children: JSX.Element | JSX.Element[] | ReactNode,
}
 
const CardBody: FunctionComponent<CardBodyProps> = ({children}) => {
  return (
    <div className="card-body">
      { children }
    </div>
  );
}
 
export default CardBody;
