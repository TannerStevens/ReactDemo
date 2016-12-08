/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <text>
        {this.props.display}
      </text>
    )
  }
}


