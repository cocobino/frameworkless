const getTodoCount = todos => {
    const {length} = todos
        .filter(todo => !todo.completed)

    return length === 1 ? '1 Item left' : `${length} Items left`
}


export default (targetElement, { todos }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getTodoCount(todos)
    return newCounter
}