import { useSelector } from 'react-redux';

import { identity } from 'services';

export default function useApp(selector = identity) {
  return useSelector(state => selector(state.app));
}
