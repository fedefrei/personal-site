import { mainSkills } from "../skillsData";
import SectionTitle from "./SectionTitle";

const SkillCard = ({ title, iconClass, description }) => (
	<div className="col-md-6 col-lg-4">
		<div className="card-surface hoverable skill-card">
			<i className={`bi ${iconClass}`}></i>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	</div>
);

const Skills = () => (
	<section id="skills" className="section">
		<div className="container">
			<SectionTitle number="03" title="Skills" subtitle="Where I'm most comfortable working." />
			<div className="row g-3">
				{mainSkills.map((skill) => (
					<SkillCard title={skill.title} iconClass={skill.iconClass} description={skill.description} key={skill.id} />
				))}
			</div>
		</div>
	</section>
);

export default Skills;
