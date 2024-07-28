import { NextApiRequest, NextApiResponse } from 'next';
import quizData from './data.json';
import { cleanJsonData } from '../../utils/fixJsonData';
import { QuizData, Question } from '../../types/quiz';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Clean the data before using it
    const cleanedData: QuizData = cleanJsonData(quizData);

    switch (req.method) {
        case 'GET':
            res.status(200).json(cleanedData);
            break;

        case 'POST':
            try {
                const newQuestion: Question = req.body;
                cleanedData.results.push(newQuestion);
                res.status(200).json(newQuestion);
            } catch (error) {
                res.status(400).json({ error: 'Invalid data format' });
            }
            break;

        case 'PUT':
            try {
                const updatedQuestion: Question = req.body;
                const index = cleanedData.results.findIndex((q) => q.question === updatedQuestion.question);
                if (index !== -1) {
                    cleanedData.results[index] = updatedQuestion;
                    res.status(200).json(updatedQuestion);
                } else {
                    res.status(404).json({ error: 'Question not found' });
                }
            } catch (error) {
                res.status(400).json({ error: 'Invalid data format' });
            }
            break;

        case 'DELETE':
            try {
                const question = decodeURIComponent(req.query.id as string);
                const index = cleanedData.results.findIndex((q) => q.question === question);
                if (index !== -1) {
                    cleanedData.results.splice(index, 1);
                    res.status(200).end();
                } else {
                    res.status(404).json({ error: 'Question not found' });
                }
            } catch (error) {
                res.status(400).json({ error: 'Invalid data format' });
            }
            break;

        default:
            res.status(405).json({ error: 'Method not allowed' });
            break;
    }
}
