import { useState } from "react";
import Button from "../Buttons";

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <Button
                onClick={() => setCount(count + 1)}
            >increase</Button>
        </>
    )
}

export default Counter;