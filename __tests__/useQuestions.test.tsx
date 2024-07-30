import { QueryClient, QueryClientProvider } from 'react-query';
import { useQuestions } from '../hooks/useQuestions';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ReactNode } from 'react';
import { expect } from '@jest/globals';
import React from 'react';

const queryClient = new QueryClient();

type PropsWithChildren = { children?: ReactNode };

const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mock = new MockAdapter(axios);

describe('useQuestions Hook', () => {
    beforeEach(() => {
        mock.reset();
    });

    test('fetches questions successfully', async () => {
        const mockData = {
            results: [
                {
                    question: 'Sample Question',
                    correct_answer: 'Correct Answer',
                    incorrect_answers: ['Incorrect Answer'],
                },
            ],
        };

        mock.onGet('/api/mock').reply(200, mockData);

        const { result, waitFor } = renderHook(() => useQuestions(), { wrapper });

        await act(async () => {
            await waitFor(() => result.current.isSuccess);
        });

        expect(result.current.data).toEqual(mockData.results);
    });
});
