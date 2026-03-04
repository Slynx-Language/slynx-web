"use client";

import { useState, useEffect } from 'react';
import styles from './slynxHero.module.css';

/**
 * Badge configuration object
 */
interface Badge {
  /** Unique identifier for the badge */
  id: string;
  /** Display text for the badge */
  text: string;
  /** Visual style variant - 'primary' for selected state, 'secondary' for unselected */
  variant: 'primary' | 'secondary';
}

/**
 * Props for the BadgeButton component
 */
interface BadgeButtonProps {
  /** Badge configuration object */
  badge: Badge;
  /** Whether this badge is currently selected */
  isSelected: boolean;
  /** Index position for staggered animation delay */
  index: number;
  /** Click handler that receives the badge id */
  onClick: (badgeId: string) => void;
}

/**
 * BadgeButton Component
 * 
 * A selectable badge button with animation delay and visual feedback.
 * Displays different styles based on selection state.
 * 
 * @param props - Badge button props
 * @returns React button element
 */
function BadgeButton({ badge, isSelected, index, onClick }: BadgeButtonProps) {
  return (
    <button
      onClick={() => onClick(badge.id)}
      className={`${styles.badge} ${isSelected ? styles.badgePrimary : styles.badgeSecondary
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-pressed={isSelected}
    >
      {badge.text}
    </button>
  );
}

/**
 * Props for the WhySlynxSection component
 */
interface WhySlynxSectionProps {
  /** Main heading text (e.g., "Why") */
  title: string;
  /** Brand name to be highlighted (e.g., "Slynx") */
  brandName: string;
  /** Description paragraph below the title */
  description: string;
  /** 
   * Array of badge objects to display as selection options.
   * Each badge must have an id, text, and variant ('primary' or 'secondary').
   * The first badge in the array will be selected by default.
   * 
   * @example
   * ```ts
   * badges={[
   *   { id: 'simple', text: 'Simple', variant: 'primary' },
   *   { id: 'performance', text: 'Performance', variant: 'secondary' }
   * ]}
   * ```
   */
  badges: Badge[];
  /** Code snippet to be displayed with typing animation */
  codeExample: string;
  /** File name shown in the code window header */
  fileName: string;
  /** Typing animation speed in milliseconds (lower = faster) */
  typingSpeed: number;
  /** 
   * Callback function triggered when a badge is selected.
   * Receives the badge id as parameter.
   * Use this to update the codeExample based on selected badge.
   * 
   * @example
   * ```ts
   * onBadgeSelect={(id) => setSelectedFeature(id as FeatureId)}
   * ```
   */
  onBadgeSelect?: (badgeId: string) => void;
}

/**
 * WhySlynxSection Component
 * 
 * A hero section component that displays a title, description, selectable badges,
 * and an animated code window with typing effect.
 * 
 * **Important**: The badges array must contain objects with id, text, and variant properties.
 * The first badge will be auto-selected on mount. Use onBadgeSelect callback to handle
 * badge changes and update the codeExample accordingly.
 * 
 * @example
 * ```tsx
 * type FeatureId = 'simple' | 'performance' | 'data-oriented' | 'intuitive';
 * 
 * const [selectedFeature, setSelectedFeature] = useState<FeatureId>('simple');
 * 
 * const featureCodeExamples: Record<FeatureId, string> = {
 *   simple: 'fun main() { println("Hello") }',
 *   performance: 'fun fibonacci(n: Int): Int { ... }',
 *   'data-oriented': 'struct Player { var health: Int }',
 *   intuitive: 'fun greet(name: String) { ... }'
 * };
 * 
 * <WhySlynxSection
 *   title="Why"
 *   brandName="Slynx"
 *   description="Experience a syntax that feels natural..."
 *   badges={[
 *     { id: 'simple', text: 'Simple', variant: 'primary' },
 *     { id: 'performance', text: 'Performance', variant: 'secondary' },
 *     { id: 'data-oriented', text: 'Data Oriented', variant: 'secondary' },
 *     { id: 'intuitive', text: 'Intuitive', variant: 'secondary' }
 *   ]}
 *   codeExample={featureCodeExamples[selectedFeature]}
 *   fileName="MAIN.SX"
 *   typingSpeed={30}
 *   onBadgeSelect={(id) => setSelectedFeature(id as FeatureId)}
 * />
 * ```
 * 
 * @param props - Component props
 * @returns React component
 */
export function WhySlynxSection(props: WhySlynxSectionProps) {
  const {
    title,
    brandName,
    description,
    badges,
    codeExample,
    fileName,
    typingSpeed,
    onBadgeSelect,
  } = props;

  const [typedText, setTypedText] = useState('');
  const [selectedBadges, setSelectedBadges] = useState<Set<string>>(
    new Set([badges[0]?.id])
  );


  /**
   * Effect hook to animate the typing of code example
   * Resets and restarts animation when codeExample or typingSpeed changes
   */
  useEffect(() => {
    let currentIndex = 0;
    setTypedText('');
    const interval = setInterval(() => {
      if (currentIndex <= codeExample.length) {
        setTypedText(codeExample.slice(0, currentIndex));
        currentIndex++;
      } else clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [codeExample, typingSpeed]);

  /**
   * Handles badge click events
   * Updates selected state and triggers callback if provided
   * 
   * @param badgeId - The id of the clicked badge
   */
  function handleBadgeClick(badgeId: string) {
    setSelectedBadges(new Set([badgeId]));
    if (onBadgeSelect) {
      onBadgeSelect(badgeId);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title} <span className={styles.brand}>{brandName}</span>
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.badges}>
          {badges.map((badge, index) => (
            <BadgeButton
              key={badge.id}
              badge={badge}
              isSelected={selectedBadges.has(badge.id)}
              index={index}
              onClick={handleBadgeClick}
            />
          ))}
        </div>

        <div className={styles.codeWindow}>
          <div className={styles.codeHeader}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficRed}></span>
              <span className={styles.trafficYellow}></span>
              <span className={styles.trafficGreen}></span>
            </div>
            <div className={styles.fileName}>{fileName}</div>
          </div>

          <div className={styles.codeBody}>
            <pre className={styles.codeContent}>
              <code>
                {typedText}
                <span className={styles.cursor}></span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySlynxSection;
