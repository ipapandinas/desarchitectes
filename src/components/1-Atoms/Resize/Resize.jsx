import { useEffect } from 'react';

import { useUiContext } from 'hooks';
import { getMedia } from 'services';

export default function Resize() {
  const { updateDevice } = useUiContext();

  useEffect(() => {
    function updateMedia() {
      const media = getMedia();
      updateDevice(media);
    }

    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  }, [updateDevice]);

  return null;
}
