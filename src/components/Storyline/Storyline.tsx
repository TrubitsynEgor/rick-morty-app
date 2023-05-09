import { DetailsDivProps } from '@/types';
import styles from './Storyline.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Container, MainCharacters, Paragraph, Title } from '..';
import { ReactComponent as StorylineSVG } from './storyline_icon.svg'
import StorylineImg from '../../assets/storyline_content.jpg'
import CharactersImg from '../../assets/storiline_02.png'

interface StorylineProps extends DetailsDivProps { }

export const Storyline: FC<StorylineProps> = ({ className, ...props }) => {

  return (
    <div className={cn(styles.storyline, className)} {...props}>
      <Container className={styles.container}>
        <Title tag='h2' className={styles.title}><StorylineSVG /> Storyline:</Title>
        <div className={styles.descrBox}>
          <Paragraph className={styles.descr}>
            After missing for nearly 20 years, Rick Sanchez suddenly shows up on his daughter Beth's doorstep, eager to move in with her and her family. Beth welcomes him with open arms, but her unremarkable husband Jerry is none too thrilled about the tearful reunion, as Rick's arrival serves to shake things up a bit around the house. Rick turns the garage into his personal lab and begins working on all kinds of dangerous sci-fi gadgets and gadgets. It wouldn't be so bad if it weren't for the fact that Rick keeps involving his grandchildren Morty and Summer in his crazy adventures
          </Paragraph>
          <img src={StorylineImg} alt="R&M" />
        </div>

        <Title tag='h2' className={cn(styles.title, styles.left)}> Main characters: <img src={CharactersImg} alt="R&M" className={styles.img} /> </Title>

        <MainCharacters />

      </Container>
    </div>
  )
};
