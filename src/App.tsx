import './App.css';
import {questions} from "./data/questions.ts"
import {useState, useEffect} from "react";
import QuestionCard from './Questioncard.tsx';
import QuestionCardProps from './Questioncard.tsx';
import Results from "./results.tsx"


// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  const [questionid, setquestionid] =useState(0);
  const currentquestion=questions[questionid];
  const [score,setscore]=useState(0);
  const [gameOver, setGameOver] = useState(false);
   
  useEffect(() => {
    if (questionid===0) {
       alert('Quiz started!');;
    }
  }, [questionid]);

  useEffect(() => {
  document.title = `Question ${questionid + 1} of ${questions.length}`;
}, [questionid]);


  const handleAnswer=(optionselected:string)=>{

    if (optionselected===currentquestion.correctAnswer){
      setscore((score)=>score+1)
    }
      const nextId = questionid + 1;
    if (nextId >= questions.length) {
      setGameOver(true);
    } else {
      setquestionid(nextId);
    }
    
  }



  
   const handleRestart = () => {
       setquestionid(0);
       setscore(0);
       setGameOver(false);
    };
  

  
  return (
  <main>
    
   <div>
        {gameOver ? (
          
      <Results
        score={score}
        totalQuestions={questions.length}
        onRestart={handleRestart}
      />

    ) :
    (
        <QuestionCard
          prompt={currentquestion.prompt}
          options={currentquestion.options}
          handleAnswer={handleAnswer}
         
        />
    )
  }
    </div>
    </main>
  )
    
}

export default App;
