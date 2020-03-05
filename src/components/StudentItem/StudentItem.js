import React from 'react';
import './StudentItem.css';

const StudentItem = ({student, groups, onSelectStudent, onDeleteStudent}) => {
    return (
        <div className='student'>
            <div className="student_info" onClick={() => onSelectStudent(student.id)}>
                <span className='student_title'>
                    {`Name: ${student.title}`}
                </span>
                <span className='student_group'>
                    {
                        student.groupId ? `Group: ${groups.find(item => item.id === parseInt(student.groupId)).title}` : ''
                    }
                </span>
            </div>
            <span className='del_btn' onClick={() => onDeleteStudent(student.id)}>x</span>
        </div>
    );
};

export default StudentItem;
