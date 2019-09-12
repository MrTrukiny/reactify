import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { connect } from 'react-redux';

class PlaySong extends Component {
	render () {
		const songURL = this.props.location.state.url;
		return(
			<Container>
				<audio controls ref='audio'>
					<source src={songURL} type='audio/mpeg'></source> 
				</audio>
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
	songs: state.songs
})

export default connect(
	mapStateToProps
)(PlaySong)