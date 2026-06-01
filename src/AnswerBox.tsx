import type {QuestionCardProps} from './props'

function AnswerBox(props: QuestionCardProps){
    const currentQuestion = props.q[props.index];

    function HandleAnswer(buttonValue: any){
        if(buttonValue == currentQuestion.correctAnswer){
            props.handleCorrect();
        }
        props.handleNextQuestion();
    }
    const currentOptions = currentQuestion.options;
    return(
    <>
        {currentOptions.map(o =>(<button
         onClick={()=>HandleAnswer(o)}>
            {o}
            </button>))}
        </>
    );
}
export default AnswerBox;