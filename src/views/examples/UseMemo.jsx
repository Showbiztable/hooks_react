import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseMemo = (props) => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)
    
    // const result = sum(number1, number2)
    const result = useMemo(() => sum(number1, number2), [number1, number2]);
    
    //Função que simula um processamento custoso de 2 segundos
    function sum(a , b) {
        console.log("renderizou novamente a função")
        const future = Date.now() + 2000
        while (Date.now() < future) {  
        }
        return a + b
    }

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <input type="number" className="input" value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={number2} onChange={(e) => setNumber2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={number3} onChange={(e) => setNumber3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
