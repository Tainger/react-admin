import React, {createContext} from 'react'

const {Provider, Consumer} = createContext()

function ComponentB() {

    return (
        <div>
            请输入B值:<input type="text"/>
            <ComponentA></ComponentA>
            <Consumer>
                {value => (<span>传入的值:{value}</span>)}
            </Consumer>
        </div>
    );
}


class ComponentA extends React.Component {


    render() {
        return (
            <div>
                请输A值:<input type="text"/>
                <Consumer>
                   {value => (<span>传入的值:{value}</span>)}
                </Consumer>
            </div>

        )
    }
}


class Parent extends React.Component {


    state = {
        message: "消息"
    }

    changeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {

        return (
            <Provider value={this.state.message}>
                <div>
                    请输入P值:<input onChange={this.changeMessage} type="text"/>
                    <ComponentB></ComponentB>
                </div>
            </Provider>
        )
    }
}

export default Parent;
