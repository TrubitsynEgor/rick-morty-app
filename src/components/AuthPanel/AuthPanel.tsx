import styles from './AuthPanel.module.scss';
import cn from 'classnames'
import { Dispatch, FC, SetStateAction } from 'react';
import { ReactComponent as LoginSVG } from './login.svg';
import { useAuth } from './userStore';

interface AuthPanelProps {
  openPopup: () => void
  openProfile: Dispatch<SetStateAction<boolean>>
}

export const AuthPanel: FC<AuthPanelProps> = ({ openPopup, openProfile }) => {
  const isAuth = useAuth(state => state.isAuth)
  return (
    <button onClick={(e) => isAuth ? openProfile((prev) => !prev) : openPopup()} className={cn(styles.authPanel)} >
      <LoginSVG />
    </button>
  )
};
