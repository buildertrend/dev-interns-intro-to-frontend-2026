import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const [qIndex, setInd] = useState(0)
  const [finalQAnswered, setFinalQAnswered] = useState(false)
  const [score, setScore] = useState(0)

  let questionsCopy = [...questions]

  // runs before return sets back to false(?)
  useEffect(() => {if (finalQAnswered === true) {
    console.log("Randomize questions...")
    for (let i = questions.length - 1; i >= 0; i--){
      let randomInd = Math.floor(Math.random() * (i - 1));
      [questionsCopy[i], questionsCopy[randomInd]] = [questionsCopy[randomInd], questionsCopy[i]]
    }
  }}, [finalQAnswered])

  useEffect(() => {
    alert("Quiz started bro...")
  }, [])

  const questionAnswered = (answer: string) => {
    if (qIndex === questionsCopy.length - 1){
      setFinalQAnswered(true)
      return
    }
    if (answer === questionsCopy[qIndex].correctAnswer) {
      setScore(score + 1)
    }
    setInd((qIndex + 1) % questionsCopy.length)
  }

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <p className="progress">Open HANDOUT.md and start with Part 1. 🚀</p>
      {QuestionCard({ clickHandler: questionAnswered, prompt: questionsCopy[qIndex].prompt, options: questionsCopy[qIndex].options })}
      {finalQAnswered && <div className="results">
        <p className="score">Score: {score}</p>
        <button onClick={() => {
          setFinalQAnswered(false)
          setScore(0)
          setInd(0)
          }} className="restart-button">Restart Quiz</button>
      </div>}
    </main>
  );
}

export default App;
