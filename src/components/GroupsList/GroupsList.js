import React from 'react';
import {connect} from 'react-redux';
import GroupItem from '../GroupItem/GroupItem';
import {deleteGroup, searchGroup} from '../actions/groupsActions';
import {deleteStudents} from "../actions/studentsActions";

import './GroupsList.css';

const GroupsList = ({groups, search, history, match, deleteGroup, searchGroup, deleteStudents}) => {
    const selectGroup = (id) => {
        history.push(`${match.path}/${id}`);
    };
    return (
        <>
            <input type='text'
                   name='search'
                   value={search}
                   className='groups_search'
                   placeholder='Search'
                   onChange={(e) => searchGroup(e.target.value)}
            />
            <div className='groups_list'>
                {
                    groups.map(item => {
                        return <GroupItem group={item}
                                          key={item.id}
                                          onSelectGroup={selectGroup}
                                          onDeleteGroup={deleteGroup}
                                          onDeleteStudents={deleteStudents}
                        />
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({groups}) => {
    return {
        groups: groups.list.filter(item => item.title.toUpperCase().includes(groups.search.toUpperCase())),
        search: groups.search
    };
};
const mapDispatchToProps = {
    deleteGroup: deleteGroup,
    searchGroup: searchGroup,
    deleteStudents: deleteStudents

};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);