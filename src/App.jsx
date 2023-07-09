import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SkillsGrid from "./components/SkillsGrid"
import AboutMe from "./components/sections/AboutMe"
import BigProjects from "./components/sections/BigProjects"
import ContactMe from "./components/sections/ContactMe"
import Hero from "./components/sections/Hero"
import SmallProjects from "./components/sections/SmallProjects"

function App() {

  return (
		<>
			<Navbar />
			<section id="aboutme" className="flex flex-col">
				<Hero />
				<AboutMe/>
			</section>
			<SkillsGrid/>
			<section className="" sty id="portfolio">
				<BigProjects />
				<SmallProjects />
			</section>
			<section id="contactme">
				<ContactMe />

			</section>
			<Footer />
		</>
	);
}

export default App
