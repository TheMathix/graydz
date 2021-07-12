import * as api from '../api';
import { GET } from '../constants/actionTypes';


export const getinfo = (email, turma, _id) => async (dispatch) => {
    
    try {

        const { data } = await api.getPeople(email, turma, _id);
        dispatch({ type: 'FETCH_ALL', payload: data });


    } catch (error) {
        console.log(error);
    }
};
