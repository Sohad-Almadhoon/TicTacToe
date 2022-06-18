import React, { useState } from "react";
import "../index.css";
import EndGame from "./EndGame";
import Square from "./Square";
import NextPlayer from "./NextPlayer";
const combination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const x_player = "X",
  o_player = "O";
function App() {
  const [grid, setGrid] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(0);
  const [nPlayer, setNextPlayer] = useState("O");
  const [finished, setFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [countWin, setCountWin] = useState({ x: 0, o: 0 });
  const restart = () => {
    setGrid(Array(9).fill(""));
    setFinished(false);
    setDraw(false);
  };
  const isGameOver = () => {
    if (!finished) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[combination[i][0]] === x_player &&
          grid[combination[i][1]] === x_player &&
          grid[combination[i][2]] === x_player
        ) {
          setFinished(1);
          setCountWin({ ...countWin, x: countWin.x + 1 });
        } else if (
          grid[combination[i][0]] === o_player &&
          grid[combination[i][1]] === o_player &&
          grid[combination[i][2]] === o_player
        ) {
          setFinished(1);
          setCountWin({ ...countWin, o: countWin.o + 1 });
        }
      }

      if (!grid.includes("")) {
        setDraw(1);
        setFinished(1);
      }
    }
  };
  isGameOver();
  const handleClick = (id) => {
    setGrid(
      grid.map((item, index) => {
        if (id === index) {
          if (player) {
            setNextPlayer(o_player);
            return x_player;
          } else {
            setNextPlayer(x_player);
            return o_player;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  };
  const clearHistory = () => {
    setCountWin({ x: 0, o: 0 });
  };
  return (
    <div className="App">
      <NextPlayer nPlayer={nPlayer}/>
      {finished && (
        <EndGame
          restart={restart}
          player={player}
          draw={draw}
          winCounter={countWin}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}

export default App;
