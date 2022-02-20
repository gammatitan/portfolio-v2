import Section from '../../../components/Section';
import Typography from '../../../components/Typography';
import HomeSection from '../../../constants/homeSections';

const Blog = () => {
  return (
    <Section id={HomeSection.Blog}>
      <Typography variant="subheading">Blog</Typography>
    </Section>
  );
};

export default Blog;
