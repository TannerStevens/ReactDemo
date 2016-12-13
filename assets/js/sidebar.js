/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'
import { Link } from 'react-router'


export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.sidebar}>
        <Link to='/'>A</Link>
        <text>---</text>
        <Link to='/cluster/1'>C1</Link>
        <Link to='/cluster/2'>C2</Link>
        <Link to='/cluster/3'>C3</Link>
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