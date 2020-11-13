import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
//引入头部
import Header from '../../component/header/Header'
//引入tabbar
import Tabbar from '../../component/tabbar/Tabbar'
//导入路由
import Recommend from './Recommend/recommend.jsx'
import Search from './Search/search.jsx'
import Signer from './Signer/signer.jsx'
import Songlist from './Songlist/songlist.jsx'

class index extends Component {
  render() {
    return (
      <>
        <div>
          <Header></Header>
        </div>
          <Tabbar></Tabbar>
          <div className = 'content'>
            <Switch>
              <Route path="/home/recommend" component={ Recommend }/>
              {/* <Redirect from = '/' to = '/home/recommend'></Redirect> */}
              <Route path="/home/songlist" component={ Songlist }/>
              <Route path="/home/signer" component={ Signer }/>
              <Route path="/home/search" component={ Search }/>
              <Redirect from = '/home' to = '/home/recommend'></Redirect>
            </Switch>
          </div>
      </>
    );
  }
}

export default index;