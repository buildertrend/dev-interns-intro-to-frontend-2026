import './App.css';
import QuestionCard from './QuestionCard';


// 👋 Welcome to the Quiz App lab!
//
// This is your starting point. Open HANDOUT.md and work through Part 1 → Part 5.
// Two things are already done for you:
//   • src/types.ts          – the `Question` type
//   • src/data/questions.ts – an array of `Question`s to power your quiz
//
// You will build everything else. Replace the placeholder below as you go.

function App() {
  return (
    
    <main className="quiz">
      <h1>Buildertrend Quiz App</h1>
      {/* <p className="progress">Open HANDOUT.md and start with Part 1. 🚀</p> */}
      <QuestionCard/>
    </main>
    
    
  );
}

export default App;
