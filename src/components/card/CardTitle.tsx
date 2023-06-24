import { FunctionComponent } from "react";

interface CardTitleProps {
  title: string
}
 
const CardTitle: FunctionComponent<CardTitleProps> = () => {
  return (
    <h3 className="card-title">
      Card title
    </h3>
  );
}
 
export default CardTitle;
