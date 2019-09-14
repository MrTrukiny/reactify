import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getGenres, getRandomSongByGenre } from "../store/actions/genreActions";
import PropTypes from "prop-types";

class GenresList extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { genres, loading } = this.props.genres;
    return (
      <div className="container-list">
        {loading ? (
          <div className="container-loading">
            <h1>CARGANDO...</h1>
          </div>
        ) : (
          <ListGroup>
            {genres.map(genre => (
              <Link
                to={{
                  pathname: "/musicplayer",
                  state: {
                    url: null,
                    genre: genre
                  }
                }}
                key={genre}
              >
                <ListGroupItem>
                  <span className="list-item-text">{genre}</span>
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

GenresList.propTypes = {
  getGenres: PropTypes.func.isRequired,
  getRandomSongByGenre: PropTypes.func.isRequired,
  genres: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  genres: state.genres
});

export default connect(
  mapStateToProps,
  { getGenres, getRandomSongByGenre }
)(GenresList);
