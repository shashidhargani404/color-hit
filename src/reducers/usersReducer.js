const usersInitialState = [];

const usersReducer = (state = usersInitialState, action) => {
    switch(action.type){
        case 'SET_USERS': {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default usersReducer