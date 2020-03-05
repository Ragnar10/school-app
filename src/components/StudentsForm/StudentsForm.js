import React, {useState} from 'react';
import {connect} from 'react-redux';
import {saveStudentItem} from '../actions/studentsActions';

import './StudentsForm.css';

const StudentsForm = ({student, groups, saveStudentItem, history}) => {

    const [changedItem, setChangedItem] = useState(student.title);
    const [selectItem, setSelectItem] = useState(0);
    const [error, setError] = useState(false);

    const onChangeItem = (e) => {
        if (!e.target.value) {
            setError(true);
        } else {
            setError(false);
        }
        setChangedItem(e.target.value);
    };

    const onChangeSelect = (e) => {
        setSelectItem(e.target.value);
    };

    const onSaveItem = (id) => {
        if (!changedItem) {
            setError(true);
            return;
        }
        saveStudentItem({id: id, title: changedItem, groupId: selectItem});
        history.goBack();
    };
    return (
        <div className='student_form'>
            <input type='text'
                   name='title'
                   className='student_input'
                   style={error ? {border: '1px solid red'}: null}
                   maxLength='25'
                   value={changedItem}
                   onChange={onChangeItem}
            />
            {
                groups.length >= 1 ? <select className='student_select'
                        name='student_group'
                        value={selectItem}
                        onChange={onChangeSelect}

                >
                    <option style={{display: 'none'}} />
                    {
                        groups.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.title}</option>
                            );
                        })
                    }
                </select> : <span style={{margin: '10px'}}>Группы не добавлены</span>
            }
            <div onClick={() => onSaveItem(student.id)} className='save_btn'>Save</div>
        </div>
    );
};

const mapStateToProps = ({students, groups}, {id}) => {
    return {
        student: id !== 'new' ? students.list.find(item => item.id ===  parseInt(id)) : {id: '', title: ''},
        groups: groups.list
    }
};
const mapDispatchToProps = {
    saveStudentItem: saveStudentItem
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsForm);