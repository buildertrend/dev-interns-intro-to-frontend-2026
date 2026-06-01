import './components/OptionsButton';
import type { Question } from './types';

interface QuestionProps {
    question : Question,
    incrementQuestionId : (answer : string) => void,
    className? : string
}

function QuestionCard(props:QuestionProps) {

    const {prompt, options} = props.question; // destructuring

    return (
        <div className={props.className}>
            <h1>{prompt}</h1>

            {options.map((option: string) => (
                <button
                    className="option-button"
                    onClick = {() => props.incrementQuestionId(option)}
                    key = {option}
                    style = {{ margin: '0.4rem'}}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default QuestionCard;
