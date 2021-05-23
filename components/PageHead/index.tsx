import React from 'react';
import Head from 'next/head';
import CONTACT_INFO from '../../content/ContactInfo';

const pageTitle: string = 'Jake Brown | Software Engineer';

const keywords: string[] = [
  'web design',
  'website developer',
  'software engineer',
  'freelance',
  'javascript',
  'react',
  'PHP',
  'wordpress',
  'portfolio',
  'Jake Brown',
  'Basingstoke',
  'Hampshire',
  'UK',
];

const description: string =
  'Jake Brown is an experienced software engineer based in Basingstoke, UK. He specialised in building digital products with quality user experience.';

const PageHead = () => (
  <Head>
    <title>{pageTitle}</title>
    <link rel="icon" href="/favicon/favicon-48x48.png" />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/favicon/favicon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="96x96"
      href="/favicon/favicon-96x96.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href="/favicon/favicon-192x192.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="256x256"
      href="/favicon/favicon-256x256.png"
    />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="description" content={description} />
    <meta property="og:site_name" content="Jake Brown" />
    <meta property="og:url" content="https://www.jake-brown.co.uk" />
    <meta property="og:type" content="website" />
    <meta itemProp="name" content="Jake Brown" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      rel="stylesheet"
    />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta property="twitter:card" key="twitterCard" content="summary" />
    <meta
      property="twitter:site"
      key="twitterSite"
      content={CONTACT_INFO.TWITTER_HANDLE}
    />
    <meta
      property="twitter:creator"
      key="twitterCreator"
      content={CONTACT_INFO.TWITTER_HANDLE}
    />
    <meta key="twitterTitle" property="twitter:title" content={pageTitle} />
    <meta
      key="twitterDescription"
      property="twitter:description"
      content={description}
    />
  </Head>
);

export default PageHead;
