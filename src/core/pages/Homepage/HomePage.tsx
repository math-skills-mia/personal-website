import FeaturedGame from "./FeaturedGame";
import Hero from "./Hero";
import QuickTools from "./QuickTools";
import Profile from "./Profile";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <Hero />

        <div className="home-page__content">
          <QuickTools />
          <FeaturedGame />
        </div>
      </div>

      <Profile />
    </>
  );
}

export default HomePage;
