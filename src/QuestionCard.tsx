import type { Question } from './types';

interface QuestionCardProps {
  question: Question;
  onAnswerClick: (answer: string) => void;
}

function QuestionCard({ question, onAnswerClick }: QuestionCardProps) {
  return (
    <section className="question-card">
      <h2 className="prompt">{question.prompt}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button 
          key={index}
          className="option-button"
          onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;


