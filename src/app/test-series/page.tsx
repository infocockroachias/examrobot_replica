import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { Badge } from "@/components/Badge";
import { BookOpen, CheckCircle2, Target } from "lucide-react";

interface TestCardProps {
  status: "attempted" | "open";
  freeOrPro: "Free" | "Pro";
  code: string;
  year: number;
  duration: string;
  questions: string;
  marks: string;
  title: string;
  score?: string;
  lastTaken?: string;
  highlighted?: boolean;
}

function TestCard({
  status,
  freeOrPro,
  code,
  year,
  duration,
  questions,
  marks,
  title,
  score,
  lastTaken,
  highlighted,
}: TestCardProps) {
  return (
    <div
      className={`rounded-xl border bg-white p-4 ${
        highlighted
          ? "border-l-4 border-l-primary-blue border-card-border"
          : "border-card-border"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {status === "attempted" ? (
          <span className="rounded-full bg-warning-bg px-2.5 py-0.5 text-[10px] font-bold text-warning-amber">
            ↻ ATTEMPTED
          </span>
        ) : (
          <span className="rounded-full bg-success-bg px-2.5 py-0.5 text-[10px] font-bold text-success-green">
            ⇢ OPEN
          </span>
        )}
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
            freeOrPro === "Free"
              ? "bg-success-bg text-success-green"
              : "bg-blue-50 text-primary-blue"
          }`}
        >
          {freeOrPro}
        </span>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-text-secondary">
          {code}
        </span>
        <span className="text-xs text-text-muted">{year}</span>
        <span className="text-xs text-text-muted">📄 UPSC</span>
        <span className="text-xs text-text-muted">🕐 {duration}</span>
        <span className="text-xs text-text-muted">≡ {questions}</span>
        <span className="text-xs text-text-muted">★ {marks}</span>
      </div>
      <h4 className="text-sm font-bold text-text-primary">{title}</h4>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        {score && (
          <span className="text-xs text-success-green">
            🏆 {score}
          </span>
        )}
        {lastTaken && (
          <span className="text-xs text-text-muted">📅 {lastTaken}</span>
        )}
        {status === "attempted" ? (
          <button className="rounded-lg border border-card-border px-4 py-1.5 text-xs font-medium text-text-secondary hover:bg-gray-50">
            ↻ Retake Test
          </button>
        ) : (
          <button className="rounded-lg bg-primary-blue px-5 py-1.5 text-xs font-semibold text-white hover:bg-primary-blue-dark">
            ▶ Start Test
          </button>
        )}
      </div>
    </div>
  );
}

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-page-bg">
      <Navbar authState="logged-in" username="Aspirant" variant="app" />

      {/* Dark header banner */}
      <div className="bg-navbar-bg px-6 py-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-2xl font-bold text-white">
                UPSC CSE 2027 Test Series Index
              </h1>
              <p className="mt-1 text-sm text-gray-400">
                All available tests across subjects, with instant analysis and
                detailed feedback after submission.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-lg bg-white/10 px-4 py-2 text-center">
                <p className="text-xl font-bold text-white">288</p>
                <p className="text-[10px] text-gray-400">TOTAL TESTS</p>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 text-center">
                <p className="text-xl font-bold text-white">9,675</p>
                <p className="text-[10px] text-gray-400">TOTAL QUESTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1300px] px-6 py-8">
        {/* Stat cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            icon={<BookOpen className="h-5 w-5 text-primary-blue" />}
            value="288"
            label="Active Tests"
            sublabel="100% of total test series"
            progress={100}
            progressColor="bg-primary-blue"
          />
          <StatCard
            icon={<CheckCircle2 className="h-5 w-5 text-success-green" />}
            value="10"
            label="Completed"
            sublabel="3.5% completion rate"
            progress={3.5}
            progressColor="bg-success-green"
          />
          <StatCard
            icon={<Target className="h-5 w-5 text-success-green" />}
            value="57.2%"
            label="Avg. Score"
            sublabel="Average score across attempted tests"
            progress={57.2}
            progressColor="bg-success-green"
          />
        </div>

        {/* Filter row */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm text-text-secondary">
            Showing 9 of 9 categories
          </span>
          <button className="flex items-center gap-1 rounded-lg border border-card-border bg-white px-3 py-1.5 text-sm font-medium text-text-secondary hover:bg-gray-50">
            ▽ All Categories
          </button>
        </div>

        {/* Category outline */}
        <div className="mt-6 space-y-8">
          {/* 1. Polity & Governance */}
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              1. Polity & Governance
            </h2>

            <div className="ml-4 mt-4 border-l-2 border-card-border pl-6">
              <h3 className="text-base font-semibold text-text-primary">
                1.1 Fundamental Rights, DPSP & Fundamental Duties
              </h3>
              <div className="ml-4 mt-3 border-l-2 border-card-border pl-6 space-y-3">
                <h4 className="text-sm font-medium text-text-secondary">
                  1.1.1 Directive Principles framework
                </h4>
                <div className="space-y-3">
                  <TestCard
                    status="attempted"
                    freeOrPro="Free"
                    code="POL_FU_009"
                    year={2026}
                    duration="60 mins"
                    questions="50 Qs"
                    marks="100.00 marks"
                    title="Fundamental Rights, DPSP & Fundamental Duties - Directive Principles framework - Test 1 (50Q)"
                    score="73.40/100.00 (73.4%)"
                    lastTaken="Last taken: 07 Jan 2026"
                  />
                  <TestCard
                    status="open"
                    freeOrPro="Pro"
                    code="POL_FU_010"
                    year={2026}
                    duration="30 mins"
                    questions="25 Qs"
                    marks="50.00 marks"
                    title="Fundamental Rights, DPSP & Fundamental Duties - Directive Principles framework - Test 2 (25Q)"
                  />
                </div>
              </div>
            </div>

            <div className="ml-4 mt-6 border-l-2 border-card-border pl-6">
              <h3 className="text-base font-semibold text-text-primary">
                1.3 Constitutional Basics & Evolution
              </h3>
              <div className="ml-4 mt-3 border-l-2 border-card-border pl-6 space-y-3">
                <h4 className="text-sm font-medium text-text-secondary">
                  1.3.1 Indian Constitution: Structure, Evolution, and Amendment
                </h4>
                <div className="space-y-3">
                  {[
                    { n: 1, free: true, highlighted: true },
                    { n: 2, free: false, highlighted: false },
                    { n: 3, free: true, highlighted: false },
                    { n: 4, free: false, highlighted: false },
                    { n: 5, free: true, highlighted: false },
                    { n: 6, free: false, highlighted: false },
                    { n: 7, free: true, highlighted: false },
                  ].map((t, i) => (
                    <TestCard
                      key={i}
                      status="open"
                      freeOrPro={t.free ? "Free" : "Pro"}
                      code={`POL_CO_${String(100 + t.n).padStart(3, "0")}`}
                      year={2026}
                      duration={t.n % 2 === 0 ? "30 mins" : "60 mins"}
                      questions={t.n % 2 === 0 ? "25 Qs" : "50 Qs"}
                      marks={t.n % 2 === 0 ? "50.00 marks" : "100.00 marks"}
                      title={`Constitutional Basics & Evolution - Test ${t.n} (${t.n % 2 === 0 ? "25Q" : "50Q"})`}
                      highlighted={t.highlighted}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Economy */}
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              2. Economy
            </h2>
            <div className="ml-4 mt-4 border-l-2 border-card-border pl-6">
              <h3 className="text-base font-semibold text-text-primary">
                2.1 Indian Economy: Growth, Development & Challenges
              </h3>
              <div className="ml-4 mt-3 border-l-2 border-card-border pl-6 space-y-3">
                <h4 className="text-sm font-medium text-text-secondary">
                  2.1.1 Fiscal Policy & Budgeting
                </h4>
                <div className="space-y-3">
                  <TestCard
                    status="attempted"
                    freeOrPro="Free"
                    code="ECO_FP_001"
                    year={2026}
                    duration="60 mins"
                    questions="50 Qs"
                    marks="100.00 marks"
                    title="Fiscal Policy & Budgeting - Test 1 (50Q)"
                    score="64.20/100.00 (64.2%)"
                    lastTaken="Last taken: 12 Feb 2026"
                  />
                  <TestCard
                    status="open"
                    freeOrPro="Free"
                    code="ECO_FP_002"
                    year={2026}
                    duration="30 mins"
                    questions="25 Qs"
                    marks="50.00 marks"
                    title="Fiscal Policy & Budgeting - Test 2 (25Q)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Geography */}
          <div>
            <h2 className="text-lg font-bold text-text-primary">
              3. Geography
            </h2>
            <div className="ml-4 mt-4 border-l-2 border-card-border pl-6">
              <h3 className="text-base font-semibold text-text-primary">
                3.1 Physical Geography & Climate
              </h3>
              <div className="ml-4 mt-3 border-l-2 border-card-border pl-6 space-y-3">
                <h4 className="text-sm font-medium text-text-secondary">
                  3.1.1 Climatology & Atmospheric Circulation
                </h4>
                <div className="space-y-3">
                  <TestCard
                    status="open"
                    freeOrPro="Free"
                    code="GEO_PC_001"
                    year={2026}
                    duration="60 mins"
                    questions="50 Qs"
                    marks="100.00 marks"
                    title="Climatology & Atmospheric Circulation - Test 1 (50Q)"
                  />
                  <TestCard
                    status="open"
                    freeOrPro="Pro"
                    code="GEO_PC_002"
                    year={2026}
                    duration="30 mins"
                    questions="25 Qs"
                    marks="50.00 marks"
                    title="Climatology & Atmospheric Circulation - Test 2 (25Q)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
