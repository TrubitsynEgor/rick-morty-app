import { DetailsDivProps } from '@/types';
import styles from './Container.module.scss';
import cn from 'classnames'
import { FC } from 'react';


export const Container: FC<DetailsDivProps> = ({ children, className, ...props }) => {

  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  )
};
