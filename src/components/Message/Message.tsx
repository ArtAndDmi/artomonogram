import React from 'react'
import classes from './Message.module.css'
import type {message} from "../../types/Message"


const Message = ({body, authorId, id}: message) => {
	return (
		<div>
			{authorId === 1 ?
				<div className={classes.rightMessageContainer}>
					<div className={classes.rightMessage}>{body}</div>
				</div>

				:
				<div className={classes.leftMessageContainer}>
					<div className={classes.leftMessage}>{body}</div>
				</div>
			}
		</div>

	)
}

export default Message