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
      <ul className="options">
        {options.map((opt) => <li className="option" key={opt}><button className="option-button" onClick={() => onAnswer(opt)}>{opt}</button></li>)}
      </ul>
    </div>
  )
}

export default QuestionCard;
