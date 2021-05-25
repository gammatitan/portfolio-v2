import React from 'react';
import Head from 'next/head';
import PageWrapper from '../../../components/PageWrapper';
import GardenParty from '../../../containers/GardenParty';

const GardenParty2021Page = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageWrapper>
        <GardenParty />
      </PageWrapper>
    </>
  );
};

export default GardenParty2021Page;
