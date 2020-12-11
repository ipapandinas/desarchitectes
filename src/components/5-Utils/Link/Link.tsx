import React, { FC, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { useAppContext, usePageContext } from 'hooks';

interface Props {
  children: ReactNode;
  className?: string;
  lang?: string;
  route?: string;
  title?: string;
  word?: string;
}

const Link: FC<Props> = ({
  children,
  className,
  lang,
  route,
  title,
  word,
}: Props) => {
  const { setWord } = useAppContext()!;
  const { updatePageData } = usePageContext()!;
  const newRoute = route ? `/${lang}/${route}` : `/${lang}`;

  return (
    <GatsbyLink
      className={className}
      onClick={() => {
        setWord(word);
        updatePageData({
          lang,
        });
      }}
      title={title}
      to={newRoute}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
