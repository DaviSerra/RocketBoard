import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles, { post } from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post incrível, meu amigo!',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const pubishedFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={pubishedFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(content => {
                    if (content.text) {
                        return <p key={content.text}>{content.text}</p>
                    }
                    if (content.link) {
                        return <a key={content.link} href="#">{content.link}</a>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário!'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.CommentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>

        </article>
    );
}