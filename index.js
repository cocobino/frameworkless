import getTodos from './getTodo.js'
import todosView from './view/todos.js'
import counterView from './view/counter.js'
import filtersView from './view/filter.js'

import registry from './registry.js'

registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

const state = {
    todos: getTodos(),
    currentFilter: 'All'
}

const render = () => {
    window.requestAnimationFrame(() => {
        const main = document.querySelector('.todoapp')
        const newMain = registry.renderRoot(main, state)
        applyDiff(document.body, main, newMain)
    })
}

window.setInterval(() => {
    state.todos = getTodos()
    render()
}, 1000)

render()