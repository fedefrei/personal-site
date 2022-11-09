import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
				<link rel="stylesheet" href="/vendor/bootstrap-icons/bootstrap-icons.css" />
				<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
				<link href="/css/style.css" rel="stylesheet" />
				<link href="/css/custom-style.css" rel="stylesheet" />
				<title>Hi, I'm Federico!</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
