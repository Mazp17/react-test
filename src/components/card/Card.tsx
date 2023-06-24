import { FunctionComponent } from "react";
import CardBody from './CardBody';

interface CardProps {
  sizeRow: number,
  body: typeof CardBody
}

const Card: FunctionComponent<CardProps> = (props) => {
  console.log(props);
  return (
    <div className={"col-"}>
      <div className="card ">
        <div className="card-body" style={{ height: "10em" }}>

        </div>
      </div>
    </div>
  );
}

export default Card;
