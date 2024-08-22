function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
    return (
        <li className="list-group-item d-flex align-items-center">
            <input
                type="checkbox"
                className="form-check-input me-3 mt-0"
                checked={completed}
                onChange={(event) => toggleTodo(id, event.target.checked)}
            />
            <label
                className={`text-break form-check-label me-3 ${
                    completed ? "text-body-tertiary" : ""
                }`}
            >
                {name}
            </label>
            <button
                className="btn btn-sm btn-outline-danger ms-auto"
                onClick={() => deleteTodo(id)}
            >
                <i className="bi bi-trash"></i>
            </button>
        </li>
    );
}

export default TodoItem;
