const Contact = () => (
	<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}>
		<div className="overlay-mf"></div>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="contact-mf">
						<div id="contact" className="box-shadow-full">
							<div className="row">
								<div className="title-box-2 pt-4 pt-md-0">
									<h5 className="title-left">Get in Touch</h5>
								</div>
								<div className="more-info">
									<p className="lead">
										Lets get in touch on LinkedIn or Twitter. I'm not much of a content creator but we can have fun.
									</p>
									<ul className="list-ico">
										<li>
											<a href="https://www.linkedin.com/in/federico-freiberger-b511054/">
												<span className="bi bi-linkedin"></span>LinkedIn
											</a>
										</li>
										<li>
											<a href="https://twitter.com/fedefrei">
												<span className="bi bi-twitter"></span>Twitter
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Contact;
