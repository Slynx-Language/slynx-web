import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import {
	CardContent,
	CardHeader,
	CardTitle,
	Card as ShadcnCard,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
	/** Optional CSS class name */
	className?: string;
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
 *   icon={<BookIcon />}
 * >
 *   Learn how to use our API
 * </Card>
 * ```
 */
export function Card({ title, href, icon, children, className }: CardProps) {
	return (
		<Link
			href={href}
			className={cn("group block no-underline outline-none", className)}
		>
			<ShadcnCard className="flex h-full min-h-113.75 w-full max-w-100 flex-col justify-between overflow-hidden rounded-[22px] border-0 bg-[#1a1a1a] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,#1a1a1a_5%,#0b0b0b),#1a1a1a)] p-5.5 shadow-[0_0_0_1px_#1f1f1f] ring-0 transition-all duration-300 group-hover:scale-[0.96] group-hover:shadow-[0_0_12px_#1f1f1f] md:w-100 dark:ring-0">
				<CardHeader className="p-0 text-left">
					<div className="relative inline-block origin-center text-[48px] text-primary transition-transform duration-300 group-hover:scale-110 md:text-[120px]">
						<div className="absolute inset-0 -translate-y-full bg-primary opacity-20 blur-xl"></div>
						{icon}
					</div>
				</CardHeader>

				<CardContent className="mt-auto flex flex-col gap-1 p-0 text-left">
					<CardTitle className="text-[clamp(1.4rem,4vw,2rem)] font-bold text-foreground">
						{title}
					</CardTitle>
					<div className="flex items-center gap-1.5 text-[clamp(0.95rem,3vw,1.25rem)] font-semibold text-primary-end">
						{children}
						<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</div>
				</CardContent>
			</ShadcnCard>
		</Link>
	);
}
