import React from 'react'

class SonA extends  React.Component {

    render() {
        this.props.callback('你好')
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

    changeMsg = (sonMsg) => {
        this.setState({
            name:sonMsg
        })
    }

    render() {

        return (
            <div>
                <SonA msg = {this.state.name} callback={this.changeMsg}></SonA>
                <SonB msg2 = {this.state.name}></SonB>
            </div>
        )
    }
}

export default Parent;
