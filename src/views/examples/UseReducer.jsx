import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { reducer, initialState } from "../../store/index.js"
import { numberAdd2, login } from "../../store/actions"

// const initialState = {
//     cart: [],
//     products: [],
//     user: null,
//     // foco...
//     number: 0
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case "number_Add2":
//             return {
//                 ...state,
//                 number: state.number + 2
//             }
//         case "number_Multiply7":
//             return {
//                 ...state,
//                 number: state.number * 7
//             }
//         case "number_Divide25":
//             return {
//                 ...state,
//                 number: state.number / 25
//             }
//         case "number_convert":
//             return {
//                 ...state,
//                 number: parseInt(state.number)
//             }
//         case "number_input":
//             return {
//                 ...state,
//                 number: action.payload
//             }
//         case "login":
//             return {
//                 ...state,
//                 user: { name: action.payload }
//             }
//         default:
//             return state
//     }
// }

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user
                    ? <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
            </div>
            <div className="center">
                <div>
                    <button className="btn" onClick={() => login(dispatch, "Mister T")}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: "number_Multiply7" })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: "number_Divide25" })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: "number_convert" })}>Parse Int</button>
                    <input type="number" className="input" onChange={(event) => dispatch({ type: "number_input", payload: event.target.value })} />
                </div>
            </div>
        </div>
    )
}
export default UseReducer
