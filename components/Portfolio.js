import { mainJobs, freelanceProjects } from "../portfolioData";
import { format } from "date-fns";
import SectionTitle from "./SectionTitle";

const byStartDateDesc = (job1, job2) => (job1.dateStart < job2.dateStart ? 1 : -1);

const DateRange = ({ dateStart, dateEnd }) => (
	<>
		{format(new Date(dateStart), "MMM yyyy")} – {dateEnd ? format(new Date(dateEnd), "MMM yyyy") : "Present"}
	</>
);

const ChipList = ({ items }) => (
	<ul className="chip-list">
		{items.map((item) => (
			<li className="chip" key={item}>
				{item}
			</li>
		))}
	</ul>
);

const MainJobs = () => (
	<ol className="timeline">
		{[...mainJobs].sort(byStartDateDesc).map((job) => (
			<li className={`timeline-item${job.dateEnd ? "" : " current"}`} key={job.id}>
				<div className="card-surface">
					<div className="job-head">
						<div className="job-logo">
							<img src={`img/${job.img}`} alt={`${job.client} logo`} />
						</div>
						<div>
							<h3 className="job-title">{job.jobTitle}</h3>
							<div className="job-meta">
								{job.client} · <DateRange dateStart={job.dateStart} dateEnd={job.dateEnd} />
							</div>
						</div>
					</div>
					<p className="job-desc">{job.description}</p>
					<ChipList items={job.skills} />
				</div>
			</li>
		))}
	</ol>
);

const FreelanceProjects = () => (
	<div className="row g-3">
		{[...freelanceProjects].sort(byStartDateDesc).map((job) => (
			<div className="col-md-6 col-lg-4" key={job.id}>
				<div className="card-surface hoverable freelance-card">
					<h4>{job.client}</h4>
					<div className="job-meta mb-3">
						<DateRange dateStart={job.dateStart} dateEnd={job.dateEnd} />
					</div>
					<p className="job-desc">{job.description}</p>
					<ChipList items={job.skills} />
				</div>
			</div>
		))}
	</div>
);

const Portfolio = () => (
	<section id="portfolio" className="section">
		<div className="container">
			<SectionTitle number="04" title="Experience" subtitle="Where I've worked." />
			<MainJobs />
			<h3 className="subsection-title">Freelance projects</h3>
			<p className="text-muted-2 mb-4">Projects I took from scratch to finish.</p>
			<FreelanceProjects />
		</div>
	</section>
);

export default Portfolio;
