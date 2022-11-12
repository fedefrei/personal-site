import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
