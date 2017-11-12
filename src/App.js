import React, { Component } from 'react';
import { Link } from 'react-router'
import 'tachyons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <header className="pv1 ph3 pa4-m pa5-l oh pos-rel mt0-ns mt4">
          <div className="dt w-100">
            <div className="dtc w-50 v-mid">
              <Link to="/" className="no-underline black dim"><img className="v-mid mh0-ns dib-ns db center ph0 w4" src="/img/dots.png" alt="Nat? Nat. Nat!" /></Link>
              <div className="dib v-mid pa0 w-100 w-auto-ns">
                <Link to="/" className="no-underline black dim">
                  <h1 className="lh-title mb2 mt0 tracked tl-ns tc w-100">Nat? Nat. Nat!</h1>
                </Link>
                <h2 className="lh-title normal pa0 ma0 f4 tc tl-ns">A blog about random stuff.</h2>
              </div>
            </div>
          </div>
        </header>

        <div className="pv0 ph3 ph4-m ph5-l mt0-ns mt4">
          {this.props.children}
        </div>

        <footer className="pv0 ph3 ph4-m ph5-l mt0-ns mt4 bt b--black-10">
          <p className="db tc center"><a href="http://natwelch.com/">Nat Welch</a> is a Software Reconnaissance Engineer who likes writing software to help humans deal with the chaos. He writes his thoughts on this blog. He thanks you for reading.</p>
          <ul className="list ph3 ph5-ns pv0 tc">
          <li className="dib mr2"><a href="/about" className="f6 f5-ns b db pa2 link dim mid-gray">About</a></li>
          <li className="dib mr2"><a href="https://twitter.com/icco" className="f6 f5-ns b db pa2 link dim mid-gray">Twitter</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
