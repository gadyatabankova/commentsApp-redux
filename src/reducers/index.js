const items = (state = [], action) => {
    console.log(state);

    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                { id: action.id, user: action.user, comment: action.comment, time: action.time }
            ]

        case 'DEL_COMMENT':
            return state.filter(item => item.id != (action.id))
            
        default:
            return state;
    }
}

export default items;
