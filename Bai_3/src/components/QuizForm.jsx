import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

import QuizQuestion from "./QuizQuestion";
import QuizAnswers from "./QuizAnswers";

const QuizForm = ({ data, onSubmit }) => {
  const { id, question, ...answers } = data;

  const [choose, setChoose] = useState(null);

  const handleChoose = (choose) => {
    setChoose(choose);
  };

  const handleClick = () => {
    if (choose)
      onSubmit({
        id,
        choose,
      });
    else alert("Please choose answer!");
  };

  return (
    <Fragment>
      <QuizQuestion question={question} />

      <QuizAnswers answers={answers} onChoose={handleChoose} />

      <Button variant="primary" onClick={handleClick}>
        Submit
      </Button>
    </Fragment>
  );
};

export default QuizForm;
