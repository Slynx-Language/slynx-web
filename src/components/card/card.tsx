import type { ReactNode } from 'react';
import styles from './card.module.css';

/**
 * The properties of the `Card` component.
 */
type CardProps = {
  /** The title the card should have */
  title: string;
  /** Where the card should redirect to when clicked */
  href: string;
  /** The icon of the card to be shown */
  icon: ReactNode;
  /** The description of the card */
  children: ReactNode;
};

/**
 * Card component with icon, title, and description that navigates on click.
 * 
 * This component creates a clickable card that redirects to the provided `href`.
 * It displays an `icon` to visually represent the card's purpose, a `title` to
 * identify the content, and uses `children` as a description for better context.
 * 
  * @example
  * ```tsx
  * <Card 
  *   title="Documentation" 
  *   href="/docs"
  *   icon={<DocumentIcon />}
  * >
  *   Learn how to use our API
  * </Card>
  * ```
 */
export function Card({ title, href, icon, children }: CardProps) {
  return (
    <a className={styles.card} href={href}>
      <div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.baixo}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.link}>
          {children}
        </div>
      </div>
    </a>
  );
}