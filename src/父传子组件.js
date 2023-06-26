import React from 'react'

class SonA extends  React.Component {


    render() {
        return (<div> 父亲节点穿出来的值:{this.props.msg}</div>);
    }
}


function SonB(props){
    return (
        <div>SonB的父亲节点传出来的值:{props.msg2}</div>
    )
}


class Parent extends React.Component {


    state = {
        name:'test'
    }

    render() {

        return (
            <div>
                <SonA msg = {this.state.name}></SonA>
                <SonB msg2 = {this.state.name}></SonB>
            </div>
        )
    }
}

export default Parent;
