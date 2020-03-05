import {types} from '../types/types';

const {SAVE_GROUP_ITEM_ACTION, DELETE_GROUP_ITEM_ACTION, SEARCH_GROUP_ITEM_ACTION} = types;

export const saveGroupItem = (item) => {
    return {type: SAVE_GROUP_ITEM_ACTION, payload: item}
};

export const deleteGroup = (id) => {
    return {type: DELETE_GROUP_ITEM_ACTION, payload: id}
};

export const searchGroup = (title) => {
    return {type: SEARCH_GROUP_ITEM_ACTION, payload: title}
};