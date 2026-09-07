"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Badge, Pill } from "@/components/Badge";
import { ChevronDown, ChevronRight, ChevronUp, Info } from "lucide-react";

const patterns = [
  { status: "HOT", tag: "Heavily Tested 17.6", title: "Indus Valley Civilization: Urban Planning & Water Management" },
  { status: "EVERGREEN", tag: "Frequently Tested 13.1", title: "Jainism & Buddhism: Core Philosophy & Councils" },
  { status: "RISING", tag: "Moderately Tested 9.8", title: "Gupta Administration: Land Grants & Feudalism" },
  { status: "HOT", tag: "Heavily Tested 16.2", title: "Classical Literature: Sanskrit Drama & Poetry Genres" },
  { status: "SPORADIC", tag: "Occasionally Tested 7.4", title: "Mauryan Provincial Administration & Espionage" },
  { status: "FADING", tag: "Rarely Tested 4.1", title: "Vedic Rituals: Ashvamedha & Rajasuya Ceremonies" },
  { status: "HOT", tag: "Heavily Tested 15.8", title: "Temple Architecture: Nagara, Dravida & Vesara Styles" },
  { status: "RISING", tag: "Moderately Tested 10.3", title: "Bhakti & Sufi Movements: Social Reform Dimensions" },
  { status: "EVERGREEN", tag: "Frequently Tested 12.6", title: "Delhi Sultanate: Administrative Innovations" },
  { status: "SPORADIC", tag: "Occasionally Tested 6.9", title: "Ancient Indian Guilds: Shreni & Trade Networks" },
];

const statusColor: Record<string, string> = {
  HOT: "bg-danger-bg text-danger-red",
  RISING: "bg-warning-bg text-warning-amber",
  EVERGREEN: "bg-success-bg text-success-green",
  SPORADIC: "bg-gray-100 text-text-secondary",
  FADING: "bg-gray-100 text-text-muted",
};

const examTimeline = [
  { year: "2025", exam: "IAS", recent: true },
  { year: "2024", exam: "CAPF", recent: false },
  { year: "2023", exam: "CDS-I", recent: false },
  { year: "2023", exam: "IAS", recent: false },
  { year: "2022", exam: "CDS-II", recent: false },
  { year: "2021", exam: "IAS", recent: false },
  { year: "2020", exam: "CAPF", recent: false },
  { year: "2019", exam: "IAS", recent: false },
  { year: "2018", exam: "CDS-I", recent: false },
  { year: "2007", exam: "IAS", recent: false },
];

