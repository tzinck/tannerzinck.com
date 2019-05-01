import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

const Header = () => {
  return (
    <header>
    </header>
  )
}

const Body = () => {
  return (
    <div className="main">
      <div className="flexer">
        <h1>Hi, I'm Tanner</h1>
      </div>
      <div className="flexer">
        <div className="sub-flexer">
          <div>I'm a Software Engineer in Victoria, B.C.</div>
          <button className="button"><h3>Checkout My Resume</h3></button>
        </div>
        <div className='picture'></div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="social-flexer">
        <a href="https://github.com/tzinck" className="social github"></a>
        <a href="https://linkedin.com/in/tzinck/" className="social linkedin"></a>
        <a href="https://twitter.com/tannerzinck" className="social twitter"></a>
      </div>
    </footer>
  )
}

export default App;
