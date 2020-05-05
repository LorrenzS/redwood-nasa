import { Link, routes } from '@redwoodjs/router'

import logo from '../../assets/images/NASA_logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>
        <Link to={routes.home()}>
          <img src={logo} alt="NASA logo" className="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.potd()}>POTD</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
