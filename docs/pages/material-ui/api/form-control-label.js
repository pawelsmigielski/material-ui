import * as React from 'react';
import ApiPage from 'docs/src/modules/components/ApiPage';
import mapApiPageTranslations from 'docs/src/modules/utils/mapApiPageTranslations';
import jsonPageContent from './form-control-label.json';

export default function Page(props) {
  const { descriptions, pageContent } = props;
  return <ApiPage descriptions={descriptions} pageContent={pageContent} />;
}

export function getStaticProps() {
  const req = require.context(
    'docs/translations/api-docs/form-control-label',
    false,
    /form-control-label.*.json$/,
  );
  const descriptions = mapApiPageTranslations(req);

  return {
    props: {
      descriptions,
      pageContent: jsonPageContent,
    },
  };
}
