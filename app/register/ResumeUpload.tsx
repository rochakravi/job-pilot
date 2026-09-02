"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";
import ProfileService from "../api/profile/profile.service";

type Resume = {
  pdfName: string;
  location: string;
  title: string;
  uploadedAt: string;
};

export default function ResumeUpload({ onBack, onNext, profileId }: NavigationProps) {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    if (!profileId) {
      alert("Profile not created yet.");
      return;
    }

    try {
      const updatedProfile = await ProfileService.updateResume(profileId, file);
      console.log("Resume uploaded successfully:", updatedProfile);

      const resume: Resume = {
        pdfName: file.name,
        location: file.name,
        title: file.name.replace(".pdf", ""),
        uploadedAt: new Date().toISOString(),
      };

      setResumes((prev) => [...prev, resume]);
    } catch (error) {
      console.error("Resume upload failed:", error);
      alert("Resume upload failed. Please try again.");
    }
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Resume Upload
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload your latest resume in PDF format.
        </p>
      </div>

      <label className="block cursor-pointer">

        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center transition hover:border-blue-400 hover:bg-blue-50">

          <div className="text-4xl">
            📄
          </div>

          <h3 className="mt-4 font-semibold text-slate-800">
            Upload your resume
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Click to browse PDF files
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Maximum recommended size: 5 MB
          </p>

          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFile}
            className="hidden"
          />

        </div>

      </label>

      {resumes.length > 0 && (
        <div className="space-y-3">

          <h3 className="font-semibold">
            Uploaded Resumes
          </h3>

          {resumes.map((resume, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border bg-white p-4"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-red-50 p-3">
                  📄
                </div>

                <div>
                  <p className="font-medium">
                    {resume.pdfName}
                  </p>

                  <p className="text-xs text-slate-500">
                    Uploaded resume
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
                Uploaded
              </span>

            </div>
          ))}

        </div>
      )}

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