import './styles.css'

import IMAGE from './react.png'
import logo from './logo.svg'
import { Counter } from './Counter'

export const App = () => {
  const name = 'Amrendra'
  return (
    <>
      {' '}
      <h1>
        {' '}
        hello React type Script webpack starttup template --{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="react logo" width="300" height="200" />
      <img src={logo} />
      <Counter />
    </>
  )
}
