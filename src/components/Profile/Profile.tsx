import { DetailsDivProps } from '@/types';
import styles from './Profile.module.scss';
import cn from 'classnames'
import { FC } from 'react';
import { Portal, Title } from '..';
import { useAuth } from '../AuthPanel/userStore';
import { SlLogout } from 'react-icons/sl'
import { ReactComponent as Morty } from './morty.svg'

interface ProfileProps extends DetailsDivProps {
  isOpen: boolean
}

export const Profile: FC<ProfileProps> = ({ isOpen, className, ...props }) => {
  const loginOut = useAuth(state => state.loginOut)
  const email = useAuth(state => state.email)

  return (
    <Portal>
      <div className={cn(styles.profile, className, { [styles.isOpen]: isOpen })}
        {...props}>
        <Title
          className={styles.title}
          tag='h3'>
          <button onClick={loginOut} aria-label='log out'>
            <SlLogout />
          </button>
          User profile: <Morty className={styles.mortySvg} />
        </Title>
        <hr />

        <ul className={styles.userInfo}>
          <li>Email: {email}</li>
        </ul>
      </div>
    </Portal>
  )
};
