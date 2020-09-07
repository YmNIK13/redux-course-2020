import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger"
import {reduxLogger} from "./lib/reduxLogger";

import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";

import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


const store = createStore(
    rootReducer,
    applyMiddleware(thunk, reduxLogger, logger)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.classList = state.theme.value

    addBtn.disabled = subBtn.disabled =
        asyncBtn.disabled = themeBtn.disabled = state.theme.block
})

// инициализируем
store.dispatch({type: "INIT_APP"})

themeBtn.addEventListener('click', () => {
    const newNameTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(newNameTheme))
})

