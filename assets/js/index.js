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
    		<div style={styles.mainContainer}>
                <Sidebar />
                <h1>
                    Hello, React!ASD
                </h1>
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

ReactDOM.render(<Index />, document.getElementById('container'))
