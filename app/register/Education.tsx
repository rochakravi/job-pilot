"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type EducationItem = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  location: string;
  shortDescription: string;
};

export default function Education({ onBack, onNext }: NavigationProps) {
  const [education, setEducation] = useState<EducationItem[]>([]);

  const empty: EducationItem = {
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    location: "",
    shortDescription: "",
  };

  const [form, setForm] = useState(empty);

  const update = (field: keyof EducationItem, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addEducation = () => {
    if (!form.institution || !form.degree) return;

    setEducation((prev) => [...prev, form]);
    setForm(empty);
  };

  const removeEducation = (index: number) => {
    setEducation((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Education
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your academic qualifications.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="mb-5 font-semibold">
          Add Education
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="label">Institution *</label>
            <input
              value={form.institution}
              onChange={(e) =>
                update("institution", e.target.value)
              }
              placeholder="University / College"
              className="input"
            />
          </div>

          <div>
            <label className="label">Degree *</label>
            <input
              value={form.degree}
              onChange={(e) =>
                update("degree", e.target.value)
              }
              placeholder="B.Tech / MCA / BCA"
              className="input"
            />
          </div>

          <div>
            <label className="label">Field of Study</label>
            <input
              value={form.fieldOfStudy}
              onChange={(e) =>
                update("fieldOfStudy", e.target.value)
              }
              placeholder="Computer Science"
              className="input"
            />
          </div>

          <div>
            <label className="label">Grade / Percentage</label>
            <input
              value={form.grade}
              onChange={(e) =>
                update("grade", e.target.value)
              }
              placeholder="8.2 CGPA / 78%"
              className="input"
            />
          </div>

          <div>
            <label className="label">Start Date</label>
            <input
              type="month"
              value={form.startDate}
              onChange={(e) =>
                update("startDate", e.target.value)
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">End Date</label>
            <input
              type="month"
              value={form.endDate}
              onChange={(e) =>
                update("endDate", e.target.value)
              }
              className="input"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="label">Location</label>

          <input
            value={form.location}
            onChange={(e) =>
              update("location", e.target.value)
            }
            placeholder="City, State"
            className="input"
          />
        </div>

        <div className="mt-5">
          <label className="label">Description</label>

          <textarea
            rows={3}
            value={form.shortDescription}
            onChange={(e) =>
              update("shortDescription", e.target.value)
            }
            className="textarea"
          />
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={addEducation}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            + Add Education
          </button>
        </div>

      </div>

      {education.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Added education</h3>
            <span className="text-sm text-slate-500">{education.length} {education.length === 1 ? "entry" : "entries"}</span>
          </div>
        </div>
      )}

      {education.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
              <p className="mt-1 text-sm text-slate-500">{item.fieldOfStudy || "Field of study not provided"}</p>
              <p className="mt-2 text-xs text-slate-400">{item.startDate || "Start date"} - {item.endDate || "Present"}</p>
            </div>
            <button type="button" onClick={() => removeEducation(index)} className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">Remove</button>
          </div>
        </div>
      ))}

      <Navigation onBack={onBack} onNext={onNext} />
    </div>
  );
}

function Navigation({ onBack, onNext }: NavigationProps) {
  return (
    <div className="flex justify-between border-t pt-6">
      <button onClick={onBack} className="rounded-lg border px-6 py-3">
        ← Back
      </button>

      <button onClick={onNext} className="rounded-lg bg-blue-600 px-6 py-3 text-white">
        Continue →
      </button>
    </div>
  );
}