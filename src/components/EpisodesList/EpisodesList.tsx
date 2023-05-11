import { DetailsUlProps, ISeasons } from '@/types';
import styles from './EpisodesList.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSeasonById } from '@/services/rickAndMorty';
import { ErrorPage, Loader, Title } from '..';

interface EpisodesListProps extends DetailsUlProps {
  id?: string
}

export const EpisodesList: FC<EpisodesListProps> = ({ id, className, ...props }) => {

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['seasonsData', `season${id}`],
    queryFn: () => getSeasonById(id),
  })

  if (isLoading) return <Loader />
  if (isError) return <ErrorPage />


  return (
    <ul className={cn(styles.episodesList, className)} {...props}>
      {isSuccess && data.results.map((el: ISeasons) =>
        <li key={el.id} className={styles.item}>
          <Title tag='h3'>{el.name}</Title>
          <span className={styles.badge}>{el.episode}</span>
          <span className={styles.date}>{el.air_date}</span>
        </li>
      )}
    </ul>
  )
};
