// Action Type
export const ACTION_TYPE = 'ACTION_TYPE';
export const ACTION_LOGIN = 'ACTION_LOGIN';


import genSalt from "../utils/salt"
import bcrypt  from 'bcryptjs'

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
		login_information:{
			username:username,
			password:password
		}
	}
}

// loging action
// let login = (username,password) => {
// 	return (dispatch)=>{
// 		if(antElementsEmpty({username,password})){
// 			// todo
// 			return;
// 			}
// 		//Generate salt for password encryption
// 		const salt = genSalt(username);
// 		//Encrypt password
// 		bcrypt.hash(password,salt,(err,hash) => {
// 			//something wrong while hashing
// 			if(err){
// 				requestFailed({
// 					type:'failed'
// 				});
// 				return;
// 			}
			
// 		});

// 		}

// 	}

// }



/**
*checks if any elements of a JSON object are empty
*@param {object} elements the object that should be checked
*@return {boolean}  True if there are empty elements, false if there aren't
**/
function antElementsEmpty(elements){
	for(let element in elements){
		if(!elements[element]){
			return true;
		}
	}
	return false;
}

/**
* Called when a request failes
* @param {object} err An object containing information about the error
* @param {String} err.type The js-form__error + err.type class will be set on the form
**/
function requestFailed(err){

}