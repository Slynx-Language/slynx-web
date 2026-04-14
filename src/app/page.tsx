"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LangCapabilities } from "../components/capabilities/lang-capabilities";
import Cards from "../components/cards-container/cards-container";
import Feature from "../components/feature/feature";
import WhySlynxContainer from "../components/slynxHeroSection/WhySlynxContainer";
// import { ARTICLES } from "./docs/articles";

/**
 * The component of the main page of slynx. This is idealized to be shown only on /.
 * This component can be used to nagivate to `/docs/get-started`
 * The component uses the following css variables:
 *   `--foreground`: For the subtitle text
 *   `--hover-color`: As the primary color, due to its saturation
 *   `--primary-base-color-rgb`: For the background of 'get started' button
 */
export default function Home() {
	// const [activeKey, setActiveKey] = useState(ARTICLES[0].key);
	// const [Content, setContent] = useState<React.FC | null>(null);

	// useEffect(() => {
	// 	import(`./docs/content/${activeKey}.mdx`)
	// 		.then((mod) => setContent(() => mod.default))
	// 		.catch(() => setContent(null));
	// }, [activeKey]);

	// const index = ARTICLES.findIndex((a) => a.key === activeKey);
	// const current = ARTICLES[index];
	// const prev = ARTICLES[index - 1];
	// const next = ARTICLES[index + 1];
	//
	// const select = (key: string) => {
	// 	setActiveKey(key);
	// 	document
	//  	.getElementById("docs-main")
	// 		?.scrollTo({ top: 0, behavior: "smooth" });
	// };

	return (
		<main className="flex flex-col items-center justify-center w-full">
			<div className="max-w-360 w-full">
				<div className="relative flex flex-col items-center justify-center align-middle gap-12 text-center pt-16 min-h-[40vh]">
					<h1 className="text-primary-brand-color text-5xl md:text-7xl xl:text-8xl font-bold">
						Slynx
					</h1>
					<h2 className="textl-2xl md:Text-4xl xl:text-5xl font-bold">
						Customizable, Fast, & Efficient{" "}
					</h2>
					<div className="pt-4">
						<Link
							href="/docs/get-started"
							className={buttonVariants({ variant: "outline", size: "xl" })}
						>
							Get started
							<ArrowRight />
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center xl:pt-72 xl:pb-44 xl:gap-36">
					<h1 className="text-5xl font-bold">
						What is <span className="text-primary-brand-color">Slynx?</span>
					</h1>

					<div className="flex flex-row items-center justify-between w-full">
						<Feature
							title="Performatic Language"
							icon={<Zap className="text-chart-4 size-12" />}
						>
							Optimized for modern hardware with lightning-fast execution times
							and zero-cost abstractions.
						</Feature>

						<Feature
							title="A Result You Can Trust"
							icon={<ShieldCheck className="text-chart-4 size-12" />}
						>
							Deterministic behavior ensures your code runs exactly as expected
							across every environment.
						</Feature>

						<Feature
							title="Safety at Scale"
							icon={<ShieldCheck className="text-chart-4 size-12" />}
						>
							Built-in safety features that catch bugs at compile-time before
							they reach your users.
						</Feature>
					</div>
				</div>

				<div>
					<Cards />
				</div>

				<WhySlynxContainer />

				<LangCapabilities
					capabilities={[
						{
							title: "modern UIs",
							description:
								"Create buttery smooth 120fps interfaces with our declarative UI engine.",
						},
						{
							title: "Componentization",
							description:
								"Modular architecture designed for massive team collaboration and reuse.",
						},
					]}
					title="What's possible with"
					emphasized_text="Slynx"
				/>
				{/*
      
      The following sections were commented for lack of content

      <Testimonials testimonials={[{
        author: 'Owner',
        id: 0,
        role: 'Owner',
        text: "The project is ongoing and yet there's no testimonial"
      }]} />
      <div className={MainStyles.faq_container}>
        <h1 className={MainStyles.faq_title}>FAQ</h1>
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />     </div> */}
			</div>
		</main>
	);
}
