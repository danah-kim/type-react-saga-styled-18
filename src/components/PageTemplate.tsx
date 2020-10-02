import ReactHelmet from './ReactHelmet';

import React, { memo, ReactNode } from 'react';

type PageTemplateProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
};

function PageTemplate(props: PageTemplateProps) {
  const { title = 'Title', description = '', canonical = '', type, children } = props;

  return (
    <>
      <ReactHelmet title={title} description={description} canonical={canonical} type={type} />
      {children}
    </>
  );
}

export default memo(PageTemplate);
