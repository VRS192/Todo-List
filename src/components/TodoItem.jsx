import { useState } from "react";

function TodoItem({
    id,
    name,
    completed,
    toggleTodo,
    deleteTodo,
    updateTodo,
    draggingId,
    startDragging,
    dragItems,
    endDragging,
}) {
    const [editing, setEditing] = useState(false);
    const [todoName, setTodoName] = useState(name);

    const handleEdit = (event) => {
        event.preventDefault();
        updateTodo(id, todoName);
        setEditing(false);
    };

    const handleCancel = () => {
        setEditing(false);
        setTodoName(name);
    };

    const handleKeyDown = (event) => {
        if (event.key == "Escape") {
            handleCancel();
        }
    };

    return (
        <li
            className={`list-group-item d-flex align-items-center ${
                draggingId == id && "opacity-25"
            }`}
            draggable
            onDrag={(event) => startDragging(event, id)}
            onDragOver={(event) => draggingId && event.preventDefault()}
            onDrop={(event) => dragItems(event, id)}
            onDragEnd={endDragging}
        >
            <input
                type="checkbox"
                className="form-check-input mt-0 me-3"
                checked={completed}
                onChange={(event) => toggleTodo(id, event.target.checked)}
            />
            {!editing ? (
                <label
                    className={`text-break form-check-label ${
                        completed ? "text-body-tertiary" : ""
                    }`}
                    onDoubleClick={() => setEditing(true)}
                >
                    {name}
                </label>
            ) : (
                <form
                    className="container-fluid px-0"
                    onSubmit={handleEdit}
                    onKeyDown={handleKeyDown}
                >
                    <div className="form-row d-flex">
                        <input
                            className="form-control-plaintext me-3 py-0"
                            placeholder="Enter the todo"
                            value={todoName}
                            onChange={(event) =>
                                setTodoName(event.target.value)
                            }
                            autoComplete="off"
                            required
                            autoFocus
                        ></input>
                        <button
                            type="submit"
                            className="btn btn-sm btn-outline-success me-3"
                        >
                            <i className="bi bi-check-lg"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={handleCancel}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </form>
            )}
            <div className="ms-auto d-flex">
                {!editing && (
                    <button
                        className="btn btn-sm btn-outline-primary"
                        type="button"
                        onClick={() => setEditing(true)}
                    >
                        <i className="bi bi-pencil"></i>
                    </button>
                )}
                <button
                    className="btn btn-sm btn-outline-danger ms-3"
                    onClick={() => deleteTodo(id)}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
