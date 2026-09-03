"use client";

import { Suspense, useState, useSyncExternalStore } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalInformation from "./PersonalInformation";
import ProfessionalSummary from "./ProfessionalSummary";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Skills from "./Skills";
import ToolsTechnologies from "./ToolsTechnologies";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import ResumeUpload from "./ResumeUpload";
import JobPreferences from "./JobPreferences";
import RecruiterCareerProfile from "./RecruiterCareerProfile";

const steps = [
  { title: "Personal Information", description: "Tell us about yourself.", component: PersonalInformation },
  // { title: "Professional Summary", description: "Highlight your experience and strengths.", component: ProfessionalSummary },
  // { title: "Skills", description: "Add your professional and technical skills.", component: Skills },
  // { title: "Programming Languages", description: "Add the languages you know.", component: ProgrammingLanguages },
  // { title: "Tools & Technologies", description: "Add the tools and platforms you use.", component: ToolsTechnologies },
  // { title: "Work Experience", description: "Add your professional experience.", component: WorkExperience },
  // { title: "Projects", description: "Showcase your most important projects.", component: Projects },
  // { title: "Education", description: "Add your academic qualifications.", component: Education },
  // { title: "Certifications", description: "Add your credentials and certifications.", component: Certifications },
  { title: "Resume Upload", description: "Upload your latest resume.", component: ResumeUpload },
  // { title: "Job Preferences", description: "Tell us what opportunities you want.", component: JobPreferences },
  // { title: "Recruiter / Career Profile", description: "Help recruiters understand your goals.", component: RecruiterCareerProfile }
] as const;

const subscribeToHydration = () => () => {};
const getServerHydrationSnapshot = () => false;
const getClientHydrationSnapshot = () => true;

function RegisterWorkflow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedStep = Number(searchParams.get("step"));
  const currentStep = requestedStep >= 1 && requestedStep <= steps.length ? requestedStep - 1 : 0;
  const [isComplete, setIsComplete] = useState(false);
  const [profileId, setProfileId] = useState<string | null>(null);

  const goToStep = (step: number) => {
    setIsComplete(false);
    router.push(`/register?step=${step + 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const step = steps[currentStep];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Profile setup · Step {currentStep + 1} of {steps.length}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Create Your Career Profile</h1>
          <p className="mt-2 text-gray-600">Complete your profile to find better job opportunities.</p>
        </div>

        <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="self-start rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-5 font-semibold text-gray-900">Profile Setup</h2>
            <nav aria-label="Registration steps" className="space-y-2">
              {steps.map((item, index) => (
                <button key={item.title} type="button" onClick={() => goToStep(index)} className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${index === currentStep ? "bg-blue-50 font-medium text-blue-600" : index < currentStep ? "text-slate-700 hover:bg-slate-50" : "text-gray-500 hover:bg-slate-50"}`}>
                  <span className="mr-2">{index < currentStep ? "✓" : `${index + 1}.`}</span>
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>

          <section className="min-w-0 rounded-xl border border-gray-200 bg-white p-6">
            {isComplete ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">✓</div>
                <h2 className="mt-6 text-2xl font-semibold text-slate-900">Registration complete</h2>
                <p className="mx-auto mt-2 max-w-md text-slate-500">Your career profile is ready. You can revisit any step from the progress list.</p>
                <button type="button" onClick={() => goToStep(0)} className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">Review profile</button>
              </div>
            ) : (
              <>
                <div className="mt-8">
                  {steps.map((item, index) => {
                    const StepComponent = item.component;

                    return (
                      <div key={item.title} className={index === currentStep ? "" : "hidden"}>
                        <StepComponent
                          onBack={() => goToStep(Math.max(0, currentStep - 1))}
                          onNext={() => currentStep === steps.length - 1 ? setIsComplete(true) : goToStep(currentStep + 1)}
                          profileId={profileId}
                          onProfileSaved={(id: string) => setProfileId(id)}
                          isFirstStep={currentStep === 0}
                          isLastStep={currentStep === steps.length - 1}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot
  );

  if (!isHydrated) {
    return <main className="min-h-screen bg-slate-50" />;
  }

  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" />}>
      <RegisterWorkflow />
    </Suspense>
  );
}