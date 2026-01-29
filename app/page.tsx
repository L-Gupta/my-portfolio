import AboutPanels from "./components/AboutPanels";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-10">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[40vh] gap-8">
        {/* Left Column: Identity & Actions */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
            {/* Placeholder headline */}
            [Your confident, technical, human headline goes here]
          </h1>
          <div className="flex gap-6 mt-2 mb-4">
            {/* Resume link placeholder */}
            <a
              href="#"
              className="text-lg underline underline-offset-4 text-gray-800 hover:text-[#c5050c] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            {/* My Journey link */}
            <a
              href="/journey"
              className="text-lg underline underline-offset-4 text-gray-800 hover:text-[#c5050c] transition"
            >
              My Journey
            </a>
          </div>
        </div>
        {/* Right Column: Visual Identity */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-56 h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl font-medium border border-gray-300">
            {/* Placeholder for personal image/graphic */}
            A cool pic of mine goes here
          </div>
        </div>
      </section>

      {/* Highlight / Callout Section */}
      <section className="mt-20 w-full py-8 px-6 bg-[#f7f7f7] rounded-lg text-center">
        {/* Placeholder for highlight/callout */}
        <span className="text-lg md:text-xl font-medium text-gray-700">
          [A short, differentiating idea or philosophy goes here]
        </span>
      </section>

      {/* About Me Section */}
      <div className="flex flex-col items-center mt-16">
        <AboutPanels />
      </div>

      {/* Contact Section */}
      <section className="mt-24 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Column: Context & Links */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-[#c5050c]">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">[Friendly, low-pressure description inviting users to reach out. Placeholder text.]</p>
          <div className="flex gap-6 items-center mb-2">
            {/* Icon links (placeholders) */}
            <a href="#" className="text-gray-500 hover:text-[#c5050c] transition" aria-label="GitHub">
              {/* GitHub icon placeholder */}
              <span className="inline-block w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">GH</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#c5050c] transition" aria-label="LinkedIn">
              {/* LinkedIn icon placeholder */}
              <span className="inline-block w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">LI</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#c5050c] transition" aria-label="Email">
              {/* Email icon placeholder */}
              <span className="inline-block w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">@</span>
            </a>
          </div>
        </div>
        {/* Right Column: Contact Form */}
        <form className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5 justify-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-[#c5050c] focus:ring-2 focus:ring-[#c5050c]/30 outline-none text-lg bg-gray-50 placeholder-gray-400 transition"
            disabled
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:border-[#c5050c] focus:ring-2 focus:ring-[#c5050c]/30 outline-none text-lg bg-gray-50 placeholder-gray-400 transition"
            disabled
          />
          <textarea
            placeholder="Message"
            className="w-full px-5 py-3 rounded-3xl border border-gray-300 focus:border-[#c5050c] focus:ring-2 focus:ring-[#c5050c]/30 outline-none text-lg bg-gray-50 placeholder-gray-400 transition min-h-[120px] resize-none"
            disabled
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 rounded-full bg-[#c5050c] text-white text-lg font-semibold shadow hover:bg-[#a10409] transition disabled:opacity-60"
            disabled
          >
            [Send]
          </button>
          <div className="text-sm text-gray-400 mt-2">[Form is a placeholder. No backend connected.]</div>
        </form>
      </section>
    </main>
  );
}