import styled from 'styled-components';

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.9); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 600px;
    height: 80vh;
    max-height: 600px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    @media (max-width: 768px) {
        padding: 15px;
        max-width: 90%;
        max-height: 80vh;
    }

    @media (max-width: 480px) {
        padding: 10px;
        max-width: 95%;
        max-height: 75vh;
    }
`;

export const QuestionText = styled.h2`
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8em;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 1.6em;
        margin-bottom: 10px;
    }
`;

export const AnswerButton = styled.button<{ isCorrect?: boolean }>`
    background-color: ${(props) => (props.isCorrect ? '#4caf50' : '#258871')};
    color: white;
    border: none;
    border-radius: 0; 
    padding: 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 1em;
    width: 100%;
    max-width: 300px;
    text-align: center;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 16px;
        font-size: 0.9em;
        max-width: 250px;
    }

    @media (max-width: 480px) {
        padding: 12px;
        font-size: 0.8em;
        max-width: 200px;
    }
`;

export const TrueFalseButton = styled(AnswerButton)`
    background-color: #2196f3;
`;

export const TextInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;

    @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        padding: 6px;
        font-size: 0.8em;
    }
`;

export const SubmitButton = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 0.8em;
    }
`;

export const SummaryContainer = styled.div`
    text-align: center;
`;

export const SummaryText = styled.p`
    font-size: 1.2em;
    margin: 10px 0;

    @media (max-width: 768px) {
        font-size: 1em;
        margin: 8px 0;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
        margin: 6px 0;
    }
`;

export const RestartButton = styled.button`
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 0.8em;
    }
`;

export const QuestionsLeftCounter = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.9em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 0.8em;
        padding: 4px 8px;
    }

    @media (max-width: 480px) {
        font-size: 0.7em;
        padding: 3px 6px;
    }
`;
