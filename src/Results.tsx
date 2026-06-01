interface ResultsProps {
    correctAnswers: number;
    totalQuestions: number;
    handleRestartQuiz: () => void;
} 
function Results(props: ResultsProps) {
    return (
        <div className="results">
            <button className="restart-button" onClick={props.handleRestartQuiz}>Restart Quiz</button>
        </div> 
    );
} 

export default Results;