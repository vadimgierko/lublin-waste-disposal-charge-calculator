import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

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
