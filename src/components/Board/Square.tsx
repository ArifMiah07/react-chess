import SquareModel from "@/model/SquareModel";
import { getSquareCoordinates } from "@/services/square-service";

interface Props {
  square: SquareModel;
}

const Square = ({ square }: Props) => {
  return (
    <div >
      <span>
        {getSquareCoordinates(square)}
      </span>
    </div>
  );
};

export default Square;
