import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getGenres } from "../store/actions/genreActions";
import PropTypes from "prop-types";

class PlayRandomSong extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { genres } = this.props.genres;
    return (
      <div className="home-container">
        <h1>Bienvenido a Reactify</h1>
        <p>¡Escucha una canción al azar!</p>
        <Link
          to={{
            pathname: "/musicplayer",
            state: {
              url: null,
              genre: genres[Math.floor(Math.random() * genres.length)]
            }
          }}
        >
          <span className="play-song-icon">
            <i className="far fa-play-circle"></i>
          </span>
        </Link>
      </div>
    );
  }
}

PlayRandomSong.propTypes = {
  getGenres: PropTypes.func.isRequired,
  genres: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  genres: state.genres
});

export default connect(
  mapStateToProps,
  { getGenres }
)(PlayRandomSong);
