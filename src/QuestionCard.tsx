import type { Question } from "./types"

interface QuestionCardProps {
  prompt: string;
  options: string[];
  handleClick: (answer: string)=>void;
}



function QuestionCard({prompt, options, handleClick}: QuestionCardProps) {
    

    return (
        <div className="question-card">
            <h3 className="prompt">{prompt}</h3>
            <div className="options">
                {options.map(option => (
                    <button key={option} 
                    className="option-button" 
                    onClick={() => handleClick( option )}
                    >
                    { option }
                    </button>
                ))}
            </div>
        </div>
    )
}
export default QuestionCard
