import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import s from './styles.module.scss'

export function SignInButton () {

  const isLogin = true;

  return isLogin ? (
    <button 
      type='button'
      className={s.button}
    >
      <FaGithub color="#04d361"/>Felipe Borges
      
      <FiX color="#737380" className={s.closeIcon}/>
    </button>
  ) : (
    <button 
      type='button'
      className={s.button}
    >
      <FaGithub color="#eba417"/>Sign in with GitHub
    </button>
  )
}
