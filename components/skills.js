import { skills } from "../skills"

const SkillBox = ({ skill }) => {
	const { iconClass, description, title } = skill;

	return (
		<div className="col-md-4">
			<div className="service-box">
				<div className="service-ico">
					<span className="ico-circle"><i className={`bi ${iconClass}`}></i></span>
				</div>
				<div className="service-content">
					<h2 className="s-title">{title}</h2>
					<p className="s-description text-center">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

const Skills = () => (
	<section id="services" className="services-mf pt-5 route">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-box text-center">
						<h3 className="title-a">
							Skills
						</h3>
						<p className="subtitle-a">
							Areas where I feel more comfortable working.
						</p>
						<div className="line-mf"></div>
					</div>
				</div>
			</div>
			<div className="row">
				{
					skills.map(
						(skill) =>
							<SkillBox skill={skill} key={skill.id} />
					)}
			</div>
		</div>
	</section>
)

export default Skills;