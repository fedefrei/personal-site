import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/vendor/bootstrap-icons/bootstrap-icons.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
				<link href="/css/theme.css" rel="stylesheet" />
				<meta name="theme-color" content="#0b0f17" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			<script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
			<script src="/vendor/main.js"></script>
		</Html>
	);
}
