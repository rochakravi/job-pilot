"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

export default function RecruiterCareerProfile({ onBack, onNext, isLastStep }: NavigationProps) {
  const [form, setForm] = useState({
    headline: "",
    professionalSummary: "",
    topStrengths: "",
    careerGoals: "",
    preferredRoles: "",
    preferredIndustries: "",
    notableAchievements: "",
    leadershipExperience: "",
    communicationPreferences: "",
    interviewAvailability: "",
    relocationPreference: "",
    workAuthorization: "",
    visaStatus: "",
    noticePeriod: "",
    reasonsForJobSearch: "",
    salaryExpectations: "",
    recruiterNotes: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Recruiter / Career Profile
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Provide additional information that helps recruiters understand
          your career goals and preferences.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">

        {/* Headline */}
        <div>
          <label className="label">
            Professional Headline
          </label>

          <input
            value={form.headline}
            onChange={(e) =>
              update("headline", e.target.value)
            }
            placeholder="e.g. Full Stack Developer | React | Node.js | Laravel"
            className="input"
          />

          <p className="mt-1 text-xs text-slate-400">
            A short headline recruiters can quickly understand.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-5">
          <label className="label">
            Recruiter Professional Summary
          </label>

          <textarea
            rows={5}
            value={form.professionalSummary}
            onChange={(e) =>
              update(
                "professionalSummary",
                e.target.value
              )
            }
            placeholder="Tell recruiters about your professional background..."
            className="textarea"
          />
        </div>

        {/* Strengths */}
        <div className="mt-5">
          <label className="label">
            Top Strengths
          </label>

          <input
            value={form.topStrengths}
            onChange={(e) =>
              update("topStrengths", e.target.value)
            }
            placeholder="e.g. Problem solving, API development, debugging"
            className="input"
          />
        </div>

        {/* Career Goals */}
        <div className="mt-5">
          <label className="label">
            Career Goals
          </label>

          <textarea
            rows={3}
            value={form.careerGoals}
            onChange={(e) =>
              update("careerGoals", e.target.value)
            }
            placeholder="Where do you want your career to go?"
            className="textarea"
          />
        </div>

        {/* Preferred Roles */}
        <div className="mt-5">
          <label className="label">
            Preferred Roles
          </label>

          <input
            value={form.preferredRoles}
            onChange={(e) =>
              update("preferredRoles", e.target.value)
            }
            placeholder="Full Stack Developer, Node.js Developer..."
            className="input"
          />
        </div>

        {/* Industries */}
        <div className="mt-5">
          <label className="label">
            Preferred Industries
          </label>

          <input
            value={form.preferredIndustries}
            onChange={(e) =>
              update(
                "preferredIndustries",
                e.target.value
              )
            }
            placeholder="SaaS, FinTech, Healthcare..."
            className="input"
          />
        </div>

        {/* Achievements */}
        <div className="mt-5">
          <label className="label">
            Notable Achievements
          </label>

          <textarea
            rows={4}
            value={form.notableAchievements}
            onChange={(e) =>
              update(
                "notableAchievements",
                e.target.value
              )
            }
            placeholder="Mention important career achievements..."
            className="textarea"
          />
        </div>

        {/* Leadership */}
        <div className="mt-5">
          <label className="label">
            Leadership Experience
          </label>

          <textarea
            rows={3}
            value={form.leadershipExperience}
            onChange={(e) =>
              update(
                "leadershipExperience",
                e.target.value
              )
            }
            placeholder="Describe mentoring, team leadership, ownership..."
            className="textarea"
          />
        </div>

        {/* Communication */}
        <div className="mt-5">
          <label className="label">
            Communication Preferences
          </label>

          <select
            value={form.communicationPreferences}
            onChange={(e) =>
              update(
                "communicationPreferences",
                e.target.value
              )
            }
            className="input"
          >
            <option value="">
              Select preference
            </option>

            <option value="email">
              Email
            </option>

            <option value="phone">
              Phone
            </option>

            <option value="whatsapp">
              WhatsApp
            </option>

            <option value="linkedin">
              LinkedIn
            </option>

            <option value="any">
              Any
            </option>
          </select>
        </div>

        {/* Interview Availability */}
        <div className="mt-5">
          <label className="label">
            Interview Availability
          </label>

          <input
            value={form.interviewAvailability}
            onChange={(e) =>
              update(
                "interviewAvailability",
                e.target.value
              )
            }
            placeholder="e.g. Weekdays after 7:45 PM, Saturday anytime"
            className="input"
          />
        </div>

        {/* Relocation */}
        <div className="mt-5">
          <label className="label">
            Relocation Preference
          </label>

          <select
            value={form.relocationPreference}
            onChange={(e) =>
              update(
                "relocationPreference",
                e.target.value
              )
            }
            className="input"
          >
            <option value="">
              Select
            </option>

            <option value="no">
              Not willing to relocate
            </option>

            <option value="within-city">
              Within current city
            </option>

            <option value="india">
              Anywhere in India
            </option>

            <option value="international">
              International
            </option>
          </select>
        </div>

        {/* Authorization + Visa */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">

          <div>
            <label className="label">
              Work Authorization
            </label>

            <input
              value={form.workAuthorization}
              onChange={(e) =>
                update(
                  "workAuthorization",
                  e.target.value
                )
              }
              placeholder="e.g. Authorized to work in India"
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Visa Status
            </label>

            <input
              value={form.visaStatus}
              onChange={(e) =>
                update("visaStatus", e.target.value)
              }
              placeholder="e.g. Not required"
              className="input"
            />
          </div>

        </div>

        {/* Notice */}
        <div className="mt-5">
          <label className="label">
            Notice Period
          </label>

          <input
            value={form.noticePeriod}
            onChange={(e) =>
              update("noticePeriod", e.target.value)
            }
            placeholder="e.g. 45 days"
            className="input"
          />
        </div>

        {/* Job Search Reason */}
        <div className="mt-5">
          <label className="label">
            Reason for Job Search
          </label>

          <textarea
            rows={3}
            value={form.reasonsForJobSearch}
            onChange={(e) =>
              update(
                "reasonsForJobSearch",
                e.target.value
              )
            }
            placeholder="What are you looking for in your next opportunity?"
            className="textarea"
          />
        </div>

        {/* Salary */}
        <div className="mt-5">
          <label className="label">
            Salary Expectations
          </label>

          <input
            value={form.salaryExpectations}
            onChange={(e) =>
              update(
                "salaryExpectations",
                e.target.value
              )
            }
            placeholder="e.g. ₹6–8 LPA"
            className="input"
          />
        </div>

        {/* Recruiter Notes */}
        <div className="mt-5">
          <label className="label">
            Additional Recruiter Notes
          </label>

          <textarea
            rows={4}
            value={form.recruiterNotes}
            onChange={(e) =>
              update(
                "recruiterNotes",
                e.target.value
              )
            }
            placeholder="Anything else recruiters should know..."
            className="textarea"
          />
        </div>

      </div>

      {/* Completion */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-5">

        <div className="flex items-start gap-3">

          <div className="text-xl">
            ✓
          </div>

          <div>
            <h3 className="font-semibold text-green-900">
              Profile almost complete
            </h3>

            <p className="mt-1 text-sm text-green-700">
              Review your information before submitting your
              registration.
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200 pt-6">

        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onNext}
          className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          {isLastStep ? "Complete Registration" : "Continue →"}
        </button>

      </div>

    </div>
  );
}