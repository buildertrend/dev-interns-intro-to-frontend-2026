import './App.css';
import QuestionCard from "./QuestionCard.tsx";
import Results from "./Results.tsx";
import { questions } from './data/questions.ts';
import { useState, useEffect } from "react";

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
    setId(id + 1);
    setTimeLeft(10);
  }

  const handleRestart = () => {
    setWrong(0);
    setId(0)
  }


  const [timeLeft, setTimeLeft] = useState(10);
  useEffect(() => {
    if (timeLeft <= 0 && questions[id] != null) {
      setWrong(wrong + 1);
      setId(id + 1);
      setTimeLeft(10);
      return
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const [id, setId] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    document.title = questions[id]?.prompt ?? "Quiz";
  }, [id])

  useEffect(() => { alert("Quiz started!") }, [])

  useEffect(() => {
    if (questions[id] == null && (Number(localStorage.getItem("high") ?? "0") < ((id - wrong) / id))) {
      localStorage.setItem("high", ((id - wrong) / id).toString())
    }
  }, [id])

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {questions[id] && <p className='score'>{id - wrong}/{id}</p>}
      {questions[id] && <QuestionCard prompt={questions[id].prompt} options={questions[id].options} timeLeft={timeLeft} onAnswer={handleQuestionAnswer} />}
      {questions[id] == null && <Results wrong={wrong} total={id} onRestart={handleRestart} />}
    </main>
  );
}

export default App;
