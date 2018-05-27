import { TOGGLE_SIDE_NAV, NAV_STATE } from '../actions/navigation'

export default function navigation(state=NAV_STATE.CLOSED, action){
	switch(action.type){
		case TOGGLE_SIDE_NAV:
			return state === NAV_STATE.CLOSED ? NAV_STATE.OPEN : NAV_STATE.CLOSED
		default:
			return state
	}
}