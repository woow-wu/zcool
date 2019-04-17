import React from 'react';
import './header.less';
import Js from '../../routers/header';

const jsInstance = new Js({}).state;


export default class Header extends React.Component {
  render() {
    return (
      <div className="headerWrap">
        <p className="headerLogo">zcool</p>

      </div>
    )
  }
}