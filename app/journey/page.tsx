import JourneyFlow from '../components/JourneyFlow';

export default function Journey() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-[#c5050c] text-4xl font-bold mb-4 text-center border-b-4 border-black pb-4">
          My Technical Journey
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          This page visualizes my growth across technical domains. Each domain is an island—select one to see a flowing ribbon of milestones, each representing a stage of learning and capability. Projects are shown as supporting evidence, not the focus. The structure emphasizes progression, depth, and evolution.
        </p>
        <JourneyFlow />
      </div>
    </main>
  );
}