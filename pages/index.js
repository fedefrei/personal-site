import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Highlights from "../components/Highlights";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const IndexPage = () => {
	return (
		<Layout>
			<Head>
				<title>Federico Freiberger | Team Lead & Senior .NET Engineer</title>
				<meta
					name="description"
					content="Team Lead and senior .NET / full-stack engineer with 10+ years of experience. Building production platforms with C#, SQL Server, React and Azure."
				/>
				<meta property="og:title" content="Federico Freiberger | Team Lead & Senior .NET Engineer" />
				<meta
					property="og:description"
					content="10+ years building and running production web platforms with .NET, SQL Server, React and Azure."
				/>
				<meta property="og:type" content="website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Hero />
			<About />
			<Highlights />
			<Skills />
			<Portfolio />
			<Courses />
			<Contact />
			<Analytics />
		</Layout>
	);
};

export default IndexPage;
