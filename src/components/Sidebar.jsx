import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkDyaCnvi77efYK-NRG4UQ8Gxb3jHgTQZwFlfTWLGqSLPCxFo3_8cl5UhoWPu7gsGX_A&usqp=CAU"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/lucasquitan.png"
        />
        <strong>Lucas Quintanila</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite seu perfil
        </a>
      </footer>
    </aside>
  );
}
