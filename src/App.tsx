import './App.css';
import { questions } from './data/questions.ts';
import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard.tsx';
import Results from './Results.tsx';
import Scoreboard from './Scoreboard.tsx';

// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
    const [questionCount, setQuestionCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    
    const checkAnswer = (selectedOption: string) => {
        if (selectedOption === questions[questionCount].correctAnswer) {
            setCorrectCount(correctCount + 1);
        } 
    } 

    const handleNextQuestion = (selectedOption: string) => {
        checkAnswer(selectedOption);
        setQuestionCount(questionCount + 1);

    }

    const handleRestartQuiz = () => {
        setQuestionCount(0);
        setCorrectCount(0);
    } 

    // Fisher-Yates shuffle algorithm to randomize the order of questions and options per google
    function shuffleArray(array) {
        const arr = [...array]; 
        for (let i = arr.length - 1; i > 0; i--) {
            // eslint-disable-next-line react-hooks/purity
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
        return arr;
    }
    const randomQuestions = shuffleArray(questions);

    useEffect(() => {
        alert("Quiz Started");
        console.log("Quiz Started!");
    }, []); 

    useEffect(() => {
        console.log(`Question ${questionCount + 1}`);
        document.title = `Question ${questionCount + 1}`;
    }, [questionCount]);


    useEffect(() => {
        const highScoreString = localStorage.getItem("highScore");
        const highScoreInt = highScoreString ? parseInt(highScoreString) : 0;
        if (correctCount > highScoreInt) {
            localStorage.setItem("highScore", correctCount.toString());
        } 
    }, [correctCount]);

    return (
    <main className="quiz">
            <h1>Quiz App</h1>
            <Scoreboard correctAnswers={correctCount} runningTotalQuestions={questionCount} />
            {questionCount < questions.length ? (
                <>
                    <p className="progress">Question {questionCount} of {randomQuestions.length}</p>
                    <QuestionCard question={randomQuestions[questionCount]} handleNextQuestion={handleNextQuestion} />
              </>
          ) : (
                <Results correctAnswers={correctCount} totalQuestions={randomQuestions.length} handleRestartQuiz={handleRestartQuiz} />
          )
          }
    </main>
  );
}

export default App;
