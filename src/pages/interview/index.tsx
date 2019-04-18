import React from 'react';
import { Route } from 'react-router-dom';
import { InterviewRouter } from '../../routers';
import SliderMenu from '../../components/SliderMenu';
import './index.less';

export default class Interview extends React.Component {
  render() {
    return (
      <div className="interview-wrap">
        <SliderMenu />
        <InterviewRouter />
      </div>
    )
  }
}