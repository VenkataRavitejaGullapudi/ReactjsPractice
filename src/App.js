import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourites from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/meetup/new' exact>
          <NewMeetups />
        </Route>
        <Route path='/meetup/favourites' exact>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
