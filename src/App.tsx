import { useEffect, useState } from 'react';
import './App.css';
import QuestionCard from './QuestionCard';
import { questions } from './data/questions';

interface ResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

function Results({ score, total, onRestart }: ResultsProps) {
  return (
    <section className="results-card">
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <button onClick={onRestart}>Play again</button>
    </section>
  );
}

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.alert('Welcome to the Quiz App!');
  }, []);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      alert(`Question ${currentQuestionIndex + 1} of ${questions.length}`);
    }
  }, [currentQuestionIndex]);

  const incrementQuestion = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      alert('Wrong answer! Try again.');
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const isFinished = currentQuestionIndex >= questions.length;

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {isFinished ? (
        <Results score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <>
          <p>Score: {score}</p>
          <QuestionCard question={questions[currentQuestionIndex]} onAnswerClick={incrementQuestion} />
        </>
      )}
    </main>
  );
}

export default App;
