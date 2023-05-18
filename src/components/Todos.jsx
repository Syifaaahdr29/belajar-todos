import { useEffect, useState } from "react"
import axios from "axios"

function Todos() {
    const [todos, setTodos] = useState ([])
    const [inputTodo, setInputTodo] = useState("")
    const [count, setCount] = useState(1)

    const handleInput = (event) => {
        setInputTodo(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()
        console.log(inputTodo);

        const todo = {
            title : inputTodo,
            done : false
        }
        axios.post("https://64665d76ba7110b6639f01fb.mockapi.io/todo", todo)
        .then(() => setCount(count + 1))
    }


    useEffect(() => {
        axios("https://64665d76ba7110b6639f01fb.mockapi.io/todo")
        .then(result => setTodos(result.data))
    }, [count])

    return (
        <>
        <form onSubmit={addTodo}>
            <input type="text" name="inputTodo" placeholder="input your todo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}></input>
            <button>Add</button>
        </form>
        {todos.map(item => (
            <div key={item.id}>
                <span>{item.title}</span>
                <span>{item.isDone ? "✔" : "❌"}</span>
            </div>
        ))}
    </>
    )
}

export default Todos