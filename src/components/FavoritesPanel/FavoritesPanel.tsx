
import styles from './FavoritesPanel.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { GiHeartBattery } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { useFavorites } from '..';


export const FavoritesPanel: FC = () => {

  const count = useFavorites(state => state.count)
  return (
    <Link to='/favorites' className={cn(styles.favoritesPanel)}>
      <GiHeartBattery />
      <span className={styles.badge}>{count}</span>
    </Link>
  )
};
