import React from 'react'
import classes from './SettingsWindow.module.css'
import pashok from '../../assests/Pashok.jpg'
import andruxa from '../../assests/Andruxa.jpg'
import {useDispatch, useSelector} from "react-redux"

const SettingsWindow = () => {
	const dispatch = useDispatch()
	const authorId = useSelector((state: { authorId: number }) => state.authorId)

	const changeUser = () => dispatch({type: 'SWITCH_AUTHOR'})


	return (
		<div className={classes.container}>
			{authorId === 0 ?
				<div className={classes.user}>
					<img src={andruxa} alt="Андрюха" className={classes.andruxa}/>
					<p className={classes.name}>Вы - Андрей Артамонов</p>
				</div>
				:
				<div className={classes.user}>
					<img src={pashok} alt="Пашок" className={classes.pashok}/>
					<p className={classes.name}>Вы - Павел Дуров</p>
				</div>
			}


			<div className={classes.buttonsContainer}>

				<button className={classes.button} onClick={changeUser}>Сменить пользователя</button>
				<button className={classes.button}>Взять данные с сервера</button>
			</div>
		</div>
	)
}

export default SettingsWindow