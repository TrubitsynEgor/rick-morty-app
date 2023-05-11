import { DetailsFormProps } from '@/types';
import styles from './Form.module.scss';
import cn from 'classnames'
import { Dispatch, FC, SetStateAction, useState, Ref, MutableRefObject } from 'react';
import { Button, Input } from '..';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useForm, Controller } from 'react-hook-form';
import { useFirebase } from '@/hooks/useFirebase';
import { useAuth } from '../AuthPanel/userStore';
import { emailValidation, passwordValidation } from './validations';

interface FormProps extends DetailsFormProps {
  setPopupIsVisible: Dispatch<SetStateAction<boolean>>
  focusRef: MutableRefObject<HTMLInputElement>
}
type FormValuesType = {
  email: string
  password: string
}

export const Form: FC<FormProps> = ({ focusRef, setPopupIsVisible, className, ...props }) => {
  const [register, setRegister] = useState(false)
  const [passIsVisible, setPassIsVisible] = useState(false)
  const { submitAuthData, submitRegData } = useFirebase()
  const error = useAuth((state) => state.error)
  const isAuth = useAuth((state) => state.isAuth)

  const { handleSubmit, control, formState: { errors } } = useForm<FormValuesType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleAuthSubmit = (data: FormValuesType) => {
    if (register) {
      submitRegData(data.email, data.password)
    } else {
      submitAuthData(data.email, data.password)
    }
  }

  return (
    <form className={cn(styles.form, className)} {...props}
      onSubmit={handleSubmit(handleAuthSubmit)}
    >

      <Controller
        name='email'
        control={control}
        rules={emailValidation}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            error={error}
            ref={focusRef}
            onChange={onChange}
            value={value}
            type='text'
            id='emailField'
            placeholder='Enter your email...'
          >
            {error && <span className={styles.errorMessage}>{error.message}</span>}
          </Input>

        )}
      />
      <Controller
        name='password'
        control={control}
        rules={passwordValidation}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            error={error}
            value={value}
            onChange={onChange}
            type={passIsVisible ? 'text' : 'password'}
            id='passField'
            placeholder='Enter your password...'
          >
            {passIsVisible ? <AiFillEyeInvisible onClick={() => setPassIsVisible(false)} /> : <AiFillEye onClick={() => setPassIsVisible(true)} />}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
          </Input>
        )}
      />


      <Button appearance='primary' onClick={() => isAuth && setPopupIsVisible(false)}
        disabled={Object.keys(errors).length === 0 ? false : true}
      >
        {register ? 'Register' : 'Login in'}
      </Button>


      <span tabIndex={0} onClick={() => setRegister((prev) => !prev)} className={styles.formHandler}>{register ? 'or login' : 'or registration'}</span>
      {error && <div className={styles.serverError}>Incorrect login or password</div>}
    </form>
  )
};
