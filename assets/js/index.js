/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute } from 'react-router'

import MainContainer from './mainContainer'
import QuickTest from './test'
import Cluster from './cluster'

class Index extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
        return (
            <Router history={hashHistory}>
                <Route component={MainContainer}>
                    <Route path='/' component={QuickTest}/>
                    <Route path='cluster/:id' component={Cluster}/>
                </Route>
            </Router>
        )
	}
}

ReactDOM.render((<Index />), document.getElementById('container'))
