import './App.css';
import QuestionCard from './QuestionCard';
import Results from './Results';
import {questions} from "./data/questions.ts"
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
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  let currentQuestion = questions[currentQuestionID];
  

  const handleButtonClicked = (answer: string) => {
  if (answer === currentQuestion.correctAnswer) {
    setScore(prev => prev + 1);
  }

  if (currentQuestionID === questions.length - 1) {
    setGameOver(true);
  } else {
    setCurrentQuestionID(prev => prev + 1);
  }
};

  const restartGame = () => {
  setCurrentQuestionID(0);
  setScore(0);
  setGameOver(false);
  };

  useEffect(() => {
    if (currentQuestionID === 0) {
      alert("Quiz started!!");
    }
  }, [currentQuestionID])

  useEffect(() => {
    if (currentQuestionID < questions.length) {
    console.log(`You are on question ${questions[currentQuestionID].id}`);
    }
  }, [currentQuestionID]);

  useEffect(() => {
    if (currentQuestionID < questions.length) {
      document.title = `Question ${currentQuestionID + 1} - Quiz App`;
    } else {
      document.title = "Quiz Complete!";
    }
  }, [currentQuestionID]);

  return (
    <main className="quiz">
      <h1>Quiz App</h1>

        { gameOver ? ( 
          <Results
          score = {score}
          onClick={restartGame}
        >
        </Results>
        ) : (
          <QuestionCard 
          prompt = {questions[currentQuestionID].prompt}
          options = {questions[currentQuestionID].options}
          correctAnswer = {questions[currentQuestionID].correctAnswer}
          onClick={handleButtonClicked}>
        </QuestionCard>
        ) }
      
    </main>
  );
}

export default App;
