import "./App.css"
export interface ResultsProps{
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results = ({ score, totalQuestions, onRestart }: ResultsProps) => {
  return (
    <div data-testid="results">
      <p data-testid="score">
        You scored {score} out of {totalQuestions}!
      </p>
      <button data-testid="restart-button" onClick={onRestart}>
        Play again
      </button>
    </div>
  );
};

export default Results;