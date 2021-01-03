import { CREATE_ENTITY } from '../actions/enities.actions'

const initialState = { isLoading: false, data: [] };

export const entities = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_ENTITY: {
        const { entity } = payload;
        return {
            ...state,
            data: state.data.concat(entity),
        };
    }
    default:
        return state;
    }

}