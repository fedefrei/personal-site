import About from "../components/about";
import Contact from "../components/contact";
import Courses from "../components/courses";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Skills from "../components/skills";

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<Courses />
			<Contact />
		</Layout>
	);
};

export default IndexPage;
