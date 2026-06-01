import type {QuestionCardProps} from './props'

function PromptBox(props: QuestionCardProps){
    const currentQuestion = props.q[props.index];
    const currentPrompt = currentQuestion.prompt;
    return(
    <>
        <p>{currentPrompt}</p>
    </>
    );
}
export default PromptBox;