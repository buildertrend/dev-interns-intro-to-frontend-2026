import './App.css';
import FinishPage from './FinishPage';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';
import { useState, useEffect } from 'react';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);

  //let rand = Math.random(questions.length);

  function checkValidQuestion() {
    return !(questionId >= questions.length - 1);
  }

  const incrementQuestionId = (answer : string) => {
    if (answer == questions[questionId].correctAnswer)
    {
      setScore(prev => prev + 1);
    }
    if (checkValidQuestion())
    {
      setQuestionId(prev => prev + 1);
    }
    if (questionId >= questions.length - 1)
    {
      setFinishedQuiz(true);
    }
  };

  const [highscore, setHighscore] = useState<number>(() => {
    const savedScore = localStorage.getItem('highscore');
    return savedScore ? JSON.parse(savedScore) : 0;
  });

  useEffect(() => alert("The Quiz has Started!"), []);
  useEffect(() => {console.log("The quiz has started.");}, []);
  useEffect(() => {console.log(questionId);}, [questionId]);
  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
      localStorage.setItem('highscore', JSON.stringify(score));
    }
  }, [score, highscore]);

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {!finishedQuiz && <h2> Current Question Number: {questionId}</h2>}
      {!finishedQuiz && <h2>Your current score is {score}</h2>}
      {!finishedQuiz && <QuestionCard className="question-card"
       question={questions[questionId]} incrementQuestionId={incrementQuestionId} />}
      {finishedQuiz && <FinishPage className="results" score={score}></FinishPage>}
      
      {/* {(finishedQuiz) ? <FinishPage></FinishPage> : null} */}
    </main>
  );
}

export default App;
