import './App.css';
import {questions} from './data/questions.tsx';
import QuestionCard from './QuestionCard.tsx';
import Results from './Results.tsx';
import { use, useState, useEffect } from 'react';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {

  

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const currentQuestion = questions[currentQuestionId];
  const [pickedAnswer, setPickedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);



  useEffect(() => {
        if (currentQuestionId === 0) {
          window.alert('Quiz Started');
        }
      }, [currentQuestionId]);


  const handleAnswer = (answer: string) => {

    setPickedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setCurrentQuestionId((prev) => prev + 1);
    }, 1000); // ms
  }

  const handleRestart = () => {

    setScore(0);
    setPickedAnswer("");
    setCurrentQuestionId(0);

  }
  
  


  if (currentQuestionId >= questions.length) {
    return (
      <Results score={score} numQuestions={questions.length} onRestart={handleRestart}/>
    );
  }

  return (
    <main className="quiz">
      <h1>Quiz App Current Score: {score}</h1>
      <p className="progress">Open HANDOUT.md and start with Part 1. 🚀</p>
      <QuestionCard onAnswer={handleAnswer} prompt={currentQuestion.prompt} correctAnswer={currentQuestion.correctAnswer} pickedAnswer={pickedAnswer} options={currentQuestion.options} />
    </main>
  );
}

export default App;
