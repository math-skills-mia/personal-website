import { SiGithub, SiInstagram } from "react-icons/si";

import { HiOutlineEnvelope } from "react-icons/hi2";

function Profile() {
  return (
    <footer className="profile-section" id="profile">
      <div className="profile-inner">
        <div className="profile-left">
          <h2 className="profile-name">Mia Striebeck</h2>

          <p className="profile-stack">
            Python · TypeScript · React · SQL · scikit-learn · Git
          </p>
        </div>

        <div className="profile-links">
          <a
            href="https://github.com/math-skills-mia"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href="https://instagram.com/math_skills-m.i.a"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>

          <a href="mailto:YOUR_EMAIL_HERE">
            <HiOutlineEnvelope aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Profile;
