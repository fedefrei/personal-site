import Image from "next/image";
import elFede from "../public/img/el-fede.jpeg";

const Hero = () => (
	<section id="hero" className="hero">
		<div className="container">
			<div className="row align-items-center flex-column-reverse flex-lg-row">
				<div className="col-lg-8">
					<p className="hero-eyebrow">Hi, I'm</p>
					<h1 className="hero-title">Federico Freiberger</h1>
					<p className="hero-role">Team Lead · Senior .NET Engineer · Full-Stack Developer</p>
					<p className="hero-lead">
						10+ years building and running production web platforms with .NET, SQL Server, React and Azure.
					</p>
					<div className="hero-actions">
						<a className="btn-accent scrollto" href="#production">
							See what's in production <i className="bi bi-arrow-down"></i>
						</a>
						<a className="btn-ghost" href="mailto:frei.federico@gmail.com">
							<i className="bi bi-envelope"></i>Email me
						</a>
						<a
							className="icon-link"
							href="https://www.linkedin.com/in/federico-freiberger-b511054/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<i className="bi bi-linkedin"></i>
						</a>
						<a className="icon-link" href="https://github.com/fedefrei" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<i className="bi bi-github"></i>
						</a>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="hero-photo">
						<Image src={elFede} alt="Federico Freiberger" priority />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
