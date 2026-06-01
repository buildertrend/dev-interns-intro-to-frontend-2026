import type { Question } from "./types";

interface QuestionCardProps {
    question: Question;
    onAnswer: (selectedOption: string) => void;


}



function QuestionCard(props: QuestionCardProps) {
   

  return (
    <div className="question-card">
      <h2 className="prompt">{props.question.prompt}</h2>

      <div className="options">
        {props.question.options.map((options) => (
          <button key={options} className="option-button"
            onClick={() => props.onAnswer(options)}>
            {options}
          </button>
          
        ))}
      </div>
    </div>
  );
}



export default QuestionCard;