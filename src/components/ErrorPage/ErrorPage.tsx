import { DetailsDivProps } from '@/types';
import styles from './ErrorPage.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Title } from '..';
import ErrorImg from '../../assets/error.png'

interface ErrorProps extends DetailsDivProps { }

export const ErrorPage: FC<ErrorProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.error, className)} {...props}>
      <Title className={styles.title} tag='h2'>Oops, looks like we sent this page to another universe</Title>
      <img className={styles.img} src={ErrorImg} alt="ERROR Image" />
    </div>
  )
};
