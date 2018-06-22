import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import ShowAddrComponent from './ShowAddrComponent'
import ShowContactsComponent from './ShowContactsComponent'
import ShowEmailsComponent from './ShowEmailsComponent'
import ShowGroupsComponent from './ShowGroupsComponent'
import ShowPhonesComponent from './ShowPhonesComponent'
import ShowPortraitsComponent from './ShowPortraitsComponent'
import ShowThumbnailsComponent from './ShowThumbnailsComponent'
import ShowTwitterComponent from './ShowTwitterComponent'

class DisplayUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/ShowAddrComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowContactsComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowEmailsComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowGroupsComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowPhonesComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowPortraitsComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowThumbnailsComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                        <NavLink to={`${match.url}/ShowTwitterComponent`} className="navLink" activeStyle={{ color: 'blue' }}></NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/ShowAddrComponent`} exact component={ShowAddrComponent} />
                <Route path={`${match.url}/ShowContactsComponent`} exact component={ShowContactsComponent} />
                <Route path={`${match.url}/ShowEmailsComponent`} exact component={ShowEmailsComponent} />
                <Route path={`${match.url}/ShowGroupsComponent`} exact component={ShowGroupsComponent} />
                <Route path={`${match.url}/ShowPhonesComponent`} exact component={ShowPhonesComponent} />
                <Route path={`${match.url}/ShowPortraitsComponent`} exact component={ShowPortraitsComponent} />
                <Route path={`${match.url}/ShowThumbnailsComponent`} exact component={ShowThumbnailsComponent} />
                <Route path={`${match.url}/ShowTwitterComponent`} exact component={ShowTwitterComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)