import React from 'react';
import logo from './logo.svg';
import './App.css';

class Yuka extends React.Component {
	render(){
		return(<p>I'm YUKA!</p>)
	}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="100px" height="100px" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
		<div>
		  <Yuka />
		  <Yuka />
		  <Yuka />
		  <Yuka />
		</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
