const QuizItem = ({ option, answer, onChange, checked }) => {
  return (
    <div className="form-check mb-3">
      <label className="form-check-label">
        {answer}
        <input
          className="form-check-input"
          type="radio"
          value={option}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default QuizItem;
