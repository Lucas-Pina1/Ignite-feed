import { format, formatDistanceToNow } from "date-fns/esm";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);

    console.log("oi");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line) => {
          // if (line.type === "paragraph") {
          //   return <p>{line.content}</p>;
          // } else if (line.type === "link") {
          //   return (
          //     <p>
          //       <a href="#">{line.content}</a>
          //     </p>
          //   );
          // }

          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
