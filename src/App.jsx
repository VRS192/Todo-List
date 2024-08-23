import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem("todos");
        return localTodos ? JSON.parse(localTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (name) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    name,
                    completed: false,
                },
            ];
        });
    };

    const toggleTodo = (id, completed) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        completed,
                    };
                }

                return todo;
            });
        });
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id != id);
        });
    };

    const updateTodo = (id, name) => {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        name,
                    };
                }

                return todo;
            });
        });
    };

    const moveTodo = (index, destination) => {
        setTodos((currentTodos) => {
            const updatedTodos = [...currentTodos];
            const [draggedItem] = updatedTodos.splice(index, 1);
            updatedTodos.splice(destination, 0, draggedItem);
            return updatedTodos;
        });
    };

    return (
        <div className="container-fluid">
            <TodoForm addTodo={addTodo} />
            <hr />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                moveTodo={moveTodo}
            />
        </div>
    );
}

export default App;
