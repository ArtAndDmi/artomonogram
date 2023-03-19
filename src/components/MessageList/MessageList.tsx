import React from 'react'
import Message from "../Message/Message"
import classes from './MessageList.module.css'

const MessageList = () => {

	const messages: {body: string, id: number, authorId: number}[] = [
		{body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos ex iusto nam nihil numquam quis sapiente sequi sint sunt?', authorId: 1, id: 1},
		{body: 'Lorem ipsum dolor sit amet.', authorId: 0, id: 2},
		{body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores cum ex itaque maiores, odio voluptas. Consectetur dolore itaque minima necessitatibus quae quas sequi tenetur! Excepturi maxime minima quaerat! Accusamus ad animi consequatur facilis magni nulla suscipit voluptates. Architecto consequuntur dignissimos doloremque enim iste numquam recusandae tempora totam vitae voluptatum?', authorId: 0, id: 3}
	]

	return (
		<div className={classes.container}>
			{messages.map(i => <Message body={i.body} id={i.id} authorId={i.authorId} key={i.id}/>)}
		</div>
	)
}

export default MessageList