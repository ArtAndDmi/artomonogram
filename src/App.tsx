import React from 'react'
import MessengerWindow from "./components/MessengerWindow/MessengerWindow"
import './App.css'
import SettingsWindow from "./components/SettingsWindow/SettingsWindow"


function App() {


	return (
		<div className="App">
			<MessengerWindow/>
			<SettingsWindow/>
		</div>
	)
}

export default App
