import {
    FETCH_ACCOUNTS_BEGIN,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAILURE
} from 'Actions/types';

const INIT_STATE = {
    accounsts: [],
    loading: false,
    error: null
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_ACCOUNTS_BEGIN:
            return { ...state, loading: true, error: null };

        case FETCH_ACCOUNTS_SUCCESS:
            return { ...state, loading: false, accounsts: action.payload };

        case FETCH_ACCOUNTS_FAILURE:
            return { ...state, loading: false, error: action.payload.error, accounsts: [] };

        default: return { ...state };
    }
}
