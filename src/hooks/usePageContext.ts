import { useContext } from 'react';

import { PageContext, PageContextProps } from 'contexts/pageContext';

export default function usePageContext(): PageContextProps {
  return useContext(PageContext);
}
