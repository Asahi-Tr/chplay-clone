import React from 'react';
import {
  useHistory,
} from 'react-router-dom';


const SearchBar = (props) => {
  let history = useHistory();
  let [searchText, setSearchText] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/search/?q=' + searchText);
    setSearchText('')
  }

  return (
    <form
      className={'search-bar ' + props.className}
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
