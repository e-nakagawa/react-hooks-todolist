import React, { createContext } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { useRender } from "../hooks/render";

export const DispatchContext = createContext();

const App = () => {
    const [todos, dispatch] = useRender();

    return (
        <div className="todo-wrap">
            <DispatchContext.Provider value={dispatch}>
                <TodoList todos={todos} />
                <Form />
            </DispatchContext.Provider>{" "}
        </div>
    );
};

export default App;
