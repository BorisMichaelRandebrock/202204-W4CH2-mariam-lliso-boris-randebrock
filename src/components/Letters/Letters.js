import "./Letters.css";

const Letters = ({ accion }) => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <ul className="letters">
      {letters.map((letter) => (
        <li className="letter" key={letter}>
          <a href={letter.toLowerCase()} onClick={accion}>
            {letter}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
