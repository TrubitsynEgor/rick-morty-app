import { DetailsDivProps, ICharacter } from '@/types';
import styles from './CharacterDetails.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getCharacterById } from '@/services/rickAndMorty';
import { Container, ErrorPage, Loader, Title } from '..';
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from 'react-icons/tb'
interface CharacterDetailsProps extends DetailsDivProps { }

export const CharacterDetails: FC<CharacterDetailsProps> = ({ className, ...props }) => {
  const { id } = useParams()
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['character', `character${id}`],
    queryFn: () => getCharacterById(id)
  })



  if (isLoading) return <Loader />
  if (isError) return <ErrorPage />

  return (
    <div className={cn(styles.characterDetails, className)} {...props}>
      <Container className={styles.container}>
        <img src={data.image} alt="" />
        <div className={styles.info}>
          <Title tag='h2'>{data.name}</Title>
          <span>Specie: <span className={styles.commonInfo}>{data.species}</span> </span>
          <span>Gender: <span className={styles.commonInfo}>{data.gender}</span></span>
          <span>Location: <span className={styles.commonInfo}>{data.location.name}</span></span>
          {id && <div className={styles.navigation}>
            {+id > 1 && <Link to={`/characters/${+id - 1}`} className={styles.btn}><TbSquareRoundedArrowLeftFilled /></Link>}
            <Link to={`/characters/${+id + 1}`} className={styles.btn}><TbSquareRoundedArrowRightFilled /></Link>
          </div>}
        </div>


      </Container>
    </div>
  )
};
