import './App.css';
import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';
import type {QuestionCardProps} from './props'
import EndQuiz from './EndQuiz';

function App() {
const [score, setScore] = useState(0);
const[index, setIndex] = useState(0);

const incrementCorrect = () => {
  setScore((val)=> val+1);
}

const incrementIndex = () => {
  setIndex((val)=> val+1);
}

const resetQuiz = ()=>{
        setScore(0);
        setIndex(0);
    }

  //sends quiz start
  useEffect(()=>{
    alert("Quiz Started");
  },[])

  //sends question # alerts
  useEffect(()=>{
    if(index<5){
    alert(`Question ${index+1}`);
    }
  },[index])

  
  //Sets new high score
  useEffect(()=>{
    const cur = parseInt(localStorage.getItem("high") ?? "0");
    if(score > cur){
      localStorage.setItem("high",`${score}`);
      console.log(`New high score of ${score}`);
    }
  },[score])
  
const QuestionCardProp : QuestionCardProps = {
  q: questions,
  index: index,
  score: score,
  handleCorrect: incrementCorrect,
  handleNextQuestion: incrementIndex,
  handleResetQuiz: resetQuiz
}

  return (
    <main className="quiz">
      {index == 5 ? (<EndQuiz {...QuestionCardProp}/>):(<>
      <h1>Quiz App</h1>
      {index == 0 ? (<h2 >Score:</h2>):(<h2>Score: {score} / {index}</h2>)}
      <h2 className='progress'>Question: {index+1}</h2>
      <QuestionCard {...QuestionCardProp}/>
      </>)}
    </main>
  );
}

export default App;
