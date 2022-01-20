import { SignInButton } from '../SignInButton'

import s from './styles.module.scss'

export function Header () {
  return (
    <header className={s.container}>
      <div className={s.content}>
        <img src="images/logo.svg" alt="logo ig.news" />
        <nav>
          <a className={s.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
