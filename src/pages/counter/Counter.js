import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../store/slice/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  return (
    <section className="counter">
      <button
        className="btn btn-danger decreament-by-amount-btn me-5"
        onClick={() => dispatch(decrementByAmount(5))}
      >
        -5
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
        -
      </button>
      <div className="count text-success">{count}</div>
      <button
        className="btn btn-success increment-btn"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn btn-success increment-by-amount-btn ms-5"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </section>
  );
};

export default Counter;
