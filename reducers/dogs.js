const reducers = (state=[], action) => {

    switch(action.type) {

        case 'GATHER_DOG': {
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
