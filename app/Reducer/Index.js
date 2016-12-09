//开始获取数据
import {ACTIONTYPE} from '../Action/Index.js';


let initialState = {state_default:"default"};

export const testDefault = (state = initialState,action={}) => {
  switch(action.type){
  	case ACTIONTYPE:
  		return state;
  	default:
  		return state;
  }
}