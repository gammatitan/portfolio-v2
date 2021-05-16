import Hero from './Sections/Hero';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

const Home = () => {
  const onHeroButtonClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <Hero handleButtonClick={onHeroButtonClick} />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
