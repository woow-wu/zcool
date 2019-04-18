import React from 'react';
import { Route } from 'react-router-dom';


interface IR {
  path: string;
  component: any;
}

export default class InterviewRouter extends React.Component {
    state = {
      interviewRouter: [{
          title: '面试',
          path: '/zcool/inteview/title',
          component: () => '面试',
          children: [
            {
              title: '圣杯布局',
              path: '/zcool/inteview/title/三栏布局',
              component: () => '圣杯布局',
            }
          ]
        }, {
          title: '圣杯布局',
          path: '/zcool/inteview/title/三栏布局',
          component: () => '圣杯布局',
        }]
    }
    showHeaderRoutes = (item: IR, index: number) => <Route path={item.path} component={item.component} key={index}/>
    render() {
        const { interviewRouter } = this.state;
        return (
            <>
                {
                    interviewRouter.map(this.showHeaderRoutes)
                }
            </>
        )
    }
}