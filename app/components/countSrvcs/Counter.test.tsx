import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "./Counter";
import { useCounter } from "@/app/context/CounterContext";


// mock do hook useCounter
const mockUseCounter = jest.fn();

//mock p o módulo do contexto
jest.mock('../context/CountContext', () => ({
    useCounter: () => mockUseCounter(),
}));

describe('Counter', () => {
    it('deveria chamar a função de incremento quando o btn incrementar for clicado', () => {
        //configurar o mock para os testes
        const mockIncrement = jest.fn();
        const mockDecrement = jest.fn();
        mockUseCounter.mockReturnValue({
            increment: mockIncrement,
            decrement: mockDecrement,
            state: { count: 0},
        });

        render(<Counter/>);

        //simular o clique do btn
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        fireEvent.click(incrementButton);

        // verificar se a fn increment foi chamada
        expect(mockIncrement).toHaveBeenCalledTimes(1);
        expect(mockDecrement).not.toHaveBeenCalled();
    });

    it('deveria chamar a função de decremento quando o btn decrementar for clicado', () => {
        //config o mock para este test
        const mockIncrement = jest.fn();
        const mockDecrement = jest.fn();
        mockUseCounter.mockReturnValue({
            increment: mockIncrement,
            decrement: mockDecrement,
            state: { count: 0 },
        });

        render(<Counter/>);

        //simular o clique do btn
        const incrementButton = screen.getByRole('button', { name: /increment/i });
        fireEvent.click(incrementButton);

        // verificar se a fn increment foi chamada
        expect(mockIncrement).toHaveBeenCalledTimes(1);
        expect(mockDecrement).not.toHaveBeenCalled();
    });
});