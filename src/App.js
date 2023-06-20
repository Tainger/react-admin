import React from 'react'

class HelloComponent extends React.Component {
    render() {
        return (<div> Hello Component </div>)
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
