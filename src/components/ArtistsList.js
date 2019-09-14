import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArtists } from "../store/actions/artistActions";
import PropTypes from "prop-types";

class ArtistsList extends Component {
  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    const { artists, loading } = this.props.artists;
    return (
      <div className="container">
        {loading ? (
          <div className="container-loading">
            <h1>CARGANDO...</h1>
          </div>
        ) : (
          <div className="container-artists">
            {artists.map(artist => (
              <div className="cover-artist" key={artist.id}>
                <img src={artist.image} alt={artist.name} />
                <Link
                  to={`/artists/${artist.id}/albums`}
                  className="centered-link"
                >
                  {artist.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

ArtistsList.propTypes = {
  getArtists: PropTypes.func.isRequired,
  artists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  artists: state.artists
});

export default connect(
  mapStateToProps,
  { getArtists }
)(ArtistsList);
