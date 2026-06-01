
type ScoreboardProps = {
    score : number
    totalQuestions : number
}

function Results (props: ScoreboardProps) {
    return (
        <div className="results">
            <p className="score"> {props.score}/{props.totalQuestions} correct so far... </p>
        </div>
    );
}
            

export default Results;