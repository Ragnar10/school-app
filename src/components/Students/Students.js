import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import StudentsList from '../StudentsList/StudentsList';
import StudentsForm from '../StudentsForm/StudentsForm';

const Students = ({match}) => {
    return (
        <>
            <h2>Students:</h2>
            <Link to={`${match.url}/new`} className='add_btn'>Add new student</Link>
            <Switch>
                <Route exact  path={`${match.path}`} component={StudentsList}/>
                <Route path={`${match.path}/:id`}>
                    {
                        ({match, history}) => {
                            return <StudentsForm id={match.params.id} history={history}/>;
                        }
                    }
                </Route>
            </Switch>
        </>
    );
};

export default Students;