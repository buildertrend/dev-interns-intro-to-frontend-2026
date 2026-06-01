import type {QuestionCardProps} from './props'

function PromptBox(props: QuestionCardProps){
    const currentQuestion = props.q[props.index];
    const currentPrompt = currentQuestion.prompt;
    return(
    <>
        <h3 className='prompt'>{currentPrompt}</h3>
    </>
    );
}
export default PromptBox;