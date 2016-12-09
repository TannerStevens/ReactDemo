/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'

import Sidebar from './sidebar'

export default class MainContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
        return (
          <div style={styles.mainContainer}>
            <Sidebar />
            {this.props.children}
          </div>
        )
  }
}

const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        flex:1,
    },
}