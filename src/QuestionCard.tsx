interface QuestionCardProps {
    prompt: string;
    options: Array<string>;
    currentQuestion: number;
    correctAnswer: string;
    currentScore: number;
    handleClick: (option: string) => void;
}

function QuestionCard(question: QuestionCardProps){
    return (
        <div className = "question-card">
            <p className = "prompt">{question.prompt}</p>
            <p className = "progress">Current Question: {question.currentQuestion + 1}</p>
            <p className = "score">Current Score: {question.currentScore}</p>
            <div className = "options">
                {question.options.map((opt) => <button className = "option-button" onClick = {() => question.handleClick(opt)}>{opt}</button>)}
            </div>
        </div>
    );
}
export default QuestionCard