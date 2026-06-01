
interface QuestionCardProps {
    prompt: string;
    options: string[];
    correctAnswer: string;
    pickedAnswer: string | null;
    onAnswer: (answer: string) => void;
}

function QuestionCard({ prompt, options, correctAnswer, pickedAnswer, onAnswer }: QuestionCardProps) {

    const getColor = (pickedAnswer: string | null, correctAnswer: string) => {
        if (!pickedAnswer){
            return "option-button";
        }
        else if (pickedAnswer === correctAnswer){
            return "correct-option-button";
        }
        else {
            return "incorrect-option-button";
        }
    }

    return (
        <div className="question-card">
            <h2 className="prompt">
                {prompt}
            </h2>
            <div className="options">
                {options.map((option: string, index: number) => (
                    <button 
                    onClick={() => {
                        onAnswer(option);
                    }} key={index} className={option === pickedAnswer ? getColor(pickedAnswer, correctAnswer) : "option-button"}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;