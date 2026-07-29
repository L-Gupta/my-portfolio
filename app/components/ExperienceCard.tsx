export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export function ExperienceCard({
  exp,
  index,
  isVisible,
}: {
  exp: Experience;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className="bento-card rounded-2xl p-8 accent-bar group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
      }}
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              {exp.company}
            </h3>
          </div>
          <p className="text-lg text-[var(--color-accent)] font-mono mb-1">
            {exp.role}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)] font-mono">
            <span className="flex items-center gap-1">
              <span className="text-[var(--color-accent)]">📅</span> {exp.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-[var(--color-accent)]">📍</span> {exp.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
        {exp.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-sm font-mono text-[var(--color-accent)] mb-3">
          // Key achievements
        </h4>
        <ul className="space-y-2">
          {exp.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm"
            >
              <span className="text-[var(--color-accent)] mt-1 flex-shrink-0">▸</span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-mono text-[var(--color-text-muted)] mb-3">
          Tech Stack:
        </h4>
        <div className="flex flex-wrap gap-2">
          {exp.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-md text-xs text-[var(--color-text-muted)] font-mono hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlankExperienceCard({
  index,
  isVisible,
}: {
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-8 border border-dashed border-[var(--color-border)] flex items-center justify-center min-h-[160px]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
      }}
    >
      <span className="text-[var(--color-text-muted)] font-mono text-sm">
        Coming soon...
      </span>
    </div>
  );
}
