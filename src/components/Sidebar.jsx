import s from "./styles/Sidebar.module.css";

function Sidebar() {
  return (
    <aside id={s.sidebar}>
      <nav>
        <ul>
          <li className={s.nav__item}><a href="#">Home</a></li>
          <li className={s.nav__item}><a href="#">About</a></li>
          <li className={s.nav__item}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;