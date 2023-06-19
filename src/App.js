const name = 'rocky'

const skill = () => {
    return '放大招'
}
const song = [
    {
        id: 1, name: '知心绝对'
    },
    {
        id: 2, name: '像我这样人'
    },
    {
        id: 3, name: '南山南'
    }

]
const flag = true

function App() {
    return (
        <div className="App">
            <ul>
                {song.map(song => <li key={song.id}>{song.name} </li>)}
            </ul>
        </div>
    );
}

export default App;
