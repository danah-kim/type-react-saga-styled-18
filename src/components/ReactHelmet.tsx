import logo from 'logo.svg';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

type ReactHelmetProps = {
  title: string;
  description: string;
  lang?: string;
  canonical?: string;
  type?: string;
  keywords?: string;
};

function ReactHelmet(props: ReactHelmetProps) {
  const { title, description, lang = 'en', canonical, type = 'website', keywords } = props;
  const homepageUrl = `https://www.danah.dev/${canonical}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical ? <link rel="canonical" href={homepageUrl} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical ? <meta property="og:url" content={homepageUrl} /> : null}
      <meta property="og:image" content={logo} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content="danah.dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:card" content="summary" />
      {canonical ? <link rel="alternate" href={homepageUrl} hrefLang={lang} /> : null}
    </Helmet>
  );
}

export default memo(ReactHelmet);
