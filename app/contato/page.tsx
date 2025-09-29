'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    email: z.string().email("Por favor, insira um e-mail válido."),
    subject: z.string().min(5, "O assunto deve ter no mínimo 5 caracteres."),
    message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contato() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    
    const onSubmit = async (data: ContactFormData) => {
        // simulação de API
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Dados do Formulário Enviados:", data);
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        reset(); 
    };

    const inputBaseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out";
    const labelBaseClasses = "block text-sm font-medium text-gray-700 mb-1";
    
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-42 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-pink-600">
                
                {/* titulo */}
                <h1 className="text-3xl font-extrabold text-orange-600 text-center mb-2">
                    Fale Conosco
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Tem alguma dúvida? Envie-nos uma mensagem e retornaremos em breve.
                </p>

                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* nome */}
                    <div>
                        <label htmlFor="name" className={labelBaseClasses}>Nome Completo</label>
                        <input
                            id="name"
                            type="text"
                            {...register('name')}
                            className={`${inputBaseClasses} ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Seu nome"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    {/* email */}
                    <div>
                        <label htmlFor="email" className={labelBaseClasses}>Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={`${inputBaseClasses} ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="seu.email@exemplo.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    {/* assunto */}
                    <div>
                        <label htmlFor="subject" className={labelBaseClasses}>Assunto</label>
                        <input
                            id="subject"
                            type="text"
                            {...register('subject')}
                            className={`${inputBaseClasses} ${errors.subject ? 'border-red-500' : ''}`}
                            placeholder="Ex: Dúvida sobre agendamento"
                        />
                        {errors.subject && (
                            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                        )}
                    </div>

                    {/* msg */}
                    <div>
                        <label htmlFor="message" className={labelBaseClasses}>Mensagem</label>
                        <textarea
                            id="message"
                            rows={4}
                            {...register('message')}
                            className={`${inputBaseClasses} resize-none ${errors.message ? 'border-red-500' : ''}`}
                            placeholder="Descreva sua dúvida ou solicitação..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                    </div>

                    {/* btn */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out disabled:bg-pink-400"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            </div>
        </div>
    );
}