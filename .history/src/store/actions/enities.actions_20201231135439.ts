export const CREATE_ENTITY = 'CREATE_ENTITY';
export const createEntity = entity => ({
    type: CREATE_ENTITY,
    payload: { entity },
});
