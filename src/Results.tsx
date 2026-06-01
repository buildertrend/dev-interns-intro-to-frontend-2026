interface ResultsProps {
    score: number
    restart: () => void
}

function Results({score, restart}: ResultsProps) {

    const restartGame = () => {
        restart();
    }

    return (
        <>
          <h3 className="score">Final Score: {score}</h3>
          <button className="restart-button" onClick={restartGame}>Play Again</button>
        </>
    );
}

export default Results;