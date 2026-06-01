interface ResultsProps {
  wrong: number,
  total: number,
  onRestart: () => void,
}

function Results({ wrong, total, onRestart }: ResultsProps) {
  return (
    <div className="results">
      <p className="score">{total - wrong}/{total}</p>
      <button className="restart-button" onClick={onRestart}>Restart Quiz</button>
    </div>
  )
}

export default Results;
