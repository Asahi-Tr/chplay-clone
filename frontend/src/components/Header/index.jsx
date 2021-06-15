import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import NavLink from './NavLink';
import TopNav from './TopNav';

import navList from '../../constant/navList';
import dropdown from '../../constant/dropdown';

const GGPlayLogoUrl = "https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png";
const avatarPlaceholderUrl = "https://avatars.dicebear.com/api/bottts/0201.svg";

const Header = () => {

  return (
    <header>
      <div className='header' >
        <div className='header__left'>
          <Link className='logo' to="/">
            <img src={GGPlayLogoUrl} alt="" />
          </Link>
          <SearchBar className='search-input' />
        </div>

        <div className='header__right'>
          <Link to='/login'>
            Login
          </Link>
          <div className='avatar'>
            <img src={avatarPlaceholderUrl} alt="" />
          </div>
        </div>
      </div>

      <div className='nav-bar'>
        <Link to='/store' className='nav-bar__head'>
          {'Apps & Games'}
        </Link>

        <Switch>
          <Route path='/apps'>
            <Route exact path="/apps">
              <Redirect to="/apps/home" />
            </Route>
            <Dropdown listItem={dropdown.appCategories} />
            <TopNav prefix="/apps" />
          </Route>

          <Route path='/games'>
            <Route exact path="/games">
              <Redirect to="/games/home" />
            </Route>
            <Dropdown listItem={dropdown.gameCategories} />
            <TopNav prefix="/games" />

          </Route>
        </Switch>

        <div className='nav-bar__sidebar'>
          <nav className='sidebar-nav'>
            {navList.sideBarNav.map(({ to, title }, i) =>
              <NavLink key={i} to={to} className='nav-link' actClass='nav-link--active'>{title}</NavLink>)
            }
          </nav>

          <nav className='sidebar-subnav'>
            {navList.sideBarSubNav.map(({ to, title }, i) =>
              <NavLink key={i} to={to} className='nav-link nav-link--small' actClass='nav-link--active'>{title}</NavLink>)
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
