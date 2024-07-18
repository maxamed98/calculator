import "./App.css";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [calc, setCalc] = useState("");

  const handleCalc = (key) => {
    setCalc((prev) => prev + key);
  };

  const handleClr = () => {
    setCalc("");
  };

  const handleEnter = () => {
    try {
      const res = eval(calc);
      if (typeof res === "number") {
        setCalc(String(res));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDel = () => {
    setCalc((prev) => prev.slice(0, -1));
  };

  return (
    <div>
      <div className="main">
        <div className="header">{calc}</div>
        <div className="body">
          <div
            className="sqr"
            onClick={() => {
              handleCalc("7");
            }}
          >
            7
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("8");
            }}
          >
            8
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("9");
            }}
          >
            9
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("+");
            }}
          >
            +
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("4");
            }}
          >
            4
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("5");
            }}
          >
            5
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("6");
            }}
          >
            6
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("-");
            }}
          >
            -
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("1");
            }}
          >
            1
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("2");
            }}
          >
            2
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("3");
            }}
          >
            3
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("*");
            }}
          >
            *
          </div>
          {/* <div className="sqr hidden"></div> */}
          <div
            className="sqr zero"
            onClick={() => {
              handleCalc("0");
            }}
          >
            0
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc(".");
            }}
          >
            .
          </div>
          <div
            className="sqr"
            onClick={() => {
              handleCalc("/");
            }}
          >
            /
          </div>
          {/* <div className="sqr hidden"></div> */}
          <div className="sqr" onClick={handleClr}>
            CLEAR
          </div>
          <div className="sqr" onClick={handleDel}>
            DEL
          </div>
          <div className="sqr enter" onClick={handleEnter}>
            ENTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
