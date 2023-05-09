import { DetailsUlProps, ICharacter } from '@/types';
import styles from './CharactersList.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { useQuery } from 'react-query';
import { getAllCharacters } from '@/services/rickAndMorty';
import { Button, Container, ErrorPage, Loader, Title } from '..';
import { Link } from 'react-router-dom';
import { BsCalendarHeartFill } from 'react-icons/bs'
import { useFavoritesHandler } from '@/hooks';



export const CharactersList: FC<DetailsUlProps> = ({ className, ...props }) => {

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['characters', 'all'],
    queryFn: getAllCharacters
  })

  const { handleFavorites, favorites } = useFavoritesHandler()



  if (isLoading) return <Loader />
  if (isError) return <ErrorPage />

  return (
    <Container className={styles.container}>
      <Title>Characters</Title>
      <ul className={cn(styles.charactersList, className)} {...props}>
        {isSuccess && data.results.map((el: ICharacter) =>
          <li key={el.id} className={styles.item}>
            <Link to={`/characters/${el.id}`}><img src={el.image} alt="" /></Link>
            <Title tag='h3'>{el.name}</Title>
            <div className={styles.btnWrapper}>
              <Link to={`/characters/${el.id}`}><Button appearance='ghost'>Read more</Button></Link>
              <button className={cn(styles.btn)} onClick={() => handleFavorites(el.id.toString())}>
                <BsCalendarHeartFill
                  className={cn({ [styles.active]: favorites.some(f => el.id === f.id) })}

                /></button>
            </div>

          </li>
        )}
      </ul>
    </Container>
  )
};
