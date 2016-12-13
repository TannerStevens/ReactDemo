import React from 'react'

export default class Cluster extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>Cluster: {this.props.params.id}</h1>
        )
    }
}