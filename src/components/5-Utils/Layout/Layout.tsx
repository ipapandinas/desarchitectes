import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import Resize from 'components/1-Atoms/Resize/Resize';
import Alphabet from 'components/3-Blocks/Alphabet/Alphabet';
import Content from 'components/3-Blocks/Content/Content';
import Footer from 'components/3-Blocks/Footer/Footer';

import { useAppContext } from 'hooks';

import 'assets/styles/main.scss';
import './Layout.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  const { appData } = useAppContext()!;
  const { preview } = appData;

  return (
    <>
      <main>
        <div className="App__main">
          <div className="App__content">
            <Content>{children}</Content>
          </div>
          <div
            className={classNames('App__alphabet', {
              'App__alphabet--display': preview,
            })}
          >
            <Alphabet />
          </div>
        </div>

        <div className="App__footer">
          <Footer />
        </div>
      </main>

      <Resize />
    </>
  );
};

export default Layout;
