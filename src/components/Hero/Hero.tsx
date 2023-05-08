import { DetailsDivProps } from '@/types';
import styles from './Hero.module.scss';
import cn from 'classnames'
import { FC } from 'react';

interface HeroProps extends DetailsDivProps { }

export const Hero: FC<HeroProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.hero, className)} {...props}>

    </div>
  )
};
