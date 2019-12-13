import { user } from '../actions'

const profile = (state = {user: user, token: undefined}, action) => {
  
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          id: action.user.id,
          name: action.user.name,
          lastName: action.user.lastName,
          firstName: action.user.firstName,
          picture: {
              height: action.user.picture.height,
              width: action.user.picture.width,
              url: action.user.picture.url
          }
        },
        token: action.token
      }
      case 'LOGOUT':
        return {
          ...state,
          user: user,
          token: undefined
        }
      case 'SAVE_NEW_USER':
        return {
          ...state,
          user: {...state.user, firstName: action.user.firstName, lastName: action.user.lastName, name: `${action.user.firstName} ${action.user.lastName}`}
        } 
    default:
      return state
  }
}

export default profile;