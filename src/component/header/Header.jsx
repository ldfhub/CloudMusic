import { Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';

import HeaderLeft from './styleHeader'

class header extends Component {
  render() {
    return (
      <Header>
        <HeaderLeft></HeaderLeft>
      </Header>
    );
  }
}

export default header;