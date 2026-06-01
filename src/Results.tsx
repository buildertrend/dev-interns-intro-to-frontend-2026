import "./App.css";

interface ResultsProps {
    score: number;
    numQuestions: number;
    onRestart: () => void;
}

function Results ({score, numQuestions, onRestart}: ResultsProps) {

    return (
        <div className="results">
            <p className="score">
                You scored: {score}/{numQuestions}
            </p>
            <button onClick={onRestart} className="restart-button">
                Click Here to Restart!
            </button>
        </div>
    )

} 

export default Results;