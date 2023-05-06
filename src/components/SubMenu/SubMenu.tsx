import { DetailsUlProps } from '@/types';
import styles from './SubMenu.module.scss';
import cn from 'classnames'
import { FC } from 'react';

interface SubMenuProps extends DetailsUlProps { }

export const SubMenu: FC<SubMenuProps> = ({ className, ...props }) => {

  return (
    <ul className={cn(styles.subMenu, className)} {...props}>

    </ul>
  )
};
