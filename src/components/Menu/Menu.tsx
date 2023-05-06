import { DetailsDivProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MenuProps extends DetailsDivProps { }

export const Menu: FC<MenuProps> = ({ className, ...props }) => {

  return (
    <nav className={cn(styles.menu, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to='/seasons'>Seasons</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/characters'>Characters</Link>
        </li>
      </ul>
    </nav>
  )
};
