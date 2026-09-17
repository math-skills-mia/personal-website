import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

type ToolIconName = "image" | "resize" | "file" | "plus";

type ToolTone = "gold" | "sage" | "rose" | "neutral";

type Tool = {
  title: string;
  description: string;
  path: string;
  icon: ToolIconName;
  tone: ToolTone;
  featured?: boolean;
};

const tools: Tool[] = [
  {
    title: "HEIC to PNG",
    description: "Convert image files",
    path: ROUTES.heicConverter,
    icon: "image",
    tone: "gold",
  },
  {
    title: "Image Resizer",
    description: "Resize image dimensions",
    path: ROUTES.imageResizer,
    icon: "resize",
    tone: "sage",
  },
  {
    title: "Reduce File Size",
    description: "Compress large files",
    path: ROUTES.fileReducer,
    icon: "file",
    tone: "rose",
  },
  {
    title: "More Tools",
    description: "Browse all utilities",
    path: ROUTES.tools,
    icon: "plus",
    tone: "gold",
    featured: true,
  },
];

function ToolIcon({ name }: { name: ToolIconName }) {
  if (name === "image") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="tool-card__icon-svg"
      >
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <circle cx="9" cy="9.5" r="1.5" />
        <path d="m5.5 17 4.25-4.25 3 3 2.25-2.25 3.5 3.5" />
      </svg>
    );
  }

  if (name === "resize") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="tool-card__icon-svg"
      >
        <path d="M8.5 4.5h-4v4" />
        <path d="m4.5 8.5 5-5" />
        <path d="M15.5 19.5h4v-4" />
        <path d="m19.5 15.5-5 5" />
        <path d="M19.5 8.5v-4h-4" />
        <path d="m15.5 4.5 4 4" />
        <path d="M4.5 15.5v4h4" />
        <path d="m8.5 19.5-4-4" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="tool-card__icon-svg"
      >
        <path d="M6.5 3.5h7l4 4v13h-11z" />
        <path d="M13.5 3.5v4h4" />
        <path d="M9 13.5h6" />
        <path d="M10.5 16.5h3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="tool-card__icon-svg">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function QuickTools() {
  return (
    <section className="quick-tools" aria-labelledby="quick-tools-title">
      <div className="quick-tools__header">
        <div>
          <p className="section-label">Utilities</p>
          <h2 className="quick-tools__title" id="quick-tools-title">
            Quick Tools
          </h2>
        </div>

        <Link className="quick-tools__view-all" to={ROUTES.tools}>
          View all
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="quick-tools__grid">
        {tools.map((tool) => (
          <Link
            className={[
              "tool-card",
              "interactive-element",
              `tool-card--${tool.tone}`,
              tool.featured && "tool-card--featured",
            ]
              .filter(Boolean)
              .join(" ")}
            to={tool.path}
            key={tool.title}
          >
            <span className="tool-card__icon">
              <ToolIcon name={tool.icon} />
            </span>

            <span className="tool-card__content">
              <span className="tool-card__title">{tool.title}</span>
              <span className="tool-card__description">{tool.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default QuickTools;
