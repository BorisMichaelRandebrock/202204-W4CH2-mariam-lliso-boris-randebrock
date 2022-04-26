import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import letters from "./data/letters";

function App() {
  const initialAlreadyUsedLetters = [];
  const [alreadyUsedLetters, setAlreadyUsedLetters] = useState(
    initialAlreadyUsedLetters
  );

  const addLetter = (clickEvent) => {
    clickEvent.preventDefault();
    const selectedLetter = clickEvent.target.textContent;
    const isAlreadyUsed = alreadyUsedLetters.some(
      (letter) => letter === selectedLetter
    );
    if (!isAlreadyUsed) {
      setAlreadyUsedLetters([...alreadyUsedLetters, selectedLetter]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters alreadyUsedLetters={alreadyUsedLetters} />
          <Hangman />
        </div>
        <GuessLetters />
        <Result />
        <Letters letters={letters} action={addLetter} />
      </div>
    </>
  );
}

export default App;
