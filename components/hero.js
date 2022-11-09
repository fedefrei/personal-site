const Hero = () => (
	<div id="hero" className="hero route bg-image grayscale" style={{ backgroundImage: "url(img/el-fede.jpeg)", backgroundPosition: "0% 25%" }}>
		<div className="overlay-itro"></div>
		<div className="hero-content display-table">
			<div className="table-cell">
				<div className="container">
					<h1 className="hero-title mb-4">Hi! I am Federico Freiberger</h1>
					<p className="hero-subtitle">
						<span className="typed" data-typed-items="Developer"></span>
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Hero;
