import React from 'react'

class SonA extends  React.Component {


    render() {
        return (<div> 父亲节点穿出来的值:{this.props.name}</div>);
    }
}


class Parent extends React.Component {


    state = {
        name:'test'
    }

    changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }


    render() {

        return (
            <SonA ></SonA>
        )
    }
}

export default Parent;
