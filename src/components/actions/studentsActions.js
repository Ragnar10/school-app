import {types} from '../types/types';

const {SAVE_STUDENT_ITEM_ACTION, DELETE_STUDENT_ITEM_ACTION, SEARCH_STUDENT_ITEM_ACTION, DELETE_STUDENTS_ITEM_ACTION} = types;

export const saveStudentItem = (item) => {
    return {type: SAVE_STUDENT_ITEM_ACTION, payload: item}
};

export const deleteStudent = (id) => {
    return {type: DELETE_STUDENT_ITEM_ACTION, payload: id}
};

export const deleteStudents = (groupId) => {
    return {type: DELETE_STUDENTS_ITEM_ACTION, payload: groupId}
};

export const searchStudent = (title) => {
    return {type: SEARCH_STUDENT_ITEM_ACTION, payload: title}
};