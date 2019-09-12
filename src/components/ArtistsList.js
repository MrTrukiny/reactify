import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getArtists } from '../store/actions/artistActions'
import PropTypes from 'prop-types';

class ArtistsList extends Component {
 
  componentDidMount() {
    this.props.getArtists();
  }

  render(){
    const { artists } = this.props.artists;
    return (
      <Container>
            <Row>
            {artists.map(artist => (
                <Col key={artist.name}>
                  <Link to={`/artists/${artist.id}/albums`}>
                  <div>
                    <img src={artist.image} alt={artist.name} className="img-fluid rounded-circle portraits"/>
                    <p>{artist.name}</p>
                  </div>
                  </Link>
                </Col>
            ))}
            </Row>
      </Container>
    );
  }
}

ArtistsList.propTypes = {
  getArtists: PropTypes.func.isRequired,
  artists: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  artists: state.artists
});

export default connect(
  mapStateToProps, 
  { getArtists }
)(ArtistsList)