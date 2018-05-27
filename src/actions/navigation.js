export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV'

export const NAV_STATE = {
	OPEN: 'OPEN',
	CLOSED: 'CLOSED'
}

export function toggleSideNav(){
	return {
		type: TOGGLE_SIDE_NAV
	}
}