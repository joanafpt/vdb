import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import Init from '../components/Init';
import Dropdown from '../components/Dropdown';
import DropdownName from '../components/DropdownName';
import DropdownQuality from '../components/DropdownQuality';
import CompleteSearch from '../components/CompleteSearch';

const Routes = () => {

    return (
        <HashRouter basename='/' >
            <Route exact path='/' component={Init} />
            <Route path='/menu' component={Menu}/>
            <Route path= '/produtor' component={Dropdown} /> 
            <Route path= '/nome' component={DropdownName} /> 
            <Route path= '/qualidade' component={DropdownQuality} /> 
            <Route path= '/todos-os-resultados' component={CompleteSearch} /> 
        </HashRouter>
    )
}

export default Routes;