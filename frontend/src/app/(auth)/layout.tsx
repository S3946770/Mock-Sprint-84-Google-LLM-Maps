import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
        {/* left side of auth page */}
        <section className="relative hidden overflow-hidden lg:block">
          {/* heading */}
          <div className="absolute top-[14%] left-[7%] z-10">
            <h1 className="text-4xl font-bold tracking-tight">Satellite Seeker</h1>
          </div>
        </section>

        {/* right side of auth page */}
        <section className="flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-[560px] rounded-md bg-zinc-900 px-10 py-24">{children}</div>
        </section>
      </div>
    </main>
  )
}
