"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";
import ProfileService from "../api/profile/profile.service";

export default function PersonalInformation({ onNext, onProfileSaved }: NavigationProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    location: "",
    preferredLocation: "",
    highestQualification: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setError("");

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      // Request body expected by Spring Boot
      const profileData = {
        firstName: formData.firstName,
        middleName: formData.middleName || null,
        lastName: formData.lastName,
        dob: formData.dob || null,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || null,
        preferredLocation: formData.preferredLocation || null,
        highestQualification: formData.highestQualification || null,
        linkedinUrl: formData.linkedinUrl || null,
        githubUrl: formData.githubUrl || null,
        portfolioUrl: formData.portfolioUrl || null,
      };

      // 1. POST to backend
      const userProfile = await ProfileService.saveProfile(profileData);
      const savedProfileId =
        userProfile?.id ?? userProfile?.profileId ?? userProfile?.userId ?? null;

      if (savedProfileId != null) {
        setUserId(String(savedProfileId));
        onProfileSaved?.(String(savedProfileId));
      }

      console.log("user id:", savedProfileId);

      // 2. Only move to next page after successful API call
      onNext();
    } catch (err) {
      console.error("Failed to save profile:", err);
      setError("Failed to save your profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Error */}
      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Last Name <span className="text-red-500">*</span>
          </label>

          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
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
            name="middleName"
            type="text"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Enter your middle name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Date of Birth
          </label>

          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone <span className="text-red-500">*</span>
          </label>

          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
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
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Mohali, Punjab"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Preferred Location
          </label>

          <input
            name="preferredLocation"
            type="text"
            value={formData.preferredLocation}
            onChange={handleChange}
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
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        >
          <option value="" disabled>
            Select your highest qualification
          </option>

          <option value="High School">High School</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* LinkedIn + GitHub */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            LinkedIn URL
          </label>

          <input
            name="linkedinUrl"
            type="url"
            value={formData.linkedinUrl}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            GitHub URL
          </label>

          <input
            name="githubUrl"
            type="url"
            value={formData.githubUrl}
            onChange={handleChange}
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
          name="portfolioUrl"
          type="url"
          value={formData.portfolioUrl}
          onChange={handleChange}
          placeholder="https://yourportfolio.com"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-end border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : "Continue →"}
        </button>
      </div>
    </div>
  );
}