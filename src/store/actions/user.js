export function login(dispatch, nome) {
    dispatch({ type: "login", payload: nome })
}