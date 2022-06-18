import React from "react";

function EndGame({ restart, player, draw, winCounter, clearHistory }) {
  return (
    <div className="end-game-screen">
      {!draw && (
        <span className="win-text">{player ? "O won" : "x won"}🎉🎆😎</span>
      )}
      {draw && <span className="draw-text">DRAW GAME 🎰</span>}
      <span className="win-history">
        X's WINS : {winCounter.x}
        <br />
        O's WINS : {winCounter.o}
      </span>
      <button className="btn" onClick={restart}>
        Restart Game 🎮🕹️
      </button>
      <button className="btn" onClick={clearHistory}>
       Clear History 🎀
      </button>
    </div>
  );
}

export default EndGame;
