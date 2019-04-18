import React from 'react';
import './header.less';
import Js from '../../routers/header';
import { NavLink } from 'react-router-dom';

const jsInstance = new Js({}).state.headerRouter;
interface IR {
  title: string;
  path: string;
  component: any;
  [propsName: string]: any;
}

export default class Header extends React.Component {
  mapHeaderMenu = (item: IR, index: number) =>
    <NavLink
      to={item.path}
      key={index}
      className="header-menu"
      activeClassName="selected"
    >{item.title}</NavLink>;
  render() {
    return (
      <div className="headerWrap">
        <p className="headerLogo">zcool</p>
        <div>
          { jsInstance.map(this.mapHeaderMenu)}
        </div>
      </div>
    )
  }
}