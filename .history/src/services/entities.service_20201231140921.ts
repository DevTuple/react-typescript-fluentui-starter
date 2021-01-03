import {
    createEntity
} from '../store/actions/enities.actions';

export const addTodoRequest = (text:any) => async (dispatch:any) => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createEntity(todo));
    } catch (e) {
        console.log(e)
    }
}