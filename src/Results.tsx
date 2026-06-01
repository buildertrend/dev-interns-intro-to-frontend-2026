type ResultsProps = {
    score: number;
    total: number;
    onRestart: () => void;
};

function Results({ score, total, onRestart }: ResultsProps) {
    return (
        <div className="results-card">
            <h2>Quiz Complete!</h2>
            <p>You scored {score} out of {total}!</p>
            <button className="restart-button" onClick={onRestart}>
                Play Again
            </button>
        </div>
    );
}

export default Results;