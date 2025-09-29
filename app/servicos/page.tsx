import Counter from "../components/countSrvcs/Counter";
import CountServices from "../components/countSrvcs/CountServices";
import Display from "../components/countSrvcs/Display";

export default function Serviços() {
    return(
        // Contêiner principal: Fundo suave, padding vertical e largura máxima
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            
            {/* Título Principal: Destaque com a cor primária e espaçamento */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 text-center mb-10 tracking-tight">
                Serviços Veterinários
            </h1>

            {/* Seção 1: Serviços */}
            <section className="max-w-4xl mx-auto mb-12 p-6 bg-white rounded-xl shadow-xl">
                <div className="text-xl font-semibold text-gray-700 mb-4">
                    Listagem dos Serviços Oferecidos
                </div>
                {/* Aqui, o componente CountServices (presumimos que ele lista os serviços) */}
                <CountServices />
            </section>

            {/* Divisor Visual Estilizado */}
            <div className="max-w-3xl mx-auto my-8">
                <hr className="border-t-2 border-indigo-200"/>
            </div>
            
            {/* Seção 2: Contador de Exemplo (ContextAPI) */}
            <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl">
                
                {/* Subtítulo: Foco na funcionalidade */}
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                    Contador de Exemplo usando ContextAPI
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8">
                    {/* Componente Display (lado esquerdo) */}
                    <div className="w-full md:w-1/3">
                        <Display/>
                    </div>
                    
                    {/* Componente Counter (lado direito) */}
                    <div className="w-full md:w-2/3">
                        <Counter/>
                    </div>
                </div>

            </section>
        </div>
    );
}