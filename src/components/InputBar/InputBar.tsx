import React from 'react'
import classes from './InputBar.module.css'

const InputBar = () => {
	return (
		<div className={classes.container}>
			<input type="text" placeholder={'Message'} className={classes.input}/>
			<button className={classes.button}>➚</button>
		</div>
	)
}

export default InputBar