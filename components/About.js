import { differenceInDays } from "date-fns";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import az900Certification from "../public/img/microsoft-az-900-certification.png";

const facts = [
	{ value: "10+ years", label: "building for the web" },
	{ value: "Team Lead", label: "at MultiTracks.com" },
	{ value: ".NET · React", label: "SQL Server · Azure" },
	{ value: "GMT-3", label: "Buenos Aires · fluent English" },
];

const NewsPill = ({ newsDate }) => {
	if (differenceInDays(new Date(), newsDate) > 90) {
		return null;
	}

	return <span className="pill pill-new ms-auto">New</span>;
};

const About = () => (
	<section id="about" className="section">
		<div className="container">
			<SectionTitle number="01" title="About me" />
			<div className="row gy-5 gx-lg-5">
				<div className="col-lg-6 about-text">
					<p>
						I build software that makes people's work easier. I've spent <strong>10+ years</strong> in the industry, and I'm currently{" "}
						<strong>leading a team</strong> on the website, APIs and internal tooling at <strong>MultiTracks.com</strong>.
					</p>
					<p>On the side I ship my own products end to end: design, code, deploy and support for real users.</p>
					<p>Outside of work: music and audio.</p>
				</div>
				<div className="col-lg-6">
					<div className="fact-grid">
						{facts.map((fact) => (
							<div className="fact" key={fact.value}>
								<div className="fact-value">{fact.value}</div>
								<div className="fact-label">{fact.label}</div>
							</div>
						))}
					</div>
					<a
						className="cert"
						href="https://www.credly.com/badges/f361eada-c76b-4236-957e-4a4a71f4bc1c/linked_in_profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src={az900Certification} alt="Microsoft Certified: Azure Fundamentals badge" />
						<div>
							<div className="fw-semibold">Microsoft Certified: Azure Fundamentals</div>
							<div className="course-meta">Verify on Credly ↗</div>
						</div>
						<NewsPill newsDate={new Date("2023-03-21")} />
					</a>
				</div>
			</div>
		</div>
	</section>
);

export default About;
