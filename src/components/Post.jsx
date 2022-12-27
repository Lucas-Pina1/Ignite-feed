import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/Lucas-Pina1.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Pina</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08;13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit,</p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          nostrum quos, repudiandae nam ducimus aspernatur quam dolores
          inventore culpa quidem amet a, quo quod? Ipsam eligendi ullam ducimus!
          Consequatur, incidunt.
        </p>

        <p>
          <a href="">teste.dev</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
