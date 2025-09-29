'use client';

import { useCounter } from "@/app/context/CounterContext";

const Display = () => {
    const { state } = useCounter();

    return(
        <>
        <h1>Valor atual do contador: {state.count}</h1>
        </>
    );
};

export default Display;
