import PromptBox from './PromptBox';
import AnswerBox from './AnswerBox';
import type {QuestionCardProps} from './props'

function QuestionCard(props: QuestionCardProps){
    
    return(
        <div className = "question-card">
        <PromptBox{...props}/>
        <AnswerBox{...props}/>
        </div>
    );
}
export default QuestionCard;