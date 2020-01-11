import React from 'react';
import SideBar from '../components/SideBar/SideBar';

import routes from '../routes/routesadmin';
import { Switch, Route } from 'react-router-dom';


const switchRoutes = (
    <Switch>
        {routes.map((prop,key)=>{
            return(
                <Route path={prop.layout + prop.path} component={prop.component} key={key}/>
            );
        })}
    </Switch>
);
const Admin = () => {
    return (
        
        <div>
            <h2>Admin Layout</h2>
            <SideBar routes={routes}/>
            {switchRoutes}
        </div>
    );
}

export default Admin;
