interface Props {
  numberOfIncorrectGuesses: number;
  className?: string;
}

function HangmanDrawing({ numberOfIncorrectGuesses, className = "" }: Props) {
  return (
    <svg
      className={`hangman-drawing ${className}`.trim()}
      viewBox="0 0 320 280"
      role="img"
      aria-label={`Hangman drawing with ${numberOfIncorrectGuesses} incorrect guesses`}
    >
      {/* Gallows */}
      <g className="hangman-drawing__gallows">
        <line x1="28" y1="245" x2="210" y2="245" />
        <line x1="70" y1="245" x2="70" y2="35" />
        <line x1="70" y1="35" x2="180" y2="35" />

        <line x1="72" y1="82" x2="119" y2="35" />

        <line x1="180" y1="35" x2="180" y2="60" />
      </g>

      {/* Person */}
      <g className="hangman-drawing__person">
        {numberOfIncorrectGuesses > 0 && (
          <circle className="hangman-drawing__head" cx="180" cy="82" r="19" />
        )}

        {numberOfIncorrectGuesses > 1 && (
          <line
            className="hangman-drawing__body"
            x1="180"
            y1="103"
            x2="180"
            y2="160"
          />
        )}

        {numberOfIncorrectGuesses > 2 && (
          <line
            className="hangman-drawing__arm"
            x1="180"
            y1="115"
            x2="150"
            y2="148"
          />
        )}

        {numberOfIncorrectGuesses > 3 && (
          <line
            className="hangman-drawing__arm hangman-drawing__arm--right"
            x1="180"
            y1="115"
            x2="210"
            y2="148"
          />
        )}

        {numberOfIncorrectGuesses > 4 && (
          <line
            className="hangman-drawing__leg"
            x1="180"
            y1="160"
            x2="155"
            y2="205"
          />
        )}

        {numberOfIncorrectGuesses > 5 && (
          <line
            className="hangman-drawing__leg"
            x1="180"
            y1="160"
            x2="205"
            y2="205"
          />
        )}
      </g>
    </svg>
  );
}

export default HangmanDrawing;
