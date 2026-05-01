"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative max-w-[730px] w-full bg-linear-to-l from-[#050505] to-[#0c0c0c] border-2 border-[#2a2a2d] rounded-[15px] mx-auto my-4 overflow-hidden">
      <button
        type="button"
        className="relative z-10 w-[95%] bg-transparent border-none px-5 py-5 text-white text-2xl font-bold flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="faq-content"
      >
        <span>{question}</span>
        <span
          className={`flex items-center text-[#464444] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <Icon icon="material-symbols:keyboard-arrow-down" width={44} />
        </span>
      </button>

      <div
        id="faq-content"
        role="region"
        className="relative z-10 grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className={`font-sans text-[#bdbdbd] text-sm leading-[1.6] px-5 transition-[padding] duration-300 ${open ? "pb-5" : ""}`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
