//开始获取数据
import {ACTION_TYPE , ACTIONT_LOGIN} from '../Action/Index.js';



let initialState = {
	state_default:"default",


	userState:{
    username:'',
    password:''
  }
};

export const testDefault = (state = initialState,action={}) => {
  switch(action.type){
  	case ACTION_TYPE:
  		return state;
  	case ACTIONT_LOGIN:
  		state[username] = action.login_information.username; 
  		state[password] = action.login_information.password; 
  		return state;
  	default:
  		return state;
  }
}

