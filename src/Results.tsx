
interface ResultsProps {
    correctAnswers: number;
    totalQuestions: number;
    handleRestartQuiz: () => void;
} 
function Results(props: ResultsProps) {
    return (
        <div className="results">
            <p className="score">You scored {props.correctAnswers} out of {props.totalQuestions}</p>
            <button className="restart-button" onClick={props.handleRestartQuiz}>Restart Quiz</button>
        </div> 
    );
} 

export default Results;