import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    // function inc(delta) {
    //     setCount(count + delta)
    // }

    const inc = useCallback(function(delta) {
        console.log("função pai renderizada")

        setCount(prevCount => prevCount + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
