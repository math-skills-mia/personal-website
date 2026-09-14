import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

const featuredGames = [
  {
    title: "Hangman",
    category: "Word Game",
    description:
      "A clean take on the classic guessing game, built around simple interaction and responsive UI.",
    tech: ["React", "TypeScript"],
    link: "/games/hangman",
    accent: "gold",
  },
  {
    title: "Game Two",
    category: "Coming Soon",
    description:
      "A placeholder for another featured game you can rotate into this space later.",
    tech: ["React"],
    link: "#",
    accent: "rose",
  },
  {
    title: "Game Three",
    category: "Coming Soon",
    description:
      "Another future game slot, already wired into the featured carousel structure.",
    tech: ["TypeScript"],
    link: "#",
    accent: "sage",
  },
];

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
      <div
        className={`featured-game__visual featured-game__visual--${activeGame.accent}`}
      >
        <div className="featured-game__visual-inner">
          <span className="featured-game__visual-label">
            {activeGame.category}
          </span>

          <div className="featured-game__mockup">
            <span className="featured-game__mockup-word">_ A _ G _ A N</span>
            <span className="featured-game__mockup-note">
              Interactive preview coming later
            </span>
          </div>
        </div>
      </div>

      <div className="featured-game__content">
        <div>
          <p className="section-label">Featured Game</p>

          <h2 className="featured-game__title">{activeGame.title}</h2>

          <p className="featured-game__description">{activeGame.description}</p>

          <div className="featured-game__tech">
            {activeGame.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="featured-game__bottom">
          <a className="featured-game__play" href={activeGame.link}>
            Play game
            <FiExternalLink aria-hidden="true" />
          </a>

          <div className="featured-game__controls">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous featured game"
            >
              <FiArrowLeft />
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
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGame;
