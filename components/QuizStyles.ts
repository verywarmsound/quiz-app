import styled from 'styled-components';

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
`;

export const QuestionText = styled.h2`
    font-size: 1.5em;
    margin-bottom: 20px;
`;

export const AnswerButton = styled.button<{ isCorrect?: boolean }>`
    background-color: ${(props) => (props.isCorrect ? '#4caf50' : '#258871')};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 1em;
    &:hover {
        opacity: 0.8;
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
`;

export const SummaryContainer = styled.div`
  text-align: center;
`;

export const SummaryText = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
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
`;
