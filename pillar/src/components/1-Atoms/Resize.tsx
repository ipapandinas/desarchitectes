import { useEffect } from 'react'

import { useUiContext } from 'hooks'
import { getMedia } from 'services/ui'

type ResizeType = () => null

const Resize: ResizeType = () => {
  const { updateDevice } = useUiContext() ?? {}

  useEffect(() => {
    function updateMedia (): void {
      const media = getMedia()
      if (updateDevice !== undefined) {
        updateDevice(media)
      }
    }

    window.addEventListener('resize', updateMedia)
    updateMedia()
    return () => window.removeEventListener('resize', updateMedia)
  }, [updateDevice])

  return null
}

export default Resize
