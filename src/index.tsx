import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createStore} from "redux"
import {Provider} from "react-redux"

const defaultState = {
	authorId: 0
}

const reducer = (state = defaultState, action: {type: string}) => {
	switch (action.type){
		case "SWITCH_AUTHOR":
			return {...state, authorId: Number(!state.authorId)}
		default:
			return state
	}
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
)

