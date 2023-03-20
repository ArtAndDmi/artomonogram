import React, {useState} from 'react'
import classes from './InputBar.module.css'
import {Simulate} from "react-dom/test-utils"
import seeked = Simulate.seeked
import {useDispatch, useSelector} from "react-redux"
import type {message} from '../../types/Message'

type props = {
	messages: message[],
	setMessages: any
}

const InputBar = ({messages, setMessages}:props) => {
	const dispatch = useDispatch()
	const authorId = useSelector((state: { authorId: number }) => state.authorId)


	const [input, setInput] = useState('')

	window.addEventListener('keydown', (event) => {
		if (event.keyCode == 13) {
			setMessages([...messages, {body: input, authorId: authorId, id: Date.now() }])
			setInput('')
		}
	})

	const onClick = () => {
		setMessages([...messages, {body: input, authorId: authorId, id: Date.now() }])
		setInput('')
	}

	return (
		<div className={classes.container}>
			<input type="text" placeholder={'Message'} className={classes.input} value={input} onInput={e => setInput((e.target as HTMLTextAreaElement).value)}/>
			<button className={classes.button} onClick={onClick}>➚</button>
		</div>
	)
}

export default InputBar