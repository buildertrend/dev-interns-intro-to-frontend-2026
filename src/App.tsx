import './App.css';
import QuestionCard from './QuestionCard.tsx';
import {questions} from './data/questions.ts';
import { useState, useEffect } from 'react';
import Results from './FinalResults.tsx';
import InAppResults from './Scoreboard.tsx';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const randomizedQuestions = [...questions].sort(() => Math.random() - 0.5);
  const currentQuestion = randomizedQuestions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex == 0) {
      alert("Quiz started!");
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex == 5) {
      alert("One question left...");
    }
  }, [currentQuestionIndex]);
  
  function handleAnswerSelection(answer: string) {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function restartQuiz() {
    setScore(0);
    setCurrentQuestionIndex(0);
  }

  if (currentQuestionIndex >= randomizedQuestions.length) {
    return <Results score={score} totalQuestions={randomizedQuestions.length} onRestart={restartQuiz} />;
  }
  return (
  <main className = "quiz">
    <h1>Quiz App</h1>
    <h2 className = "progress">Question {currentQuestionIndex + 1} of {randomizedQuestions.length}</h2>
  <QuestionCard
    question = {currentQuestion.prompt}
    answers = {currentQuestion.options}
    onAnswerSelection = {handleAnswerSelection}
  />
  <InAppResults score={score} totalQuestions={randomizedQuestions.length} />
  </main>
  
  );

}

export default App;
