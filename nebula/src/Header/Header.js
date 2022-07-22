import star from "./style/star.svg";
import "./style/header.css";
function Header() {
  return (
    <div className="Header-site">
      <div className="header-wrapper">
        <div className="logo">
          <img src={star} alt="star" className="logo-star" />
          <span className="logo-span">Nebula</span>
        </div>
        <div className="navigation">
            <ul className="nav-list">
                <li className="list-item"><a href="#">Home</a></li>
                <li className="list-item"><a href="#">Mission</a></li>
                <li className="list-item"><a href="#">Findings</a></li>
                <li className="list-item"><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
