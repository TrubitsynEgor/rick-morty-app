import styles from './AuthPanel.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LoginSVG } from './login.svg';


export const AuthPanel: FC = () => {
  const isAuth = true
  return (
    <Link to={isAuth ? '/profile' : '/login'} className={cn(styles.authPanel)} >
      <LoginSVG />
    </Link>
  )
};
