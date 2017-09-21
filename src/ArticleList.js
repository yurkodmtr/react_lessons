import React, {Component} from 'react';

export default class ArticleList extends Component {

	render() {
		return (
			<ul>
				<h3>{this.props.article.title}</h3>
				{this.getBody()}
				<button onClick = {this.toggleOpen}>
					{this.state.isOpen ? 'Close' : 'Open'}
				</button>
								
			</ul>
		)
	}	
}