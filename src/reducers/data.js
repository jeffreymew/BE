import { RECEIVE_PROTECTED_DATA, FETCH_PROTECTED_DATA_REQUEST, RECEIVE_TASKS } from '../constants';
import { createReducer } from '../utils/misc';

const initialState = {
    data: null,
    users: null,
    user_has_tasks: false,
    isFetching: false,
    loaded: false,
};

export default createReducer(initialState, {
    [RECEIVE_PROTECTED_DATA]: (state, payload) =>
        Object.assign({}, state, {
            data: payload.data,
            users: payload.users,
            user_has_tasks: payload.user_has_tasks,
            isFetching: false,
            loaded: true,
        }),
    [FETCH_PROTECTED_DATA_REQUEST]: (state) =>
        Object.assign({}, state, {
            isFetching: true,
        }),
});
