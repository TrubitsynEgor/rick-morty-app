import { DetailsDivProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'
import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { SubMenu } from '..';



export const Menu: FC<DetailsDivProps> = ({ className, ...props }) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const openSubMenu = () => {
    setSubMenuIsOpen(true)
  }
  const closeSubMenu = () => {
    setSubMenuIsOpen(false)

  }



  return (
    <nav className={cn(styles.menu, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.item} ref={dropdownRef} onMouseOver={openSubMenu} onMouseLeave={closeSubMenu}>
          <Link
            className={cn(styles.link, {
              [styles.open]: subMenuIsOpen
            })} to='/seasons'>
            Seasons <IoIosArrowDroprightCircle />
          </Link>
          {subMenuIsOpen && <SubMenu openSubMenu={openSubMenu} closeSubMenu={closeSubMenu} />}
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/characters'>Characters</Link>
        </li>
      </ul>
    </nav>
  )
};
