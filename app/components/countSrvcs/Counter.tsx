'use client';

import { useCounter } from "@/app/context/CounterContext";

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