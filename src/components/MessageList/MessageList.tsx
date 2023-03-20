import React, {useEffect, useRef} from 'react'
import Message from "../Message/Message"
import classes from './MessageList.module.css'
import type {message} from '../../types/Message'
import {findAllByDisplayValue} from "@testing-library/react"

type props = {
	messages: message[]
}

const MessageList = ({messages}: props) => {
	const messagesEndRef = useRef<null | HTMLDivElement>(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView()
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<div className={classes.container}>
			<div className={classes.messageContainer}>
				{messages.map(i => i.body ? <Message body={i.body} id={i.id} authorId={i.authorId} key={i.id}/> : null)}
				<div ref={messagesEndRef}/>
			</div>
		</div>
	)
}

export default MessageList