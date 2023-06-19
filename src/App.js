

const name = 'rocky'

const skill = () => {
  return '放大招'
}

const flag = true
function App() {
  return (
    <div className="App">
      {name}
      {skill()}
      {flag ? '很聪明':'很笨'}
    </div>
  );
}

export default App;
