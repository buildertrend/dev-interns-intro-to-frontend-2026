# Quiz App Lab 🧠

A hands-on lab for our intro **React + TypeScript** class. You'll build a small
multiple-choice quiz app one piece at a time, practicing the four core concepts
we've covered:

1. **TSX & components** – writing UI in code
2. **Props** – passing data from a parent into a child
3. **State** – letting a component change over time
4. **Events** – letting children tell the parent something happened

## Getting started

```bash
pnpm install
pnpm dev
```

Then open the URL it prints (usually http://localhost:5173). The page reloads
automatically as you save files.

> Don't have `pnpm`? Run `npm install -g pnpm`, or substitute `npm` for `pnpm`
> in the commands above.

## How this repo is organized

- **`main` branch** – your starting point. The pieces you need to build are
  described step-by-step in **[HANDOUT.md](./HANDOUT.md)**.

## What's already done for you

You don't have to write trivia questions or set up the project. These files are
provided:

- `src/types.ts` – the `Question` type
- `src/data/questions.ts` – an array of questions to drive the quiz
- `src/App.css` – styling, so you can focus on React instead of CSS

## The plan

| Part | You'll build | Concept |
|------|--------------|---------|
| 1 | A static `QuestionCard` | TSX + components |
| 2 | Drive the card with **props** + `.map()` | Props, lists, keys |
| 3 | Move through questions with a "Next" button | State (`useState`) |
| 4 | Click an answer and track a **score** | Events up / data down |
| 5 | Show a results screen + "Play again" | Conditional rendering |

Work through them in order in **[HANDOUT.md](./HANDOUT.md)**. Have fun!
