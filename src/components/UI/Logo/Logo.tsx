import styles from './Logo.module.scss';
import { ReactComponent as LogoSVG } from './Rick_and_Morty.svg'
import { Link } from 'react-router-dom';


export const Logo = () => {

  return (
    <div className={styles.logo} >
      <Link to='/'><LogoSVG /></Link>
    </div>
  )
};
