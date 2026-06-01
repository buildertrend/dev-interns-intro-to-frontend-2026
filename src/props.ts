
import type { Question } from './types';
export interface QuestionCardProps {
    q: Question[],
    index: number,
    handleCorrect: ()=> void,
    handleNextQuestion: ()=> void
}