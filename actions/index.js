import { LoginManager } from 'react-native-fbsdk';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const user = {
  token: undefined,
  user: {
    id: undefined,
    name: undefined,
    lastName: undefined,
    firstName: undefined,
    picture: {
      height: undefined,
      width: undefined,
      url: undefined
    }
  }
};

export const Login = params => {

  return {
    type: 'LOGIN',
    user: params.user,
    token: params.userToken
  }
};

export const Logout = () => {

  LoginManager.logOut();

  return {
    type: 'LOGOUT',
    user: user,
    token: undefined
  }
};

export const SaveNewUser = user => {

  LoginManager.logOut();

  return {
    type: 'SAVE_NEW_USER',
    user
  }
};