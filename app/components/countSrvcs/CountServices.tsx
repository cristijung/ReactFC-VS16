'use client';

import { useState, useEffect } from 'react'; //hooks nativos do react

//hook personalizado
function useCounter(initialValue: number =  0) {
    const [count, setCount] = useState<number>(initialValue);

    // funções para manipular o state de contador
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return { count, increment, decrement };
}

// aqui, o componente principal

export default function CountServices() {
    // usando o hook personalizado
    const { count, increment, decrement } = useCounter(0);

    useEffect(() => {
        document.title = `Contador de Serviços: ${count}`;
    }, [count]); //array de dependências, um array de dependencia significa que o contador será renderizado somente qdo atualizado - o efeito só roda qdo o estado do count é modificado

    return(
        <>
        <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
            <div className='bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center'>
                <h1 className='text-3xl font-bold text-gray-800 mb-2'>Contador de serviços:</h1>
                <p className='font-extrabold text-red-600 mb-8'>Exemplo de Contador</p>
                <p className='text-6xl font-extrabold text-grey-600 mb-8'>{count}</p>

                <div className='flex justify-center space-x-4'>
                    <button onClick={increment} className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover: bg-purple-700 transition-colors duration-200'>Incrementaer</button>
                    <button onClick={decrement} className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover: bg-purple-700 transition-colors duration-200'>Decrementar</button>
                </div>

            </div>
        </div>
        </>
    );
}