import { Component } from 'react';
import { Link } from "@reach/router"
import logo from '../../imgs/shnylogo.png';
import hamburger from '../../icons/hamburger.svg';
import close from '../../icons/close.svg';
import './index.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileActive: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({ mobileActive: !state.mobileActive }));
  }

  render() {
    let mobileNavClass = 'header-m__content';

    if (this.state.mobileActive) {
      mobileNavClass += ' active';
    }

    return (
      <header className="header">
        <div class="header-d">
          <img class="header-d__logo" src={logo} alt="SHNY-logo"></img>

          <ul className="header-d__menu">
            <li className="header-d__menu-item">
              <Link to="/">Home</Link>
            </li>

            <li className="header-d__menu-item">
              <Link to="/about">About</Link>
            </li>

            <li className="header-d__menu-item">
              <Link to="/winners">contest winners</Link>
            </li>

            <li className="header-d__menu-item">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="header-d__menu-item">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="header-d__menu-item">
              <Link to="/apply">apply</Link>
            </li>
          </ul>
        </div>

        <div className="header-m">
          <div className="header-m__banner">
            <img className="header-m__logo" src={logo} alt="SHNY-logo"></img>
            <a href="#" className="header-m__open" onClick={this.handleClick}>
              <img src={hamburger} alt="hamburger-icon"></img>
            </a>
          </div>

          <div className={mobileNavClass}>
            <div className="header-m-top">
              <img className="header-m__logo" src={logo} alt="SHNY-logo"></img>
              <a href="#" onClick={this.handleClick}>
                <img class="close-nav" src={close} alt="close icon"></img>
              </a>
            </div>

            <ul className="header-m__menu">
              <li className="header-m__menu-item">
                <Link to="/">Home</Link>
              </li>

              <li className="header-m__menu-item">
                <Link to="/about">About</Link>
              </li>

              <li className="header-m__menu-item">
                <Link to="/winners">Contest winners</Link>
              </li>

              <li className="header-m__menu-item">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="header-m__menu-item">
                <Link to="/apply">Apply</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
