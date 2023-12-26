import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [todoDescription, setTodoDescription] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo,todoDescription, completed: false})
      setTodo("")
      setTodoDescription("")
    }

  return (
    //   <form onSubmit={add}  className="flex">
    //       <input
    //           type="text"
    //           placeholder="Write Todo Title..."
    //           className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
    //           value={todo}
    //           onChange={(e) => setTodo(e.target.value)}
    //       />
    //       <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
    //           Add
    //       </button>
    //   </form>

    <form onSubmit={add} className="flex flex-col">
    <div className="flex flex-col border border-black/10 rounded">
      <input
        type="text"
        placeholder="Write Todo Title..."
        className="w-full px-3 border-b border-black outline-none rounded duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) =>setTodo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write Todo Description..."
        className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 rounded"
        value={todoDescription}
        onChange={(e) =>setTodoDescription(e.target.value)}
      />
    </div>
    <button type="submit" className="mt-2 px-3 py-1 bg-green-600 text-white rounded-md">
      Add
    </button>
  </form>
  );
}

export default TodoForm;