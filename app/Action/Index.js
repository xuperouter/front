// Action Type
export const ACTION_TYPE = 'ACTION_TYPE';
export const ACTION_LOGIN = 'ACTION_LOGIN';

// Action Creator
let actionCreator = (config) => {
	return{
		type: ACTION_TYPE,
		config
	}
}


// login action
let loginAction = (username,password)=>{
	return{
		type:ACTION_LOGIN,
		{
			username:username,
			password:password
		}
	}
}

