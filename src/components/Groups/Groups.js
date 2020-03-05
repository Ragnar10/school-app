import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import GroupsList from '../GroupsList/GroupsList';
import GroupsForm from '../GroupsForm/GroupsForm';

const Groups = ({match}) => {
    return (
        <>
            <h2>Groups:</h2>
            <Link to={`${match.url}/new`} className='add_btn'>Add new group</Link>
            <Switch>
                <Route exact  path={`${match.path}`} component={GroupsList}/>
                <Route path={`${match.path}/:id`}>
                    {
                        ({match, history}) => {
                            return <GroupsForm id={match.params.id} history={history}/>;
                        }
                    }
                </Route>
            </Switch>
        </>
    );
};

export default Groups;