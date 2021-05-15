import { Component } from 'react';
import logo from '../../imgs/shnylogo.png';
import hamburger from '../../icons/hamburger.svg';
import close from '../../icons/close.svg';
import NavLink from '../NavLink';
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
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="header-d__menu-item">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="header-d__menu-item">
              <NavLink to="/winners">contest winners</NavLink>
            </li>

            <li className="header-d__menu-item">
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li className="header-d__menu-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li className="header-d__menu-item">
              <NavLink to="/apply">apply</NavLink>
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
                <img src={close} alt="close icon"></img>
              </a>
            </div>

            <ul className="header-m__menu">
              <li className="header-m__menu-item">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="header-m__menu-item">
                <NavLink to="/about">About</NavLink>
              </li>

              <li className="header-m__menu-item">
                <NavLink to="/winners">Contest winners</NavLink>
              </li>

              <li className="header-m__menu-item">
                <NavLink to="/blog">Blog</NavLink>
              </li>

              <li className="header-m__menu-item">
                <NavLink to="/apply">Apply</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
