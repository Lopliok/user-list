import { combineReducers } from 'redux'
import searchFilter from './searchFilter'
import {
	ADD_USER,
	MODIFY_USER,
	DELETE_USER
} from './actions'

function users(state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					nickname: action.nickname,
					sex: action.sex,
				}
			]
		case MODIFY_USER:
			return state.map((user, index) => {
				if (user.id === action.id) {
					return Object.assign({}, user, {
						name: action.name,
						nickname: action.nickname,
						sex: action.sex
					})
				}
				return user
			})
		case DELETE_USER:
			return state.filter((u) => u.id !== action.id)
		default:
			return state
	}
}

const reducerUser = combineReducers({
	users,
	searchFilter
})

export default reducerUser