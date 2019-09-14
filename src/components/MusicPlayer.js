import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { connect } from "react-redux";
import { getRandomSongByGenre } from "../store/actions/genreActions";

class MusicPlayer extends Component {
  state = {
    songURL: this.props.location.state.url,
    randomSong: {}
  };
  componentDidMount() {
    this.setState({
      randomSong: this.props.getRandomSongByGenre(this.props.location.state.genre)
    })
  }

  render() {
    const { randomSong, loading } = this.props.randomSong;
    return (
      <div className="container-musicplayer">
        {loading ? (
          <h1>CARGANDO...</h1>
        ) : (
          <div>
            <audio controls ref="audio" className="music-player">
              <source
                src={
                  this.state.songURL === null
                    ? randomSong.preview_url
                    : this.state.songURL
                }
                type="audio/mpeg"
              ></source>
            </audio>
          </div>
        )}
        {this.props.location.state.suggestions ? (
          <div className="songs-suggestions">
            <h1>Sugerencias</h1>
            <ListGroup>
              {this.props.location.state.suggestions.map(song => (
                <ListGroupItem key={song.id}>
                  <span
                    className="list-item-text"
                    onClick={() => this.onPlaySuggestion(song.preview_url)}
                  >
                    {song.name}
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        ) : null}
      </div>
    );
  }
  onPlaySuggestion = newURL => {
    this.setState({ songURL: newURL }, function() {
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    });
  };
}

const mapStateToProps = state => ({
  songs: state.songs,
  randomSong: state.randomSong,
  loading: state.randomSong
});

export default connect(
  mapStateToProps,
  { getRandomSongByGenre }
)(MusicPlayer);
