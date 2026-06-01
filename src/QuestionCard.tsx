import { useEffect, useState } from "react";
import type { Question } from "./types";

interface QuestionCardProps {
    questions: Question[],
    onSelection: (answer: string, correctAnswer: string) => void;
    needsRestart: () => void;
}

function QuestionCard({ questions,onSelection, needsRestart }: QuestionCardProps) {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        console.log("Question #" + questions[current].id);
    }, [current]);

    const checkQuestion = (choice: string) => {
        onSelection(choice,questions[current].correctAnswer);
        if (current < (questions.length - 1)) {
            setCurrent((prev) => prev += 1)
        } else {
            needsRestart();
        };
    };

    return (
        <>
            <h2 className="prompt">{questions[current].prompt}</h2>
            {questions[current].options.map((option) => (
                <button onClick={() => checkQuestion(option)} className="option-button">{option}</button>
            ))}
        </>
    );

}

export default QuestionCard;