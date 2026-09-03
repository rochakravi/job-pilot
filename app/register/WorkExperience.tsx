"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type Experience = {
  company: string;
  title: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  shortDescription: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  languages: string[];
  tools: string[];
  teamSize: number;
  managedPeople: number;
  domain: string;
  reasonForLeaving: string;
};

export default function WorkExperience({ onBack, onNext }: NavigationProps) {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const emptyExperience: Experience = {
    company: "",
    title: "",
    employmentType: "full-time",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    shortDescription: "",
    responsibilities: [],
    achievements: [],
    technologies: [],
    languages: [],
    tools: [],
    teamSize: 0,
    managedPeople: 0,
    domain: "",
    reasonForLeaving: "",
  };

  const [form, setForm] = useState<Experience>(emptyExperience);

  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [achievementInput, setAchievementInput] = useState("");
  const [technologyInput, setTechnologyInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [toolInput, setToolInput] = useState("");

  const update = (
    field: keyof Experience,
    value: string | number | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addToArray = (
    field: "responsibilities" | "achievements" | "technologies" | "languages" | "tools",
    value: string,
    setter: (value: string) => void
  ) => {
    if (!value.trim()) return;

    setForm((prev) => ({
      ...prev,
      [field]: [...prev[field], value.trim()],
    }));

    setter("");
  };

  const addExperience = () => {
    if (!form.company || !form.title) return;

    setExperiences((prev) => [...prev, form]);
    setForm(emptyExperience);

    setResponsibilityInput("");
    setAchievementInput("");
    setTechnologyInput("");
    setLanguageInput("");
    setToolInput("");
  };

  const removeExperience = (index: number) => {
    setExperiences((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Work Experience
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your professional work experience.
        </p>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="mb-5 font-semibold text-slate-900">
          Add Work Experience
        </h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="label">Company *</label>
            <input
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="e.g. Rudra Innovative Pvt Ltd"
              className="input"
            />
          </div>

          <div>
            <label className="label">Job Title *</label>
            <input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="e.g. Full Stack Developer"
              className="input"
            />
          </div>

          <div>
            <label className="label">Employment Type</label>

            <select
              value={form.employmentType}
              onChange={(e) =>
                update("employmentType", e.target.value)
              }
              className="input"
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          <div>
            <label className="label">Location</label>
            <input
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="e.g. Mohali, Punjab"
              className="input"
            />
          </div>

          <div>
            <label className="label">Start Date</label>
            <input
              type="month"
              value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)}
              className="input"
            />
          </div>

          <div>
            <label className="label">End Date</label>
            <input
              type="month"
              disabled={form.currentlyWorking}
              value={form.endDate}
              onChange={(e) => update("endDate", e.target.value)}
              className="input disabled:bg-slate-100"
            />
          </div>

        </div>

        <label className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={form.currentlyWorking}
            onChange={(e) =>
              update("currentlyWorking", e.target.checked)
            }
            className="h-4 w-4 rounded border-slate-300 text-blue-600"
          />
          I currently work here
        </label>

        <div className="mt-5">
          <label className="label">Domain</label>

          <input
            value={form.domain}
            onChange={(e) => update("domain", e.target.value)}
            placeholder="e.g. Healthcare, E-commerce, SaaS"
            className="input"
          />
        </div>

        <div className="mt-5">
          <label className="label">Short Description</label>

          <textarea
            rows={3}
            value={form.shortDescription}
            onChange={(e) =>
              update("shortDescription", e.target.value)
            }
            placeholder="Briefly describe your role..."
            className="textarea"
          />
        </div>

        {/* Responsibilities */}
        <ArrayInput
          label="Responsibilities"
          value={responsibilityInput}
          setValue={setResponsibilityInput}
          items={form.responsibilities}
          onAdd={() =>
            addToArray(
              "responsibilities",
              responsibilityInput,
              setResponsibilityInput
            )
          }
        />

        {/* Achievements */}
        <ArrayInput
          label="Achievements"
          value={achievementInput}
          setValue={setAchievementInput}
          items={form.achievements}
          onAdd={() =>
            addToArray(
              "achievements",
              achievementInput,
              setAchievementInput
            )
          }
        />

        {/* Technologies */}
        <ArrayInput
          label="Technologies"
          value={technologyInput}
          setValue={setTechnologyInput}
          items={form.technologies}
          onAdd={() =>
            addToArray(
              "technologies",
              technologyInput,
              setTechnologyInput
            )
          }
        />

        {/* Languages */}
        <ArrayInput
          label="Programming Languages"
          value={languageInput}
          setValue={setLanguageInput}
          items={form.languages}
          onAdd={() =>
            addToArray(
              "languages",
              languageInput,
              setLanguageInput
            )
          }
        />

        {/* Tools */}
        <ArrayInput
          label="Tools"
          value={toolInput}
          setValue={setToolInput}
          items={form.tools}
          onAdd={() =>
            addToArray(
              "tools",
              toolInput,
              setToolInput
            )
          }
        />

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="label">Team Size</label>

            <input
              type="number"
              min="0"
              value={form.teamSize}
              onChange={(e) =>
                update("teamSize", Number(e.target.value))
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">People Managed</label>

            <input
              type="number"
              min="0"
              value={form.managedPeople}
              onChange={(e) =>
                update("managedPeople", Number(e.target.value))
              }
              className="input"
            />
          </div>

        </div>

        {!form.currentlyWorking && (
          <div className="mt-5">
            <label className="label">Reason for Leaving</label>

            <input
              value={form.reasonForLeaving}
              onChange={(e) =>
                update("reasonForLeaving", e.target.value)
              }
              placeholder="e.g. Career growth"
              className="input"
            />
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={addExperience}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Add Experience
          </button>
        </div>

      </div>

      {/* Existing Experiences */}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-5"
        >
          <div className="flex justify-between">

            <div>
              <h3 className="font-semibold text-slate-900">
                {experience.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {experience.company} • {experience.location}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {experience.startDate} —{" "}
                {experience.currentlyWorking
                  ? "Present"
                  : experience.endDate}
              </p>
            </div>

            <button
              onClick={() => removeExperience(index)}
              className="text-sm font-medium text-red-500"
            >
              Remove
            </button>

          </div>

          {experience.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Navigation */}
      <Navigation onBack={onBack} onNext={onNext} />

    </div>
  );
}

function ArrayInput({
  label,
  value,
  setValue,
  items,
  onAdd,
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  items: string[];
  onAdd: () => void;
}) {
  return (
    <div className="mt-5">

      <label className="label">{label}</label>

      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Add ${label.toLowerCase()}`}
          className="input"
        />

        <button
          type="button"
          onClick={onAdd}
          className="rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium hover:bg-slate-50"
        >
          Add
        </button>
      </div>

      {items.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}

function Navigation({ onBack, onNext }: NavigationProps) {
  return (
    <div className="flex items-center justify-between border-t border-slate-200 pt-6">
      <button
        onClick={onBack}
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
      >
        ← Back
      </button>

      <button
        onClick={onNext}
        type="button"
        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Continue →
      </button>
    </div>
  );
}