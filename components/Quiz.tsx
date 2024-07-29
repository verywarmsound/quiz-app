import { motion } from 'framer-motion';
import React, { useState, useMemo } from 'react';
import { QuizContainer, QuestionText, AnswerButton, TrueFalseButton, TextInput, SubmitButton, SummaryContainer, SummaryText, RestartButton, QuestionsLeftCounter } from '../styles/QuizStyles';
import { useQuestions } from '../hooks/useQuestions';

export default function Quiz() {
    const { data: questions, isLoading } = useQuestions();
    const memoizedQuestions = useMemo(() => questions || [], [questions]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState<number>(0);
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
    const [userAnswer, setUserAnswer] = useState<string>('');

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
        }
        if (currentQuestionIndex < memoizedQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleSubmitTextAnswer = () => {
        const currentQuestion = memoizedQuestions[currentQuestionIndex];
        handleAnswer(userAnswer.trim().toLowerCase() === currentQuestion.correct_answer.trim().toLowerCase());
        setUserAnswer('');
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <QuizContainer>
            {isQuizFinished ? (
                <SummaryContainer>
                    <motion.h2 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                        Quiz Summary
                    </motion.h2>
                    <SummaryText>Correct Answers: {correctAnswers}</SummaryText>
                    <SummaryText>Incorrect Answers: {incorrectAnswers}</SummaryText>
                    <SummaryText>Total Questions Answered: {correctAnswers + incorrectAnswers}</SummaryText>
                    <SummaryText>Final Score: {((correctAnswers / (correctAnswers + incorrectAnswers)) * 100).toFixed(0)}%</SummaryText>
                    <RestartButton onClick={() => window.location.reload()}>Restart Quiz</RestartButton>
                </SummaryContainer>
            ) : (
                <>
                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <QuestionText>{memoizedQuestions[currentQuestionIndex].question}</QuestionText>
                    </motion.div>
                    {memoizedQuestions[currentQuestionIndex].type === 'multiple' && (
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
                            {[...(memoizedQuestions[currentQuestionIndex].incorrect_answers ?? []), memoizedQuestions[currentQuestionIndex].correct_answer]
                                .sort(() => Math.random() - 0.5)
                                .map((answer, index) => (
                                    <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                        <AnswerButton onClick={() => handleAnswer(answer === memoizedQuestions[currentQuestionIndex].correct_answer)}>{answer}</AnswerButton>
                                    </motion.div>
                                ))}
                        </motion.div>
                    )}
                    {memoizedQuestions[currentQuestionIndex].type === 'boolean' && (
                        <>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <TrueFalseButton onClick={() => handleAnswer(memoizedQuestions[currentQuestionIndex].correct_answer === 'True')}>True</TrueFalseButton>
                            </motion.div>
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <TrueFalseButton onClick={() => handleAnswer(memoizedQuestions[currentQuestionIndex].correct_answer === 'False')}>False</TrueFalseButton>
                            </motion.div>
                        </>
                    )}
                    {memoizedQuestions[currentQuestionIndex].type === 'text' && (
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <TextInput type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} placeholder="Type your answer here" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <SubmitButton onClick={handleSubmitTextAnswer}>Submit</SubmitButton>
                            </motion.div>
                        </>
                    )}
                    <QuestionsLeftCounter>
                        Questions Left: {memoizedQuestions.length - currentQuestionIndex - 1}
                    </QuestionsLeftCounter>
                </>
            )}
        </QuizContainer>
    );
}
