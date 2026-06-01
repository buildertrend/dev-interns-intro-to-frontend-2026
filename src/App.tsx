import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';
import Results from './results'
// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    alert("Quiz Started!")
  }, []);
  useEffect(() => {
    document.title = `Question: ${currentQuestion+1}`;
  }, [currentQuestion]);
  const checkAnswer = (choice: string) => {
    let tempScore: number = score;

    let temp: number = +(localStorage.getItem("score") ?? '0');
      if(tempScore > temp){
      localStorage.setItem("score", `${tempScore}`);
      }

    if (choice == questions[currentQuestion].correctAnswer){
      alert("Question correct")
      tempScore = score+1;
      setScore(tempScore)

    }else{
      alert("Question incorrect")
      tempScore = tempScore;
    }
    
    if (currentQuestion +1 >= questions.length){
      setIsOver(true);
      temp = +(localStorage.getItem("score") ?? '0');
      if(tempScore > temp){
      localStorage.setItem("score", `${tempScore}`);
      }
      
    }else{
      setCurrentQuestion(currentQuestion + 1);
    }  
  };
  
  return (
    <main className="quiz">
      <h1>Quiz App </h1>
      <QuestionCard {...questions[currentQuestion]} onButtonClick={checkAnswer} isOver={isOver} />

    <p>{isOver && (<Results score={score} topScore={localStorage.getItem("score") ?? "0"} />) }</p>
    </main>
  );
  
}


export default App;
