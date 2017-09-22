import React, {Component} from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isCommentOpen: false
		}
	}

	toggleComment = () => {
		this.setState({
			isCommentOpen: !this.state.isCommentOpen
		});
	}

	commentBody () {
		if ( !this.state.isCommentOpen ) {
			return null;
		} 
		return (
			<CommentItem data = {this.props.data} />
		)
		
	}


	render() {
		return (
			<div>
				<button onClick={this.toggleComment}>
					{this.state.isCommentOpen ? 'Hide comments' : 'Show comments'}
				</button>
				{this.commentBody()}						
			</div>
		)
	}	
}