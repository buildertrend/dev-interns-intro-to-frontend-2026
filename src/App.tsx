import './App.css';
import QuestionCard from "./QuestionCard"
import ScoreBoard from "./ScoreBoard"
import { questions } from "./data/questions.ts"
import { useState, useEffect } from "react"
import type { Question } from "./types"
// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function shuffle(array: Question[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffled, setShuffled] = useState<Question[]>(() => shuffle(questions));
  const handleClick = (answer: string) => {
    if (shuffled[currentQuestion].correctAnswer === answer) {
      setScore((prev) => prev + 1);
    }
    setCurrentQuestion((prev) => prev + 1);
  }
  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShuffled(shuffle(questions));
  }
  useEffect(() => {
    alert("Quiz has loaded");
  }, [])
  useEffect(() => {
    alert("Quiz has loaded");
  }, [])
  return (
    <main className="layout">
      <div className="quiz">
        <h1>Quiz App</h1>

        {currentQuestion < questions.length ? <QuestionCard
          prompt={shuffled[currentQuestion].prompt}
          options={shuffled[currentQuestion].options}
          handleClick={handleClick}
        ></QuestionCard> :
          <h1 className="prompt">You have completed the quiz.</h1>
        }
      </div>
      <div className="scoreboard">
        <ScoreBoard
          score={score}
          currentQuestion={currentQuestion}
          handleReset={handleReset}
        />
      </div>
    </main>
  );
}

export default App;
