import type { Question } from '../types';

// Starter trivia data. (Given to you — feel free to add your own questions later!)
export const questions: Question[] = [
  {
    id: 1,
    prompt: 'Which keyword declares a variable that cannot be reassigned in TypeScript?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswer: 'const',
  },
  {
    id: 2,
    prompt: 'What does JSX let you write inside your JavaScript/TypeScript?',
    options: ['SQL queries', 'HTML-like markup', 'CSS rules', 'Shell commands'],
    correctAnswer: 'HTML-like markup',
  },
  {
    id: 3,
    prompt: 'Which React hook lets a component remember a value between renders?',
    options: ['useState', 'useFetch', 'useRemember', 'useVariable'],
    correctAnswer: 'useState',
  },
  {
    id: 4,
    prompt: 'How does a parent component pass data down to a child component?',
    options: ['Through props', 'Through cookies', 'Through the URL', 'Through CSS'],
    correctAnswer: 'Through props',
  },
  {
    id: 5,
    prompt: 'When you render a list with .map(), what special prop should each item have?',
    options: ['id', 'index', 'key', 'name'],
    correctAnswer: 'key',
    },
    {
        id: 6,
        prompt: 'What operator represents strict equality in React?',
        options: ['=', '==', '===', '<>'],
        correctAnswer: '===',
    }
];
