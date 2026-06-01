import './App.css';
import QuestionCard from './questionCard';
import { questions } from './data/questions';
import { useEffect, useState } from 'react';
import Results from './resulys';
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
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const checkAnswer = (answer: string) => {
      if (answer == questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
      if (currentQuestion >= questions.length - 1) {
        setIsQuizOver(true);
      }
      setCurrentQuestion(currentQuestion + 1);
  }
  useEffect(() => {
    alert("Quiz Started")
  }, []);

  useEffect(() => {
    document.title = `Question: ${currentQuestion + 1}`;
  }, [currentQuestion]);
  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <QuestionCard 
        {...questions[currentQuestion]} onButtonClick={checkAnswer} isGameOver={isQuizOver}
      />
      {isQuizOver && (<Results score={score}/>)}

    </main>
  );
}



export default App;
