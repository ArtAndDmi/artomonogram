const defaultState = {
	authorId: 1,
	takeDataFromServer: false
}

const SWITCH_AUTHOR = 'SWITCH_AUTHOR'
const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER'

export const reducer = (state = defaultState, action: {type: string}) => {
	switch (action.type){
		case SWITCH_AUTHOR:
			return {...state, authorId: Number(!state.authorId)}
		case GET_DATA_FROM_SERVER:
			return {...state, takeDataFromServer: !state.takeDataFromServer}
		default:
			return state
	}
}

export const getDataFromServerAction = () => ({type: GET_DATA_FROM_SERVER})
export const switchAuthorAction = () => ({type: SWITCH_AUTHOR})
