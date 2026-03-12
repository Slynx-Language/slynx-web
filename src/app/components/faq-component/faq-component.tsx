"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./faq-component.module.css";

/**
 * Props for the FaqItem component
 */
interface FaqItemProps {
  /** The question text to display in the FAQ header */
  question: string;
  /** The answer text to display when the FAQ is expanded */
  answer: string;
}

/**
 * FaqItem Component
 * 
 * A collapsible FAQ item that displays a question and its corresponding answer.
 * Features smooth expand/collapse animation and a rotating arrow icon indicator.
 * Built with accessibility in mind using semantic HTML and proper ARIA attributes.
 * 
 * **Features**:
 * - Click to toggle open/closed state
 * - Smooth height and opacity transitions
 * - Rotating arrow icon for visual feedback
 * - Fully accessible with semantic HTML and ARIA
 * 
 * @example
 * ```tsx
 * <FaqItem
 *   question="What is Slynx?"
 *   answer="Slynx is a modern programming language designed for simplicity and performance."
 * />
 * ```
 * 
 * @param props - Component props
 * @returns React component
 */
export default function FaqItem({ question, answer }: FaqItemProps) {
  /**
   * State to control the open/closed state of the FAQ item
   * @default false - FAQ starts collapsed
   */
  const [open, setOpen] = useState(false);

  /**
   * Toggles the FAQ item between open and closed states
   * Updates the open state to its opposite value
   */
  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.faqHeader}
        onClick={handleToggle}
        aria-expanded={open}
        aria-controls="faq-content"
      >
        <span className={styles.question}>{question}</span>

        <span 
          className={`${styles.icon} ${open ? styles.rotate : ""}`}
          aria-hidden="true"
        >
          <Icon 
            icon="material-symbols:keyboard-arrow-down" 
            width={44} 
          />
        </span>
      </button>

      <div 
        id="faq-content"
        className={`${styles.content} ${open ? styles.open : ""}`}
        role="region"
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}