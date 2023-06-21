import React from 'react'

class CounterCounter extends React.Component {


    /**
     * state = (这里是等于)
     * @type {{counter: number}}
     */
    state = {
        counter:0
    }

    /**
     * counter2 = ()
     * @type {{counter: number}}
     */
    counter2 = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {

        return (
            <div>
                <h1>点击次数是: {this.state.counter}</h1>
                <button onClick={this.counter2}>点击一下</button>
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
