import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { getAlbums } from '../store/actions/albumActions';
import PropTypes from 'prop-types';

class AlbumsList extends Component {

  componentDidMount() {
    this.props.getAlbums(this.props.artistId);
  }

  render() {
    console.log(this.props.artistId)
    const { albums } = this.props.albums;
    return (
      <Container>
        <Row>
          {albums.map(album => (
            <Col>
              <div key={album.id}>
                <img src={album.image} alt={album.name} className="img-fluid rounded-circle portraits"/>
                <div>{album.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

AlbumsList.propTypes = {
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  artistId: ownProps.match.params.id
});

export default connect(
  mapStateToProps,
  { getAlbums }
)(AlbumsList)