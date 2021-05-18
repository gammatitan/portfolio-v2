import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Experience from './Sections/Experience';

const Home = () => {
  const onHeroButtonClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <Hero handleButtonClick={onHeroButtonClick} />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
