import Head from 'next/head';
import PageWrapper from '../../components/PageWrapper';
import ProjectsList from '../../containers/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Jake Brown</title>
      </Head>
      <PageWrapper>
        <ProjectsList />
      </PageWrapper>
    </>
  );
};

export default ProjectsPage;
