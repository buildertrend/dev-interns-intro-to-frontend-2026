interface resultProp{
    score: number;
    topScore: string;
}

function Results(props: resultProp){
    const results = "results"
    return(
        <div className="results">
            <h2>{results} </h2>
            <p>Your score is {props.score} Top score is: {props.topScore}</p>
            <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div> 
    );
}
export default Results