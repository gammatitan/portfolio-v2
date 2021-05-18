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
  const paths = PROJECTS_LIST.map((project) => ({
    params: { slug: project.slug.replace('/projects/', '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPage;
