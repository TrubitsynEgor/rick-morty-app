import styles from './SubMenu.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Link } from 'react-router-dom';

const seasons = new Array(5).fill('season')

interface SubMenuProps {
  openSubMenu: () => void
  closeSubMenu: () => void
}

export const SubMenu: FC<SubMenuProps> = ({ openSubMenu, closeSubMenu }) => {

  return (
    <div className={styles.wrapper}>
      <ul className={cn(styles.subMenu)} onMouseOver={openSubMenu} onMouseLeave={closeSubMenu}>
        {seasons.map((el, idx) =>
          <li key={idx}>
            <Link to={`/seasons/${idx + 1}`}>{`${idx + 1} ${el}`}</Link>
          </li>
        )}
      </ul>
    </div>
  )
};
