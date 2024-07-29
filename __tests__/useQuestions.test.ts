import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQuestions } from '../hooks/useQuestions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mock = new MockAdapter(axios);

describe('useQuestions Hook', () => {
    beforeEach(() => {
        mock.reset();
    });

    test('fetches questions successfully', async () => {
        const mockData = { results: [{ question: 'Sample Question', correct_answer: 'Correct Answer', incorrect_answers: ['Incorrect Answer'] }] };
        mock.onGet('/api/mock').reply(200, mockData);

        const { result, waitFor } = renderHook(() => useQuestions(), { wrapper });

        await waitFor(() => result.current.isSuccess);

        expect(result.current.data).toEqual(mockData.results);
    });

    test('handles fetch error', async () => {
        mock.onGet('/api/mock').reply(500);

        const { result, waitFor } = renderHook(() => useQuestions(), { wrapper });

        await waitFor(() => result.current.isError);

        expect(result.current.error).toBeDefined();
    });
});
