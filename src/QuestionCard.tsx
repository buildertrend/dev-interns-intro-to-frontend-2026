interface QuestionCard {
prompt: string;
options: string[];
onButtonClick?(answer: string): void;
isOver?: boolean;
}

function QuestionCard( props: QuestionCard) {
if (props.isOver) {
    return;
}
return (
        <div className="question-card">
            <h2>{props.prompt} </h2>

                <ul>
                {props.options.map((option)=>(
                    <button onClick={() => props.onButtonClick?.(option)}>{option}</button>
                ))}
                </ul>
        </div>
    );
    
}

export default QuestionCard