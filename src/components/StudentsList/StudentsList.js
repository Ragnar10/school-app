import React from 'react';
import {connect} from 'react-redux';
import StudentItem from '../StudentItem/StudentItem';
import {deleteStudent, searchStudent} from '../actions/studentsActions';

import './StudentsList.css';

const StudentsList = ({students, groups, search, history, match, deleteStudent, searchStudent}) => {
    const selectStudent = (id) => {
        history.push(`${match.path}/${id}`);
    };
    return (
        <>
            <input type='text'
                   name='search'
                   value={search}
                   className='students_search'
                   placeholder='Search'
                   onChange={(e) => searchStudent(e.target.value)}
            />
            <div className='students_list'>
                {
                    students.map(item => {
                        return <StudentItem student={item}
                                            groups={groups}
                                            key={item.id}
                                            onSelectStudent={selectStudent}
                                            onDeleteStudent={deleteStudent}
                        />
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({students, groups}) => {
    return {
        students: students.list.filter(item => item.title.toUpperCase().includes(students.search.toUpperCase())),
        groups: groups.list,
        search: students.search
    };
};
const mapDispatchToProps = {
    deleteStudent: deleteStudent,
    searchStudent: searchStudent

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);