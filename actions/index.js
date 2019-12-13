import { LoginManager } from 'react-native-fbsdk';

export const user = {
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

  return {
    type: 'SAVE_NEW_USER',
    user
  }
};

export const RandomPicture = () => {

  return {
    type: 'SET_RANDOM_PICTURE',
    pictureId: Math.floor(Math.random() * 700)
  }
};