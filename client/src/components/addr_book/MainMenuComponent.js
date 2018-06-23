import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';
import '../../style.scss'

import AddContactComponent from './AddContactComponent'
import ShowContactsComponent from './ShowContactsComponent'

const MainMenuComponent = ({ match }) =>
    <div>
        <div style={{ "backgroundColor": "#1b5c71", "padding": "5px" }}>
            <NavLink to={`${match.url}/add`} className="navLink" strict activeStyle={{ color: 'blue' }}>Add Contact</NavLink>
            <NavLink to={`${match.url}/display`} className="navLink" strict activeStyle={{ color: 'blue' }}>Display Contacts</NavLink>
        </div>
        <Route path={`${match.url}/add`} component={AddContactComponent} />
        <Route path={`${match.url}/display`} component={ShowContactsComponent} />
    </div>

export default requireAuth(MainMenuComponent)