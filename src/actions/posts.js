import * as api from '../api';

export const getPosts = (filters) => async (dispatch) => {
    
    try {        

        const { data } = await api.fetchPosts(filters);

        dispatch({ type: 'FETCH_POSTS', payload: data});
    } catch (error) {
        console.log(error.message)
    }

}

export const createPost = (post) => async (dispatch) => {

    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}