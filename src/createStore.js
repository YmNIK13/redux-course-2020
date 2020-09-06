export function createStore(rootReducer, initialState) {
    // первичное значение, закрытые елементы
    let state = rootReducer(initialState, {type: "__INIT__"})
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}