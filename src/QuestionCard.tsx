interface QuestionCardProps {
    prompt: string;
    options: string[];
    correctAnswer: string;
    onClick: (n:string) => void;
}

function QuestionCard(props:QuestionCardProps) {

    return (

        <div className="question-card">
            <h2 className="prompt">{props.prompt}</h2>
            <div className="options">
                {props.options.map( option => (
                   <button onClick={() => props.onClick(option)} className="option-button">  
                    {option}
                    </button> 
                ))}
            </div>
        </div>
        
    );
}

export default QuestionCard;