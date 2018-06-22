import React from 'react'
import requireAuth from '../requireAuth'
import { Route, NavLink } from "react-router-dom";
import '../HeaderStyle.css';

import AddAddressComponent from './AddAddressComponent'
import AddContactComponent from './AddContactComponent'
import AddEmailComponent from './AddEmailComponent'
import AddGroupComponent from './AddGroupComponent'
import AddPhoneComponent from './AddPhoneComponent'
import AddPortraitComponent from './AddPortraitComponent'
import AddThumbnailComponent from './AddThumbnailComponent'
import AddTwitterComponent from './AddTwitterComponent'

class AddUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/AddAddressComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddContactComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddEmailComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddGroupComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddPhoneComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddPortraitComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddThumbnailComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/AddTwitterComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/AddAddressComponent`} exact component={AddAddressComponent} />
                <Route path={`${match.url}/AddContactComponent`} exact component={AddContactComponent} />
                <Route path={`${match.url}/AddEmailComponent`} exact component={AddEmailComponent} />
                <Route path={`${match.url}/AddGroupComponent`} exact component={AddGroupComponent} />
                <Route path={`${match.url}/AddPhoneComponent`} exact component={AddPhoneComponent} />
                <Route path={`${match.url}/AddPortraitComponent`} exact component={AddPortraitComponent} />
                <Route path={`${match.url}/AddThumbnailComponent`} exact component={AddThumbnailComponent} />
                <Route path={`${match.url}/AddTwitterComponent`} exact component={AddTwitterComponent} />
            </div>
        )
    }
}

export default requireAuth(AddUIComponent)