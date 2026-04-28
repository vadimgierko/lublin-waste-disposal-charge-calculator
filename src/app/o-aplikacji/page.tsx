import fs from "fs";
import { Metadata } from "next";
import path from "path";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
	title: "O aplikacji Kalkulator stawki za odpady w Lublinie",
	description:
		"Opis i instrukcja użycia aplikacji Kalkulator miesięcznej stawki za odpady (śmieci) w oparciu o rozliczenie zużycia wody w Lublinie",
};

export default function About() {
	const filePath = path.join(
		process.cwd(),
		"README.md"
		// "src",
		// "app",
		// "o-aplikacji",
		// "content.md"
	);
	const fileContents = fs.readFileSync(filePath, "utf-8");

	return (
		<article className="text-start">
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{fileContents}
			</Markdown>
		</article>
	);
}
