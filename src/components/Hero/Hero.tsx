import styles from './Hero.module.scss';
import { FC } from 'react';
import { Container, Paragraph, Title } from '..';
import { Button } from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/hero_content.png'





export const Hero: FC = () => {

  return (
    <div className={styles.hero}>
      <Container className={styles.container}>
        <Title className={styles.title}>Rick and Morty</Title>
        <Paragraph className={styles.descr}>Rick and Morty is an American animated television series created by Dan Harmon and Justin Roiland that premiered on the Cartoon Network [adult swim] programming block on December 2, 2013.</Paragraph>
        <div className={styles.buttons}>
          <Link to='/seasons'><Button appearance='primary'>Go to season</Button></Link>
          <a href='#storyline'> <Button appearance='ghost' arrow='right'>Reed more</Button></a>
        </div>
        <img src={HeroImg} alt="R&M" />
      </Container>

    </div>
  )
};
