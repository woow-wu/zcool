import React from 'react';
// import { NavLink } from 'react-router-dom';
import './index.less';
import IntervireRouter from '../../routers/interview';

const interviewInstance = new IntervireRouter({}).state.interviewRouter;

export default class SliderMenu extends React.Component {
  render() {
    return (
      <div className="slider-wrap">
        {
          interviewInstance.map((item, index) => {
            return <div key={index}>{item.title}</div>
          })
        }
      </div>
    )
  }
}