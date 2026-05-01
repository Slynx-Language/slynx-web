"use client";

import { useState } from 'react';

export interface Tab {
  title: string;
  description: string;
}

export interface ShowcaseCardData {
  tabs: Tab[];
}

interface ShowcaseProps {
  cards: ShowcaseCardData[];
}

export default function Showcase({ cards }: ShowcaseProps) {
  return (
    <section className="px-5 py-[100px] max-w-[1200px] mx-auto">
      <div className="flex gap-10 flex-wrap max-md:flex-col max-md:items-stretch">
        {cards.map((card, index) => (
          <Card key={index} tabs={card.tabs} />
        ))}
      </div>
    </section>
  );
}

function Card({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="group relative flex-[0_0_420px] bg-background rounded-2xl p-7 border-2 border-[var(--brand-color)]/[0.18] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-color)] max-md:flex-[1_1_100%]">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {tabs.map((tab, index) => (
            <div key={index} className="min-w-full pl-5">
              <h3 className="text-2xl font-semibold mb-5 text-[var(--title-color)]">{tab.title}</h3>
              <p className="text-base leading-[1.7] text-foreground opacity-80">{tab.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 mt-10">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-1 rounded-[4px] border-none cursor-pointer transition-all duration-300 ${
              index === active
                ? 'w-10 bg-[var(--brand-color)]'
                : 'w-7 bg-[var(--brand-color)]/20'
            }`}
            aria-label={`Go to tab ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
