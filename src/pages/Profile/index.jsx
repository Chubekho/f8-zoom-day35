import { useEffect, useState } from "react";
import styles from "./Profile.module.scss"


function Profile() {
    const [user, setUser] = useState({})

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(err => console.warn(err))
        }, 800)
    }, [])

    if (!user || !user.address) {
        return (
            <div className={styles.app}>
                <p className={styles.loader}>.</p>
            </div>)
    }

    return (
        <div className={styles.app}>
            <div className={styles.wrapper}>
                <div className={styles['item-center']}>
                    <img
                        className={styles['card-img']}
                        src="https://ui-avatars.com/api/?name=Leanne+Graham&&background=0D8ABC&color=fff" alt=""
                    />
                </div>
                <h2 className={styles['text-center']}>{user.name}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p>
                    <strong>Address:</strong> {user.address.street}, {user.address.city}
                </p>
            </div>

        </div >
    )
}

export default Profile;