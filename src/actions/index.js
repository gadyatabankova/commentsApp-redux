// action creators

export const addComment = (user, comment) => {

    const date = new Date();

    return {
        type: 'ADD_COMMENT',
        user,
        comment,
        id: Date.now(),
        time: date.toLocaleString()
    }
}

export const delComment = (id) => {

    return {
        type: 'DEL_COMMENT',
        id
    }
}