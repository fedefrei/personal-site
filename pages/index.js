import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Courses from "../components/Courses";

const IndexPage = () => {
	return (
		<Layout>
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
