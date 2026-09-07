"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import QuestionCard from "@/components/QuestionCard";
import { Search } from "lucide-react";

const filterGroups = [
  {
    name: "Exam",
    options: [
      { label: "IAS", count: 12840 },
      { label: "CDS-I", count: 2105 },
      { label: "CDS-II", count: 1987 },
      { label: "CAPF", count: 1456 },
      { label: "NDA-II", count: 1234 },
      { label: "NDA-I", count: 1198 },
      { label: "CISF", count: 876 },
      { label: "UPPCS", count: 2345 },
      { label: "UPPSC", count: 2120 },
      { label: "CGS", count: 654 },
    ],
  },
  {
    name: "Year",
    options: [
      { label: "2026", count: 708 },
      { label: "2025", count: 956 },
      { label: "2024", count: 1095 },
      { label: "2023", count: 951 },
      { label: "2022", count: 956 },
      { label: "2021", count: 892 },
      { label: "2020", count: 873 },
      { label: "2019", count: 901 },
      { label: "2018", count: 845 },
      { label: "2017", count: 832 },
      { label: "1994", count: 150 },
    ],
  },
  {
    name: "Subject",
    options: [
      { label: "Science & Technology", count: 3421 },
      { label: "History & Culture", count: 2987 },
      { label: "Geography", count: 2654 },
      { label: "Polity & Governance", count: 2432 },
      { label: "Economy", count: 2198 },
      { label: "Miscellaneous & General Knowledge", count: 1876 },
      { label: "Environment & Ecology", count: 1654 },
      { label: "International Relations & Global Affairs", count: 1234 },
      { label: "NA", count: 45 },
      { label: "CUL-02", count: 23 },
      { label: "CUL", count: 18 },
      { label: "CUL-01", count: 15 },
      { label: "ENG", count: 12 },
      { label: "POL-11", count: 8 },
    ],
  },
];

