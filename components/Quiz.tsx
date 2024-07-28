import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    QuizContainer,
    QuestionText,
    AnswerButton,
    TrueFalseButton,
    TextInput,
    SubmitButton,
    SummaryContainer,
    SummaryText,
    RestartButton,
} from './QuizStyles';

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers?: string[];
}

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
    const [userAnswer, setUserAnswer] = useState<string>('');

    useEffect(() => {
        const getQuizData = async () => {
            try {
                const { data } = await axios.get('/api/mock');
                if (data && data.results && Array.isArray(data.results)) {
                    setQuestions(data.results);
                    setCurrentQuestionIndex(Math.floor(Math.random() * data.results.length));
                } else {
                    console.error('Invalid data structure:', data);
                }
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };
        getQuizData();
    }, []);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleSubmitTextAnswer = () => {
        const currentQuestion = questions[currentQuestionIndex];
        handleAnswer(userAnswer.trim().toLowerCase() === currentQuestion.correct_answer.trim().toLowerCase());
        setUserAnswer('');
    };

    if (isQuizFinished) {
        const totalQuestions = correctAnswers + incorrectAnswers;
        const score = (correctAnswers / totalQuestions) * 100;
        return (
            <SummaryContainer>
                <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Quiz Summary
                </motion.h2>
                <SummaryText>Correct Answers: {correctAnswers}</SummaryText>
                <SummaryText>Incorrect Answers: {incorrectAnswers}</SummaryText>
                <SummaryText>Total Questions Answered: {totalQuestions}</SummaryText>
                <SummaryText>Final Score: {score.toFixed(2)}%</SummaryText>
                <RestartButton onClick={() => window.location.reload()}>Restart Quiz</RestartButton>
            </SummaryContainer>
        );
    }

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const allAnswers = [...(currentQuestion.incorrect_answers || []), currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

    return (
        <QuizContainer>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <QuestionText>{currentQuestion.question}</QuestionText>
            </motion.div>
            {currentQuestion.type === 'multiple' && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {allAnswers.map((answer, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <AnswerButton onClick={() => handleAnswer(answer === currentQuestion.correct_answer)}>
                                {answer}
                            </AnswerButton>
                        </motion.div>
                    ))}
                </motion.div>
            )}
            {currentQuestion.type === 'boolean' && (
                <>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TrueFalseButton onClick={() => handleAnswer(currentQuestion.correct_answer === 'True')}>True</TrueFalseButton>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TrueFalseButton onClick={() => handleAnswer(currentQuestion.correct_answer === 'False')}>False</TrueFalseButton>
                    </motion.div>
                </>
            )}
            {currentQuestion.type === 'text' && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TextInput
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Type your answer here"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SubmitButton onClick={handleSubmitTextAnswer}>Submit</SubmitButton>
                    </motion.div>
                </>
            )}
        </QuizContainer>
    );
};

export default Quiz;
