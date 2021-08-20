function reducer(state, action) {
    switch (action.type) {
        case "number_Add2":
            return {
                ...state,
                number: state.number + 2
            }
        case "number_Multiply7":
            return {
                ...state,
                number: state.number * 7
            }
        case "number_Divide25":
            return {
                ...state,
                number: state.number / 25
            }
        case "number_convert":
            return {
                ...state,
                number: parseInt(state.number)
            }
        case "number_input":
            return {
                ...state,
                number: action.payload
            }
        case "login":
            return {
                ...state,
                user: { name: action.payload }
            }
        default:
            return state
    }
}

export default reducer