const mockQuestions = [
  {
    exam: "IAS",
    year: 2024,
    questionNumber: 14,
    subject: "Geography",
    subjectBreadcrumb: "World Physical Geography › Atmospheric heat balance",
    stem: "Consider the following statements:",
    statements: [
      {
        label: "Statement-I:",
        text: "The albedo of a surface is the fraction of incident solar radiation reflected back into space.",
      },
      {
        label: "Statement-II:",
        text: "Fresh snow has a higher albedo than a dense forest canopy.",
      },
    ],
    prompt:
      "Which one of the following is correct in respect of the above statements?",
    options: [
      { label: "A", text: "Both Statement-I and Statement-II are correct and Statement-II explains Statement-I" },
      { label: "B", text: "Both Statement-I and Statement-II are correct but Statement-II does not explain Statement-I" },
      { label: "C", text: "Statement-I is correct but Statement-II is incorrect" },
      { label: "D", text: "Statement-I is incorrect but Statement-II is correct" },
    ],
  },
  {
    exam: "IAS",
    year: 2023,
    questionNumber: 8,
    subject: "International Relations",
    subjectBreadcrumb: "India's Neighbours › India–China relations",
    stem: "With respect to the International Solar Alliance (ISA), consider the following statements:",
    statements: [
      { label: "1.", text: "The ISA is a treaty-based intergovernmental organization." },
      { label: "2.", text: "The ISA was jointly launched by India and France in 2015." },
    ],
    prompt: "Which of the statements given above is/are correct?",
    options: [
      { label: "A", text: "1 only" },
      { label: "B", text: "2 only" },
      { label: "C", text: "Both 1 and 2" },
      { label: "D", text: "Neither 1 nor 2" },
    ],
  },
  {
    exam: "CDS-I",
    year: 2024,
    questionNumber: 32,
    subject: "Science & Technology",
    subjectBreadcrumb: "Space Technology › Launch vehicles",
    stem: "Consider the following pairs:",
    statements: [
      { label: "1.", text: "GSLV Mk III — Cryogenic upper stage" },
      { label: "2.", text: "PSLV — Liquid strap-on boosters" },
      { label: "3.", text: "SSLV — Solid-fueled first stage" },
    ],
    prompt: "How many of the above pairs are correctly matched?",
    options: [
      { label: "A", text: "Only one" },
      { label: "B", text: "Only two" },
      { label: "C", text: "All three" },
      { label: "D", text: "None" },
    ],
  },
  {
    exam: "IAS",
    year: 2025,
    questionNumber: 21,
    subject: "Polity & Governance",
    subjectBreadcrumb: "Constitutional Bodies › Finance Commission",
    stem: "With reference to the Finance Commission of India, consider the following statements:",
    statements: [
      { label: "1.", text: "It is a constitutional body constituted under Article 280." },
      { label: "2.", text: "The Chairman of the Commission must be a person having experience in public affairs." },
      { label: "3.", text: "The recommendations of the Commission are binding on the Government." },
    ],
    prompt: "How many of the above statements are correct?",
    options: [
      { label: "A", text: "Only one" },
      { label: "B", text: "Only two" },
      { label: "C", text: "All three" },
      { label: "D", text: "None" },
    ],
  },
  {
    exam: "CAPF",
    year: 2024,
    questionNumber: 5,
    subject: "Economy",
    subjectBreadcrumb: "Banking & Finance › RBI functions",
    stem: "Consider the following statements regarding the Monetary Policy Committee (MPC) of India:",
    statements: [
      { label: "1.", text: "It is a statutory body constituted under the RBI Act, 1934." },
      { label: "2.", text: "The MPC decides the repo rate by majority vote." },
    ],
    prompt: "Which of the statements given above is/are correct?",
    options: [
      { label: "A", text: "1 only" },
      { label: "B", text: "2 only" },
      { label: "C", text: "Both 1 and 2" },
      { label: "D", text: "Neither 1 nor 2" },
    ],
  },
  {
    exam: "IAS",
    year: 2022,
    questionNumber: 41,
    subject: "Environment & Ecology",
    subjectBreadcrumb: "Biodiversity › Protected areas",
    stem: "Which of the following Protected Areas are declared as Tiger Reserves?",
    statements: [
      { label: "1.", text: "Bandipur National Park" },
      { label: "2.", text: "Bhitarkanika National Park" },
      { label: "3.", text: "Manas National Park" },
    ],
    prompt: "Select the correct answer using the code given below:",
    options: [
      { label: "A", text: "1 and 2 only" },
      { label: "B", text: "2 and 3 only" },
      { label: "C", text: "1 and 3 only" },
      { label: "D", text: "1, 2 and 3" },
    ],
  },
];

export default function TopicIntelligencePage() {
  const [hasFilters, setHasFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen bg-page-bg">
      <Navbar authState="logged-in" username="Aspirant" variant="app" />
      <div className="mx-auto max-w-[1300px] px-6 py-6">
        <div className="flex gap-6">
          {/* Left sidebar */}
          <div className="hidden w-[220px] shrink-0 lg:block">
            <FilterSidebar
              groups={filterGroups}
              showReset={hasFilters}
              onReset={() => setHasFilters(false)}
            />
          </div>

          {/* Right main column */}
          <div className="min-w-0 flex-1">
            {/* Top bar */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-text-secondary">
                Researching any topic?
              </span>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  placeholder="Type a keyword or concept"
                  className="w-full rounded-lg border border-card-border bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                />
              </div>
              <button className="rounded-lg gradient-primary px-5 py-2 text-sm font-semibold text-white">
                Analyze
              </button>
              {hasFilters && (
                <button
                  onClick={() => setHasFilters(false)}
                  className="rounded-lg border border-card-border px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Question cards */}
            <div className="space-y-4">
              {mockQuestions.map((q, i) => (
                <QuestionCard key={i} {...q} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`h-8 w-8 rounded-lg text-sm font-medium ${
                    currentPage === p
                      ? "bg-primary-blue text-white"
                      : "text-text-secondary hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-1 text-text-muted">…</span>
              <button className="h-8 rounded-lg px-2 text-sm font-medium text-text-secondary hover:bg-gray-100">
                Next ›
              </button>
              <button className="h-8 rounded-lg px-2 text-sm font-medium text-text-secondary hover:bg-gray-100">
                Last »
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
