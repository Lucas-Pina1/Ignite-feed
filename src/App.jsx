import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/Lucas-Pina1.png",
      name: "Lucas Pina",
      role: "Estágiario",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit,." },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nostrum quos, repudiandae nam ducimus aspernatur quam dolores inventore culpa quidem amet a, quo quod? Ipsam eligendi ullam ducimus! Consequatur, incidunt.",
      },
      { type: "link", content: "teste.dev" },
    ],
    publishedAt: new Date("2022-12-21 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit,." },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nostrum quos, repudiandae nam ducimus aspernatur quam dolores inventore culpa quidem amet a, quo quod? Ipsam eligendi ullam ducimus! Consequatur, incidunt.",
      },
      { type: "link", content: "teste.dev" },
    ],
    publishedAt: new Date("2022-12-10 20:00:00"),
  },
];

export function App() {


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
