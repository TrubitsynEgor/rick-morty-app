import { DetailsDivProps } from '@/types';
import styles from './SeasonsList.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, Title } from '..';

interface SeasonsListProps extends DetailsDivProps { }

export const SeasonsList: FC<SeasonsListProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.seasonsList, className)} {...props}>
      <Container>
        <Title>Seasons</Title>
      </Container>
    </div>
  )
};
