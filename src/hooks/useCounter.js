import { useState } from "react"

export const useCounter = (initialValue = 100) => {
    const [count, setCounter] = useState(initialValue)

    function inc() {
        setCounter(count + 1)
    }

    function dec() {
        setCounter(count - 1)
    }

    return [count, inc, dec]
}