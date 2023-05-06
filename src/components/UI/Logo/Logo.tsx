import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { ReactComponent as LogoSVG } from './Rick_and_Morty.svg'
import { Link } from 'react-router-dom';


export const Logo: FC<DetailsDivProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link to='/'><LogoSVG /></Link>
    </div>
  )
};
