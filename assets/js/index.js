/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './sidebar'

class Index extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
    return (
			<div>
        <h1>
          Hello, React!ASD
        </h1>
        <Sidebar 
          display={'This is in the sidebar!'}
        />
      </div>
    )
	}
}

ReactDOM.render(<Index />, document.getElementById('container'))
