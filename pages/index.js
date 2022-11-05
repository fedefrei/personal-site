import About from '../components/about';
import Hero from '../components/hero';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<section id="services" className="services-mf pt-5 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">
									Services
								</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-briefcase"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Development</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Photography</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-binoculars"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Responsive Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-brightness-high"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Graphic Design</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle"><i className="bi bi-calendar4-week"></i></span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Marketing Services</h2>
									<p className="s-description text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
										provident vitae! Magni
										tempora perferendis eum non provident.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url(img/counters-bg.jpg)" }}>
				<div className="overlay-mf"></div>
				<div className="container position-relative">
					<div className="row">
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle"><i className="bi bi-check"></i></span>
								</div>
								<div className="counter-num">
									<p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter"></p>
									<span className="counter-text">WORKS COMPLETED</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
								</div>
								<div className="counter-num">
									<p data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="counter purecounter"></p>
									<span className="counter-text">YEARS OF EXPERIENCE</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle"><i className="bi bi-people"></i></span>
								</div>
								<div className="counter-num">
									<p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1" className="counter purecounter"></p>
									<span className="counter-text">TOTAL CLIENTS</span>
								</div>
							</div>
						</div>
						<div className="col-sm-3 col-lg-3">
							<div className="counter-box pt-4 pt-md-0">
								<div className="counter-ico">
									<span className="ico-circle"><i className="bi bi-award"></i></span>
								</div>
								<div className="counter-num">
									<p data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1" className="counter purecounter"></p>
									<span className="counter-text">AWARD WON</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="work" className="portfolio-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">
									Portfolio
								</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-1.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Lorem impsum dolor</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-2.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Loreda Cuno Nere</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-3.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Mavrito Lana Dere</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-4.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Bindo Laro Cado</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-5.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Studio Lena Mado</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="work-box">
								<a href="img/work-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src="img/work-6.jpg" alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Studio Big Bang</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<div className="testimonials paralax-mf bg-image" style={{ backgroundImage: "url(img/overlay-bg.jpg" }}>
				<div className="overlay-mf"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
								<div className="swiper-wrapper">

									<div className="swiper-slide">
										<div className="testimonial-box">
											<div className="author-test">
												<img src="img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Xavi Alonso</span>
											</div>
											<div className="content-test">
												<p className="description lead">
													Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit.
												</p>
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="testimonial-box">
											<div className="author-test">
												<img src="img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
												<span className="author">Marta Socrate</span>
											</div>
											<div className="content-test">
												<p className="description lead">
													Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-pagination"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="blog" className="blog-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">
									Blog
								</h3>
								<p className="subtitle-a">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="blog-single.html"><img src="img/post-1.jpg" alt="" className="img-fluid" /></a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Travel</h6>
										</div>
									</div>
									<h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
										a pellentesque nec,
										egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="#">
											<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="bi bi-clock"></span> 10 min
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="blog-single.html"><img src="img/post-2.jpg" alt="" className="img-fluid" /></a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
										a pellentesque nec,
										egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="#">
											<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="bi bi-clock"></span> 10 min
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card card-blog">
								<div className="card-img">
									<a href="blog-single.html"><img src="img/post-3.jpg" alt="" className="img-fluid" /></a>
								</div>
								<div className="card-body">
									<div className="card-category-box">
										<div className="card-category">
											<h6 className="category">Web Design</h6>
										</div>
									</div>
									<h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
									<p className="card-description">
										Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
										a pellentesque nec,
										egestas non nisi.
									</p>
								</div>
								<div className="card-footer">
									<div className="post-author">
										<a href="#">
											<img src="img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
											<span className="author">Morgan Freeman</span>
										</a>
									</div>
									<div className="post-date">
										<span className="bi bi-clock"></span> 10 min
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}>
				<div className="overlay-mf"></div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="contact-mf">
								<div id="contact" className="box-shadow-full">
									<div className="row">
										<div className="col-md-6">
											<div className="title-box-2">
												<h5 className="title-left">
													Send Message Us
												</h5>
											</div>
										</div>
										<div className="col-md-6">
											<div className="title-box-2 pt-4 pt-md-0">
												<h5 className="title-left">
													Get in Touch
												</h5>
											</div>
											<div className="more-info">
												<p className="lead">
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
													expedita aperiam aliquid at.
													Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
													mollitia inventore?
												</p>
												<ul className="list-ico">
													<li><span className="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
													<li><span className="bi bi-phone"></span> (617) 557-0089</li>
													<li><span className="bi bi-envelope"></span> contact@example.com</li>
												</ul>
											</div>
											<div className="socials">
												<ul>
													<li><a href=""><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
													<li><a href=""><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
													<li><a href=""><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
													<li><a href=""><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout >
	)
};

export default IndexPage;
