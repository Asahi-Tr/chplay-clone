import React from 'react';
import {
  useHistory
} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    height: '28px',
    overflow: 'hidden',
    borderRadius: '4px',
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
  let history = useHistory();
  let [searchText, setSearchText] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/?search=' + searchText);
    setSearchText('')
  }

  return (
    <form
      className={classes.root + ' ' + props.className}
      onSubmit={handleSubmit}
    >
      <input type="text" value={searchText} placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
