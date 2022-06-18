import React from "react";

function Square({ clickedArray, handleClick }) {
  return (
    <div className="board">
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              className="square"
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div
              className="square clicked"
              key={index}
            >
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square;
