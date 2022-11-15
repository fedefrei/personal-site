import { mainJobs, freelanceProjects } from "../portfolioData";
import { format } from "date-fns";

const SkillsList = ({ skills }) => (
	<div className="text-left">
		{skills.map((skill) => (
			<div className="badge text-bg-secondary mx-1" key={skill}>
				{skill}
			</div>
		))}
	</div>
);

const MainProjects = () =>
	mainJobs
		.sort((job1, job2) => (job1.dateStart < job2.dateStart ? 1 : -1))
		.map((job) => (
			<div className="col-md-4" key={job.id}>
				<div className="work-box">
					<div className="portfolio-lightbox">
						<div className="work-img text-center py-5 mw-20">
							<img src={`img/${job.img}`} style={{ width: "240px", maxHeight: "150px" }} alt="" />
						</div>
					</div>
					<div className="work-content">
						<div className="row">
							<h2 className="w-title">{job.client}</h2>
							<div className="w-more">
								<span className="w-ctegory">{job.jobTitle}</span>{" "}
								<span className="w-date">
									{format(new Date(job.dateStart), "MM/yyyy")} - {job.dateEnd ? format(new Date(job.dateEnd), "MM/yyyy") : "Current"}
								</span>
							</div>
						</div>
						<div className="row py-2">
							<div className="w-more">{job.description}</div>
						</div>
						<SkillsList skills={job.skills} />
					</div>
				</div>
			</div>
		));

const FreelanceProjects = () =>
	freelanceProjects
		.sort((job1, job2) => (job1.dateStart < job2.dateStart ? 1 : -1))
		.map((job) => (
			<div className="col-md-4" key={job.id}>
				<div className="work-box">
					<div className="work-content">
						<div className="row">
							<h4>{job.client}</h4>
							<div className="w-more">
								<span className="w-ctegory">{job.jobTitle}</span>{" "}
								<span className="w-date">
									{format(new Date(job.dateStart), "MM/yyyy")} - {job.dateEnd ? format(new Date(job.dateEnd), "MM/yyyy") : "Current"}
								</span>
							</div>
						</div>
						<div className="row py-2">
							<div className="w-more">{job.description}</div>
						</div>
						<SkillsList skills={job.skills} />
					</div>
				</div>
			</div>
		));

const Portfolio = () => (
	<section id="portfolio" className="portfolio-mf sect-pt4 route">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-box text-center">
						<h3 className="title-a">Portfolio</h3>
						<p className="subtitle-a">Projects that I'm glad to have been involved.</p>
						<div className="line-mf"></div>
					</div>
				</div>
			</div>
			<div className="row">
				<MainProjects />
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-box text-center">
						<h3>Freelance Projects</h3>
						<p className="subtitle-a">Projects that I've taken from scracth to finish.</p>
						<div className="line-mf"></div>
					</div>
				</div>
			</div>
			<div className="row">
				<FreelanceProjects />
			</div>
		</div>
	</section>
);

export default Portfolio;
