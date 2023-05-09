import { DetailsDivProps } from '@/types';
import styles from './SeasonsList.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, Paragraph, Title } from '..';
import { seasonData } from '@/data/seasonData';
import { Link } from 'react-router-dom';

interface SeasonsListProps extends DetailsDivProps { }

export const SeasonsList: FC<SeasonsListProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.seasonsList, className)} {...props}>
      <Container>
        <Title>Seasons:</Title>
        <ul className={styles.list}>
          {seasonData.map(el =>
            <li key={el.id} className={styles.item}>
              <Link to={`/seasons/${el.id}`}>
                <img src={el.image} alt="R&M" />
              </Link>
              <div className={styles.content}>
                <Title className={styles.title} tag='h3'><Link to={`/seasons/${el.id}`}>Season {el.id} </Link></Title>
                <Paragraph className={styles.descr}>{el.description}</Paragraph>
              </div>
            </li>
          )}
        </ul>
      </Container>
    </div>
  )
};
