'use client';

import { useId, useState, type ReactNode } from 'react';

export interface CardStat {
  value: string;
  label: string;
}

export interface DiffStat {
  insertions: number;
  deletions: number;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  stats?: CardStat[];
  diffStat?: DiffStat;
}

function renderWithCode(text: string): ReactNode {
  const parts = text.split('`');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="bg-[var(--color-bg)] text-[var(--color-accent)] px-1.5 py-0.5 rounded text-[0.85em]"
      >
        {part}
      </code>
    ) : (
      <span key={i}>{part}</span>
    )
  );
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
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const showToggle = exp.achievements.length >= 3;

  const totalDiff = exp.diffStat ? exp.diffStat.insertions + exp.diffStat.deletions : 0;
  const insertionsPct = totalDiff ? (exp.diffStat!.insertions / totalDiff) * 100 : 0;
  const deletionsPct = totalDiff ? 100 - insertionsPct : 0;

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

      {/* Summary */}
      <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
        {exp.description}
      </p>

      {/* Diff stat bar */}
      {exp.diffStat && (
        <div className="flex items-center gap-2.5 mb-4 text-xs font-mono text-[var(--color-text-muted)]">
          <span>{exp.diffStat.label}</span>
          <div className="flex w-[140px] h-2 rounded-full overflow-hidden bg-[var(--color-border)]">
            <div className="bg-[var(--color-accent)]" style={{ width: `${insertionsPct}%` }} />
            <div className="bg-red-500" style={{ width: `${deletionsPct}%` }} />
          </div>
        </div>
      )}

      {/* Stat grid */}
      {exp.stats && exp.stats.length > 0 && (
        <div
          className="grid gap-2.5 mb-5"
          style={{ gridTemplateColumns: `repeat(${Math.min(exp.stats.length, 3)}, minmax(0, 1fr))` }}
        >
          {exp.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-3 py-2.5"
            >
              <div className="text-lg font-bold text-[var(--color-accent)]">{stat.value}</div>
              <div className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      <div className="mb-6">
        {showToggle ? (
          <>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1.5 text-sm font-mono text-[var(--color-accent)] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
            >
              <span
                className="inline-block text-xs transition-transform duration-150"
                style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                ▸
              </span>
              View details
            </button>
            <div
              id={detailsId}
              role="region"
              aria-label={`${exp.company} details`}
              className="collapse-transition overflow-hidden"
              style={{ maxHeight: open ? '600px' : '0px', marginTop: open ? '0.875rem' : '0px' }}
            >
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-muted)] text-sm"
                  >
                    <span className="text-[var(--color-accent)] mt-1 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{renderWithCode(achievement)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
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
                  <span className="leading-relaxed">{renderWithCode(achievement)}</span>
                </li>
              ))}
            </ul>
          </>
        )}
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
