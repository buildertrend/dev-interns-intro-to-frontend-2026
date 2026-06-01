# Quiz App Lab — Handout (Parts 1–5)

Build a multiple-choice quiz, one small step at a time. Each part ends at a
**checkpoint** — run the app (`pnpm dev`) and confirm you can *see* it working
before moving on.

> This handout gives you the **goal** for each part, not step-by-step
> instructions. We'll work through the *how* together in class — use these as
> your targets and checklist.

## 🎨 Styling: which `className`s to use

The styling is already written for you in `src/App.css` — **you don't need to
write any CSS.** The styles only apply if you put the right `className` on the
right element. (Remember: in TSX it's `className=`, not `class=`.)

| Component | Element | `className` |
|-----------|---------|-------------|
| **App** | the outer `<main>` wrapper | `quiz` |
| **App** | the "Question X of N" line `<p>` | `progress` |
| **QuestionCard** | the outer `<div>` wrapper | `question-card` |
| **QuestionCard** | the question prompt `<h2>` | `prompt` |
| **QuestionCard** | the `<div>` wrapping the answer buttons | `options` |
| **QuestionCard** | each answer `<button>` | `option-button` |
| **Results** | the outer `<div>` wrapper | `results` |
| **Results** | the "You scored…" `<p>` | `score` |
| **Results** | the "Play again" `<button>` | `restart-button` |

---

## Part 1 — A static question card

**Concept:** TSX & components.

**Goal:** Build a `QuestionCard` component that displays one hardcoded question —
a prompt and four answer buttons — and render it inside `App`.

✅ **Checkpoint:** `[ ]` I can see a question and four answer buttons on screen.

---

## Part 2 — Drive the card with props

**Concept:** props, lists, and `key`.

**Goal:** Give `QuestionCard` a `question` prop so nothing is hardcoded inside it
anymore. Render the answer buttons from the question's options. In `App`, pass in
a question from the provided `questions` data.

✅ **Checkpoint:** `[ ]` The card is driven entirely by props — passing a
different question shows different content.

---

## Part 3 — Move through the questions

**Concept:** state with `useState`.

**Goal:** Keep track of which question is currently showing, and add a way to
advance to the next one.

✅ **Checkpoint:** `[ ]` I can move forward through the questions one at a time.

---

## Part 4 — Answer questions and track a score

**Concept:** events flowing *up* + more state.

**Goal:** When an answer is clicked, the card reports the choice up to `App`,
which checks whether it was correct, updates a score, and moves to the next
question.

✅ **Checkpoint:** `[ ]` Clicking the correct answer increases the score, and the
quiz advances on every answer.

---

## Part 5 — Show the results

**Concept:** conditional rendering + resetting state.

**Goal:** After the last question, show a `Results` component with the final score
and a "Play again" button that restarts the quiz.

✅ **Checkpoint:** `[ ]` I can play the whole quiz start to finish, see my score,
and restart. 🎉

---

## 🌟 Stretch goals (for fast finishers)

No new concepts — just more practice with props, state, and events:

1. Show the live score during the quiz.
2. Highlight the picked answer green (correct) or red (wrong).
3. Disable the answer buttons after one is chosen.
4. Add your own questions to `src/data/questions.ts`.
5. Extract a `ScoreBoard` component.

---

## What's next

In the next session we'll extend this same app to learn **`useEffect`**, then
**`useMemo`** and **`useCallback`**. Keep your finished quiz handy!
