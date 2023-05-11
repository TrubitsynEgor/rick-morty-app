import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { FC, MutableRefObject, useRef, useState } from 'react';
import { AuthPanel, Container, FavoritesPanel, Form, Logo, Menu, Popup, Profile } from '..';
import { useAuth } from '../AuthPanel/userStore';


export const Header: FC<DetailsDivProps> = ({ className, ...props }) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)
  const isAuth = useAuth(state => state.isAuth)
  const focusRef = useRef() as MutableRefObject<HTMLInputElement>

  const openPopup = () => {
    setPopupIsVisible(true)
    focusRef.current?.focus()
  }


  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.container}>
        <Menu />

        <Logo />

        <div className={styles.wrapper}>
          <FavoritesPanel />
          <AuthPanel openProfile={setProfileIsOpen} openPopup={openPopup} />
        </div>


      </Container>

      <Popup visible={popupIsVisible} setVisible={setPopupIsVisible}>
        <Form focusRef={focusRef} setPopupIsVisible={setPopupIsVisible} />
      </Popup>

      {isAuth && <Profile isOpen={profileIsOpen} />}
    </header>
  )
};
