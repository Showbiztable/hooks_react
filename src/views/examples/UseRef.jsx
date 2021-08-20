import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
    var length = 0
    if (s1 !== undefined && s2 !== undefined) {
        length = s1.length > s2.length ? s1.length : s2.length
    }
    var text = ""

    for (let i = 0; i < length; i++) {
        text += s1[i] || ""
        text += s2[i] || ""
    }

    return text
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const count = useRef(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    useEffect(function () {
        if (value1) {
            count.current++
            ref2.current.focus()
        }
    }, [value1])

    useEffect(function () {
        if (value2) {
            count.current++
            ref1.current.focus()
        }
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span><br />
                    <input type="text" className="input" ref={ref1} value={value1} onChange={e => setValue1(e.target.value)} />
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input" ref={ref2} value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
