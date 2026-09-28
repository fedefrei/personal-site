const links = [
	{ href: "#about", label: "About" },
	{ href: "#production", label: "In production" },
	{ href: "#skills", label: "Skills" },
	{ href: "#portfolio", label: "Experience" },
	{ href: "#courses", label: "Learning" },
	{ href: "#contact", label: "Contact" },
];

// Active state, scroll offset and the mobile toggle are handled by /vendor/main.js
export default function Header() {
	return (
		<header id="header" className="site-header fixed-top">
			<div className="container d-flex align-items-center justify-content-between">
				<a className="logo scrollto" href="#hero" aria-label="Federico Freiberger, back to top">
					FF
				</a>
				<nav id="navbar" className="navbar">
					<ul>
						{links.map((link) => (
							<li key={link.href}>
								<a className="nav-link scrollto" href={link.href}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<i className="bi bi-list mobile-nav-toggle" role="button" aria-label="Toggle navigation"></i>
				</nav>
			</div>
		</header>
	);
}
