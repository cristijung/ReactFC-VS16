'use client';

import { useCounter } from "@/app/context/CounterContext";

const Display = () => {    
    const { state } = useCounter();

    return(        
        <div className="flex flex-col items-center justify-center p-4 bg-gray-50">           
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-sm text-center border-t-4 border-indigo-600">
                <p className="text-xl font-medium text-gray-500 mb-4">
                    Valor Atual do Contador:
                </p>        
                
                <h1 className="text-7xl md:text-8xl font-extrabold text-indigo-600 tracking-tight">
                    {state.count}
                </h1>
                
            </div>
        </div>
    );
};

export default Display;