import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { getAlbums } from '../store/actions/albumActions';
import PropTypes from 'prop-types';

class AlbumsList extends Component {

  componentDidMount() {
    this.props.getAlbums(this.props.artistID);
  }

  render() {
    const { albums } = this.props.albums;
    return (
      <Container>
        <Row>
          {albums.map(album => (
            <Col  key={album.id}>
							<Link to={`/albums/${album.id}/songs`}>
								<div>
									<img src={album.image} alt={album.name} className="img-fluid rounded-circle portraits"/>
									<div>{album.name}</div>
								</div>
							</Link>
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
	artistID: ownProps.match.params.id
});

export default connect(
  mapStateToProps,
  { getAlbums }
)(AlbumsList)