"use client";

import type { NavigationProps } from "./navigation";

export default function PersonalInformation({ onNext }: NavigationProps) {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Tell us about yourself.
        </p>
      </div>

      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Last Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

      </div>

      {/* Middle Name + DOB */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Middle Name
          </label>

          <input
            type="text"
            placeholder="Enter your middle name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Date of Birth
          </label>

          <input
            type="date"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

      </div>

      {/* Current Location + Preferred Location */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Current Location <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="e.g. Mohali, Punjab"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Preferred Location
          </label>

          <input
            type="text"
            placeholder="e.g. Noida, Bangalore"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

      </div>

      {/* Qualification */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Highest Qualification
        </label>

        <select
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        >
          <option value="" disabled>
            Select your highest qualification
          </option>

          <option value="high-school">
            High School
          </option>

          <option value="diploma">
            Diploma
          </option>

          <option value="bachelors">
            Bachelor's Degree
          </option>

          <option value="masters">
            Master's Degree
          </option>

          <option value="phd">
            PhD
          </option>

          <option value="other">
            Other
          </option>
        </select>
      </div>

      {/* LinkedIn + GitHub */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            LinkedIn URL
          </label>

          <input
            type="url"
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            GitHub URL
          </label>

          <input
            type="url"
            placeholder="https://github.com/username"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

      </div>

      {/* Portfolio */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Portfolio URL
        </label>

        <input
          type="url"
          placeholder="https://yourportfolio.com"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-end border-t border-slate-200 pt-6">

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