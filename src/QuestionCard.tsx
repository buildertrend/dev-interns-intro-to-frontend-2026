import PromptBox from './PromptBox';
import AnswerBox from './AnswerBox';
import type {QuestionCardProps} from './props'

function QuestionCard(props: QuestionCardProps){
    
    return(
        <>
        <PromptBox{...props}/>
        <AnswerBox{...props}/>
        </>
    );
}
export default QuestionCard;