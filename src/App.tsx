import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';
import Results from './Results';
import type { Question } from './types';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {

  const [selectedAnswer,setSelectedAnswer] = useState<string>();
  const [hasAnswered,setHasAnswered] = useState(false);
  const [result, setResult] = useState<string>();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  //const [questions, setQuestions] = useState<Question[]>([]);

  const checkAnswer = (answer: string, correctAnswer: string) => {
    setSelectedAnswer(answer);
    setHasAnswered(true);
    const result = (answer === correctAnswer) ? "Correct" : "Incorrect";
    setResult(result);
    if (result === "Correct") setScore(prev => prev + 1);
  }

  const endGamePage = () => {
    setGameOver(true);
  }

  const restart = () => {
    setHasAnswered(false);
    setScore(0);
    setGameOver(false);
  }

  const highscore = Number(localStorage.getItem("highscore"));
  if (score > highscore) localStorage.setItem("highscore",score.toString());

  // useEffect(() => {
  //   async function loadQuestions() {
  //     try {
  //       const fetchedQuestions = await fetchQuestions();
  //       setQuestions(fetchedQuestions);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   loadQuestions();
  //   alert("Game Started");
  //   console.log("Game Started");
  // }, []);

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
        {!gameOver && 
        <>
        <QuestionCard questions={questions} onSelection={checkAnswer} needsRestart={endGamePage}></QuestionCard>
        {hasAnswered && <p>{selectedAnswer} is {result}</p>}
        <h4>Score: {score}</h4>
        </>}
      {gameOver && <Results score={score} restart={restart}></Results>}
    </main>
  );
}

export default App;

// async function fetchQuestions(): Promise<Question[]> {
//   const response = await fetch(`https://opentdb.com/api.php?amount=20&category=11&difficulty=medium&type=multiple`);
  
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
  
//   // Cast the parsed JSON into your Post interface
//   const data = await response.json();
//   console.log(data);
//   return data as Question[];
// }