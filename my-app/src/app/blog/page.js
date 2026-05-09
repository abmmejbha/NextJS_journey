export default function BlogPage() {
	return <main className="min-h-screen bg-slate-50 p-8 text-slate-900"><div className="mx-auto max-w-3xl"><p className="text-sm uppercase tracking-[0.3em] text-slate-500">Blog</p><h1 className="mt-3 text-4xl font-bold">Simple Blog</h1><p className="mt-4 text-lg text-slate-600">A tiny blog homepage for Next.js.</p><div className="mt-8 space-y-4">{["Clean layout", "Fast reading", "Easy to expand"].map((item) => <div key={item} className="rounded-2xl border bg-white px-5 py-4 shadow-sm">{item}</div>)}</div></div></main>;
}
