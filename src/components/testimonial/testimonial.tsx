'use client';

import React, { useState } from 'react';

export interface Testimonial {
  id: string | number;
  text: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Slynx Testimonials",
  subtitle = "Developer Approved and production ready.",
  testimonials = []
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentTestimonials = testimonials.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);
  const showControls = testimonials.length > itemsPerPage;

  const handleNext = () => { setDirection('next'); setCurrentIndex((p) => (p + 1) % totalPages); };
  const handlePrev = () => { setDirection('prev'); setCurrentIndex((p) => (p - 1 + totalPages) % totalPages); };

  const slideClass = direction === 'next'
    ? 'animate-in fade-in slide-in-from-right zoom-in-98 duration-500'
    : 'animate-in fade-in slide-in-from-left zoom-in-98 duration-500';

  return (
    <div className="w-full mx-auto px-5 py-5">
      <div className="mb-12">
        <h1 className="text-[2.5rem] font-bold text-[var(--title-color)] mb-3 max-md:text-[2rem]">{title}</h1>
        <p className="text-lg text-foreground opacity-70">{subtitle}</p>
      </div>

      <div className="overflow-visible pt-2">
        <div key={currentIndex} className={`grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 max-md:grid-cols-1 ${slideClass}`}>
          {currentTestimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-background border-2 border-[var(--brand-color)]/15 rounded-xl p-6 transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_12px_rgba(0,0,0,0.06)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--brand-color)] hover:shadow-[0_15px_35px_rgba(0,163,73,0.25),0_0_0_1px_rgba(0,219,99,0.2)] max-md:p-5"
            >
              {/* radial glow on hover — needs pseudo, done via inline overlay */}
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(0,219,99,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none" />

              <p className="relative text-[0.95rem] leading-[1.6] text-foreground mb-5">
                <span className="text-[var(--brand-color)] text-2xl leading-none opacity-50">&ldquo;</span>
                {t.text}
                <span className="text-[var(--brand-color)] text-2xl leading-none opacity-50">&rdquo;</span>
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-[var(--brand-color)]">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-[var(--highlight-color)] to-[var(--brand-color)] flex items-center justify-center text-white font-semibold">
                      {t.author.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.9rem] font-semibold text-[var(--title-color)] m-0">{t.author}</p>
                  <p className="text-[0.8rem] text-[var(--secondary-base-color)] m-0">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="flex items-center justify-center gap-6 mt-10 max-md:gap-4">
          <button
            className="relative w-12 h-12 rounded-xl bg-linear-to-br from-[var(--brand-color)] to-[var(--secondary-base-color)] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,163,73,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,163,73,0.4)] active:translate-y-0 active:scale-[0.98] max-md:w-11 max-md:h-11"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div className="flex items-center gap-1.5 px-5 py-2 bg-linear-to-br from-[var(--brand-color)]/10 to-[var(--secondary-base-color)]/10 rounded-full border-2 border-[var(--brand-color)] font-semibold text-[var(--brand-color)] min-w-[70px] justify-center max-md:px-4 max-md:text-[0.9rem]">
            <span className="text-[1.1rem]">{currentIndex + 1}</span>
            <span className="opacity-50 text-[0.9rem]">/</span>
            <span className="text-[0.9rem] opacity-80">{totalPages}</span>
          </div>

          <button
            className="relative w-12 h-12 rounded-xl bg-linear-to-br from-[var(--brand-color)] to-[var(--secondary-base-color)] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,163,73,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,163,73,0.4)] active:translate-y-0 active:scale-[0.98] max-md:w-11 max-md:h-11"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
