import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { connect } from 'react-redux';


class PlaySong extends Component {
	render () {
		return(
			<Container>
				<audio controls ref='audio'>
					<source src={'https://p.scdn.co/mp3-preview/82bd3ffd727cc8c743e55ad3c84737c5fda147c2?cid=76ef95421e3a4e7aac6358eba6727257'} type='audio/mpeg'></source> 
				</audio>
			</Container>
		)
	}
}

export default PlaySong