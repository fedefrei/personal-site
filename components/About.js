import { differenceInDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import elFede from "../public/img/el-fede.jpeg";
import az900Certification from "../public/img/microsoft-az-900-certification.png";

const DataAboutItem = ({ label, text }) => (
	<p>
		<span className="title-s">{label}: </span>
		<span>{text}</span>
	</p>
);

const PresentationCard = () => (
	<div className="row">
		<div className="col-sm-6 col-md-5">
			<div className="about-img">
				<Image src={elFede} className="img-fluid rounded b-shadow-a" alt="" />
			</div>
		</div>
		<div className="col-sm-6 col-md-7">
			<div className="about-info">
				<DataAboutItem label="Name" text="Federico Freiberger" />
				<DataAboutItem label="Profile" text=".NET Dev/React Dev" />
				<DataAboutItem label="Email" text="frei.federico@gmail.com" />
				<DataAboutItem label="Country" text="Argentina" />
				<DataAboutItem label="Timezone" text="GMT -3 (Buenos Aires)" />
			</div>
		</div>
	</div>
);

const NewsSpan = ({ newsDate }) => {
	if (differenceInDays(new Date(), newsDate) > 90) {
		return null;
	}

	return <span className="badge bg-primary me-1">New!</span>;
};

const LeadText = ({ children }) => <p className="lead">{children}</p>;

function AboutMe() {
	return (
		<div className="about-me pt-4 pt-md-0">
			<div className="title-box-2">
				<h5 className="title-left">About me</h5>
			</div>
			<LeadText>
				I love providing people the means to make their lives easier thru technology. Working on the software industry from 10+ years now.
			</LeadText>
			<LeadText>
				<NewsSpan newsDate={new Date("2023-03-21")} />I got the certification "Microsoft Certified: Azure Fundamentals."{" "}
				<Link href="https://www.credly.com/badges/f361eada-c76b-4236-957e-4a4a71f4bc1c/linked_in_profile">Check!</Link>
			</LeadText>
			<LeadText>I also love music and audio stuff!! #nerd</LeadText>
			<div className="text-center">
				<Image src={az900Certification} className="img-fluid rounded b-shadow-a" alt="" height={150}></Image>
			</div>
		</div>
	);
}

const About = () => (
	<section id="about" className="about-mf sect-pt4 route">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="box-shadow-full">
						<div className="row">
							<div className="col-md-6">
								<PresentationCard />
							</div>
							<div className="col-md-6">
								<AboutMe />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
