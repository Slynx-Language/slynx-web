"use client";

import { useState } from 'react';
import styles from './showcaseCard.module.css';

/**
 * Represents a single tab inside a Showcase card.
 */
export interface Tab {
  /** The title displayed in the tab header */
  title: string;

  /** The description displayed in the tab content */
  description: string;
}

/**
 * Represents a Showcase card, containing multiple tabs.
 */
export interface ShowcaseCardData {
  /** List of tabs belonging to this card */
  tabs: Tab[];
}

/**
 * Props for the Showcase component.
 */
interface ShowcaseProps {
  /** Array of cards to be displayed */
  cards: ShowcaseCardData[];
}

/**
 * Main Showcase component.
 * Renders a section containing multiple cards with tabbed content.
 *
 * @param props - The component props
 * @param props.cards - Array of cards to be displayed
 * @returns A section element containing the showcase grid
 *
 * @example
 * ```tsx
 * <Showcase cards={[
 *   { tabs: [
 *     { title: "Tab 1", description: "Content 1" },
 *     { title: "Tab 2", description: "Content 2" }
 *   ]}
 * ]} />
 * ```
 */
export default function Showcase({ cards }: ShowcaseProps) {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card key={index} tabs={card.tabs} />
        ))}
      </div>
    </section>
  );
}

/**
 * Component representing an individual card with tab navigation.
 * Displays tabs as a horizontal slider with navigation dots.
 *
 * @param props - The component props
 * @param props.tabs - List of tabs inside the card
 * @returns A card element with slider and navigation dots
 *
 * @example
 * ```tsx
 * <Card tabs={[
 *   { title: "Features", description: "Our main features" },
 *   { title: "Benefits", description: "Key benefits" }
 * ]} />
 * ```
 */
function Card({ tabs }: { tabs: Tab[] }) {
  /** Currently active tab index */
  const [active, setActive] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.viewport}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {tabs.map((tab, index) => (
            <div key={index} className={styles.slide}>
              <h3 className={styles.title}>{tab.title}</h3>
              <p className={styles.description}>{tab.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.tabs}>
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${styles.dot} ${
              index === active ? styles.active : ''
            }`}
            aria-label={`Go to tab ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}