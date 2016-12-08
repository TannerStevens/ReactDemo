import React from 'react'
import ReactDOM from 'react-dom'
import sidebar from './sidebar'

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
	            <sidebar />
            </div>
        )
	}
}

ReactDOM.render(<Index />, document.getElementById('container'))