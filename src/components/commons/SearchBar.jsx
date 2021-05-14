import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    height: '28px',
    borderRadius: '50%',
    '& input': {
      width: '100%',
      padding: '4px 8px'
    },
    '& button': {
      width: '64px',
      backgroundColor: 'var(--primary)',
      color: 'white'
    }
  }
});

const SearchBar = (props) => {
  const classes = useStyle();
  return (
    <form
      className={classes.root + ' ' + props.className}
      onSubmit={props.onSubmit}
    >
      <input type="text" placeholder='Search' />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
