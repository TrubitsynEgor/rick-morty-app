
import styles from './FavoritesPanel.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { GiHeartBattery } from 'react-icons/gi'
import { Link } from 'react-router-dom';




export const FavoritesPanel: FC = () => {

  return (
    <Link to='/favorites' className={cn(styles.favoritesPanel)}>
      <GiHeartBattery />
      <span className={styles.badge}>{10}</span>
    </Link>
  )
};
