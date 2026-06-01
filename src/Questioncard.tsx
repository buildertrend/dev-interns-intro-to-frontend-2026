import {useState} from "react";
import {questions} from "./data/questions.ts"
import type { Question } from "./types.ts";


export interface QuestionCardProps{
   prompt: string;
   options: string [];
   handleAnswer: (option :string ) => void;
  
}

function QuestionCard ({options, prompt, handleAnswer}: QuestionCardProps){
    return (
       <div className="question-card">
           <h2 className ="prompt">
            {prompt}
           </h2>
           <div className="options">
            <>
            {options.map(option =>

            (
                <button className="option-button" 
                    onClick={() => handleAnswer(option)}>
                  {option}
                </button>
            ))
          
            }
             </>
           </div>
       </div>
           
          
       )
}

export default QuestionCard;
