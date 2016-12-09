// Action Type
export const ACTION_TYPE = 'ACTION_TYPE';

// Action Creator
let actionCreator = (config) => {
	return{
		type: ACTION_TYPE,
		config
	}
}