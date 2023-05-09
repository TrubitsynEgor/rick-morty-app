import { DetailsDivProps, ICharacter } from '@/types';
import styles from './Favorites.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, Title, useFavorites } from '..';
import { ReactComponent as RemoveSvg } from '../../assets/remove.svg'
import { Link } from 'react-router-dom';

interface FavoritesProps extends DetailsDivProps { }

export const Favorites: FC<FavoritesProps> = ({ className, ...props }) => {
  const favorites = useFavorites(state => state.favorites)
  const removeFavorite = useFavorites(state => state.removeFavorite)

  return (
    <div className={cn(styles.favorites, className)} {...props}>
      <Container>
        <Title>Favorites characters:</Title>
        <ul className={styles.list}>
          {favorites.map((el: ICharacter) => <li className={styles.item} key={el.id}>

            <Link to={`/characters/${el.id}`}><img src={el.image} alt="" /></Link>
            <Title className={styles.title} tag='h3'>{el.name}
              <RemoveSvg aria-label='Delete favorite character' onClick={() => removeFavorite(el.id.toString())} />
            </Title>
            <div className={styles.info}>
              <span>Specie: <span className={styles.commonInfo}>{el.species}</span> </span>
              <span>Gender: <span className={styles.commonInfo}>{el.gender}</span></span>
              <span>Location: <span className={styles.commonInfo}>{el.location.name}</span></span>
            </div>

          </li>)}
        </ul>
      </Container>
    </div>
  )
};
