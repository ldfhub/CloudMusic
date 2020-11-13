import React, { Component } from 'react';

import { Header } from './styleHeader'

class header extends Component {
  render() {
    return (
      <Header>
        <header>
          <div className = 'logo'>
            
          </div>
          <div className = 'login'>
            <button>登录</button>
            <button>注册</button>
          </div>
        </header>
      </Header>
    )
  }
}

export default header;