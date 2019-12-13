const RandomPicture = (state = {pictureId: 700}, action) => {
  switch (action.type) {
    case 'SET_RANDOM_PICTURE':
      return {
        pictureId: action.pictureId
      }
    default:
      return state
  }
}

export default RandomPicture;