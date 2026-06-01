interface questionCardProps{
    prompt: string,
    options: Array<string>
    clickHandler: (answer: string) => void
}

function QuestionCard({clickHandler, prompt, options}: questionCardProps) {
    return (
        <div className="question-card">
            <h2 className="prompt">
                {prompt}
            </h2>
            <div className="options">
                {options.map((option) =>
                <button onClick={() => clickHandler(option)} className="option-button">{option}</button>
                )}
            </div>
        </div>
    );
}

export default QuestionCard