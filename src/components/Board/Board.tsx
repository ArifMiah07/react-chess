import BoardModel from "@/model/BoardModel";
import SquareModel from "@/model/SquareModel";
import Square from "./Square";

interface Props {
  board: BoardModel;
  playingAsWhite: boolean;
}

const Board = ({ board,playingAsWhite }: Props) => {
  return (
    <div>
      <h1>Board</h1>
      <section className="grid grid-rows-8 grid-cols-8 gap-2">
        {board.squares.map((square: SquareModel, i) => (
          <div
            className={`bg-red-300 p-2 text-center col-start-${playingAsWhite ? square.column + 1 : 8 - square.column} row-start-${playingAsWhite ? 8 - square.row : square.row + 1}`}>
            <Square
              key={`${i}_square_${square.row}_${square.column}`}
              square={square}></Square>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Board;
