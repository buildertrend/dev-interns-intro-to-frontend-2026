import './App.css';
import QuestionCard from "./QuestionCard.tsx";
import Results from "./Results.tsx";
import { questions } from './data/questions.ts';
import { useState } from "react";

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const handleQuestionAnswer = (answer: string) => {
    if (answer != questions[id].correctAnswer) {
      setWrong(wrong + 1);
    }
    setId(id + 1)
  }

  const handleRestart = () => {
    setWrong(0);
    setId(0)
  }

  const [id, setId] = useState(0);
  const [wrong, setWrong] = useState(0);
  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {questions[id] && <QuestionCard prompt={questions[id].prompt} options={questions[id].options} onAnswer={handleQuestionAnswer} />}
      {questions[id] == null && <Results wrong={wrong} total={id} onRestart={handleRestart} />}
    </main>
  );
}

export default App;
