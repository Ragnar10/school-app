import {types} from '../types/types';

const {SAVE_GROUP_ITEM_ACTION, DELETE_GROUP_ITEM_ACTION, SEARCH_GROUP_ITEM_ACTION} = types;

const initialState = {
    list: [
        {id: 1, title: 'React'},
        {id: 2, title: 'Php'},
    ],
    search: ''
};

const addGroupItem = (state, action) => {
    const newId =  state.list.length > 0 ? (state.list[state.list.length - 1].id + 1) : 1;
    return {
        ...state,
        list: [...state.list, {id: newId, title: action.payload.title}],
    };
};
const updateGroupItem = (state, action) => {
    return {
        ...state,
        list: state.list.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title} : item ),
    };
};

export const groups =  (state = initialState, action) => {
    switch(action.type) {
        case SAVE_GROUP_ITEM_ACTION:
            return action.payload.id ?
                updateGroupItem(state, action):
                addGroupItem(state, action);
        case DELETE_GROUP_ITEM_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            };
        case SEARCH_GROUP_ITEM_ACTION:
            return {
              ...state,
              search: action.payload
            };
        default:
            return state;
    }
};
