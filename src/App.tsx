import { useState } from "react";
import Board from "./components/Board/Board";
import BoardModel from "./model/BoardModel";

function App() {
  const [board] = useState(new BoardModel());

  // const board = ;
  // console.log(board);

  return (
    <div className="w-full">
      <h1 className="bg-green-500 p-3 font-bold text-3xl text-white text-center">
        React Chess
      </h1>
      <div className="p-5">
        <Board board={board} playingAsWhite={false}></Board>
      </div>
    </div>
  );
}

export default App;
