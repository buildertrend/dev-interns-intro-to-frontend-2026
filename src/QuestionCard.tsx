interface QuestionCardProps {
  prompt: string,
  options: string[],
  onAnswer: (answer: string) => void,
}

function QuestionCard({ prompt, options, onAnswer }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2 className="prompt">{prompt}</h2>
      <ul className="options">
        {options.map((opt) => <li className="option" key={opt}><button className="option-button" onClick={() => onAnswer(opt)}>{opt}</button></li>)}
      </ul>
    </div>
  )
}

export default QuestionCard;
