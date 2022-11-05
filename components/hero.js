const Hero = () =>
(
	<div id="hero" class="hero route bg-image" style={{ backgroundImage: "url(assets/img/hero-bg.jpg)" }}>
		<div class="overlay-itro"></div>
		<div class="hero-content display-table">
			<div class="table-cell">
				<div class="container">
					<h1 class="hero-title mb-4">Hi! I am Federico Freiberger</h1>
					<p class="hero-subtitle"><span class="typed" data-typed-items="Developer"></span></p>
				</div>
			</div>
		</div>
	</div>
)

export default Hero;