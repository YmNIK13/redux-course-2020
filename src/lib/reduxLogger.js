export function reduxLogger(state) {
    return function (next) {
        return function (action) {
            // console.log(state)
            // console.log(action)
            console.log("Prev state: ", state.getState())
            const newState = next(action)
            console.log("New state: ", state.getState())
            return newState
        }
    }
}