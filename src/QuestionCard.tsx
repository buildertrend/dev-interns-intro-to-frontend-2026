import type { Question } from './types';

interface QuestionCardProps {
  question: Question;
  onAnswerClick: (answer: string) => void;
}

function QuestionCard({ question, onAnswerClick }: QuestionCardProps) {
  return (
    <section className="question-card">
      <h2>{question.prompt}</h2>
      <div className="answers">
        {question.options.map((option, index) => (
          <button 
          key={index}
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


