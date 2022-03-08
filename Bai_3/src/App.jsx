import { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container, Card } from "react-bootstrap";
import QuizForm from "./components/QuizForm";

const quizData = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    id: 4,
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [answerQuiz, setAnswerQuiz] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = () => {
    const correctAnswer = answerQuiz.filter(
      (answer, index) => answer.choose === quizData[index].correct
    );
    return correctAnswer.length;
  };

  const onSubmit = (chooseAnswer) => {
    setAnswerQuiz([...answerQuiz, chooseAnswer]);

    if (currentQuiz < quizData.length - 1) setCurrentQuiz(currentQuiz + 1);
    else setShowResult(true);
  };

  return (
    <Container>
      <div className="d-flex justify-content-center pt-5">
        <Card body className="w-50">
          {!showResult && (
            <QuizForm data={quizData[currentQuiz]} onSubmit={onSubmit} />
          )}
          {showResult && (
            <h3 className="text-center">
              You answered {checkAnswer()}/{quizData.length} questions correctly
            </h3>
          )}
        </Card>
      </div>
    </Container>
  );
}

export default App;
