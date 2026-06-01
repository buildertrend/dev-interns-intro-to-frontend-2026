
interface ResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}



function Results({ score, total, onRestart }: ResultsProps) {
  return (
    <div className="results">
      <h2>Your Score</h2>
      <p>
        {score} / {total}
      </p>

      <button onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default Results;


