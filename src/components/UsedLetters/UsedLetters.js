import "./UsedLetters.css";

const UsedLetters = ({ alreadyUsedLetters }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {alreadyUsedLetters.map((usedLetter) => (
          <li key={usedLetter} className="used-letter">
            {usedLetter}&nbsp;
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;
