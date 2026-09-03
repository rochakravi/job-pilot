"use client";

import { useState } from "react";
import type { NavigationProps } from "./navigation";

type Certification = {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
  shortDescription: string;
};

export default function Certifications({ onBack, onNext }: NavigationProps) {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  const empty: Certification = {
    name: "",
    issuer: "",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
    credentialUrl: "",
    shortDescription: "",
  };

  const [form, setForm] = useState(empty);

  const update = (
    field: keyof Certification,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addCertification = () => {
    if (!form.name || !form.issuer) return;

    setCertifications((prev) => [...prev, form]);
    setForm(empty);
  };

  const removeCertification = (index: number) => {
    setCertifications((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Certifications
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add professional certifications and credentials.
        </p>
      </div>

      <div className="rounded-xl border bg-slate-50 p-5">

        <h3 className="mb-5 font-semibold">
          Add Certification
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="label">
              Certification Name *
            </label>

            <input
              value={form.name}
              onChange={(e) =>
                update("name", e.target.value)
              }
              placeholder="AWS Certified Developer"
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Issuer *
            </label>

            <input
              value={form.issuer}
              onChange={(e) =>
                update("issuer", e.target.value)
              }
              placeholder="Amazon Web Services"
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Issue Date
            </label>

            <input
              type="date"
              value={form.issueDate}
              onChange={(e) =>
                update("issueDate", e.target.value)
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Expiry Date
            </label>

            <input
              type="date"
              value={form.expiryDate}
              onChange={(e) =>
                update("expiryDate", e.target.value)
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Credential ID
            </label>

            <input
              value={form.credentialId}
              onChange={(e) =>
                update("credentialId", e.target.value)
              }
              className="input"
            />
          </div>

          <div>
            <label className="label">
              Credential URL
            </label>

            <input
              value={form.credentialUrl}
              onChange={(e) =>
                update("credentialUrl", e.target.value)
              }
              placeholder="https://..."
              className="input"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="label">
            Description
          </label>

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
            onClick={addCertification}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-white"
          >
            + Add Certification
          </button>
        </div>

      </div>

      {certifications.length > 0 && (
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Added certifications</h3>
          <span className="text-sm text-slate-500">{certifications.length} {certifications.length === 1 ? "entry" : "entries"}</span>
        </div>
      )}

      {certifications.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-500">Issued by {item.issuer}</p>
              {item.credentialUrl && <p className="mt-2 text-sm text-blue-600">Credential available</p>}
            </div>
            <button type="button" onClick={() => removeCertification(index)} className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">Remove</button>
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