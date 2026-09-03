import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden flex-col justify-between bg-slate-900 p-10 text-white lg:flex">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Job<span className="text-blue-400">Pilot</span>
            </Link>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Your next move
              </p>
              <h1 className="max-w-sm text-4xl font-bold leading-tight">
                Pick up where your career left off.
              </h1>
              <p className="mt-5 max-w-sm leading-7 text-slate-300">
                Keep your applications, profile, and best opportunities in one place.
              </p>
            </div>
            <p className="text-sm text-slate-400">A smarter way to find work that fits.</p>
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            <div className="mb-8 lg:hidden">
              <Link href="/" className="text-2xl font-bold tracking-tight text-blue-600">
                Job<span className="text-slate-900">Pilot</span>
              </Link>
            </div>

            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                Welcome back
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Sign in to JobPilot</h2>
              <p className="mt-3 text-slate-500">Use your account to continue your job search.</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <FcGoogle className="text-xl" />
                  Google
                </button>
                <button
                  type="button"
                  className="flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </button>
              </div>

              <div className="my-8 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                Or continue with email
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <form className="space-y-5">
                <div>
                  <label htmlFor="email" className="label">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="input" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="label mb-0">Password</label>
                  </div>
                  <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Enter your password" className="input" />
                </div>
                <button type="submit" className="min-h-12 w-full rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                  Sign in
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                New to JobPilot? <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700">Create an account</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}