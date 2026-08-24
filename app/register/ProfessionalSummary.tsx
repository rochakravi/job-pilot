"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

export default function ProfessionalSummary({ onBack, onNext }: NavigationProps) {
  const [summary, setSummary] = useState("");

  const maxLength = 1000;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Professional Summary
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Write a short summary that highlights your experience, skills and
          career strengths.
        </p>
      </div>

      {/* Summary */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Professional Summary <span className="text-red-500">*</span>
        </label>

        <textarea
          value={summary}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setSummary(e.target.value);
            }
          }}
          rows={8}
          placeholder=""
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />

        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Keep your summary concise and focused on your professional
            experience.
          </p>

          <span className="text-xs text-slate-400">
            {summary.length}/{maxLength}
          </span>
        </div>
      </div>

      {/* Tips */}
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h3 className="text-sm font-semibold text-blue-900">
          💡 Tips for a good summary
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-blue-800">
          <li>• Mention your years of professional experience.</li>
          <li>• Highlight your strongest technical skills.</li>
          <li>• Mention the type of applications you have built.</li>
          <li>• Keep it relevant to the jobs you want.</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onNext}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}