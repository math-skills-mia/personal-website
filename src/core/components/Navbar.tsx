import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const navigationItems = [
  {
    label: "Home",
    path: ROUTES.home,
    end: true,
  },
  {
    label: "Tools",
    path: ROUTES.tools,
  },
  {
    label: "Games",
    path: ROUTES.games,
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function scrollToProjects() {
    closeMenu();

    if (window.location.pathname === ROUTES.home) {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.location.href = `${ROUTES.home}#projects`;
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="navbar__brand" to={ROUTES.home} onClick={closeMenu}>
          <span className="navbar__brand-mark" aria-hidden="true">
            +
          </span>

          <span className="navbar__brand-name">Mia Striebeck</span>
        </NavLink>

        <div className="navbar__desktop-navigation">
          <div className="navbar__links">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  ["navbar__link", isActive && "navbar__link--active"]
                    .filter(Boolean)
                    .join(" ")
                }
                to={item.path}
                end={item.end}
                key={item.path}
              >
                {item.label}
              </NavLink>
            ))}

            <button
              className="navbar__link"
              type="button"
              onClick={scrollToProjects}
            >
              Projects
            </button>
          </div>

          <button
            className="navbar__theme-placeholder"
            type="button"
            aria-label="Theme controls coming soon"
            title="Theme controls coming soon"
          >
            <span aria-hidden="true">◐</span>
          </button>
        </div>

        <button
          className="navbar__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <AiOutlineClose aria-hidden="true" size={24} />
          ) : (
            <AiOutlineMenu aria-hidden="true" size={24} />
          )}
        </button>
      </nav>

      <button
        className={["navbar__overlay", isMenuOpen && "navbar__overlay--visible"]
          .filter(Boolean)
          .join(" ")}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        className={["navbar__drawer", isMenuOpen && "navbar__drawer--open"]
          .filter(Boolean)
          .join(" ")}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-identity">
            <span className="navbar__brand-mark" aria-hidden="true">
              +
            </span>

            <div>
              <p className="navbar__drawer-name">Mia Striebeck</p>
              <p className="navbar__drawer-label">Personal website</p>
            </div>
          </div>

          <button
            className="navbar__drawer-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <AiOutlineClose aria-hidden="true" size={24} />
          </button>
        </div>

        <div className="navbar__drawer-links">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  "navbar__drawer-link",
                  isActive && "navbar__drawer-link--active",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to={item.path}
              end={item.end}
              onClick={closeMenu}
              key={item.path}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </NavLink>
          ))}

          <button
            className="navbar__drawer-link"
            type="button"
            onClick={scrollToProjects}
          >
            <span>Projects</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="navbar__drawer-footer">
          <button
            className="navbar__drawer-theme"
            type="button"
            aria-label="Theme controls coming soon"
            title="Theme controls coming soon"
          >
            <span>Theme</span>
            <span aria-hidden="true">◐</span>
          </button>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
