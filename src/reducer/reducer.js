/**
 * Reducer
 * @param {Array} todos 更新される直前のTODOリスト
 * @param {Object} action どのような更新かを示す[action.type]と更新された値及び項目を示すプロパティを格納
 */
export const reducer = (todos, action) => {
    switch (action.type) {
        case "INIT_TODO":
            return action.todos;
        case "ADD_TODO":
            return [
                ...todos,
                {
                    text: action.text,
                    isComplete: false,
                },
            ];
        case "REMOVE_TODO": {
            const newTodos = [];
            for (let i = 0; i < todos.length; i++) {
                if (action.index !== i) {
                    newTodos.push(todos[i]);
                }
            }
            return newTodos;
        }
        case "TOGGLE_TODO":
            return todos.map((todo, index) => {
                if (action.index === index) {
                    return Object.assign({}, todo, {
                        isComplete: !todo.isComplete,
                    });
                }
                return todo;
            });
        default:
            return [...todos];
    }
};
