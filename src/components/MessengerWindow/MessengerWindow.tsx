import React from 'react'
import classes from './MessengerWindow.module.css'
import Title from "../Title/Title"
import MessageList from "../MessageList/MessageList"
import InputBar from "../InputBar/InputBar"


const MessengerWindow = () => {
	return (
		<div className={classes.window}>
			<Title/>
			<MessageList/>
			<InputBar/>
		</div>
	)
}

export default MessengerWindow