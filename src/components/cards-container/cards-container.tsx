import { Book, Download, Terminal } from "lucide-react";
import { Card } from "../card/card";

export default function Cards() {
	return (
		<div className="py-10 px-0 w-full flex flex-col gap-20">
			<h1 className="font-bold text-5xl w-full text-center">
				Get <span className="text-primary-brand-color">started</span>
			</h1>
			<div className="flex gap-18 flex-row w-[90%] justify-center m-auto">
				<Card
					title="Handbook"
					href="/handbook"
					icon={<Book className="text-primary-brand-color size-30" />}
				>
					Learn the language
				</Card>

				<Card
					title="Playground"
					href="/playground"
					icon={<Terminal className="text-primary-brand-color size-30" />}
				>
					Try in your browser
				</Card>

				<Card
					title="Download"
					href="/download"
					icon={<Download className="text-primary-brand-color size-30" />}
				>
					Install Slynx
				</Card>
			</div>
		</div>
	);
}
