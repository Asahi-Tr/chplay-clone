import {
  Switch,
  Route,
} from "react-router-dom";

import Detail from './Detail';
import Collection from './Collection';

const Container = () => {

  return (
    <>
      <Switch>

        <Route exact path='/apps/home'>
          <div className='container'>
            <Collection path='/api/apps/home' />
          </div>
        </Route>

        <Route exact path='/games/home'>
          <div className='container'>
            <Collection path='/api/games/home' />
          </div>
        </Route>

        <Route exact path='/apps/category/:categoryID'>
          <div className='container'>
            <Collection oneCategory path='/api/apps/category/' />
          </div>
        </Route>

        <Route exact path='/games/category/:categoryID'>
          <div className='container'>
            <Collection oneCategory path='/api/apps/category/' />
          </div>
        </Route>

        <Route exact path='/details/:appid'>
          <div className='container'>
            <Detail />
          </div>
        </Route>

      </Switch>
    </>
  );
}

export default Container;
