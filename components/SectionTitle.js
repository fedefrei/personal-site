const SectionTitle = ({ number, title, subtitle }) => (
	<div className="section-title">
		<span className="eyebrow">// {number}</span>
		<h2>{title}</h2>
		{subtitle && <p>{subtitle}</p>}
	</div>
);

export default SectionTitle;
