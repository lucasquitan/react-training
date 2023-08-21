import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h3>Lucas</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            asperiores illo est, maiores quos ad labore! Placeat culpa
            asperiores repudiandae obcaecati similique esse magni, quo ex,
            cumque rerum consectetur totam?
          </p>
        </main>
      </div>
    </div>
  );
}
