import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from "./data/questions";
import { use, useEffect, useState } from 'react';
import Results from './Results';

  
  

function App() {

  useEffect(() => {
    alert("Game Started!");
  }, []);

  

  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    console.log("Game started!");
  },[]);

  useEffect(() => {
  console.log(`Now showing question #${counter + 1}`);
}, [counter]);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[counter];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setCounter((prev) => prev + 1);
  };
  const highScore = localStorage.getItem("highScore");

  useEffect(() => {
    if (score > Number(highScore)) {
      localStorage.setItem("highScore", String(score));
    }
    console.log(`Current score: ${score}`);
  },[counter,score,highScore]);
 

  
  

  if (counter >= questions.length) {
    return (<Results score={score} total={questions.length} onRestart={() => {
      setCounter(0);
      setScore(0);
    }}/>);} else {
    return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <QuestionCard question={questions[counter]} onAnswer={handleAnswer} />
      <Results score={score} total={questions.length} onRestart={() => {
        setCounter(0);
        setScore(0);
      }} />
        
      
    </main>
  );
}}
    
export default App;
function toast(arg0: string) {
  throw new Error('Function not implemented.');
}

