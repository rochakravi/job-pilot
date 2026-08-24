"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type Skill = {
  name: string;
  category: string;
  level: string;
  overallExperienceYears: number;
  relevantExperienceYears: number;
  lastUsed: string;
  shortDescription: string;
};

export default function Skills({ onBack, onNext }: NavigationProps) {
  const [skills, setSkills] = useState<Skill[]>([]);

  const [form, setForm] = useState<Skill>({
    name: "",
    category: "",
    level: "beginner",
    overallExperienceYears: 0,
    relevantExperienceYears: 0,
    lastUsed: "",
    shortDescription: "",
  });

  const handleChange = (
    field: keyof Skill,
    value: string | number
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addSkill = () => {
    if (!form.name.trim()) {
      return;
    }

    setSkills((prev) => [...prev, form]);

    setForm({
      name: "",
      category: "",
      level: "beginner",
      overallExperienceYears: 0,
      relevantExperienceYears: 0,
      lastUsed: "",
      shortDescription: "",
    });
  };

  const removeSkill = (index: number) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Skills
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your professional and technical skills.
        </p>
      </div>

      {/* Add Skill Form */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="mb-5 text-base font-semibold text-slate-900">
          Add a skill
        </h3>

        {/* Skill + Category */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Skill Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
              placeholder="e.g. React.js"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e) =>
                handleChange("category", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            >
              <option value="">
                Select category
              </option>

              <option value="frontend">
                Frontend
              </option>

              <option value="backend">
                Backend
              </option>

              <option value="database">
                Database
              </option>

              <option value="devops">
                DevOps / Cloud
              </option>

              <option value="testing">
                Testing
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

        </div>

        {/* Level + Experience */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Skill Level
            </label>

            <select
              value={form.level}
              onChange={(e) =>
                handleChange("level", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            >
              <option value="beginner">
                Beginner
              </option>

              <option value="intermediate">
                Intermediate
              </option>

              <option value="advanced">
                Advanced
              </option>

              <option value="expert">
                Expert
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Overall Experience
            </label>

            <input
              type="number"
              min="0"
              step="0.5"
              value={form.overallExperienceYears}
              onChange={(e) =>
                handleChange(
                  "overallExperienceYears",
                  Number(e.target.value)
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

            <p className="mt-1 text-xs text-slate-400">
              Years
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Relevant Experience
            </label>

            <input
              type="number"
              min="0"
              step="0.5"
              value={form.relevantExperienceYears}
              onChange={(e) =>
                handleChange(
                  "relevantExperienceYears",
                  Number(e.target.value)
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

            <p className="mt-1 text-xs text-slate-400">
              Years
            </p>
          </div>

        </div>

        {/* Last Used */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Last Used
          </label>

          <input
            type="text"
            value={form.lastUsed}
            onChange={(e) =>
              handleChange("lastUsed", e.target.value)
            }
            placeholder="e.g. August 2026"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

        </div>

        {/* Description */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Short Description
          </label>

          <textarea
            rows={3}
            value={form.shortDescription}
            onChange={(e) =>
              handleChange(
                "shortDescription",
                e.target.value
              )
            }
            placeholder="Briefly describe how you have used this skill..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

        </div>

        {/* Add Button */}
        <div className="mt-5 flex justify-end">

          <button
            type="button"
            onClick={addSkill}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Skill
          </button>

        </div>

      </div>

      {/* Added Skills */}
      {skills.length > 0 && (
        <div>

          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">
              Added Skills
            </h3>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              {skills.length}{" "}
              {skills.length === 1 ? "Skill" : "Skills"}
            </span>
          </div>

          <div className="space-y-3">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h4 className="font-semibold text-slate-900">
                      {skill.name}
                    </h4>

                    {skill.category && (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                        {skill.category}
                      </span>
                    )}

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs capitalize text-blue-600">
                      {skill.level}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {skill.overallExperienceYears} years overall
                    {" • "}
                    {skill.relevantExperienceYears} years relevant
                  </p>

                  {skill.shortDescription && (
                    <p className="mt-2 text-sm text-slate-600">
                      {skill.shortDescription}
                    </p>
                  )}

                </div>

                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="self-start rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

        </div>
      )}

      {/* Empty State */}
      {skills.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <div className="text-3xl">
            🛠️
          </div>

          <h3 className="mt-3 font-semibold text-slate-800">
            No skills added yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add your first skill using the form above.
          </p>

        </div>
      )}

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
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Continue →
        </button>

      </div>

    </div>
  );
}