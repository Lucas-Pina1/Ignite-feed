import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post author="Gabriel Fernandes" content="Que conteudo bom." />
        </main>
      </div>
    </div>
  );
}