import React, {useEffect, useState} from 'react'
import classes from './MessengerWindow.module.css'
import Title from "../Title/Title"
import MessageList from "../MessageList/MessageList"
import InputBar from "../InputBar/InputBar"
import {useDispatch, useSelector} from "react-redux"
import getData from "../../Data"


const MessengerWindow = () => {
	const dispatch = useDispatch()
	const dataFromServer = useSelector((state: { takeDataFromServer: boolean }) => state.takeDataFromServer)
	const startMessages = [
		{body: 'Здарова Андрюх! Видел твой артомонграм, походу у меня появился конкурент(((', authorId: 0, id: 1},
		{body: 'Привет Пашок! Ну да, планирую тебя вытеснить с рынка)))', authorId: 1, id: 2},
	]

	const [messages, setMessages] = useState(startMessages)

	useEffect(() => {
		if (dataFromServer) {
			const data = getData()
			data.then(messages => setMessages(messages))
		} else {
			setMessages(startMessages)
		}
	}, [dataFromServer])


	return (
		<div className={classes.window}>
			<Title/>
			<MessageList messages={messages}/>
			<InputBar messages={messages} setMessages={setMessages}/>
		</div>
	)
}

export default MessengerWindow