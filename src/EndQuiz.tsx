import type { QuestionCardProps } from "./props";

function EndQuiz(props: QuestionCardProps){
    return(
        <div className="results">
    <p className="score">Quiz finished: {props.score} correct out of {props.q.length}</p>
    <button className="restart-button" onClick={props.handleResetQuiz}>Reset Quiz</button>
        </div>
);
}
export default EndQuiz;