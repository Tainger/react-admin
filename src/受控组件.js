import React from 'react'

class CounterCounter extends React.Component {


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
            <div>
                请输入姓名:<input type="text" value={this.state.name} onChange={this.changeName}></input>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <CounterCounter></CounterCounter>
        </div>
    );
}

export default App;
