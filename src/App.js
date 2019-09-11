import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ArtistsList from './components/ArtistsList';
import AlbumsList from './components/AlbumsList';
import { Container } from 'reactstrap';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Container>
            <Switch>
              <Route exact path='/' component={AppNavbar} />
              <Route path='/artists' component={ArtistsList} />
              <Route path='/artists/:id/albums' component={AlbumsList} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
