"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type Tool = {
  name: string;
  category: string;
  level: string;
  overallExperienceYears: number;
  relevantExperienceYears: number;
  versionsKnown: string[];
  versionCurrentlyUsed: string;
  lastUsed: string;
  shortDescription: string;
  projectsUsedIn: string[];
};

export default function ToolsTechnologies({ onBack, onNext }: NavigationProps) {
  const [tools, setTools] = useState<Tool[]>([]);

  const [form, setForm] = useState<Tool>({
    name: "",
    category: "",
    level: "beginner",
    overallExperienceYears: 0,
    relevantExperienceYears: 0,
    versionsKnown: [],
    versionCurrentlyUsed: "",
    lastUsed: "",
    shortDescription: "",
    projectsUsedIn: [],
  });

  const [versionsInput, setVersionsInput] = useState("");
  const [projectsInput, setProjectsInput] = useState("");

  const updateForm = (
    field: keyof Tool,
    value: string | number | string[]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTool = () => {
    if (!form.name.trim()) {
      return;
    }

    const versions = versionsInput
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const projects = projectsInput
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const newTool: Tool = {
      ...form,
      versionsKnown: versions,
      projectsUsedIn: projects,
    };

    setTools((prev) => [...prev, newTool]);

    setForm({
      name: "",
      category: "",
      level: "beginner",
      overallExperienceYears: 0,
      relevantExperienceYears: 0,
      versionsKnown: [],
      versionCurrentlyUsed: "",
      lastUsed: "",
      shortDescription: "",
      projectsUsedIn: [],
    });

    setVersionsInput("");
    setProjectsInput("");
  };

  const removeTool = (index: number) => {
    setTools((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Tools & Technologies
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add the tools, platforms and technologies you have worked with.
        </p>
      </div>

      {/* Add Tool */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <h3 className="mb-5 text-base font-semibold text-slate-900">
          Add a tool or technology
        </h3>

        {/* Name + Category */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Tool / Technology{" "}
              <span className="text-red-500">*</span>
            </label>

            <select
              value={form.name}
              onChange={(e) =>
                updateForm("name", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            >
              <option value="">
                Select tool
              </option>

              <option value="Git">
                Git
              </option>

              <option value="GitHub">
                GitHub
              </option>

              <option value="GitLab">
                GitLab
              </option>

              <option value="Docker">
                Docker
              </option>

              <option value="AWS">
                AWS
              </option>

              <option value="AWS EC2">
                AWS EC2
              </option>

              <option value="AWS S3">
                AWS S3
              </option>

              <option value="AWS RDS">
                AWS RDS
              </option>

              <option value="AWS CloudFront">
                AWS CloudFront
              </option>

              <option value="Nginx">
                Nginx
              </option>

              <option value="Postman">
                Postman
              </option>

              <option value="VS Code">
                VS Code
              </option>

              <option value="Cursor">
                Cursor
              </option>

              <option value="Claude">
                Claude
              </option>

              <option value="ChatGPT">
                ChatGPT
              </option>

              <option value="Jira">
                Jira
              </option>

              <option value="Figma">
                Figma
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Category
            </label>

            <select
              value={form.category}
              onChange={(e) =>
                updateForm("category", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            >
              <option value="">
                Select category
              </option>

              <option value="version-control">
                Version Control
              </option>

              <option value="cloud">
                Cloud
              </option>

              <option value="devops">
                DevOps
              </option>

              <option value="database">
                Database
              </option>

              <option value="api">
                API / Testing
              </option>

              <option value="ide">
                IDE / Development
              </option>

              <option value="project-management">
                Project Management
              </option>

              <option value="design">
                Design
              </option>

              <option value="ai">
                AI Tools
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
              Proficiency Level
            </label>

            <select
              value={form.level}
              onChange={(e) =>
                updateForm("level", e.target.value)
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
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
                updateForm(
                  "overallExperienceYears",
                  Number(e.target.value)
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
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
                updateForm(
                  "relevantExperienceYears",
                  Number(e.target.value)
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />

            <p className="mt-1 text-xs text-slate-400">
              Years
            </p>
          </div>

        </div>

        {/* Versions */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Versions Known
          </label>

          <input
            type="text"
            value={versionsInput}
            onChange={(e) =>
              setVersionsInput(e.target.value)
            }
            placeholder="e.g. Git 2.x, Docker 24, Node 22"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

          <p className="mt-1 text-xs text-slate-400">
            Separate multiple versions with commas.
          </p>

        </div>

        {/* Current Version */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Version Currently Used
          </label>

          <input
            type="text"
            value={form.versionCurrentlyUsed}
            onChange={(e) =>
              updateForm(
                "versionCurrentlyUsed",
                e.target.value
              )
            }
            placeholder="e.g. Docker 27"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

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
              updateForm("lastUsed", e.target.value)
            }
            placeholder="e.g. August 2026"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
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
              updateForm(
                "shortDescription",
                e.target.value
              )
            }
            placeholder="Describe how you have used this tool..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

        </div>

        {/* Projects */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Projects Used In
          </label>

          <input
            type="text"
            value={projectsInput}
            onChange={(e) =>
              setProjectsInput(e.target.value)
            }
            placeholder="e.g. EMS, Chat App, Healthcare Project"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />

          <p className="mt-1 text-xs text-slate-400">
            Separate multiple projects with commas.
          </p>

        </div>

        {/* Add Button */}
        <div className="mt-5 flex justify-end">

          <button
            type="button"
            onClick={addTool}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Tool
          </button>

        </div>

      </div>

      {/* Added Tools */}
      {tools.length > 0 && (
        <div>

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-base font-semibold text-slate-900">
              Added Tools & Technologies
            </h3>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              {tools.length}{" "}
              {tools.length === 1 ? "Tool" : "Tools"}
            </span>

          </div>

          <div className="space-y-3">

            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h4 className="font-semibold text-slate-900">
                        {tool.name}
                      </h4>

                      {tool.category && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                          {tool.category}
                        </span>
                      )}

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs capitalize text-blue-600">
                        {tool.level}
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {tool.overallExperienceYears} years
                      overall
                      {" • "}
                      {tool.relevantExperienceYears} years
                      relevant
                    </p>

                    {tool.versionCurrentlyUsed && (
                      <p className="mt-1 text-sm text-slate-500">
                        Current version:{" "}
                        <span className="font-medium text-slate-700">
                          {tool.versionCurrentlyUsed}
                        </span>
                      </p>
                    )}

                    {tool.versionsKnown.length > 0 && (
                      <p className="mt-1 text-sm text-slate-500">
                        Versions:{" "}
                        {tool.versionsKnown.join(", ")}
                      </p>
                    )}

                    {tool.projectsUsedIn.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tool.projectsUsedIn.map(
                          (project) => (
                            <span
                              key={project}
                              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                            >
                              {project}
                            </span>
                          )
                        )}
                      </div>
                    )}

                    {tool.shortDescription && (
                      <p className="mt-3 text-sm text-slate-600">
                        {tool.shortDescription}
                      </p>
                    )}

                  </div>

                  <button
                    type="button"
                    onClick={() => removeTool(index)}
                    className="self-start rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      )}

      {/* Empty State */}
      {tools.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <div className="text-3xl">
            🧰
          </div>

          <h3 className="mt-3 font-semibold text-slate-800">
            No tools added yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Add tools and technologies that you use professionally.
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