"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import SlideOverDrawer from "@/components/SlideOverDrawer";
import { Badge } from "@/components/Badge";
import {
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Lightbulb,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const answerData = [
  { label: "A", pct: 38, chosen: true, correct: false },
  { label: "B", pct: 12, chosen: false, correct: false },
  { label: "C", pct: 24, chosen: false, correct: false },
  { label: "D", pct: 26, chosen: false, correct: true },
];

const similarQuestions = [
  {
    exam: "IAS · 2021 · Q34",
    relevance: "8.42",
    text: "Consider the following statements: Statement-I: The atmosphere as a whole is... Statement-II: The albedo effect influences...",
    options: ["A) Both correct, II explains I", "B) Both correct, no explanation", "C) I correct, II incorrect", "D) I incorrect, II correct"],
  },
  {
    exam: "IAS · 2019 · Q12",
    relevance: "7.15",
    text: "With reference to the heat budget of the Earth, consider the following...",
    options: ["A) 1 only", "B) 2 only", "C) Both 1 and 2", "D) Neither"],
  },
  {
    exam: "CAPF · 2022 · Q8",
    relevance: "6.89",
    text: "Consider the following pairs: Term — Explanation. Which of the pairs given above is/are correctly matched?",
    options: ["A) 1 and 2 only", "B) 2 only", "C) 1 and 3 only", "D) 1, 2 and 3"],
  },
  {
    exam: "NDA-I · 2020 · Q45",
    relevance: "5.63",
    text: "Which one of the following statements regarding the Earth's radiation balance is correct?",
    options: ["A) Shortwave radiation is absorbed by greenhouse gases", "B) Longwave radiation is reflected by clouds", "C) Net radiation at the top of atmosphere is zero globally", "D) Albedo affects only visible light"],
  },
];

function MiniQuestionCard({ exam, relevance, text, options }: typeof similarQuestions[0]) {
  return (
    <div className="rounded-xl border border-card-border bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <Badge variant="blue">{exam}</Badge>
        <span className="text-[10px] text-text-muted">
          Relevance: {relevance}
        </span>
      </div>
      <p className="text-xs font-semibold text-text-primary">{text}</p>
      <div className="mt-2 space-y-1">
        {options.map((o, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded border border-card-border px-2 py-1 text-[11px] text-text-secondary"
          >
            <span className="font-bold text-text-muted">{o.split(")")[0]})</span>
            <span>{o.split(") ").slice(1).join(") ")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PYQDecodePage() {
  const [smartRevisionOpen, setSmartRevisionOpen] = useState(false);
  const [questionMapOpen, setQuestionMapOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [changeSetOpen, setChangeSetOpen] = useState(false);

  const tabs = [
    { label: "Verdict" },
    { label: "S1" },
    { label: "How to study" },
    { label: "Micro-concepts" },
    { label: "THE VAULT" },
  ];

  return (
    <main className="min-h-screen bg-page-bg">
      <Navbar authState="logged-in" username="Aspirant" variant="app" />

      {/* Workspace top bar */}
      <div className="border-b border-card-border bg-purple-50/50 px-6 py-2.5">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center gap-3 text-sm">
          <span className="text-text-muted">Current set</span>
          <span className="font-bold text-text-primary">IAS · 2024</span>
          <span className="font-bold text-text-primary">Q1</span>
          <div className="flex items-center gap-1">
            <button className="rounded border border-card-border p-1 hover:bg-white">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button className="rounded border border-card-border p-1 hover:bg-white">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="flex items-center gap-1 rounded-lg border border-card-border bg-white px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-gray-50">
              <Star className="h-3.5 w-3.5" />
              Review
            </button>
            <button
              onClick={() => setSmartRevisionOpen(true)}
              className="rounded-lg border border-card-border bg-white p-1.5 text-text-secondary hover:bg-gray-50"
            >
              <Lightbulb className="h-4 w-4" />
            </button>
            <button
              onClick={() => setQuestionMapOpen(true)}
              className="rounded-lg border border-card-border bg-white p-1.5 text-text-secondary hover:bg-gray-50"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <div className="relative">
              <button
                onClick={() => setChangeSetOpen(!changeSetOpen)}
                className="flex items-center gap-1 rounded-lg border border-card-border bg-white px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-gray-50"
              >
                ☰ Change set
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {changeSetOpen && (
                <div className="absolute right-0 top-full z-20 mt-1 w-56 rounded-xl border border-card-border bg-white p-4 shadow-lg">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                    Change Set
                  </p>
                  <p className="mb-3 text-[11px] text-text-muted">
                    Pick exam & year, then Go
                  </p>
                  <div className="space-y-2">
                    <select className="w-full rounded-lg border border-card-border px-2 py-1.5 text-sm">
                      <option>IAS</option>
                      <option>CDS-I</option>
                      <option>CAPF</option>
                    </select>
                    <select className="w-full rounded-lg border border-card-border px-2 py-1.5 text-sm">
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                    </select>
                  </div>
                  <button className="mt-3 w-full rounded-lg bg-primary-blue py-1.5 text-xs font-semibold text-white hover:bg-primary-blue-dark">
                    Go
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-col layout */}
      <div className="mx-auto flex max-w-[1300px] gap-6 px-6 py-6">
        {/* Main question column */}
        <div className="min-w-0 flex-1">
          {/* Pills */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary-blue px-3 py-1 text-xs font-bold text-white">
              Q1 (IAS/2024)
            </span>
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-text-secondary">
              Geography › World Physical Geography › Atmospheric heat balance
            </span>
            <Badge variant="green">✓ Official Key</Badge>
          </div>

          {/* Stem */}
          <p className="text-sm font-semibold text-text-primary">
            Consider the following statements:
          </p>
          <div className="mt-3 space-y-2">
            <p className="text-sm font-semibold text-text-primary">
              Statement-I: The atmosphere as a whole is heated by the direct rays
              of the sun.
            </p>
            <p className="text-sm font-semibold text-text-primary">
              Statement-II: The albedo of the earth's surface determines the
              amount of longwave radiation re-emitted to space.
            </p>
          </div>
          <p className="mt-3 text-sm font-semibold text-text-primary">
            Which one of the following is correct in respect of the above
            statements?
          </p>

          {/* Options */}
          <div className="mt-4 space-y-2">
            {[
              { l: "A", t: "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I", wrong: true },
              { l: "B", t: "Both Statement-I and Statement-II are correct but Statement-II does not explain Statement-I", wrong: false },
              { l: "C", t: "Statement-I is correct but Statement-II is incorrect", wrong: false },
              { l: "D", t: "Statement-I is incorrect but Statement-II is correct", correct: true },
            ].map((opt, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm ${
                  opt.wrong
                    ? "border-danger-red/40 bg-danger-bg"
                    : opt.correct
                      ? "border-success-green/40 bg-success-bg"
                      : "border-card-border"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    opt.wrong
                      ? "bg-danger-red text-white"
                      : opt.correct
                        ? "bg-success-green text-white"
                        : "border border-card-border text-text-secondary"
                  }`}
                >
                  {opt.l}
                </span>
                <span className="text-text-primary">{opt.t}</span>
              </div>
            ))}
          </div>

          {/* Result pill */}
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-danger-bg px-3 py-1 text-xs font-bold text-danger-red">
              Incorrect
            </span>
            <span className="ml-auto text-xs text-text-muted">
              Your answer: <strong className="text-danger-red">A</strong> ·
              Correct: <strong className="text-success-green">D</strong>
            </span>
          </div>

          {/* Explanation */}
          <div className="mt-6 rounded-xl border border-card-border bg-white p-5">
            <h3 className="mb-3 text-sm font-bold text-text-primary">
              Explanation
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                Statement-I is incorrect. The atmosphere is not heated directly
                by the sun's rays. Rather, the earth's surface absorbs shortwave
                solar radiation and re-emits it as longwave radiation, which then
                heats the atmosphere from below. [1]
              </p>
              <p>
                Statement-II is correct. The albedo of a surface determines how
                much shortwave radiation is reflected. Surfaces with high albedo
                (like ice and snow) reflect more, affecting the amount of energy
                absorbed and subsequently re-emitted as longwave radiation. [2]
              </p>
            </div>

            {/* Sources */}
            <div className="mt-5">
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                Sources
              </h4>
              <ol className="list-inside list-decimal space-y-1 text-xs text-text-secondary">
                <li>
                  NCERT Class 11 Physical Geography — Chapter 11: World Climate
                  and Climate Change › p. 98
                </li>
                <li>
                  Singh, Savindra — Physical Geography (Latest Edition) ›
                  Atmospheric Heat Balance › p. 234
                </li>
                <li>
                  <span className="text-primary-blue underline">
                    https://www.imd.gov.in/section/climate/annual.pdf
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Charts row */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Bar chart */}
            <div className="rounded-xl border border-card-border bg-white p-4">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                How Others Answered
              </h4>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={answerData} layout="vertical" margin={{ left: 0, right: 10 }}>
                  <Tooltip />
                  <Bar dataKey="pct" radius={[0, 4, 4, 0]} barSize={20}>
                    {answerData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          entry.correct
                            ? "#16A34A"
                            : entry.chosen
                              ? "#2563EB"
                              : "#E5E7EB"
                        }
                        stroke={entry.chosen && !entry.correct ? "#2563EB" : "none"}
                        strokeWidth={entry.chosen && !entry.correct ? 2 : 0}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-1 flex justify-around text-[10px] text-text-muted">
                {answerData.map((d, i) => (
                  <span key={i}>
                    {d.label}: {d.pct}%
                  </span>
                ))}
              </div>
            </div>

            {/* Donut */}
            <div className="rounded-xl border border-card-border bg-white p-4">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                Community Performance
              </h4>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width={140} height={140}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Correct", value: 58 },
                        { name: "Wrong", value: 42 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      dataKey="value"
                    >
                      <Cell fill="#16A34A" />
                      <Cell fill="#DC2626" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-center text-sm font-bold text-text-primary">
                58% got it right
              </p>
            </div>
          </div>

          {/* Provenance panel */}
          <div className="mt-6 rounded-xl border border-card-border bg-purple-50/40 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-text-primary">
                Provenance & Study Pattern
              </h3>
              <span className="rounded-full bg-warning-bg px-2.5 py-1 text-[10px] font-bold text-warning-amber">
                🔒 Guest preview
              </span>
            </div>
            <p className="mb-3 text-xs italic text-text-muted">
              Don't just practise – reverse-engineer the question. This panel
              shows where this PYQ came from (books / web), how the examiner
              broke it into hidden statements, and which nearby micro-concepts
              you were supposed to learn from it. Treat it like an autopsy of the
              question: what might have triggered it, which exact lines in the
              book matter, and what linked ideas you should carry forward to
              future questions.
            </p>
            <p className="mb-3 text-xs font-semibold text-text-primary">
              Q. Consider the following statements: Statement-I: The atmosphere
              as a whole is heated by the direct rays of the sun. Statement-II:
              The albedo of the earth's surface determines the amount of
              longwave radiation re-emitted to space...
            </p>

            {/* At a glance */}
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="blue">Origin: Books + Current Affairs</Badge>
              <Badge variant="amber">Fairness: Low / Borderline fairness</Badge>
              <Badge variant="neutral">Books / CA: 3.3/10 · 6.7/10</Badge>
            </div>
            <p className="mb-4 text-xs text-text-muted">
              You're seeing a guest preview. The Verdict and first statement
              analysis are open.{" "}
              <strong className="text-primary-blue underline">
                Login with Google
              </strong>{" "}
              to unlock all tabs.
            </p>

            <Tabs tabs={tabs} activeIndex={activeTab} onChange={setActiveTab} />

            {/* Verdict tab content */}
            <div className="mt-4 space-y-3 text-sm text-text-secondary">
              <p>
                This question tests a fundamental First Principles concept from
                NCERT Class 11 — the mechanism of atmospheric heating. UPSC
                deliberately pairs a common misconception (Statement-I: direct
                solar heating of atmosphere) with a nuanced truth (Statement-II:
                albedo's role in longwave re-emission).
              </p>
              <p>
                The trap lies in Statement-I. Most students recall that "the sun
                heats the earth" and assume the atmosphere is heated directly.
                The examiner exploits this mental shortcut. The correct reasoning
                is: surface absorbs shortwave → re-emits longwave → atmosphere
                heated from below.
              </p>
              <h4 className="mt-4 text-sm font-bold text-text-primary">
                HOW THIS QUESTION IS BUILT
              </h4>
              <p className="text-xs text-text-muted">
                One sentence of intro explaining the construction logic.
              </p>
              <button className="text-sm font-semibold text-primary-blue underline">
                STATEMENT 1: The atmosphere as a whole is heated by the direct
                rays of the sun.
              </button>
            </div>
          </div>

          {/* Report link */}
          <button className="mt-4 text-xs text-text-muted underline hover:text-text-primary">
            ⚑ Report wrong answer
          </button>
        </div>

        {/* Right rail — Similar Questions */}
        <div className="hidden w-[320px] shrink-0 lg:block">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success-green" />
            <span className="text-sm font-bold text-text-primary">
              Similar Questions
            </span>
          </div>
          <div className="space-y-4">
            {similarQuestions.map((q, i) => (
              <MiniQuestionCard key={i} {...q} />
            ))}
          </div>
        </div>
      </div>

      {/* Smart Revision drawer */}
      <SlideOverDrawer
        open={smartRevisionOpen}
        onClose={() => setSmartRevisionOpen(false)}
        title="Smart Revision"
        subtitle="Answered 0 of 4"
        icon={<Lightbulb className="h-5 w-5 text-warning-amber" />}
      >
        <div className="mb-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-purple-accent">
            Skill-Matched Challenge
          </p>
          <p className="mb-3 text-xs italic text-text-muted">
            Difficulty-rated to sit just above your current level — the sweet
            spot for growth.
          </p>
          <div className="space-y-3">
            {[
              { exam: "IAS · 2022 · Q18", badge: "Challenge", caption: "+100 Elo above you — the growth zone", text: "Consider the following statements about the greenhouse effect..." },
              { exam: "CDS-I · 2023 · Q27", badge: "Challenge", caption: "+100 Elo above you — the growth zone", text: "With reference to the Earth's radiation budget, consider..." },
            ].map((q, i) => (
              <div key={i} className="rounded-xl border border-card-border bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="blue">{q.exam}</Badge>
                  <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-accent">
                    {q.badge}
                  </span>
                </div>
                <p className="text-xs text-text-muted">{q.caption}</p>
                <p className="mt-1.5 text-xs font-semibold text-text-primary">
                  {q.text}
                </p>
                <div className="mt-2 space-y-1">
                  {["A) Statement-I only", "B) Statement-II only", "C) Both I and II", "D) Neither"].map(
                    (o, j) => (
                      <div
                        key={j}
                        className="rounded border border-card-border px-2 py-1 text-[10px] text-text-secondary"
                      >
                        {o}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-success-green">
            Confidence Builder
          </p>
          <p className="mb-3 text-xs italic text-text-muted">
            Just below your level — reinforce what you know and build momentum.
          </p>
          <div className="rounded-xl border border-card-border bg-white p-3">
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="blue">IAS · 2020 · Q5</Badge>
              <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-bold text-success-green">
                Confidence
              </span>
            </div>
            <p className="text-xs text-text-muted">
              100 Elo below you — solidify your foundation
            </p>
            <p className="mt-1.5 text-xs font-semibold text-text-primary">
              Which of the following is the primary source of energy that heats
              the Earth's atmosphere?
            </p>
            <div className="mt-2 space-y-1">
              {["A) Direct solar radiation", "B) Longwave radiation from Earth's surface", "C) Geothermal energy", "D) Cosmic rays"].map(
                (o, j) => (
                  <div
                    key={j}
                    className="rounded border border-card-border px-2 py-1 text-[10px] text-text-secondary"
                  >
                    {o}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </SlideOverDrawer>

      {/* Question map drawer */}
      <SlideOverDrawer
        open={questionMapOpen}
        onClose={() => setQuestionMapOpen(false)}
        title="Question map"
        subtitle="IAS · 2024"
        icon={<MapPin className="h-5 w-5 text-primary-blue" />}
      >
        {/* Legend */}
        <div className="mb-4 flex flex-wrap gap-3 text-[11px] text-text-secondary">
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full border border-text-muted" />
            Not attempted
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-success-green" />
            Correct
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-danger-red" />
            Incorrect
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-blue" />
            Bookmarked
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-10 gap-1.5">
          {Array.from({ length: 100 }, (_, i) => {
            const num = i + 1;
            const subjects = ["GEO", "ENV", "SCI", "ECO", "POL", "HIS", "MIS"];
            const subject = subjects[i % subjects.length];
            const colors = [
              "bg-success-bg text-success-green",
              "bg-danger-bg text-danger-red",
              "bg-primary-blue text-white",
            ];
            const state =
              num === 1
                ? "bg-danger-bg text-danger-red"
                : num <= 5
                  ? colors[i % 3]
                  : "bg-gray-100 text-text-muted";
            return (
              <button
                key={i}
                className={`flex h-10 flex-col items-center justify-center rounded text-[10px] font-medium ${state}`}
              >
                <span className="text-[10px] font-bold">{num}</span>
                <span className="text-[8px] opacity-70">{subject}</span>
              </button>
            );
          })}
        </div>
      </SlideOverDrawer>
    </main>
  );
}
