import { format, formatDistanceToNow } from "date-fns/esm";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

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

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidty("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidty("Esee campo é obrigatório");
  }

  function deleteComment(commentToDelete) {
    const commentsWinthoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWinthoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>

        <textarea
          nome="commentInput"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={content}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
