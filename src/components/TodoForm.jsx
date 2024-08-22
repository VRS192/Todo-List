import { useState } from "react";

function TodoForm({ addTodo }) {
    const [todoName, setTodoName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoName);
        setTodoName("");
    };

    return (
        <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-row mb-3">
                <input
                    id="todoInput"
                    className="form-control"
                    placeholder="Enter the todo"
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                    autoComplete="off"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary col-12">
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;
