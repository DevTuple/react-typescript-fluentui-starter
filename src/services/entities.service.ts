import {
    createEntity
} from '../store/actions/enities.actions';
import Axios from "./axios/axios.base";

export const addTodoRequest = (text:any) => async (dispatch:any) => {
    try {
        const body = JSON.stringify({ text });
        const todo = await Axios.post('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
       
        dispatch(createEntity(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text:any) => () => {
    alert(text);
};