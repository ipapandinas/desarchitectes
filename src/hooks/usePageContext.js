import { useContext } from 'react';

import { PageContext } from 'contexts';

export default function usePageContext() {
  return useContext(PageContext);
}
