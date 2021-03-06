import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<ul>
				{this.props.article.map((elem)=>(
					<Article
						key={elem['id']} 
						article={elem}
					/>
				))}											
			</ul>
		)
	}	
}