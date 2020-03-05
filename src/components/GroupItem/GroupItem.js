import React from 'react';
import './GroupItem.css';

const GroupItem = ({group, onSelectGroup, onDeleteGroup, onDeleteStudents}) => {
    const onDelGroup = (groupId) => {
        onDeleteGroup(groupId);
        onDeleteStudents(groupId);
    };

    return (
        <div className='group'>
            <span className='group_title' onClick={() => onSelectGroup(group.id)}>
                {group.title}
            </span>
            <span className='del_btn' onClick={() => onDelGroup(group.id)}>x</span>
        </div>
    );
};

export default GroupItem;