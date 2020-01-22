import axios from 'axios';

export const setComments = (comments) => {
    return { type: 'SET_COMMENTS', payload: comments}
}

export const startSetComments = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                const comments = response.data;
                dispatch(setComments(comments));
            })
    }
}