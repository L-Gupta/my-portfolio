import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#c5050c] sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-4xl font-extrabold tracking-tight transition focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Home"
          style={{ textDecoration: 'none' }}
        >
          Lakshya Gupta
        </Link>
        <ul className="flex gap-10">
          <li><Link href="/" className="text-white text-2xl font-semibold hover:bg-white hover:text-[#c5050c] px-6 py-3 rounded-xl transition">Home</Link></li>
          <li><Link href="/journey" className="text-white text-2xl font-semibold hover:bg-white hover:text-[#c5050c] px-6 py-3 rounded-xl transition">Journey</Link></li>
          <li><Link href="/certifications" className="text-white text-2xl font-semibold hover:bg-white hover:text-[#c5050c] px-6 py-3 rounded-xl transition">Experience</Link></li>
        </ul>
      </nav>
    </header>
  );
}