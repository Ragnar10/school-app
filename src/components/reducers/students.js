import {types} from '../types/types';

const {SAVE_STUDENT_ITEM_ACTION, DELETE_STUDENT_ITEM_ACTION, SEARCH_STUDENT_ITEM_ACTION, DELETE_STUDENTS_ITEM_ACTION} = types;

const initialState = {
    list: [
        {id: 1, title: 'Donald Duck', groupId: ''},
        {id: 2, title: 'Mad Max', groupId: ''},
        {id: 3, title: 'Tomara Vasilevna', groupId: ''},
        {id: 4, title: 'Uncle Zhora', groupId: ''},

    ],
    search: ''
};

const addStudentItem = (state, action) => {
    const newId =  state.list.length >= 1 ? (state.list[state.list.length - 1].id + 1) : 1;
    return {
        ...state,
        list: [...state.list, {id: newId, title: action.payload.title, groupId: action.payload.groupId}],
    };
};
const updateStudentItem = (state, action) => {
    return {
        ...state,
        list: state.list.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title, groupId: action.payload.groupId} : item ),
    };
};

export const students =  (state = initialState, action) => {
    switch(action.type) {
        case SAVE_STUDENT_ITEM_ACTION:
            return action.payload.id ?
                updateStudentItem(state, action):
                addStudentItem(state, action);
        case DELETE_STUDENT_ITEM_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            };
        case SEARCH_STUDENT_ITEM_ACTION:
            return {
                ...state,
                search: action.payload
            };
        case DELETE_STUDENTS_ITEM_ACTION:
            return {
                ...state,
                list: state.list.filter(item => parseInt(item.groupId) !== action.payload)
            };
        default:
            return state;
    }
};