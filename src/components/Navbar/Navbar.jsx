import { Link } from "react-router-dom";
import "./Navbar.css";
import { ROUTE_PATHS } from "../../App";

function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">anime list</h1>
      <div className="menuItems">
        <Link to="/">Anasayfa</Link>
        <Link to={ROUTE_PATHS.RandomAnime}>Rastgele Anime</Link>
        <Link to={ROUTE_PATHS.About}>Hakkımda</Link>
      </div>
    </nav>
  );
}
export default Navbar;
