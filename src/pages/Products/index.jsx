import { useEffect, useState } from "react";

import styles from "./Products.module.scss"
import Button from "../Buttons";

function Modal({ product, onClose }) {
    if (!product) return null
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.boxModal}>
                <div className={styles.header}>
                    <p><strong>ID bài viết: </strong>{product.id}</p>
                    <div className={styles.icon} onClick={onClose} >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>{product.title}</div>
                    <p className={styles.textContent}>{product.body}</p>
                </div>
            </div>
        </div>
    )
}

function Products() {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(null);

    const handleShortenText = (text) => {
        if (text.length > 100) {
            const textCopy = text.slice(0, 100)
            return `${textCopy}...`
        } else
            return text;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error("Error: ", err));
        }, 800)
    }, [])

    if (products.length === 0) {
        return (
            <div className={styles.app}>
                <p className={styles.loader}>.</p>
            </div>)
    }

    return (
        <div className={styles.app}>
            <div className={styles['product-list']}>
                {products.map(product => (
                    <div
                        className={styles['product-item']}
                        key={product.id}
                    >
                        <p><strong>ID bài viết: </strong>{product.id}</p>
                        <h3>{product.title}</h3>
                        <p>{handleShortenText(product.body)}</p>
                        <Button
                            className={styles['button-custom']}
                            onClick={() => setShowModal(product)}
                        >
                            Xem chi tiết
                        </Button>
                    </div>
                ))}
            </div>
            <Modal
                product={showModal}
                onClose={() => setShowModal(null)}
            ></Modal>
        </div>
    )
}

export default Products;