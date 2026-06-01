# Quiz App Lab — Handout (Parts 1–5)

Build a multiple-choice quiz, one small step at a time. Each part ends at a
**checkpoint** — a point where you can run the app (`pnpm dev`) and *see* something
working before moving on.

**How to use this handout:**
- Try each step yourself first using the **Instructions** and **Hints**.
- Stuck? Expand the **Solution** to compare.
- After each part, check the box and run the app to hit the checkpoint.

A golden rule you'll see throughout:

> **Data flows _down_ through props. Events flow _up_ through callbacks.**

---

## Part 1 — A static question card

**Concept:** TSX & components. **Goal:** put one hardcoded question on the screen.

### Instructions
1. Create a new file `src/components/QuestionCard.tsx`.
2. Write a function component called `QuestionCard` that returns some TSX:
   a prompt (in an `<h2 className="prompt">`) and four answer `<button>`s.
3. Hardcode the text for now — don't worry about props or data yet.
4. In `src/App.tsx`, import `QuestionCard` and render it inside `<main className="quiz">`.

### Hints
- A React component is just a function that returns TSX.
- Export it with `export default function QuestionCard() { ... }` (or
  `export default QuestionCard`).
- Give your answer buttons `type="button"` and `className="option-button"`, and
  wrap them in `<div className="options">` so the provided CSS styles them.

<details>
<summary>💡 Solution — Part 1</summary>

`src/components/QuestionCard.tsx`
```tsx
function QuestionCard() {
  return (
    <div className="question-card">
      <h2 className="prompt">What does JSX let you write inside your code?</h2>
      <div className="options">
        <button type="button" className="option-button">SQL queries</button>
        <button type="button" className="option-button">HTML-like markup</button>
        <button type="button" className="option-button">CSS rules</button>
        <button type="button" className="option-button">Shell commands</button>
      </div>
    </div>
  );
}

export default QuestionCard;
```

`src/App.tsx`
```tsx
import QuestionCard from './components/QuestionCard';
import './App.css';

function App() {
  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <QuestionCard />
    </main>
  );
}

export default App;
```
</details>

✅ **Checkpoint:** `[ ]` I can see a question and four answer buttons on screen.

---

## Part 2 — Drive the card with props

**Concept:** props, lists, and `key`. **Goal:** the card shows whatever question
you give it — nothing is hardcoded inside it anymore.

### Instructions
1. In `QuestionCard.tsx`, give the component a **prop** called `question` of type
   `Question` (import the type from `../types`).
2. Use `question.prompt` for the heading.
3. Replace the four hardcoded buttons with `question.options.map(...)` so the
   buttons come from the data. Give each button a `key`.
4. In `App.tsx`, import the `questions` array from `./data/questions` and pass the
   first one in: `<QuestionCard question={questions[0]} />`.

### Hints
- Type your props with a `type`:
  ```ts
  type QuestionCardProps = {
    question: Question;
  };
  function QuestionCard({ question }: QuestionCardProps) { ... }
  ```
- `.map()` turns an array of strings into an array of `<button>` elements.
- `key` should be something stable and unique per item — the option text works
  here since options are unique within a question.

<details>
<summary>💡 Solution — Part 2</summary>

`src/components/QuestionCard.tsx`
```tsx
import type { Question } from '../types';

type QuestionCardProps = {
  question: Question;
};

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2 className="prompt">{question.prompt}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} type="button" className="option-button">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
```

`src/App.tsx`
```tsx
import QuestionCard from './components/QuestionCard';
import { questions } from './data/questions';
import './App.css';

function App() {
  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <QuestionCard question={questions[0]} />
    </main>
  );
}

export default App;
```
</details>

✅ **Checkpoint:** `[ ]` The card is driven entirely by props. Change
`questions[0]` to `questions[1]` and a different question appears.

---

## Part 3 — Move through the questions

**Concept:** state with `useState`. **Goal:** a "Next" button advances to the
next question.

### Instructions
1. In `App.tsx`, add state for which question is showing:
   `const [currentIndex, setCurrentIndex] = useState(0);` (import `useState` from
   `react`).
2. Pass `questions[currentIndex]` into `<QuestionCard />` instead of `questions[0]`.
3. Add a "Next" button **in `App`** (not in the card) that calls
   `setCurrentIndex(currentIndex + 1)` when clicked.

### Hints
- State is what lets a component *change over time*. When you call the setter,
  React re-renders the component with the new value.
- Add `<p className="progress">Question {currentIndex + 1} of {questions.length}</p>`
  to see your progress. Notice we **calculate** this from state — we don't store
  it separately.
- Don't worry yet about running past the last question; we fix that in Part 5.

<details>
<summary>💡 Solution — Part 3</summary>

`src/App.tsx`
```tsx
import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <p className="progress">
        Question {currentIndex + 1} of {questions.length}
      </p>
      <QuestionCard question={questions[currentIndex]} />
      <button
        type="button"
        className="restart-button"
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        Next
      </button>
    </main>
  );
}

export default App;
```
</details>

