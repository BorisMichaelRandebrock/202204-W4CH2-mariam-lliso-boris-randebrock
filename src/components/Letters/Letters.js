import "./Letters.css";

const Letters = ({ letters, action }) => {
  return (
    <ul className="letters">
      {letters.map((letter) => (
        <li className="letter" key={letter}>
          <a href={letter.toLowerCase()} onClick={action}>
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
