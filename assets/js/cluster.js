import React from 'react'

import Dataview from './dataview'

export default class Cluster extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Cluster: {this.props.params.id}</h1>
                <Dataview/>
                </div>
        )
    }
}