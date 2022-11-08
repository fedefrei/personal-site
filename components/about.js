import Image from "next/image";
import elFede from "../public/img/el-fede.jpeg"

const DataAboutItem = ({ label, text }) =>
(
	<p>
		<span className="title-s">{label}: </span>
		<span>{text}</span>
	</p>
)

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
				<DataAboutItem label="Profile" text=".net/React Developer" />
				<DataAboutItem label="Email" text="frei.federico@gmail.com" />
				<DataAboutItem label="Country" text="Argentina" />
				<DataAboutItem label="Timezone" text="GMT -3 (Buenos Aires)" />
			</div>
		</div>
	</div>
)

const LeadText = ({ children }) => (
	<p className="lead">
		{children}
	</p>
)

function AboutMe() {
	return (
		<div className="about-me pt-4 pt-md-0">
			<div className="title-box-2">
				<h5 className="title-left">
					About me
				</h5>
			</div>
			<LeadText>I love providing people the means to make their lives easier thru technology. Working on the software industry from 10+ years now.</LeadText>
			<LeadText>I also love music and audio stuff!! #nerd</LeadText>
		</div>
	);
}

const About = () =>
(
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
)

export default About;