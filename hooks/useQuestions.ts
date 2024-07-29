import { useQuery } from 'react-query';
import axios from 'axios';
import { Question } from '../types/quiz';

export function useQuestions() {
    return useQuery<Question[]>('questions', async () => {
        const response = await axios.get('/api/mock');
        return response.data.results;
    });
}
