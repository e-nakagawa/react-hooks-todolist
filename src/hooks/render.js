import { useReducer, useEffect, useRef } from "react";
import { reducer } from "../reducer/reducer";
import { initTodo } from "../actions/actions";

/**
 * カスタムフック
 * @returns {Array} [todos]現在のTODOリスト, [dispatch]actionCreatorをReducerへ渡す関数
 */
export const useRender = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const newTodos = {
            TODOS: [...todos],
        };

        // 初回レンダリング後の処理
        if (isFirstRender.current) {
            newTodos.TODOS = [
                {
                    text: "test1",
                    isComplete: false,
                },
                {
                    text: "test2",
                    isComplete: false,
                },
            ];
            dispatch(initTodo(newTodos.TODOS));
            isFirstRender.current = false;
            return;
        }
    });

    return [todos, dispatch];
};
