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
      menuItems: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contest Winners", path: "/winners" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        { name: "Apply", path: "/apply" },
      ]
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
        <div className="header-d">
          <img className="header-d__logo" src={logo} alt="SHNY-logo"></img>

          <ul className="header-d__menu">
            {this.state.menuItems.map(item =>
              <li className="header-d__menu-item" key={item.name}>
                <NavLink to={item.path} key={item.name}>
                  {item.name}
                </NavLink>
              </li>
            )}
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
                <img className="close-nav" src={close} alt="close icon"></img>
              </a>
            </div>

            <ul className="header-m__menu">
              {this.state.menuItems.map(item =>
                <li className="header-m__menu-item" onClick={this.handleClick} key={item.name}>
                  <NavLink to={item.path} key={item.name}>
                    {item.name}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
