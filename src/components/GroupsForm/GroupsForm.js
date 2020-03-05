import React, {useState} from 'react';
import {connect} from 'react-redux';
import {saveGroupItem} from '../actions/groupsActions';

import './GroupsForm.css';

const GroupsForm = ({group, saveGroupItem, history}) => {

    const [changedItem, setChangedItem] = useState(group.title);
    const [error, setError] = useState(false);

    const onChangeItem = (e) => {
        if (!e.target.value) {
            setError(true);
        } else {
            setError(false);
        }
        setChangedItem(e.target.value);
    };

    const onSaveItem = (id) => {
        if (!changedItem) {
            setError(true);
            return;
        }
        saveGroupItem({id: id, title: changedItem});
        history.goBack();
    };
    return (
        <div className='group_form'>
            <input type='text'
                   name='title'
                   className='group_input'
                   style={error ? {border: '1px solid red'}: null}
                   maxLength='25'
                   value={changedItem}
                   onChange={onChangeItem}
            />
            <div onClick={() => onSaveItem(group.id)} className='save_btn'>Save</div>
        </div>
    );
};

const mapStateToProps = ({groups}, {id}) => {
    return {
        group: id !== 'new' ? groups.list.find(item => item.id ===  parseInt(id)) : {id: '', title: ''}
    }
};
const mapDispatchToProps = {
    saveGroupItem: saveGroupItem
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsForm);