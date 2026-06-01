
import type { Question } from './types';
export interface QuestionCardProps {
    q: Question[],
    index: number,
    score: number,
    handleCorrect: ()=> void,
    handleNextQuestion: ()=> void,
    handleResetQuiz: ()=> void
}