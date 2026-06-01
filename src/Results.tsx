interface ResultsProps {
    score: number;
    handleClick: () => void;
}

function Results(result: ResultsProps){
    return (
        <div className = "results">
            <div className = "score">
                Your score was {result.score}
            </div>
            <button 
                className = "restart-button"
                onClick = {result.handleClick}
            >Restart</button>
        </div>
    );
}
export default Results;