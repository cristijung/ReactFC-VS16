'use client';

import { useCounter } from "../../context/CounterContext";

const Counter = () => {    
    const { increment, decrement } = useCounter();
    
    const buttonClasses = "px-6 py-3 mx-2 rounded-lg font-semibold text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95";

    return (
        <div className="flex flex-col items-center justify-center min-h-[30vh] p-4 bg-gray-50">            
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Controle de Serviço</h2>

                {/* btns */}
                <div className="flex justify-center space-x-4">                     
                    <button 
                        onClick={increment} 
                        className={`bg-indigo-600 text-white ${buttonClasses}`}
                    > 
                        Incrementar ➕ 
                    </button>                    
                    
                    <button 
                        onClick={decrement} 
                        className={`bg-red-500 text-white ${buttonClasses} hover:bg-red-600`}
                    > 
                        Decrementar ➖ 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;