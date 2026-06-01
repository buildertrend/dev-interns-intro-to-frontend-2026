type QuestionCardProps = {
    question : string
    answers : string[]
    onAnswerSelection? : (answer: string) => void;
}

function QuestionCard (props: QuestionCardProps) {
    return (
        
        <div className = "question-card">
            <h2 className = "prompt">{props.question}</h2>
        <div className = "options">
            
        {props.answers.map((answer, index) => (
            <button
                key={index}
                className="option-button"
                onClick={() => props.onAnswerSelection?.(answer)}
            >
                {answer}
            </button>
        ))}
        </div>
        </div>
    );
}

export default QuestionCard;