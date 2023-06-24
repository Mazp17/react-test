import { FunctionComponent, ReactNode } from "react";

interface CardHeaderProps {
  children: JSX.Element | JSX.Element[] | ReactNode | string,
}
 
const CardHeader: FunctionComponent<CardHeaderProps> = ({children}) => {
  return (
    <div className="card-header">
      { children }
    </div>
  );
}
 
export default CardHeader;
