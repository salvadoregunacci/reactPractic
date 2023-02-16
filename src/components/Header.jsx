import logo from "../logo.svg";
import s from "./styles/Header.module.css";

function Header() {
  return (
    <header id={s.header}>
      <img className={s.logotype} src={logo} alt="логоттип"/>
    </header>
  );
}

export default Header;