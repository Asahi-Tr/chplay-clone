import { useEffect, useState } from 'react';

import {
  useParams,
} from 'react-router-dom';

import ListCard from './ListCard';
import Overlay from './commons/Overlay';

const Collection = ({ path, oneCategory }) => {
  const [collection, setCollection] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const { categoryID } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [categoryID])

  async function fetchData() {
    setOverlay(true);
    try {
      const url = categoryID ? path + categoryID : path
      let res = await fetch(url);
      let json = await res.json();
      setCollection(json);
    } catch (e) {
      console.error(e);
    }
    setOverlay(false);
  };

  return (
    <>
      {overlay ? <Overlay /> :
        collection && collection.map((item) =>
          <ListCard oneCategory={oneCategory} key={item.title} title={item.title} listItem={item.listItem} />
        )
      }
    </>
  );
}

export default Collection;
