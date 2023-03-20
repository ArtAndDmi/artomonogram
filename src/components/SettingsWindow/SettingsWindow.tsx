import React from 'react'
import classes from './SettingsWindow.module.css'
import pashok from '../../assests/Pashok.jpg'
import andruxa from '../../assests/Andruxa.jpg'
import {useDispatch, useSelector} from "react-redux"
import {getDataFromServerAction, switchAuthorAction} from "../../store/Reducer"

const SettingsWindow = () => {
	const dispatch = useDispatch()
	const getDataFromServer = () => dispatch(getDataFromServerAction())
	const switchUser = () => dispatch(switchAuthorAction())
	const authorId = useSelector((state: { authorId: number }) => state.authorId)
	const usingServerData = useSelector((state: {takeDataFromServer: boolean}) => state.takeDataFromServer)


	return (
		<div className={classes.container}>
			{authorId === 1 ?
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

			{usingServerData ?
				<div className={classes.buttonsContainer}>

					<button className={classes.button} onClick={switchUser}>Сменить пользователя</button>
					<button className={classes.button} onClick={getDataFromServer}>Удалить данные с сервера</button>

				</div>
				:
				<div className={classes.buttonsContainer}>
					<button className={classes.button} onClick={switchUser}>Сменить пользователя</button>
					<button className={classes.button} onClick={getDataFromServer}>Взять данные с сервера</button>
				</div>
			}

		</div>
	)
}

export default SettingsWindow
