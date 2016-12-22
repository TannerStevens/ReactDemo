/*jshint node:true, browser: true, devel: true, jquery: true, indent: 2, -W097, strict:true, esnext:true*/
import React from 'react'

export default class Dataview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                columns:['Name', 'Role'],
                '0':['Tanner', 'Frontend'],
                '1':['Mike', 'REST API'],
                '2':['Brandon', 'Authentication'],
                '3':['Don', 'Database'],
                '4':['Andrew', 'Full Stack'],
            }
        }
    }

    render(){
        var headers = [];
        var rows = [];

        Object.entries(this.state.data).forEach( ([key,value]) => {
                if(key=='columns') headers.push(<Headerrow key={key} data={value}/>)
                else rows.push(<Datarow key={key} data={value}/>)
            }
        )

        return(
            <table style={styles.table}>
                <thead>{headers}</thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class Headerrow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                {this.props.data.map((value, i) =>
                    <th style={styles.headercell} key={i}>{value}</th>
                    )}
            </tr>
        )
    }
}

class Datarow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                {this.props.data.map((value, i) =>
                        <td style={styles.datacell} key={i}>{value}</td>
                        )}
            </tr>
        )
    }
}

const styles = {
    datacell:{
        borderBottom:'1px solid black',
        textAlign:'left',
        padding:'4px'
    },
    headercell:{
        borderBottom:'1px solid black',
        textAlign:'left',
        padding:'4px'
    },
    table:{
        borderCollapse:'collapse',
        width:'100%'
    }
}