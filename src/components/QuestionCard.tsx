import { Badge } from "./Badge";

interface QuestionOption {
  label: string; // A, B, C, D
  text: string;
}

interface QuestionCardProps {
  exam: string;
  year: number;
  questionNumber: number;
  subject: string;
  subjectBreadcrumb?: string;
  officialKey?: boolean;
  stem: string;
  statements?: { label: string; text: string }[];
  prompt?: string;
  options: QuestionOption[];
  showAnalyzeLink?: boolean;
}

export default function QuestionCard({
  exam,
  year,
  questionNumber,
  subject,
  subjectBreadcrumb,
  officialKey = true,
  stem,
  statements,
  prompt,
  options,
  showAnalyzeLink = true,
}: QuestionCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-white p-5">
      {/* Top pills */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="blue">
          {exam} · {year} · Q{questionNumber}
        </Badge>
        {subjectBreadcrumb && (
          <span className="flex items-center gap-1 text-xs text-text-muted">
            {subject} <span className="text-text-muted">›</span>{" "}
            {subjectBreadcrumb}
          </span>
        )}
        {officialKey && (
          <Badge variant="green">
            ✓ Official Key
          </Badge>
        )}
      </div>

      {/* Stem */}
      <p className="text-sm font-semibold text-text-primary">{stem}</p>

      {/* Statements */}
      {statements && (
        <div className="mt-3 space-y-2">
          {statements.map((s, i) => (
            <p key={i} className="text-sm text-text-primary">
              <span className="font-semibold">{s.label}</span> {s.text}
            </p>
          ))}
        </div>
      )}

      {/* Prompt */}
      {prompt && (
        <p className="mt-3 text-sm font-semibold text-text-primary">
          {prompt}
        </p>
      )}

      {/* Options */}
      <div className="mt-4 space-y-2">
        {options.map((opt, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border border-card-border px-4 py-2.5 text-sm"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-card-border text-xs font-bold text-text-secondary">
              {opt.label}
            </span>
            <span className="text-text-primary">{opt.text}</span>
          </div>
        ))}
      </div>

      {/* Analyze link */}
      {showAnalyzeLink && (
        <button className="mt-3 text-sm font-medium text-primary-blue underline hover:text-primary-blue-dark">
          Analyze in detail
        </button>
      )}
    </div>
  );
}
