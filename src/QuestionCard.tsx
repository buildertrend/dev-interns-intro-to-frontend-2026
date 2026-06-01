import type { Question } from "./types";

interface QuestionCardProps {
    question: Question; 
    handleNextQuestion: (selectedOption: string) => void; 
} 
function QuestionCard(props: QuestionCardProps) { 

    return (
        <div className="question-card">
            <h2 className="prompt">{props.question.prompt}</h2>

            <div className="options">
                {props.question.options.map(option => (
                    <button className="option-button" onClick={() => props.handleNextQuestion(option)}>{option}</button>
                ))}
            </div>

        </div>
        
        
    ); 
} 

export default QuestionCard;