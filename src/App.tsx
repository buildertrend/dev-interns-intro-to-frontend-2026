import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from "./data/questions";
import { useState } from 'react';
import Results from './Results';



  
  

function App() {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[counter];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setCounter((prev) => prev + 1);
  };
  
  

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
