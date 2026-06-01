// The shape of a single quiz question.
// You'll use this type throughout the project. (Given to you — don't change it.)
export type Question = {
  id: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
};
