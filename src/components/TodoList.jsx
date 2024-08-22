import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.length == 0 && (
                    <li className="list-group-item">
                        No Todos, start by adding your first Todo
                    </li>
                )}
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;
