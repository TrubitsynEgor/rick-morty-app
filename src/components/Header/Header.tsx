import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, Logo, Menu } from '..';

interface HeaderProps extends DetailsDivProps { }

export const Header: FC<HeaderProps> = ({ className, ...props }) => {

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.container}>
        <Menu />

        <Logo />

      </Container>
    </header>
  )
};
