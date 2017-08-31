const reducers = (state='', action) => {

  switch(action.type) {

    case 'FILTER_BREED': {
      return action.filter
    }

    default: {
      return state
    }
  }
}

export default reducers