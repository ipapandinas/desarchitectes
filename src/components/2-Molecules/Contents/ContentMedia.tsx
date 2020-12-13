import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { Link } from 'react-scroll';

import TextMedias from 'components/1-Atoms/Medias/TextMedias';

import { MediaProps } from 'types/medias';

import styles from './Contents.module.scss';

interface Props {
  id: number;
  medias?: MediaProps[];
  setTextAnchor?: (textAnchor: string) => void;
}

const ContentMedia: FC<Props> = memo(({ id, medias, setTextAnchor }: Props) => {
  if (!setTextAnchor || !(medias instanceof Array) || medias.length === 0) {
    return null;
  }

  return (
    <Link
      activeClass={styles.mediaAnchorActive}
      className={classnames(styles.mediaAnchor, 'fade-in')}
      containerId="corpus"
      duration={500}
      offset={-180}
      onSetActive={() => setTextAnchor(`text-anchor-${id}`)}
      smooth
      spy
      to={`text-anchor-${id}`}
      key={`text-media-${id}`}
    >
      <TextMedias medias={medias} />
    </Link>
  );
});

export default ContentMedia;
