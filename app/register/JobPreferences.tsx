"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

export default function JobPreferences({ onBack, onNext }: NavigationProps) {
  const [form, setForm] = useState({
    targetTitles: "",
    preferredLocations: "",
    willingToRelocate: false,
    remotePreference: "any",
    employmentTypes: [] as string[],
    preferredIndustries: "",
    preferredCompanySizes: "",
    minimumSalary: "",
    expectedSalary: "",
    salaryCurrency: "INR",
    noticePeriod: "",
    visaSponsorshipRequired: false,
    workAuthorization: "",
    preferredTechStack: "",
    excludedCompanies: "",
    excludedRoles: "",
  });

  const update = (field: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleEmployment = (value: string) => {
    setForm((prev) => ({
      ...prev,
      employmentTypes: prev.employmentTypes.includes(value)
        ? prev.employmentTypes.filter((item) => item !== value)
        : [...prev.employmentTypes, value],
    }));
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Job Preferences
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Tell us what kind of opportunities you are looking for.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-5">

        {/* Titles */}
        <div>
          <label className="label">
            Target Job Titles
          </label>

          <input
            value={form.targetTitles}
            onChange={(e) =>
              update("targetTitles", e.target.value)
            }
            placeholder="e.g. Full Stack Developer, Node.js Developer"
            className="input"
          />
        </div>

        {/* Locations */}
        <div className="mt-5">
          <label className="label">
            Preferred Locations
          </label>

          <input
            value={form.preferredLocations}
            onChange={(e) =>
              update("preferredLocations", e.target.value)
            }
            placeholder="e.g. Noida, Delhi, Bangalore"
            className="input"
          />
        </div>

        <label className="mt-5 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.willingToRelocate}
            onChange={(e) =>
              update("willingToRelocate", e.target.checked)
            }
          />
          Willing to relocate
        </label>

        {/* Remote */}
        <div className="mt-5">
          <label className="label">
            Remote Preference
          </label>

          <select
            value={form.remotePreference}
            onChange={(e) =>
              update("remotePreference", e.target.value)
            }
            className="input"
          >
            <option value="any">Any</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>
        </div>

        {/* Employment */}
        <div className="mt-5">
          <label className="label">
            Employment Types
          </label>

          <div className="flex flex-wrap gap-3">

            {[
              "Full-time",
              "Part-time",
              "Contract",
              "Freelance",
              "Internship",
            ].map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={form.employmentTypes.includes(type)}
                  onChange={() =>
                    toggleEmployment(type)
                  }
                />

                {type}
              </label>
            ))}

          </div>
        </div>

        {/* Industries */}
        <div className="mt-5">
          <label className="label">
            Preferred Industries
          </label>

          <input
            value={form.preferredIndustries}
            onChange={(e) =>
              update("preferredIndustries", e.target.value)
            }
            placeholder="e.g. SaaS, FinTech, Healthcare"
            className="input"
          />
        </div>

        {/* Company Size */}
        <div className="mt-5">
          <label className="label">
            Preferred Company Sizes
          </label>

          <input
            value={form.preferredCompanySizes}
            onChange={(e) =>
              update("preferredCompanySizes", e.target.value)
            }
            placeholder="e.g. Startup, Mid-size, Enterprise"
            className="input"
          />
        </div>

        {/* Salary */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          <div>
            <label className="label">
              Minimum Salary
            </label>

            <input
              type="number"
              value={form.minimumSalary}
              onChange={(e) =>
                update("minimumSalary", e.target.value)
              }
              className="input"
              placeholder="500000"
            />
          </div>

          <div>
            <label className="label">
              Expected Salary
            </label>

            <input
              type="number"
              value={form.expectedSalary}
              onChange={(e) =>
                update("expectedSalary", e.target.value)
              }
              className="input"
              placeholder="650000"
            />
          </div>

          <div>
            <label className="label">
              Currency
            </label>

            <select
              value={form.salaryCurrency}
              onChange={(e) =>
                update("salaryCurrency", e.target.value)
              }
              className="input"
            >
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
            </select>
          </div>

        </div>

        {/* Notice */}
        <div className="mt-5">
          <label className="label">
            Notice Period
          </label>

          <select
            value={form.noticePeriod}
            onChange={(e) =>
              update("noticePeriod", e.target.value)
            }
            className="input"
          >
            <option value="">Select</option>
            <option value="immediate">Immediate</option>
            <option value="15-days">15 Days</option>
            <option value="30-days">30 Days</option>
            <option value="45-days">45 Days</option>
            <option value="60-days">60 Days</option>
            <option value="90-days">90 Days</option>
          </select>
        </div>

        {/* Authorization */}
        <div className="mt-5">
          <label className="label">
            Work Authorization
          </label>

          <input
            value={form.workAuthorization}
            onChange={(e) =>
              update("workAuthorization", e.target.value)
            }
            placeholder="e.g. Authorized to work in India"
            className="input"
          />
        </div>

        <label className="mt-5 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.visaSponsorshipRequired}
            onChange={(e) =>
              update(
                "visaSponsorshipRequired",
                e.target.checked
              )
            }
          />

          Visa sponsorship required
        </label>

        {/* Tech Stack */}
        <div className="mt-5">
          <label className="label">
            Preferred Tech Stack
          </label>

          <textarea
            rows={3}
            value={form.preferredTechStack}
            onChange={(e) =>
              update("preferredTechStack", e.target.value)
            }
            placeholder="React, Node.js, TypeScript, MongoDB..."
            className="textarea"
          />
        </div>

        {/* Exclusions */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">

          <div>
            <label className="label">
              Excluded Companies
            </label>

            <input
              value={form.excludedCompanies}
              onChange={(e) =>
                update("excludedCompanies", e.target.value)
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Excluded Roles
            </label>

            <input
              value={form.excludedRoles}
              onChange={(e) =>
                update("excludedRoles", e.target.value)
              }
              className="input"
            />
          </div>

        </div>

      </div>

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