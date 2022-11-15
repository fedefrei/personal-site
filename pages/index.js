import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Head from "next/head";

const IndexPage = () => {
	return (
		<Layout>
			<Head>
				<title>Hi, I'm Federico!</title>
			</Head>
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Courses />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
