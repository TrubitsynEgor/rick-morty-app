import { DetailsDivProps } from '@/types';
import styles from './SeasonDetails.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, EpisodesList, Paragraph, Title } from '..';
import { useParams } from 'react-router-dom';
import { seasonData } from '@/data/seasonData';
import { getSeasonById } from '@/services/rickAndMorty';
import { useQuery } from 'react-query';

interface SeasonDetailsProps extends DetailsDivProps { }

export const SeasonDetails: FC<SeasonDetailsProps> = ({ className, ...props }) => {
  const { id } = useParams()
  const season = seasonData.find(el => el.id.toString() === id)







  return (
    <div className={cn(styles.seasonDetails, className)} {...props}>
      <Container >
        <Title>Season {season?.id}</Title>
        <div className={styles.content}>
          <img src={season?.image} alt="R&M" />
          <Paragraph className={styles.descr}>{season?.description}</Paragraph>
        </div>

        <EpisodesList id={id} />
      </Container>
    </div>
  )
};
