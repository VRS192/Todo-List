import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo, moveTodo }) {
    const [draggingId, setDraggingId] = useState(null);

    const startDragging = (event, id) => {
        event.preventDefault();
        setDraggingId(id);
    };

    const dragItems = (event, destinationId) => {
        event.preventDefault();
        if (!draggingId) return;
        const index = todos.findIndex((todo) => todo.id == draggingId);
        const destination = todos.findIndex((todo) => todo.id == destinationId);
        moveTodo(index, destination);
    };

    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group mb-3">
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
                        updateTodo={updateTodo}
                        draggingId={draggingId}
                        startDragging={startDragging}
                        dragItems={dragItems}
                        endDragging={() => setDraggingId(null)}
                    />
                ))}
            </ul>
        </>
    );
}

export default TodoList;
