"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";

const options = [
  { l: "A", t: "It is a constitutional body constituted under Article 280 of the Indian Constitution." },
  { l: "B", t: "It is a permanent body with a fixed tenure of six years." },
  { l: "C", t: "Its recommendations are binding on the Government of India." },
  { l: "D", t: "It consists of a Chairman and four other members appointed by the President." },
];

export default function TakeTestPage() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [markedForReview, setMarkedForReview] = useState(false);

  // Build question palette
  const palette = Array.from({ length: 50 }, (_, i) => {
    const num = i + 1;
    if (num === 1) return { num, state: "not-answered" };
    if (num <= 3) return { num, state: "answered" };
    if (num === 4) return { num, state: "marked" };
    return { num, state: "not-visited" };
  });

  const stateColor: Record<string, string> = {
    answered: "bg-success-green text-white",
    "not-answered": "bg-danger-red text-white outline outline-1 outline-danger-red",
    marked: "bg-warning-amber text-white",
    "not-visited": "bg-gray-100 text-text-muted",
  };

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Top bar */}
      <div className="bg-navbar-bg px-6 py-2.5">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-blue">
              <span className="h-2 w-2 rounded-full bg-primary-blue" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              APPROACHES
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-white">
            <span className="text-text-muted">Test 1</span>
            <span>0/50</span>
            <span className="rounded-full bg-danger-bg px-3 py-1 text-xs font-bold text-danger-red">
              00:59:57
            </span>
            <button className="rounded-lg bg-danger-red px-4 py-1.5 text-xs font-semibold text-white hover:bg-red-700">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1300px] gap-6 px-6 py-6">
        {/* Main question area */}
        <div className="min-w-0 flex-1">
          <div className="rounded-xl border border-card-border bg-white p-5">
            {/* Top row */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary-blue px-3 py-1 text-xs font-bold text-white">
                  Q1
                </span>
                <span className="text-xs text-text-muted">2.00 Marks</span>
              </div>
              <button
                onClick={() => setMarkedForReview(!markedForReview)}
                className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium ${
                  markedForReview
                    ? "border-warning-amber bg-warning-bg text-warning-amber"
                    : "border-card-border text-text-secondary hover:bg-gray-50"
                }`}
              >
                <Flag className="h-3.5 w-3.5" />
                Mark for Review
              </button>
            </div>

            {/* Stem */}
            <p className="text-sm font-semibold text-text-primary">
              With reference to the Finance Commission of India, consider the
              following statements:
            </p>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-text-primary">
                <span className="font-semibold">1.</span> It is a constitutional
                body constituted under Article 280 of the Indian Constitution.
              </p>
              <p className="text-sm text-text-primary">
                <span className="font-semibold">2.</span> It is a permanent body
                with a fixed tenure of six years.
              </p>
              <p className="text-sm text-text-primary">
                <span className="font-semibold">3.</span> Its recommendations
                are binding on the Government of India.
              </p>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Which of the statements given above is/are correct?
            </p>
            <p className="mt-1 text-xs italic text-text-muted">
              Select the correct answer
            </p>

            {/* Options */}
            <div className="mt-4 space-y-2">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                    selectedOption === i
                      ? "border-primary-blue bg-blue-50"
                      : "border-card-border hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      selectedOption === i
                        ? "border-primary-blue bg-primary-blue text-white"
                        : "border-card-border text-text-secondary"
                    }`}
                  >
                    {opt.l}
                  </span>
                  <span className="text-text-primary">{opt.t}</span>
                </button>
              ))}
            </div>

            {/* Bottom row */}
            <div className="mt-5 flex items-center justify-between">
              <button className="rounded-lg border border-card-border px-4 py-2 text-xs font-medium text-text-secondary hover:bg-gray-50">
                Clear
              </button>
              <div className="flex items-center gap-2">
                <button
                  disabled
                  className="flex items-center gap-1 rounded-lg border border-card-border px-4 py-2 text-xs font-medium text-text-muted opacity-50"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Previous
                </button>
                <button className="flex items-center gap-1 rounded-lg bg-primary-blue px-4 py-2 text-xs font-semibold text-white hover:bg-primary-blue-dark">
                  Save & Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[
              { n: 0, l: "Answered", c: "text-success-green" },
              { n: 1, l: "Not Answered", c: "text-danger-red" },
              { n: 0, l: "Marked", c: "text-warning-amber" },
              { n: 49, l: "Not Visited", c: "text-text-muted" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-card-border bg-white px-4 py-3 text-center"
              >
                <p className={`text-xl font-bold ${s.c}`}>{s.n}</p>
                <p className="text-[10px] text-text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar — Question Palette */}
        <div className="w-[260px] shrink-0">
          <div className="rounded-xl border border-card-border bg-white p-4">
            <h3 className="mb-3 text-sm font-bold text-text-primary">
              Question Palette
            </h3>
            {/* Legend */}
            <div className="mb-3 flex flex-wrap gap-2 text-[10px] text-text-secondary">
              <span className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-success-green" />
                Answered
              </span>
              <span className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-danger-red" />
                Not Answered
              </span>
              <span className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-gray-200" />
                Not Visited
              </span>
              <span className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-sm bg-warning-amber" />
                Marked
              </span>
            </div>
            {/* Grid */}
            <div className="grid grid-cols-5 gap-1.5">
              {palette.map((q, i) => (
                <button
                  key={i}
                  className={`flex h-8 items-center justify-center rounded text-[11px] font-medium ${stateColor[q.state]}`}
                >
                  {q.num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
