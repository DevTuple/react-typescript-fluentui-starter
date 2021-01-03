import { CREATE_ENTITY } from '../actions/enities.actions'

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_ENTITY: {
        const { todo } = payload;
        return {
            ...state,
            data: state.data.concat(todo),
        };
    }
}