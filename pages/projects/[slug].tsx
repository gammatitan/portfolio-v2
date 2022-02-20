import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import Project from '../../containers/Project';
import { Project as ProjectType, PROJECTS_LIST } from '../../content/Projects';

type Props = {
  content: ProjectType;
};

const ProjectPage = (props: Props) => {
  const { content } = props;
  return (
    <>
      <Head>
        <title>
          {content.name} - {content.client} | Jake Brown
          <meta name="robots" content="noindex, follow" />
        </title>
      </Head>
      <PageWrapper>
        <Project {...props.content} />
      </PageWrapper>
    </>
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
