import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import HangmanDrawing from "../../../games/hangman/components/HangmanDrawing";

const featuredGames = [
  {
    title: "Hangman",
    category: "Word Game",
    tech: ["React", "TypeScript"],
    link: ROUTES.hangman,
    accent: "gold",
    available: true,
  },
  {
    title: "Game Two",
    category: "Coming Soon",
    tech: ["React"],
    link: "#",
    accent: "rose",
    available: false,
  },
  {
    title: "Game Three",
    category: "Coming Soon",
    tech: ["TypeScript"],
    link: "#",
    accent: "sage",
    available: false,
  },
];

function GameVisual({
  game,
  isActive,
}: {
  game: (typeof featuredGames)[number];
  isActive: boolean;
}) {
  const visual = (
    <div
      className={`featured-game__visual featured-game__visual--${game.accent} ${
        isActive ? "featured-game__visual--active" : ""
      }`}
    >
      <div className="featured-game__visual-inner">
        <span className="featured-game__visual-label">{game.category}</span>

        {game.title === "Hangman" ? (
          <div className="featured-game__hangman">
            <HangmanDrawing
              numberOfIncorrectGuesses={6}
              className="featured-game__hangman-drawing"
            />

            <span className="featured-game__word">HANGMAN</span>
          </div>
        ) : (
          <div className="featured-game__coming-soon">Coming Soon</div>
        )}
      </div>
    </div>
  );

  return game.available ? (
    <Link
      className="featured-game__visual-link"
      to={game.link}
      aria-label={`Play ${game.title}`}
    >
      {visual}
    </Link>
  ) : (
    <div className="featured-game__visual-link">{visual}</div>
  );
}

function FeaturedGame() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGame = featuredGames[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredGames.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === featuredGames.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="featured-game">
      <div className="featured-game__viewport">
        <div
          className="featured-game__track"
          style={{
            transform: `translateX(
              calc(
                5% - ${activeIndex} * (90% + var(--card-gap))
              )
            )`,
          }}
        >
          {featuredGames.map((game, index) => (
            <GameVisual
              key={game.title}
              game={game}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <div className="featured-game__content">
        <div className="featured-game__info">
          <p className="section-label">Featured Game</p>

          {activeGame.available ? (
            <Link className="featured-game__title-link" to={activeGame.link}>
              <h2 className="featured-game__title">{activeGame.title}</h2>
            </Link>
          ) : (
            <h2 className="featured-game__title">{activeGame.title}</h2>
          )}

          <div className="featured-game__tech">
            {activeGame.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="featured-game__controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous featured game"
          >
            <FiArrowLeft aria-hidden="true" />
          </button>

          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(featuredGames.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next featured game"
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;
