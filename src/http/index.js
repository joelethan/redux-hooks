import Axios from "axios"

export const getTodos = () => {
    try {
        const resp = Axios.get('https://jsonplaceholder.typicode.com/todos')
        return resp;
    } catch (error) {
        console.error(error);
    }
}


export const addTodo = (todo) => {
    try {
        const resp = Axios.post('https://jsonplaceholder.typicode.com/todos', todo)
        return resp;
    } catch (error) {
        console.error(error);
    }
}
