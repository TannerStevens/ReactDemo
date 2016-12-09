/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRoute } from 'react-router'

import MainContainer from './mainContainer'
import QuickTest from './test'

class Index extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={MainContainer}>
                    <IndexRoute component={QuickTest}/>
                </Route>
            </Router>
        )
	}
}

ReactDOM.render((<Index />), document.getElementById('container'))
