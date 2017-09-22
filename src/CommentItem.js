import React from 'react';

export default function CommentItem (props) {
	return (
		<div>
			{
				props.data.map((elem)=>(
					<div key={elem.id}>
						<h2>{elem.user}</h2>
						<div>{elem.text}</div>
						<hr/>
					</div>
				))
			}						
		</div>
	)
}