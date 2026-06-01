import type { QuestionCardProps } from "./props";

function EndQuiz(props: QuestionCardProps){
    return(
        <div className="results">
    <p className="score">Quiz Done with {props.score} correct out of 4</p>
    <button className="restart-button" onClick={props.handleResetQuiz}>Reset Quiz</button>
        </div>
);
}
export default EndQuiz;