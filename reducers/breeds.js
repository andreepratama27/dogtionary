const reducers = (state=[], action) => {

  switch(action.type) {

    case 'GATHER_BREED': {
      return [
        ...action.data
      ]
    }

    case 'UPDATE_BREED': {
      return [
        ...action.data
      ]
    }

    default: {
      return state
    }
  }
}

export default reducers