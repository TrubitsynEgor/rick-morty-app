import { DetailsDivProps } from '@/types';
import styles from './MainCharacters.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Rick from '../../assets/mainCharacters/rick.png'
import Morty from '../../assets/mainCharacters/morty.png'
import Jerry from '../../assets/mainCharacters/jerry.png'
import Beth from '../../assets/mainCharacters/beth.png'
import Summer from '../../assets/mainCharacters/sumer.png'

const mainCharacters = [
  { image: Rick, name: 'Rick Sanchez', description: "Rick Sanchez (voiced by Justin Roiland) is a brilliant scientist and alcoholic whose inventions and experiments serve as the basis for episodes. Morty Smith and Summer Smith's grandfather, as well as Beth's father. Rick was absent from the family for many years until he finally returned before the pilot episode to live with the Smith family, much to Jerry's disapproval. He currently resides in the garage of Smith's house, where his entire laboratory is based. Here he builds new inventions, travels to other dimensions, and tests things on alien life forms." },
  { image: Morty, name: 'Morty Smith', description: "Morty Smith (voiced by Justin Roiland) is Rick's impressionable and socially awkward teenage grandson, who often drags on his grandfather's escapades. Morty is a weak and nervous wreck who desperately tries to keep his sanity when he is taken on bizarre and hilariously mind-boggling adventures that Rick takes on, which is already a big enough problem since he is already struggling to fit in at his own high school." },
  { image: Jerry, name: 'Jerry Smith', description: "Jerry Smith (voiced by Chris Parnell) is Morty's insecure father, whose disapproval of Rick's influence on Morty only exacerbates his marital problems with Beth. Jerry constantly finds himself in a failed marriage with his wife, as they are always arguing and never expressing the love for each other that most parents do." },
  { image: Beth, name: 'Beth Smith ', description: "Beth Smith (voiced by Sarah Chalk)- Morty's holy mother, who is a cardiac surgeon for horses. Beth seems to have problems with her marriage to Jerry and usually considers leaving him for another guy." },
  { image: Summer, name: 'Summer Smith', description: "Summer Smith (voiced by Spencer Grammer)- Morty's older sister who sometimes joins Rick on his adventures. She only cares about her friends and social life at school and is easily annoyed by her family, although she sometimes becomes jealous of Morty's relationship with Rick." },
]


export const MainCharacters: FC = () => {

  return (
    <ul className={cn(styles.mainCharacters)}>
      {mainCharacters.map((el, idx) =>
        <li className={styles.item} key={el.name}>
          <Link className={styles.link} to={`/characters/${idx + 1}`}>
            <img className={styles.image} src={el.image} alt="R&M" />
          </Link>

          <div className={styles.content}>
            <Link className={styles.link} to={`/characters/${idx + 1}`}>
              <h3 className={styles.title}>{el.name}</h3>
            </Link>

            <p className={styles.descr}>{el.description}</p>
          </div>
        </li>
      )}
    </ul>
  )
};


