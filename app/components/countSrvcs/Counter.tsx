'use client';

import { useCounter } from "../../context/CounterContext";

const Counter = () => {
    const { increment, decrement } = useCounter();

    return (
        <>
        <button onClick={increment}> --Incrementar-- </button>
        <button onClick={decrement}> --Decrementar-- </button>
        </>
    );
};

export default Counter;