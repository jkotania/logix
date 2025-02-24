"use client";

export default function LearnMoreButton() {
  const scrollToSection = () => {
    const element = document.getElementById("cards-section");
    if (!element) return;

    const elementTop = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = elementTop - startPosition - 100; // 50px marginesu
    const duration = 600; // 1 sekunda
    let startTime: number;

    const animateScroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToSection}
      className="px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10"
    >
      <span>Dowiedz się więcej</span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
}
