export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
				<p>© {new Date().getFullYear()} Federico Freiberger</p>
				<p>Logos and trademarks belong to their respective owners.</p>
			</div>
		</footer>
	);
}
