import { highlights } from "../highlightsData";
import SectionTitle from "./SectionTitle";

const ChipList = ({ items }) => (
	<ul className="chip-list">
		{items.map((item) => (
			<li className="chip" key={item}>
				{item}
			</li>
		))}
	</ul>
);

const HighlightCard = ({ title, iconClass, url, linkLabel, description, bullets, skills }) => (
	<div className="col-lg-6">
		<article className="card-surface hoverable">
			<div className="project-head">
				<span className="project-icon">
					<i className={`bi ${iconClass}`}></i>
				</span>
				{url ? <span className="pill pill-live">Live</span> : <span className="pill pill-private">Private · behind login</span>}
			</div>
			<h3 className="project-title">{title}</h3>
			{url && (
				<a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
					{linkLabel} ↗
				</a>
			)}
			<p className="project-desc">{description}</p>
			<ul className="project-points">
				{bullets.map((bullet) => (
					<li key={bullet}>{bullet}</li>
				))}
			</ul>
			<ChipList items={skills} />
		</article>
	</div>
);

const Highlights = () => (
	<section id="production" className="section">
		<div className="container">
			<SectionTitle number="02" title="In production" subtitle="Things I've built that are live and used by real people." />
			<div className="row g-4">
				{highlights.map((item) => (
					<HighlightCard {...item} key={item.id} />
				))}
			</div>
		</div>
	</section>
);

export default Highlights;
