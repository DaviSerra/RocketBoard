import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://i.pinimg.com/736x/cf/02/3e/cf023e7255232974d1d0ff5dedf3cbd4.jpg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Davy serra</strong>
              <time title='13 de novembro às 22:45h' dateTime="2024-11-13 22:44:10">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>


    </div>
  );
}