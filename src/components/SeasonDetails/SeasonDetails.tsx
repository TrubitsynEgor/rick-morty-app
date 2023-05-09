import { DetailsDivProps } from '@/types';
import styles from './SeasonDetails.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, Title } from '..';

interface SeasonDetailsProps extends DetailsDivProps { }

export const SeasonDetails: FC<SeasonDetailsProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.seasonDetails, className)} {...props}>
      <Container>
        <Title>Season </Title>
      </Container>
    </div>
  )
};
