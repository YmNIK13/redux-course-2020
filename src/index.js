import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {reduxLogger} from "./lib/reduxLogger";

import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, decrement, increment} from "./redux/actions";

import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


const store = createStore(
    rootReducer,
    42,
    applyMiddleware(thunk, reduxLogger)
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
    counter.textContent = state.toString()
})
// инициализируем
store.dispatch({type: "INIT_APP"})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})

