import './App.css';
import type { Question } from './types'
import { questions } from './data/questions'
import { useEffect, useState } from 'react';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const [numRight, setRight] = useState(0);
  const [count, setCount] = useState(0);
  const handleAnswer = (chosenAnswer: string) => {
    if (questions[count].correctAnswer === chosenAnswer)
      setRight(numRight + 1);
  }
  const handleNextQuestion = () => {
    setCount(count + 1); 
  };
  const handleReset = () => {
    setCount(0);
    setRight(0);
  }
  useEffect(() => {
    alert("Quiz Started!")
  }, []);

  const [highScore, setHighScore] = useState(() => {
    const hs = localStorage.getItem("highScore");
    return hs ? parseInt(hs) : 0;
  });
  useEffect(() => {
  localStorage.setItem("highScore", highScore.toString());
  }, [highScore]);

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <p className="progress">Question {count} of {questions.length}</p>
      {count < questions.length ? (
        <QuestionCard question={questions[count]} handleAnswer={handleAnswer} handleNextQuestion={handleNextQuestion}/>
      ):(
        <Results nRight={numRight} handleReset={handleReset}/>
      )}
    </main>
  );
}

interface QuestionCardProps{
  question: Question
  handleAnswer: (chosenAnswer: string) => void
  handleNextQuestion: () => void
};

function QuestionCard(props: QuestionCardProps) 
{
  return (
    <div className="question-card">
      <h2 className="prompt">{props.question.prompt}</h2>
      <div className="options">
        <button className="option-button" onClick={() => {props.handleAnswer(props.question.options[0]); props.handleNextQuestion();}}>{props.question.options[0]}</button>
        <button className="option-button" onClick={() => {props.handleAnswer(props.question.options[1]); props.handleNextQuestion();}}>{props.question.options[1]}</button>
        <button className="option-button" onClick={() => {props.handleAnswer(props.question.options[2]); props.handleNextQuestion();}}>{props.question.options[2]}</button>
        <button className="option-button" onClick={() => {props.handleAnswer(props.question.options[3]); props.handleNextQuestion();}}>{props.question.options[3]}</button>
      </div>
    </div>
  );
}

interface ResultsProps {
  nRight: number
  handleReset: () => void
}

function Results(props: ResultsProps) 
{
  return (
    <div className="results">
      <p className="score">You scored {props.nRight} out of {questions.length}!</p>
      <button className="restart-button" onClick={() => props.handleReset()}>Play again</button>
    </div>
  );
}

export default App;
