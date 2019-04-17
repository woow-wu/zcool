import React from 'react';
import { Route } from 'react-router-dom';
import Js from '../../pages/js';

interface IR {
    path: string;
    component: any;
}

export default class HeaderRouter extends React.Component {
    state = {
        headerRouter: [{
            tile: 'js',
            path: '/zcool/js',
            component: Js,
        }]
    }
    showHeaderRoutes = (item: IR, index: number) => <Route path={item.path} component={item.component} key={index}/>
    render() {
        const { headerRouter } = this.state;
        return (
            <>
                {
                    headerRouter.map(this.showHeaderRoutes)
                }
            </>
        )
    }
}