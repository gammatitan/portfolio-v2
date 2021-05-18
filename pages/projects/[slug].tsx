import PageWrapper from '../../components/PageWrapper';
import Project from '../../containers/Project';
import { PROJECTS_LIST } from '../../content/Projects';

const ProjectPage = (props: any) => {
  return (
    <PageWrapper>
      <Project {...props.content} />
    </PageWrapper>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const content = PROJECTS_LIST.find(
    (item) => item.slug === `/projects/${params.slug}`
  );

  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'portfolio-v2' } },
      { params: { slug: 'shaba-website' } },
      { params: { slug: 'knox-cap-2020-quiz' } },
      { params: { slug: 'clear-h2o-booking-form' } },
      { params: { slug: 'clear-h2o-wesbite' } },
    ],
    fallback: false,
  };
};

export default ProjectPage;
