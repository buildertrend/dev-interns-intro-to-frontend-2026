
type ResultsProps = {
    score : number
    totalQuestions : number
    onRestart : () => void
}

function Results (props: ResultsProps) {
    return (
        <div className="results">
            <p className="score">Your score: {props.score} out of {props.totalQuestions} questions!</p>
            <button className="restart-button" onClick={props.onRestart}>Restart Quiz</button>
        </div>
    );
}
            

export default Results;