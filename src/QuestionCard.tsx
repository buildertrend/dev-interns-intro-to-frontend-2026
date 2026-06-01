import { useState } from "react";
import { questions } from "./data/questions";
import Results from "./Results";

function QuestionCard() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [hasAnsweredWrong, setHasAnsweredWrong] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);
    const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
    const question = questions[currentIndex];

    function handleOptionClick(option: string) {
        if (option === question.correctAnswer) {
            const newScore = hasAnsweredWrong ? score : score + 1;
            setHasAnsweredWrong(false);
            setEliminatedOptions([]);
            if (currentIndex < questions.length - 1) {
                setScore(newScore);
                setCurrentIndex(currentIndex + 1);
                alert("Correct!");
                console.log(`Question ${question.id} answered correctly.  New Score: ${newScore}`);
            } else {
                setScore(newScore);
                setQuizComplete(true);
            }
        } else {
            alert("Wrong answer! Try again.");
            setHasAnsweredWrong(true);
            setEliminatedOptions([...eliminatedOptions, option]);
        }
    }

    function handleRestart() {
        console.log("handleRestart was called.");
        setCurrentIndex(0);
        setScore(0);
        setHasAnsweredWrong(false);
        setQuizComplete(false);
        setEliminatedOptions([]);
        setQuizStarted(false);
    }

    if (!quizStarted) {
        
        return (
            <div className="question-card">
                <h2>Welcome to the Quiz!</h2>
                <p>{questions.length} questions. Score resets if you answer wrong.</p>
                <button onClick={() => setQuizStarted(true)}>Start Quiz</button> 
                
            </div>
            
        );
        
    }

    if (quizComplete) {
        return <Results score={score} total={questions.length} onRestart={handleRestart} />;
    }

    return (
        
        <div className="question-card">
            
            <h3>Question {question.id}</h3>
            <h3>Score: {score}</h3>
            <h2>{question.prompt}</h2>
            <ul>
                {question.options
                    .filter((option) => !eliminatedOptions.includes(option))
                    .map((option) => (
                        <button className="option-button" key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                            
                        </button>
                    ))}
            </ul>
        </div>
    );
}

export default QuestionCard;