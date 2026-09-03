"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type Project = {
  name: string;
  shortDescription: string;
  detailedDescription: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  languages: string[];
  tools: string[];
  teamSize: number;
  responsibilities: string[];
  achievements: string[];
  challenges: string[];
  solutions: string[];
  architecture: string;
  deployment: string;
  repositoryUrl: string;
  liveUrl: string;
  keywords: string[];
};

export default function Projects({ onBack, onNext }: NavigationProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  const empty: Project = {
    name: "",
    shortDescription: "",
    detailedDescription: "",
    role: "",
    startDate: "",
    endDate: "",
    technologies: [],
    languages: [],
    tools: [],
    teamSize: 0,
    responsibilities: [],
    achievements: [],
    challenges: [],
    solutions: [],
    architecture: "",
    deployment: "",
    repositoryUrl: "",
    liveUrl: "",
    keywords: [],
  };

  const [form, setForm] = useState(empty);

  const [tech, setTech] = useState("");
  const [language, setLanguage] = useState("");
  const [tool, setTool] = useState("");
  const [keyword, setKeyword] = useState("");

  const update = (field: keyof Project, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addItem = (
    field: "technologies" | "languages" | "tools" | "keywords",
    value: string,
    clear: (value: string) => void
  ) => {
    if (!value.trim()) return;

    update(field, [...form[field], value.trim()]);
    clear("");
  };

  const addProject = () => {
    if (!form.name.trim()) return;

    setProjects((prev) => [...prev, form]);
    setForm(empty);

    setTech("");
    setLanguage("");
    setTool("");
    setKeyword("");
  };

  const removeProject = (index: number) => {
    setProjects((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Projects
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Showcase your important professional and personal projects.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="mb-5 font-semibold">
          Add Project
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="label">Project Name *</label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Healthcare Management System"
              className="input"
            />
          </div>

          <div>
            <label className="label">Your Role</label>
            <input
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
              placeholder="e.g. Full Stack Developer"
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
              value={form.endDate}
              onChange={(e) => update("endDate", e.target.value)}
              className="input"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="label">Short Description</label>

          <textarea
            rows={3}
            value={form.shortDescription}
            onChange={(e) =>
              update("shortDescription", e.target.value)
            }
            className="textarea"
            placeholder="Brief project overview..."
          />
        </div>

        <div className="mt-5">
          <label className="label">Detailed Description</label>

          <textarea
            rows={5}
            value={form.detailedDescription}
            onChange={(e) =>
              update("detailedDescription", e.target.value)
            }
            className="textarea"
            placeholder="Explain the project in detail..."
          />
        </div>

        {/* Tags */}
        <TagInput
          label="Technologies"
          value={tech}
          setValue={setTech}
          items={form.technologies}
          onAdd={() =>
            addItem("technologies", tech, setTech)
          }
        />

        <TagInput
          label="Programming Languages"
          value={language}
          setValue={setLanguage}
          items={form.languages}
          onAdd={() =>
            addItem("languages", language, setLanguage)
          }
        />

        <TagInput
          label="Tools"
          value={tool}
          setValue={setTool}
          items={form.tools}
          onAdd={() =>
            addItem("tools", tool, setTool)
          }
        />

        <TagInput
          label="Keywords"
          value={keyword}
          setValue={setKeyword}
          items={form.keywords}
          onAdd={() =>
            addItem("keywords", keyword, setKeyword)
          }
        />

        <div className="mt-5">
          <label className="label">Architecture</label>

          <textarea
            rows={3}
            value={form.architecture}
            onChange={(e) =>
              update("architecture", e.target.value)
            }
            placeholder="e.g. React → Node.js → Express → MongoDB"
            className="textarea"
          />
        </div>

        <div className="mt-5">
          <label className="label">Deployment</label>

          <input
            value={form.deployment}
            onChange={(e) =>
              update("deployment", e.target.value)
            }
            placeholder="e.g. AWS EC2 + Nginx + Docker"
            className="input"
          />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">

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
            <label className="label">Repository URL</label>
            <input
              value={form.repositoryUrl}
              onChange={(e) =>
                update("repositoryUrl", e.target.value)
              }
              placeholder="https://github.com/..."
              className="input"
            />
          </div>

          <div>
            <label className="label">Live URL</label>
            <input
              value={form.liveUrl}
              onChange={(e) =>
                update("liveUrl", e.target.value)
              }
              placeholder="https://..."
              className="input"
            />
          </div>

        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={addProject}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Add Project
          </button>
        </div>

      </div>

      {projects.length > 0 && (
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Added projects</h3>
          <span className="text-sm text-slate-500">{projects.length} {projects.length === 1 ? "project" : "projects"}</span>
        </div>
      )}

      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{project.role || "Role not provided"}</p>
              {project.shortDescription && <p className="mt-3 text-sm text-slate-600">{project.shortDescription}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((item) => <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">{item}</span>)}
              </div>
            </div>
            <button type="button" onClick={() => removeProject(index)} className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">Remove</button>
          </div>
        </div>
      ))}

      <Navigation onBack={onBack} onNext={onNext} />
    </div>
  );
}

function TagInput({
  label,
  value,
  setValue,
  items,
  onAdd,
}: any) {
  return (
    <div className="mt-5">

      <label className="label">{label}</label>

      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
          placeholder={`Add ${label.toLowerCase()}`}
        />

        <button
          type="button"
          onClick={onAdd}
          className="rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Add
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item: string) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}

function Navigation({ onBack, onNext }: NavigationProps) {
  return (
    <div className="flex justify-between border-t pt-6">
      <button onClick={onBack} className="rounded-lg border px-6 py-3 text-sm font-semibold">
        ← Back
      </button>

      <button onClick={onNext} className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
        Continue →
      </button>
    </div>
  );
}