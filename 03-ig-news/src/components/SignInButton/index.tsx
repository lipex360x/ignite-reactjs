import { signIn, signOut, useSession } from 'next-auth/react'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import s from './styles.module.scss'

export function SignInButton () {
  const { data: session } = useSession()

  return session ? (
    <button 
      type='button'
      className={s.button}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361"/>{session.user.name}
      
      <FiX color="#737380" className={s.closeIcon}/>
    </button>
  ) : (
    <button 
      type='button'
      className={s.button}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417"/>Sign in with GitHub
    </button>
  )
}
