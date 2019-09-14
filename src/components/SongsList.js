import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getSongs } from "../store/actions/songActions";
import PropTypes from "prop-types";

class SongsList extends Component {
  componentDidMount() {
    this.props.getSongs(this.props.albumID);
  }

  getSuggestions = songs => {
    let suggestions = [];
    if (songs.length <= 3) {
      suggestions = songs;
      return suggestions;
    }
    for (let i = 0; i <= 2; i++) {
      suggestions.push(songs[Math.floor(Math.random() * songs.length)]);
    }
    return suggestions;
  };
  render() {
    const { songs, loading } = this.props.songs;
    return (
      <div className="container-list">
        {loading ? (
          <div className="container-loading">
            <h1>CARGANDO...</h1>
          </div>
        ) : (
          <ListGroup>
            {songs.map(song =>
              song.preview_url == null ? (
                <ListGroupItem key={song.id}>
                  <span className="list-item-text">
                    {song.name} -- No hay preview de canción
                  </span>
                </ListGroupItem>
              ) : (
                <Link
                  to={{
                    pathname: "/musicplayer",
                    state: {
                      url: song.preview_url,
                      suggestions: this.getSuggestions(songs)
                    }
                  }}
                  key={song.id}
                >
                  <ListGroupItem>
                    <span className="list-item-text">{song.name}</span>
                  </ListGroupItem>
                </Link>
              )
            )}
          </ListGroup>
        )}
      </div>
    );
  }
}

SongsList.propTypes = {
  getSongs: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  songs: state.songs,
  albumID: ownProps.match.params.id
});

export default connect(
  mapStateToProps,
  { getSongs }
)(SongsList);
