import React, {Component} from 'react';

// import React from 'react';

// export default function Article (props) {
// 	return (
// 		<div>
// 			<h3>{props.article.title}</h3>
// 			<section>{props.article.text}</section>
// 		</div>
// 	)
// }

export default class Article extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}	
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	getBody () {
		let toggleOpenButtonText = 'Open';
		if ( !this.state.isOpen ) {
			toggleOpenButtonText = 'Close';
			return null;
		}
		return <section>{this.props.article.text}</section>
	}

	render() {
		return (
			<div>
				<h3>{this.props.article.title}</h3>
				{this.getBody()}
				<button onClick = {this.toggleOpen}>
					{this.state.isOpen ? 'Close' : 'Open'}
				</button>
								
			</div>
		)
	}	
}