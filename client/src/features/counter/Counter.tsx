import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./test";
import { add, init } from "./counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.gigi.value);
  const dispatch = useDispatch();
  const test = useSelector((state: RootState) => state.test.value);
  const nameAndCountIncrement = () => {
    dispatch(increment());
    dispatch(add());
  };
  const nameAndCountDecrement = () => {
    dispatch(decrement());
    dispatch(init());
  };

  return (
    <div>
      <div>
        <button
          arial-label="Increment value"
          onClick={() => nameAndCountIncrement()}
        >
          Increment
        </button>
        <span>{count}</span>
        <span>{test}</span>
        <button
          arial-label="Decrement value"
          onClick={() => nameAndCountDecrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
