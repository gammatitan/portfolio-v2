import React from 'react';
import Head from 'next/head';
import PageWrapper from '../../../components/PageWrapper';
import GardenPartyConfirmation from '../../../containers/GardenPartyConfirmation';

const GardenParty2021ConfirmationPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageWrapper>
        <GardenPartyConfirmation />
      </PageWrapper>
    </>
  );
};

export default GardenParty2021ConfirmationPage;
