import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Quiz from '../components/Quiz';

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
    return render(
        <QueryClientProvider client={queryClient}>
            {ui}
        </QueryClientProvider>
    );
};

describe('Quiz Component', () => {
    test('renders loading state initially', () => {
        renderWithClient(<Quiz />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('renders quiz questions', async () => {
        renderWithClient(<Quiz />);
        const question = await screen.findByText(/Question text here/i); // Replace with actual question text
        expect(question).toBeInTheDocument();
    });

    test('handles correct answer', async () => {
        renderWithClient(<Quiz />);
        const correctAnswerButton = await screen.findByText(/Correct Answer/i); // Replace with actual correct answer text
        fireEvent.click(correctAnswerButton);
        expect(screen.getByText(/Correct Answers: 1/i)).toBeInTheDocument();
    });

    test('handles incorrect answer', async () => {
        renderWithClient(<Quiz />);
        const incorrectAnswerButton = await screen.findByText(/Incorrect Answer/i); // Replace with actual incorrect answer text
        fireEvent.click(incorrectAnswerButton);
        expect(screen.getByText(/Incorrect Answers: 1/i)).toBeInTheDocument();
    });
});
