import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Groups from '../Groups/Groups';
import Students from '../Students/Students';

import './App.css';


const App = () => {
    return (
        <Router>
            <div className="container">
                <div className='header'>
                    <NavLink to='/' activeClassName='active' className='link' exact>Home</NavLink>
                    <NavLink to='/groups' activeClassName='active' className='link'>Groups</NavLink>
                    <NavLink to='/students' activeClassName='active' className='link'>Students</NavLink>
                </div>
                <div className='pages'>
                    <Switch>
                        <Route path='/' exact>
                            <h1 className='home_caption'>Welcome to School</h1>
                        </Route>
                        <Route path='/groups' component={Groups}/>
                        <Route path='/students' component={Students}/>
                        <Route>Page not found</Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;