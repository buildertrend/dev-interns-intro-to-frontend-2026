interface ResultsProps {
    score:number;
    onClick: () => void;
}

function Results(props:ResultsProps ) {
    return (
        <div className="results">
            <p className="score">
                You scored {props.score} out of 5.
            </p>
            <button onClick={props.onClick} className="restart-button">
                Start Again?
            </button>
        </div>
    )
}

export default Results;