/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'
import { Link } from 'react-router'

import SidebarItem from './sidebar_item'


export default class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.sidebar}>
        <SidebarItem name='Account' shortName='A' linkTo='/'/>
        <hr/>
        <SidebarItem name='Cluster 1' shortName='C1' linkTo='/cluster/1'/>
        <SidebarItem name='Cluster 2' shortName='C2' linkTo='/cluster/2'/>
        <SidebarItem name='Cluster 3' shortName='C3' linkTo='/cluster/3'/>
      </div>
    )
  }
}

const styles = {
    sidebar:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        marginRight:'5px',
        alignItems:'center',
        backgroundColor:'lightgrey',
        maxWidth:'32px',
        borderRadius:'5px',
    }
}