"use client";
import DocsLayout from "../../components/docs/DocsLayout";
import type { TocItem } from "../../components/docs/DocsTOC";
import { ARTICLES, NAV_SECTIONS } from "./articles";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function DocsPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<DocsPageContent />
		</Suspense>
	);
}

function DocsPageContent() {
	const params = useSearchParams();
	const articleKey = params.get('article') || 'introduction/what-is-it';

	const currentIndex = Math.max(ARTICLES.findIndex((a) => a.key === articleKey), 0);
	const current = ARTICLES[currentIndex];
	const Content = current.content;
	const prev = currentIndex > 0 ? ARTICLES[currentIndex - 1] : undefined;
	const next =
		currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : undefined;

	return (
		<DocsLayout
			sections={NAV_SECTIONS}
			tocItems={current.toc as TocItem[]}
			title={current.title}
			activeKey={articleKey}
			onSelect={(key) => {
				window.location.href = `/docs?article=${key}`;
			}}
			prev={prev ? { label: prev.title, key: prev.key } : undefined}
			next={next ? { label: next.title, key: next.key } : undefined}
		>
			{Content ? <Content /> : <p>Article not found.</p>}
		</DocsLayout>
	);
}
