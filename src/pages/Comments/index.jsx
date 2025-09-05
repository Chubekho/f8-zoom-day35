import { useEffect, useState } from "react";
import styles from "./Comments.module.scss"
import Button from "../Buttons";

function CommentForm({ form, handleInputChange, handleSubmit }) {
    return (
        <form
            className={styles['comment-form']}
            onSubmit={handleSubmit}
        >
            <input
                value={form.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Your name"
                required
            />
            <input
                value={form.email}
                onChange={handleInputChange}
                name="email"
                type="email"
                placeholder="Your email"
                required
            />
            <textarea
                value={form.body}
                onChange={handleInputChange}
                name="body"
                placeholder="Write comment..."
                required
            ></textarea>
            <button type="submit">Send comment</button>
        </form>
    );
}

function CommentList({ comment }) {
    return (
        <div className={styles.comment}>
            <img
                className={styles['comment__avatar']}
                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                alt="avatar"
            />
            <div className={styles['comment__body']}>
                <div className={styles['comment__header']}>
                    <div>
                        <div className={styles['comment__author']}>
                            {comment.name}
                        </div>
                        <div className={styles['comment__email']}>
                            {comment.email}
                        </div>
                    </div>
                    <div className={styles['comment__time']}>1 min ago</div>
                </div>
                <div className={styles['comment__text']}>{comment.body}</div>
            </div>
        </div>
    );
}

let uniqId = 5;
function Comments() {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', body: '' });

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
                .then(res => res.json())
                .then(data => setComments(data))
                .catch(err => console.error("Error: ", err));
        }, 800)
    }, [])

    if (comments.length === 0) {
        return (
            <div className={styles.app}>
                <p className={styles.loader}>.</p>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn trang reload khi submit form
        const data = Object.fromEntries(new FormData(e.target));
        setComments([{ id: ++uniqId, name: data.name, email: data.email, body: data.comment }, ...comments]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div className={styles.app}>
            <CommentForm
                form={form}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            >
            </CommentForm>

            <div className={styles.comments}>
                {comments.map((comment) => (
                    <CommentList
                        key={comment.id}
                        comment={comment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments;