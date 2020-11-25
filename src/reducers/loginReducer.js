import * as yup from 'yup'; // for everything

export const initialState = { username:'', password:'', usernameError:null, passwordError:null};

export let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const loginReducer = (state, action) => {
    switch(action.type) {
        case 'setUsername':
            return {...state, username: action.username};
        case 'setPassword':
            return {...state, password: action.password};
        case 'setUsernameError':
            return {...state, usernameError: action.usernameError};
        case 'setPasswordError':
            return {...state, passwordError: action.passwordError};
    }
}  

export default loginReducer;