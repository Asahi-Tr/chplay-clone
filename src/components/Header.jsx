import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import SearchBar from './commons/SearchBar';

const useStyle = makeStyles({
  root: {
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  searchBar: {
    margin: 'auto',
    marginLeft: '48px'
  },
  right: {
    margin: 'auto 28px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 1
  },
  homeLink: {
    display: 'inline-block',
    padding: '10px 35px',
    flex: '0 0  270px',
    height: '100%',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    }
  },
  avatar: {
    border: '2px solid #ccc',
    borderRadius: '50%',
    '& img': {
      border: '2px solid #fff',
      borderRadius: '50%',
      width: '32px',
      height: '32px'
    }
  },
  subnav: {
    height: '50px',
    width: '100%',
    boxShadow: '0px 2px 5px 0px #ccc',
    position: 'relative',
    backgroundColor: '#fff',
  },
  subnav_head: {
    display: 'block',
    width: 'var(--sidebar-width)',
    padding: '10px 0',
    backgroundColor: 'var(--primary)',
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sideBar: {
    width: 'var(--sidebar-width)',
    height: '500px',
    position: 'absolute',
    top: '100%',
    left: 0,
    boxShadow: '0px 2px 5px 0px #ccc',
    backgroundColor: '#f1f1f1',
    '& .sidebar-nav': {
      width: '100%',
      borderBottom: '1px solid #ccc',
      padding: '16px 0',
      '& .nav-link': {
        width: '100%',
        display: 'block',
        fontSize: '2rem',
        fontWeight: '500',
        color: '#666',
        padding: '12px 0 12px 56px',
        '&:hover': {
          backgroundColor: '#ccc'
        }
      },
    },

    '& .sidebar-subnav': {
      width: '100%',
      padding: '16px 0',
      '& .nav-link': {
        width: '100%',
        display: 'block',
        fontSize: '1.6rem',
        fontWeight: '400',
        color: '#666',
        padding: '4px 0 4px 28px',
        '&:hover': {
          backgroundColor: '#ccc'
        }
      }
    }
  }
});

const Header = () => {
  const classes = useStyle();

  return (
    <Router>
      <header>
        <div className={classes.root} >
          <div className={classes.left}>
            <Link className={classes.homeLink} to="/">
              <img className={classes.homeLink.chplayImg} src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" alt="" />
            </Link>
            <SearchBar className={classes.searchBar} />
          </div>

          <div className={classes.right}>
            <Link to='/login'>
              Login
            </Link>
            <div className={classes.avatar}>
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.subnav}>
          <Link to='/store' className={classes.subnav_head}>
            {'Apps & Games'}
          </Link>

          <div className={classes.sideBar}>
            <nav className='sidebar-nav'>
              <Link className='nav-link' to='/'>Apps</Link>
              <Link className='nav-link' to='/'>Games</Link>
              <Link className='nav-link' to='/'>Installeds</Link>
            </nav>

            <nav className='sidebar-subnav'>
              <Link className='nav-link' to='/'>Account</Link>
              <Link className='nav-link' to='/'>Payment methods</Link>
              <Link className='nav-link' to='/'>My subscribtions</Link>
              <Link className='nav-link' to='/'>Redeem</Link>
              <Link className='nav-link' to='/'>My wishlist</Link>
              <Link className='nav-link' to='/'>My play activity</Link>
              <Link className='nav-link' to='/'>Parent Guide</Link>
            </nav>
          </div>
        </div>

      </header>


    </Router>

  );
}

export default Header;
