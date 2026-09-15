import PlusGrid from "./PlusGrid";

function Hero() {
  return (
    <section className="hero surface-card" aria-labelledby="homepage-title">
      <div className="hero__content">
        <p className="section-label">Personal Website</p>

        <h1 className="hero__title" id="homepage-title">
          The Workshop
        </h1>

        <p className="hero__name">Mia Striebeck</p>

        <div className="hero__meta" aria-label="Website sections">
          <span>Mathematics</span>
          <span aria-hidden="true">/</span>
          <span>Code</span>
          <span aria-hidden="true">/</span>
          <span>Games</span>
          <span aria-hidden="true">/</span>
          <span>Experiments</span>
        </div>
      </div>

      <div className="hero__pattern" aria-hidden="true">
        <PlusGrid columns={14} rows={13} />
      </div>
    </section>
  );
}

export default Hero;
