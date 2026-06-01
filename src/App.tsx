import './App.css';
import QuestionCard from './QuestionCard';
import Results from './Results';
import { questions } from './data/questions';
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const handleNextQuestion = (answer: string) => {
    if(answer === questions[currentQuestion].correctAnswer){
      setCurrentScore(currentScore + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    if(currentQuestion >= questions.length-1){
      setIsFinished(true);
    }
  }
  const handleRestart = () => {
    setCurrentQuestion(0);
    setCurrentScore(0);
    setIsFinished(false);
    console.log("Restarting");
  }
  useEffect(() => {
    alert("Quiz started!");
  }, []);
  
  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {!isFinished ? 
        (<QuestionCard
          prompt = {questions[currentQuestion].prompt}
          options = {questions[currentQuestion].options}
          currentQuestion={currentQuestion}
          correctAnswer={questions[currentQuestion].correctAnswer}
          currentScore={currentScore}
          handleClick = {handleNextQuestion}
        />) : 
        (<Results
          score = {currentScore}
          handleClick={handleRestart}
        />)
      }
    </main>
  );
}

export default App;
