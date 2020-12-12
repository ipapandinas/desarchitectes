import React, { FC } from 'react';
import classnames from 'classnames';

import Separator from 'components/1-Atoms/Separator/Separator';
import ArticleContent, {
  CONTENT_TYPE_MEDIA,
  CONTENT_TYPE_TEXT,
} from 'components/2-Molecules/ArticleContent/ArticleContent';
import ArticleCorpus from 'components/3-Blocks/ArticleCorpus/ArticleCorpus';
import Footer from 'components/3-Blocks/Footer/Footer';

import { ArticlesDataProps } from 'types/articles';

import styles from './ArticleDesktop.module.scss';

interface Props {
  data: ArticlesDataProps;
}

const ArticleDesktop: FC<Props> = ({ data }: Props) => {
  const { content, definition, pdf, title } = data;

  return (
    <div className={classnames(styles.root, 'fade-in')} id="articleTop">
      <div className={styles.left} id="corpus">
        <ArticleCorpus
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
          <ArticleContent content={content} type={CONTENT_TYPE_MEDIA} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default ArticleDesktop;
