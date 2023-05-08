import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { AuthPanel, Container, FavoritesPanel, Logo, Menu } from '..';

interface HeaderProps extends DetailsDivProps { }

export const Header: FC<HeaderProps> = ({ className, ...props }) => {

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.container}>
        <Menu />

        <Logo />

        <div className={styles.wrapper}>
          <FavoritesPanel />
          <AuthPanel />
        </div>


      </Container>
    </header>
  )
};
