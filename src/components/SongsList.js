import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { getSongs } from '../store/actions/songActions';
import PropTypes from 'prop-types';

class SongsList extends Component {

  componentDidMount() {
    this.props.getSongs(this.props.albumID);
  }

  render() {
    const { songs } = this.props.songs;
    return (
      <Container>
				<ListGroup>
          {songs.map(song => (
            <ListGroupItem>{song.name}</ListGroupItem>
          ))}
				</ListGroup>
      </Container>
    )
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
)(SongsList)