export default function PatternXrayPage() {
  const [selectedPattern, setSelectedPattern] = useState(0);

  return (
    <main className="min-h-screen bg-page-bg">
      <Navbar authState="logged-in" username="Aspirant" variant="app" />

      {/* Top bar */}
      <div className="border-b border-card-border bg-white px-6 py-4">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-text-primary">
              Pattern X-Ray
            </h1>
            <div className="relative">
              <button className="flex items-center gap-1 rounded-lg border border-card-border bg-white px-3 py-1.5 text-sm font-medium text-text-secondary hover:bg-gray-50">
                Ancient India (90)
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-purple-accent px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700">
              ⚡ How to use this
            </button>
            <span className="text-xs text-text-muted">90 patterns</span>
            <span className="text-xs text-text-muted">387 questions</span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="mx-auto mt-4 flex max-w-[1300px] flex-wrap gap-2">
          {[
            { l: "All 90", active: true, dot: "" },
            { l: "Hot 19", active: false, dot: "bg-danger-red" },
            { l: "Rising 15", active: false, dot: "bg-warning-amber" },
            { l: "Evergreen 5", active: false, dot: "bg-success-green" },
            { l: "Sporadic 18", active: false, dot: "bg-text-secondary" },
            { l: "Fading 33", active: false, dot: "bg-text-muted" },
          ].map((c, i) => (
            <button
              key={i}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                c.active
                  ? "bg-navbar-bg text-white"
                  : "bg-white text-text-secondary hover:bg-gray-100"
              }`}
            >
              {c.dot && (
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
              )}
              {c.l}
            </button>
          ))}
          <button className="ml-2 flex items-center gap-1 text-xs text-text-muted hover:text-text-primary">
            <Info className="h-3.5 w-3.5" />
            What do these mean?
          </button>
        </div>
      </div>

      {/* 2-col layout */}
      <div className="mx-auto flex max-w-[1300px] gap-6 px-6 py-6">
        {/* Left list */}
        <div className="w-[280px] shrink-0">
          <div className="thin-scroll max-h-[calc(100vh-220px)] space-y-2 overflow-y-auto rounded-xl border border-card-border bg-white p-3">
            {patterns.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelectedPattern(i)}
                className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                  selectedPattern === i
                    ? "border border-indigo-accent bg-indigo-50/40"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1 h-3.5 w-3.5 shrink-0 rounded border-gray-300 accent-indigo-accent"
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${statusColor[p.status]}`}
                    >
                      {p.status}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs font-bold leading-snug text-text-primary">
                    {p.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right detail */}
        <div className="min-w-0 flex-1 space-y-5">
          {/* Header */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${statusColor[patterns[selectedPattern].status]}`}
              >
                {patterns[selectedPattern].status}
              </span>
              <h2 className="text-lg font-bold text-text-primary">
                {patterns[selectedPattern].title}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
              <span className="rounded-full bg-warning-bg px-2.5 py-0.5 font-medium text-warning-amber">
                {patterns[selectedPattern].tag}
              </span>
              <span>6 questions</span>
              <span>2007-2025</span>
              <div className="flex gap-1">
                {["CAPF", "CDS-I", "CDS-II"].map((e, i) => (
                  <Badge key={i} variant="neutral">
                    {e}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Brief */}
          <div className="rounded-xl border border-card-border bg-white p-5">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue" />
              Why UPSC Tests This
            </h3>
            <p className="text-sm text-text-secondary">
              Urban planning of the Indus Valley Civilization is a perennial
              favourite because it allows UPSC to test both static knowledge
              (drainage systems, citadel vs lower town) and analytical thinking
              (what planning implies about governance, standardization, and
              trade). The topic bridges History, Geography, and even aspects of
              Governance.
            </p>
            <h3 className="mb-3 mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue" />
              How It Evolved
            </h3>
            <p className="text-sm text-text-secondary">
              From straightforward factual questions in the 2000s (site names,
              artefacts), UPSC shifted to statement-based analytical questions
              post-2015. Recent years test comparative analysis (Indus vs
              Mesopotamian urbanism) and link findings to broader themes like
              water management and civic planning.
            </p>
            <div className="mt-4 rounded-lg bg-success-bg p-3 text-sm text-success-green">
              <strong>KEY INSIGHT:</strong> When you see a question on Indus
              planning, immediately think "standardization + water management +
              trade implications" — these three angles cover 90% of what UPSC
              asks.
            </div>
          </div>

          {/* Exam Timeline */}
          <div className="rounded-xl border border-card-border bg-white p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
              Exam Timeline
            </h3>
            <div className="space-y-2">
              {examTimeline.map((e, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      e.recent ? "bg-danger-red" : "bg-gray-300"
                    }`}
                  />
                  <span className="w-12 font-medium text-text-primary">
                    {e.year}
                  </span>
                  <span className="text-text-secondary">{e.exam}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practice */}
          <div className="rounded-xl border border-card-border bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                Practice (easy → hard)
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-primary">
                  0 /6
                </span>
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-0 rounded-full bg-success-green" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((q) => (
                <div
                  key={q}
                  className="flex items-center gap-3 rounded-lg border border-card-border px-4 py-2.5"
                >
                  <Badge variant="blue">Q{q}</Badge>
                  <span className="text-xs text-text-muted">IAS · 20{25 - q}</span>
                  <span className="flex-1 truncate text-xs font-medium text-text-primary">
                    Consider the following statements about the urban planning of
                    the Indus Valley Civilization...
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-text-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
