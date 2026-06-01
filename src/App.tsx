import './App.css';
import { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);
  const [highestScore, setHighestScore] = useState(0);


  useEffect(() => {
    const savedHighestScore = localStorage.getItem('highestScore');

    if (savedHighestScore) {

      setHighestScore(parseInt(savedHighestScore));
    }
    alert('Welcome to the Quiz App! Click OK to start the quiz.');
  }, []);
  
  useEffect(() => {
    if(currentIndex < questions.length) {
      alert('Question ' + (currentIndex + 1) + ' of ' + questions.length);
    }
  }, [currentIndex]);
  


  const incrementQuestion = (answer: string) => {
    if (answer === questions[currentIndex].correctAnswer){
      setCurrentScore((score) => score + 1);
    } else {
      setWrongAnswerCounter((prevCounter) => prevCounter + 1);
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  
  if(currentIndex >= questions.length) {
    const newHighestScore = Math.max(currentScore, highestScore);

    if (newHighestScore > highestScore) {

      setHighestScore(newHighestScore);
      localStorage.setItem('highestScore', newHighestScore.toString());
    }
    return (
      <main>
        <h1>Quiz Completed!</h1>
        <p>Final Score: {currentScore}</p>
        <p>Wrong Answers Clicked: {wrongAnswerCounter}</p>
        <p>Highest Score: {newHighestScore}</p>
      </main>
    );
  }


  return (
    <main>
      <h1>Quiz App</h1>
      <QuestionCard question={questions[currentIndex]} onClick={incrementQuestion} />
      <p>Score: {currentScore}</p>
      <p>Wrong Answers: {wrongAnswerCounter}</p>
    </main>
  );
}

export default App;