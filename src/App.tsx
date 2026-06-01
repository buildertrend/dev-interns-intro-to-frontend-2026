import './App.css';
import { questions } from './data/questions.ts';
import { useState } from 'react';
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
    const [response, setResponse] = useState("Unanswered"); 

    const checkAnswer = (selectedOption: string) => {
        if (selectedOption === questions[questionCount].correctAnswer) {
            setCorrectCount(correctCount + 1);
            setResponse("Correct");
        } else {
            setResponse("Incorrect");
        }
    } 

    const handleNextQuestion = (selectedOption: string) => {
        checkAnswer(selectedOption);
        // setQuestionCount(questionCount + 1);

    }

    const handleRestartQuiz = () => {
        setQuestionCount(0);
        setCorrectCount(0);
        setResponse("Unanswered");
    } 

    return (
    <main className="quiz">
            <h1>Quiz App</h1>
            <Scoreboard correctAnswers={correctCount} runningTotalQuestions={questionCount} />
            {questionCount < questions.length ? (
                <>
                    <p className="progress">Question {questionCount} of {questions.length}</p>
                    <QuestionCard question={questions[questionCount]} handleNextQuestion={handleNextQuestion} response={response} />
              </>
          ) : (
                <Results correctAnswers={correctCount} totalQuestions={questions.length} handleRestartQuiz={handleRestartQuiz} />
          )
          }
    </main>
  );
}

export default App;
