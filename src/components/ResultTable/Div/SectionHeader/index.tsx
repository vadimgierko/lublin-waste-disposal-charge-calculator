export function SectionHeader({
	title,
	description,
	subsection = false,
}: {
	title: string;
	description: string;
	subsection?: boolean;
}) {
	return (
		<div className="section-header grey">
			<p className="title">
				<strong>{title}</strong>
			</p>
			<p>{description}</p>
		</div>
	);
}
