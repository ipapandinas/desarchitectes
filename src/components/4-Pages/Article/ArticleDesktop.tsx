import React, { FC, useState } from 'react';
import classnames from 'classnames';

import Separator from 'components/1-Atoms/Separator/Separator';
import ArticleContent, {
  CONTENT_TYPE_MEDIA,
  CONTENT_TYPE_TEXT,
} from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';

import { ArticlesDataProps } from 'types/articles';

import styles from './ArticleDesktop.module.scss';

interface Props {
  data: ArticlesDataProps;
}

const ArticleDesktop: FC<Props> = ({ data }: Props) => {
  const { content, definition, pdf, title } = data;
  const [activeTextAnchor, setTextAnchor] = useState('');

  return (
    <div className={classnames(styles.root, 'fade-in')} id="articleTop">
      <div className={styles.left} id="corpus">
        <ArticleCorpus
          activeTextAnchor={activeTextAnchor}
          content={content}
          definition={definition}
          pdf={pdf}
          title={title}
          variant={CONTENT_TYPE_TEXT}
        />
      </div>

      <Separator />

      <div className={styles.right}>
        {content && (
          <ArticleContent
            content={content}
            setTextAnchor={setTextAnchor}
            type={CONTENT_TYPE_MEDIA}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleDesktop;
