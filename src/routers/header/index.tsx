import React from 'react';
import { Route } from 'react-router-dom';
import Js from '../../pages/js';
import Interview from '../../pages/interview';
import Css from '../../pages/css';
import Html from '../../pages/html';
import './index.less';

interface IR {
  path: string;
  component: any;
}

export default class HeaderRouter extends React.Component {
    state = {
        headerRouter: [{
            title: 'JS',
            path: '/zcool/js',
            component: Js,
        },{
            title: 'CSS',
            path: '/zcool/css',
            component: Css,
        },{
            title: 'HTML',
            path: '/zcool/html',
            component: Html,
        },{
            title: 'INTERVIEW',
            path: '/zcool/interview',
            component: Interview,
        },]
    }
    showHeaderRoutes = (item: IR, index: number) => <Route path={item.path} component={item.component} key={index}/>
    render() {
        const { headerRouter } = this.state;
        return (
            <div className="herderRouter-content">
                {
                    headerRouter.map(this.showHeaderRoutes)
                }
            </div>
        )
    }
}