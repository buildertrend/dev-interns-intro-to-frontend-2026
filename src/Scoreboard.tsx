
interface ScoreboardProps {
    correctAnswers: number;
    runningTotalQuestions: number;
} 
function Scoreboard(props: ScoreboardProps) {
    return (
        <p className="score">Your score is {props.correctAnswers} out of {props.runningTotalQuestions}</p>
    );
}

export default Scoreboard; 
