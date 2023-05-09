import { DetailsUlProps, ICharacter } from '@/types';
import styles from './CharactersList.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { useQuery } from 'react-query';
import { getAllCharacters } from '@/services/rickAndMorty';
import { Button, Container, ErrorPage, Loader, Title } from '..';
import { Link } from 'react-router-dom';

interface CharactersListProps extends DetailsUlProps { }

export const CharactersList: FC<CharactersListProps> = ({ className, ...props }) => {

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['characters', 'all'],
    queryFn: getAllCharacters
  })



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
            <Link to={`/characters/${el.id}`}><Button appearance='ghost'>Read more</Button></Link>
          </li>
        )}
      </ul>
    </Container>
  )
};