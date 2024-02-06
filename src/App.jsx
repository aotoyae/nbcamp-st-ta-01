import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { minusN, plusN } from "./redux/modules/calculator";

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = (e) => {
    setNumber(+e.target.value);
  };

  const counter = useSelector((state) => {
    return state.calculator;
  });

  console.log(counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={changeNumber} type="number" /> 만큼을
        <button
          onClick={() => {
            dispatch(plusN(number));
            setNumber(0);
          }}
        >
          더할게요
        </button>{" "}
        <button
          onClick={() => {
            dispatch(minusN(number));
            setNumber(0);
          }}
        >
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{counter.number}</p>
      </div>
    </div>
  );
}

export default App;
