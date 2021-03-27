import { Component } from 'react';
import './index.css';
import logo from '../../imgs/shnylogo.png';
import hamburger from '../../icons/hamburger.svg';
import close from '../../icons/close.svg';

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
              <a href="#">Home</a>
            </li>

            <li className="header-d__menu-item">
              <a href="#">Info</a>
            </li>

            <li className="header-d__menu-item">
              <a href="#">contestants</a>
            </li>

            <li className="header-d__menu-item">
              <a href="#">Blog</a>
            </li>

            <li className="header-d__menu-item">
              <a href="#">Apply</a>
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
                <img src={close}></img>
              </a>
            </div>

            <ul className="header-m__menu">
              <li className="header-m__menu-item">
                <a href="#">Home</a>
              </li>

              <li className="header-m__menu-item">
                <a href="#">Info</a>
              </li>

              <li className="header-m__menu-item">
                <a href="#">contestants</a>
              </li>

              <li className="header-m__menu-item">
                <a href="#">Blog</a>
              </li>
  
              <li className="header-m__menu-item">
                <a href="#">Apply</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
