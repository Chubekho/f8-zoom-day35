import { useState } from "react";
import styles from "./Counter.module.scss"
import Button from "../../components/Button";

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className={styles.app}>
            <div
                style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'gray' }}
                className={styles.counter}
            >
                {count}
            </div>

            <div
                className={styles['count-status']}
                style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'gray' }}
            >
                {count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"}
            </div>

            <div className={styles['button-container']}>
                <Button
                    rounded
                    size="large"
                    className={styles['btn-margin']}
                    onClick={() => setCount(count - 1)}
                >
                    Decrease
                </Button>
                <Button
                    rounded
                    size="large"
                    className={styles['btn-margin']}
                    onClick={() => setCount(count + 1)}
                >
                    Increase
                </Button>
                <Button
                    rounded
                    size="large"
                    className={styles['btn-margin']}
                    onClick={() => setCount(0)}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default Counter;