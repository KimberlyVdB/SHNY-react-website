import './index.css';

function Header() {
  return (
    <header className="header">
      <h1>SHNY</h1>

      <ul className="header__menu">
        <li className="header__menu-item">Home</li>
        <li className="header__menu-item">News</li>
        <li className="header__menu-item">Apply</li>
      </ul>
    </header>
  );
}

export default Header;
