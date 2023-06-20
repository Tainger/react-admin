import React from 'react'

class HelloComponent extends React.Component {

     event2 = (e, msg) => {
         e.preventDefault()
         console.log(e)
        console.log(msg)
    }

    render() {
        return (<div onClick={(e)=>this.event2(e, 'hell0')}> <a href= "https://www.baidu.com"> 百度一下</a></div>)
    }
}

function App() {
    return (
        <div className="App">
            <HelloComponent></HelloComponent>
        </div>
    );
}

export default App;
