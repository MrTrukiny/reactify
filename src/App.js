import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import GenresList from "./components/GenresList";
import ArtistsList from "./components/ArtistsList";
import AlbumsList from "./components/AlbumsList";
import SongsList from "./components/SongsList";
import MusicPlayer from "./components/MusicPlayer";
import PlayRandomSong from "./components/PlayRandomSong";
import { Container } from "reactstrap";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Container>
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={PlayRandomSong}></Route>
              <Route exact path="/genres" component={GenresList} />
              <Route exact path="/artists" component={ArtistsList} />
              <Route path="/artists/:id/albums" component={AlbumsList} />
              <Route path="/albums/:id/songs" component={SongsList} />
              <Route path="/musicplayer" component={MusicPlayer} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
