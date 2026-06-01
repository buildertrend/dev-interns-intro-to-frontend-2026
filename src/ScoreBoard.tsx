
interface ScoreBoardProps {
    score: number;
    currentQuestion: number;
    handleReset: () => void;
}

function ScoreBoard({ score, currentQuestion, handleReset  }: ScoreBoardProps) {
    return (
        <div>
            <h1>Score: {score}/{currentQuestion}</h1>
            <button className="restart-button" onClick={handleReset}>Restart Quiz</button>
        </div>)
}

export default ScoreBoard