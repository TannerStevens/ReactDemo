/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.sidebar}>
        <text> A </text>
        <text>---</text>
        <text>C1</text>
        <text>C2</text>
        <text>C3</text>
      </div>
    )
  }
}

const styles = {
    sidebar:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        backgroundColor:'lightgrey',
        maxWidth:'45px',
    }
}