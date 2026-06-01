import type { Question } from '../types';

function Buttons({ question , onClick} : { question: Question, onClick: (answer: string) => void }) {

  return (
    <div className="options">
      {question.options.map((options) => (
        <button
          key={options}
          className="option-button"
          onClick={() => onClick(options)}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

function QuestionCard({ question, onClick } : { question: Question, onClick: (answer: string) => void }) {
  return (
    <div className="question-card">
      <p className="prompt">{question.prompt}</p>
      <Buttons question={question} onClick={onClick} />
    </div>
  );
}

export default QuestionCard; 