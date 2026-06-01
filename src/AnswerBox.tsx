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
    <div className='options'>
        {currentOptions.map(o =>(<button className='option-button'
        key={o}
         onClick={()=>HandleAnswer(o)}>
            {o}
            </button>))}
        </div>
    );
}
export default AnswerBox;