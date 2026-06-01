import type { Question } from "../types.ts";
import { useEffect, useState } from "react";

export function useQuiz(questions: Question[]) {
  const handleQuestionAnswer = (answer: string) => {
    if (answer != questions[id].correctAnswer) {
      setWrong(wrong + 1);
    }
    setId(id + 1);
    setTimeLeft(10);
  }

  const handleRestart = () => {
    setWrong(0);
    setId(0)
  }


  const [timeLeft, setTimeLeft] = useState(10);
  useEffect(() => {
    if (timeLeft <= 0 && questions[id] != null) {
      setWrong(wrong + 1);
      setId(id + 1);
      setTimeLeft(10);
      return
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const [id, setId] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    document.title = questions[id]?.prompt ?? "Quiz";
  }, [id])

  useEffect(() => { alert("Quiz started!") }, [])

  useEffect(() => {
    if (questions[id] == null && (Number(localStorage.getItem("high") ?? "0") < ((id - wrong) / id))) {
      localStorage.setItem("high", ((id - wrong) / id).toString())
    }
  }, [id])

  return { id, wrong, timeLeft, handleQuestionAnswer, handleRestart }
}
