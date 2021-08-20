import React from "react"

export const data = {
    number:300,
    text: "Context API..."
}

const DataContext = React.createContext(data)
export default DataContext