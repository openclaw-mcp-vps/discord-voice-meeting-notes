export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Voice → Meeting Notes, automatically
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never lose a decision<br />made in Discord voice
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          NoteBot joins your Discord voice channels, transcribes every word with OpenAI Whisper, and delivers structured meeting notes with action items — straight to your inbox.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $25 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎙️</div>
            <h3 className="font-semibold text-white mb-1">Auto-record</h3>
            <p className="text-sm text-[#8b949e]">Bot joins configured channels and records whenever members are active.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✍️</div>
            <h3 className="font-semibold text-white mb-1">AI Transcription</h3>
            <p className="text-sm text-[#8b949e]">Whisper converts audio to accurate text, even with technical jargon.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Structured Notes</h3>
            <p className="text-sm text-[#8b949e]">GPT-4 extracts decisions, action items, and summaries automatically.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited voice recordings</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 10 Discord servers</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI meeting notes + action items</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email & Discord delivery</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day transcript archive</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the bot join my voice channel?</h3>
            <p className="text-sm text-[#8b949e]">After signing in with Discord, you invite NoteBot to your server and select which channels to monitor. It joins automatically when members are present.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my audio stored permanently?</h3>
            <p className="text-sm text-[#8b949e]">Raw audio is deleted immediately after transcription. Text transcripts are retained for 90 days and can be deleted at any time from your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What languages are supported?</h3>
            <p className="text-sm text-[#8b949e]">Whisper supports 90+ languages. Meeting notes are generated in the same language as the conversation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} NoteBot. All rights reserved.
      </footer>
    </main>
  );
}
