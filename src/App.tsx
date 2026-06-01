import './App.css';
import { useState } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';
import type {QuestionCardProps} from './props'




function App() {
const [score, setScore] = useState(0);
const[index, setIndex] = useState(0);

const incrementCorrect = () => {
  setScore((val)=> val+1);
}

const incrementIndex = () => {
  setIndex((val)=> val+1);
}

const QuestionCardProp : QuestionCardProps = {
  q: questions,
  index: index,
  handleCorrect: incrementCorrect,
  handleNextQuestion: incrementIndex
}

  return (
    <main className="quiz">
      {index == 5 ? (<p>Quiz Done with {score} correct out of 4</p>):(<>
      <h1>Quiz App</h1>
      {index == 0 ? (<h2>Score:</h2>):(<h2>Score: {score} / {index}</h2>)}
      <QuestionCard {...QuestionCardProp}/>
      </>)}
    </main>
  );
}

export default App;
