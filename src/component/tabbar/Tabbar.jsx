import React, { Component } from 'react';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import { Tabbar } from './styleTabbar'

class tabbar extends Component {
  render() {
    return (
        <Tabbar>
            <ul>
              <li>
                <NavLink to = '/home/recommend' activeClassName = 'active_tab'>推荐音乐</NavLink>
              </li>
              <li>
                <NavLink to = '/home/songlist' activeClassName = 'active_tab'>榜单</NavLink>
              </li>
              <li>
                <NavLink to = '/home/signer' activeClassName = 'active_tab'>歌手</NavLink>
              </li>
              <li>
                <NavLink to = '/home/search' activeClassName = 'active_tab'>搜索</NavLink>
              </li>
            </ul>
        </Tabbar>
    );
  }
}

export default tabbar;