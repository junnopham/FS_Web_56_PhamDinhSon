import { Fragment, useEffect, useState } from "react";

import QuizItem from "./QuizItem";

const QuizAnswers = ({ answers, onChoose }) => {
  const { a: optionA, b: optionB, c: optionC, d: optionD, correct } = answers;

  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    onChoose(selected);
  }, [selected]);

  return (
    <Fragment>
      <QuizItem
        option="a"
        answer={optionA}
        onChange={handleChange}
        checked={selected === "a"}
      />
      <QuizItem
        option="b"
        answer={optionB}
        onChange={handleChange}
        checked={selected === "b"}
      />
      <QuizItem
        option="c"
        answer={optionC}
        onChange={handleChange}
        checked={selected === "c"}
      />
      <QuizItem
        option="d"
        answer={optionD}
        onChange={handleChange}
        checked={selected === "d"}
      />
    </Fragment>
  );
};

export default QuizAnswers;
