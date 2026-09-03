import Link from "next/link";

const categories = [
  {
    name: "Information Technology",
    jobs: "12,450",
    icon: "💻",
  },
  {
    name: "Finance & Accounting",
    jobs: "8,230",
    icon: "📊",
  },
  {
    name: "Design & Creative",
    jobs: "4,120",
    icon: "🎨",
  },
  {
    name: "Sales & Marketing",
    jobs: "6,340",
    icon: "📣",
  },
];

const popularJobs = [
  {
    title: "Senior React Developer",
    company: "TechNova Solutions",
    location: "Chandigarh, India",
    salary: "₹8 - ₹12 LPA",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    title: "Node.js Backend Developer",
    company: "CloudStack Technologies",
    location: "Noida, India",
    salary: "₹7 - ₹11 LPA",
    type: "Full-time",
    posted: "1 day ago",
  },
  {
    title: "PHP Laravel Developer",
    company: "InnovateSoft",
    location: "Mohali, India",
    salary: "₹5 - ₹8 LPA",
    type: "Full-time",
    posted: "3 days ago",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            Job<span className="text-slate-900">Pilot</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#jobs"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Find Jobs
            </Link>

            <Link
              href="#companies"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Companies
            </Link>

            <Link
              href="#career"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Career Advice
            </Link>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Create account
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              🚀 Find your next opportunity
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find a job you{" "}
              <span className="text-blue-600">love</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Search thousands of job opportunities from companies that are
              looking for talented people like you.
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-5xl">

            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">

              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

                {/* Job */}
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-blue-500 focus-within:bg-white">
                  <span className="mr-3 text-xl">⌕</span>

                  <input
                    type="text"
                    placeholder="Job title, skills or keywords"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Location */}
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-blue-500 focus-within:bg-white">
                  <span className="mr-3 text-xl">⌖</span>

                  <input
                    type="text"
                    placeholder="City, state or remote"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Search */}
                <button
                  type="button"
                  className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Search jobs
                </button>

              </div>
            </div>

            {/* Popular searches */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">

              <span className="mr-1 text-slate-500">
                Popular:
              </span>

              {[
                "React",
                "Node.js",
                "Laravel",
                "Java",
                "Python",
                "Remote",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Explore job categories
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block">
            View all categories →
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {category.icon}
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {category.jobs} open positions
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                Explore jobs →
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Jobs */}
      <section
        id="jobs"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Opportunities
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Latest job opportunities
              </h2>

              <p className="mt-2 text-slate-500">
                Discover roles that match your skills.
              </p>
            </div>

            <button className="hidden text-sm font-semibold text-blue-600 sm:block">
              View all jobs →
            </button>

          </div>

          <div className="space-y-4">

            {popularJobs.map((job) => (
              <article
                key={job.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div className="flex gap-4">

                    {/* Company Logo */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                      {job.company.charAt(0)}
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {job.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">

                        <span>
                          📍 {job.location}
                        </span>

                        <span>
                          💼 {job.type}
                        </span>

                        <span>
                          💰 {job.salary}
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="text-sm text-slate-400">
                    {job.posted}
                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Create your JobPilot profile and let recruiters discover your
            skills, experience and career goals.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
          >
            Create your profile →
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div>
            © 2026 JobPilot. All rights reserved.
          </div>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-900">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-slate-900">
              Terms
            </span>

            <span className="cursor-pointer hover:text-slate-900">
              Contact
            </span>
          </div>

        </div>

      </footer>

    </main>
  );
}