✅ **Checkpoint:** `[ ]` Clicking "Next" moves through the questions. (This is your
first taste of **state → re-render**!)

---

## Part 4 — Answer questions and track a score

**Concept:** events flowing *up* + more state. **Goal:** clicking an answer
records whether it was right and moves to the next question automatically.

### Instructions
1. In `QuestionCard.tsx`, add a second prop: `onAnswer: (selectedOption: string) => void`.
2. Make each answer button call `onAnswer(option)` in its `onClick`.
3. In `App.tsx`, add score state: `const [score, setScore] = useState(0);`.
4. Write a `handleAnswer(selectedOption: string)` function in `App` that:
   - increments `score` if `selectedOption` matches the current question's
     `correctAnswer`, and
   - advances `currentIndex`.
5. Pass it down: `<QuestionCard question={...} onAnswer={handleAnswer} />`. You can
   remove the separate "Next" button now — answering advances automatically.

### Hints
- This is the **"events flow up"** half of the golden rule: the child (`QuestionCard`)
  doesn't know about scoring. It just reports *"the user picked this option"* by
  calling the `onAnswer` callback the parent gave it. The parent decides what that
  means.
- When new state depends on the old state, use the function form of the setter so
  you always work from the latest value:
  `setScore((prev) => prev + 1)`.

<details>
<summary>💡 Solution — Part 4</summary>

`src/components/QuestionCard.tsx`
```tsx
import type { Question } from '../types';

type QuestionCardProps = {
  question: Question;
  onAnswer: (selectedOption: string) => void;
};

function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2 className="prompt">{question.prompt}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            type="button"
            className="option-button"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
```

`src/App.tsx`
```tsx
import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  function handleAnswer(selectedOption: string) {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  }

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      <p className="progress">
        Question {currentIndex + 1} of {questions.length}
      </p>
      <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
    </main>
  );
}

export default App;
```
</details>

✅ **Checkpoint:** `[ ]` Clicking the correct answer increases your score (peek at
it with React DevTools, or temporarily render `<p>Score: {score}</p>`). The quiz
advances on every answer. (You'll hit an error after the last question — that's
Part 5.)

---

## Part 5 — Show the results

**Concept:** conditional rendering + resetting state. **Goal:** after the last
question, show a results screen with the score and a "Play again" button.

### Instructions
1. Create `src/components/Results.tsx`. It takes three props: `score: number`,
   `total: number`, and `onRestart: () => void`. It shows the score and a button
   that calls `onRestart`.
2. In `App.tsx`, figure out when the quiz is finished:
   `const isFinished = currentIndex >= questions.length;`.
3. **Conditionally render**: if `isFinished`, show `<Results />`; otherwise show
   the progress line + `<QuestionCard />`.
4. Write a `handleRestart` function that resets both `currentIndex` and `score`
   back to `0`, and pass it to `Results` as `onRestart`.

### Hints
- "Conditional rendering" just means using a JavaScript `if` or a ternary (`? :`)
  to decide what TSX to return.
- A common pattern: `{isFinished ? <Results ... /> : <>...</>}`. The `<>...</>` is
  a **Fragment** — it lets you group elements without an extra wrapper `<div>`.
- Resetting state is just calling the setters with their starting values.

<details>
<summary>💡 Solution — Part 5</summary>

`src/components/Results.tsx`
```tsx
type ResultsProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

function Results({ score, total, onRestart }: ResultsProps) {
  return (
    <div className="results">
      <h2>Quiz complete! 🎉</h2>
      <p className="score">
        You scored {score} out of {total}.
      </p>
      <button type="button" className="restart-button" onClick={onRestart}>
        Play again
      </button>
    </div>
  );
}

export default Results;
```

`src/App.tsx`
```tsx
import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const isFinished = currentIndex >= questions.length;
  const currentQuestion = questions[currentIndex];

  function handleAnswer(selectedOption: string) {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setScore(0);
  }

  return (
    <main className="quiz">
      <h1>Quiz App</h1>
      {isFinished ? (
        <Results
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        <>
          <p className="progress">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
        </>
      )}
    </main>
  );
}

export default App;
```
</details>

✅ **Checkpoint:** `[ ]` You can play the whole quiz start to finish, see your
score, and restart. 🎉 **You've built a complete React app using TSX, components,
props, state, and events!**

---

## 🌟 Stretch goals (for fast finishers)

Already done? Try these — no new concepts required, just more practice:

1. **Show the live score** during the quiz (e.g. "Score: 2").
2. **Highlight the answer** the user picked as green (correct) or red (wrong) for a
   moment before advancing. *(Hint: this one needs a little more state.)*
3. **Disable the buttons** after an answer is picked so you can't double-count.
4. **Add your own questions** to `src/data/questions.ts`.
5. **Extract a `<ScoreBoard />` component** that shows `score` and `total`.

---

## What's next

In the next session we'll extend this same app to learn **`useEffect`**
(a per-question timer + loading questions from a real API), then **`useMemo`** and
**`useCallback`** as optimizations. Keep your finished quiz handy!
