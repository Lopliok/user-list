import {
	ACTIVE_SEARCH,
	DEACTIVE_SEARCH
} from './actions'

function searchFilter(state = [], action) {
	switch (action.type) {
		case ACTIVE_SEARCH:
			return {
				active: true,
				phrase: action.phrase
			}
		case DEACTIVE_SEARCH:
			return {
				active: false,
				phrase: ""
			}
		default:
			return state
	}
}

export default searchFilter