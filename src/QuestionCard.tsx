interface QuestionCardProps {
  prompt: string,
  options: string[],
  timeLeft: number,
  onAnswer: (answer: string) => void,
}

function QuestionCard({ prompt, options, timeLeft, onAnswer }: QuestionCardProps) {

  return (
    <div className="question-card">
      <p>{timeLeft}s remaining</p>
      <h2 className="prompt">{prompt}</h2>
      <div className="options">
        {options.map((opt) => <button className="option-button" onClick={() => onAnswer(opt)}>{opt}</button>)}
      </div>
    </div>
  )
}

export default QuestionCard;
