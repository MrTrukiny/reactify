import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getAlbums } from "../store/actions/albumActions";
import PropTypes from "prop-types";

class AlbumsList extends Component {
  componentDidMount() {
    this.props.getAlbums(this.props.artistID);
  }

  render() {
    const { albums, loading } = this.props.albums;
    return (
      <div className="container">
        {loading ? (
          <div className="container-loading">
            <h1>CARGANDO...</h1>
          </div>
        ) : (
          <div className="container-albums">
            {albums.map(album => (
              <div className="cover-album" key={album.id}>
                <img src={album.image} alt={album.name} />
                <Link
                  to={`/albums/${album.id}/songs`}
                  className="centered-link"
                >
                  {album.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

AlbumsList.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  artistID: ownProps.match.params.id
});

export default connect(
  mapStateToProps,
  { getAlbums }
)(AlbumsList);
